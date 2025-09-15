"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Search, ChevronLeft, ChevronRight, Eye, Edit, Trash2 } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive" | "Pending";
  joinDate: string;
  initials: string;
}

const sampleData: User[] = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active", joinDate: "2024-01-15", initials: "JD" },
  { id: 2, name: "Sarah Wilson", email: "sarah.wilson@example.com", role: "Editor", status: "Active", joinDate: "2024-02-20", initials: "SW" },
  { id: 3, name: "Mike Johnson", email: "mike.johnson@example.com", role: "User", status: "Inactive", joinDate: "2024-01-10", initials: "MJ" },
  { id: 4, name: "Emily Davis", email: "emily.davis@example.com", role: "Editor", status: "Pending", joinDate: "2024-03-05", initials: "ED" },
  { id: 5, name: "Alex Chen", email: "alex.chen@example.com", role: "User", status: "Active", joinDate: "2024-02-28", initials: "AC" }
];

const getAvatarColor = (name: string) => {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500',
    'bg-red-500', 'bg-yellow-500', 'bg-teal-500', 'bg-orange-500', 'bg-cyan-500'
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

export default function DataTable({ data = sampleData, itemsPerPage = 5 }: { data?: User[]; itemsPerPage?: number }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredData = useMemo(() => {
    return data.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Prevent hydration mismatch by using mounted state
  const isDark = mounted ? (resolvedTheme === 'dark') : true;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-lg border overflow-hidden ${
        isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-gray-200'
      }`}
    >
      {/* Search */}
      <div className={`p-4 border-b ${isDark ? 'border-neutral-800' : 'border-gray-200'}`}>
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
            isDark ? 'text-neutral-400' : 'text-gray-400'
          }`} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
              isDark 
                ? 'bg-neutral-900 border-neutral-700 text-neutral-100 placeholder-neutral-500'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={isDark ? 'bg-neutral-900' : 'bg-gray-50'}>
            <tr>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDark ? 'text-neutral-300' : 'text-gray-500'
              }`}>User</th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDark ? 'text-neutral-300' : 'text-gray-500'
              }`}>Role</th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDark ? 'text-neutral-300' : 'text-gray-500'
              }`}>Status</th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDark ? 'text-neutral-300' : 'text-gray-500'
              }`}>Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDark ? 'divide-neutral-800' : 'divide-gray-200'}`}>
            {paginatedData.map((user) => (
              <motion.tr 
                key={user.id} 
                whileHover={{ backgroundColor: isDark ? 'rgb(23 23 23)' : '#f9fafb' }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-medium text-sm ${getAvatarColor(user.name)}`}>
                      {user.initials}
                    </div>
                    <div className="ml-4">
                      <div className={`text-sm font-medium ${
                        isDark ? 'text-neutral-100' : 'text-gray-900'
                      }`}>{user.name}</div>
                      <div className={`text-sm ${
                        isDark ? 'text-neutral-400' : 'text-gray-500'
                      }`}>{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                  isDark ? 'text-neutral-100' : 'text-gray-900'
                }`}>{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    user.status === 'Active' 
                      ? (isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800')
                      : user.status === 'Inactive' 
                      ? (isDark ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800')
                      : (isDark ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800')
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                    <button className={`p-1 rounded ${
                      isDark 
                        ? 'hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200'
                        : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                    }`}>
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className={`p-1 rounded ${
                      isDark 
                        ? 'hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200'
                        : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                    }`}>
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className={`p-1 rounded ${
                      isDark 
                        ? 'hover:bg-neutral-800 text-neutral-400 hover:text-red-400'
                        : 'hover:bg-gray-100 text-gray-400 hover:text-red-600'
                    }`}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={`px-6 py-4 border-t ${
        isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="flex items-center justify-between">
          <div className={`text-sm ${isDark ? 'text-neutral-400' : 'text-gray-700'}`}>
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} results
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg disabled:opacity-50 border ${
                isDark 
                  ? 'text-neutral-300 border-neutral-700 hover:bg-neutral-800'
                  : 'text-gray-500 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg disabled:opacity-50 border ${
                isDark 
                  ? 'text-neutral-300 border-neutral-700 hover:bg-neutral-800'
                  : 'text-gray-500 border-gray-300 hover:bg-gray-50'
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

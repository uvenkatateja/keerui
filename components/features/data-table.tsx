"use client";

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Search, ChevronLeft, ChevronRight, Eye, Edit, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import ComponentContainer from "./component-container";

type DataTableProps = {
  cardTitle?: string;
  cardDescription?: string;
};

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
];

const getAvatarColor = (name: string) => {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500',
    'bg-red-500', 'bg-yellow-500', 'bg-teal-500', 'bg-orange-500', 'bg-cyan-500'
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const DataTable = ({}: DataTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredData = useMemo(() => {
    return sampleData.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <ComponentContainer>
      <div
        className={cn(
          "relative overflow-hidden",
          "h-[30rem] w-full max-w-[400px]",
          "rounded-md border border-neutral-800 bg-neutral-950",
        )}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-full flex flex-col"
        >
          {/* Search */}
          <div className="p-3 border-b border-neutral-800">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-neutral-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-7 pr-3 py-1.5 text-xs rounded-md border bg-neutral-900 border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto">
              <table className="w-full text-xs">
                <thead className="bg-neutral-900 sticky top-0">
                  <tr>
                    <th className="px-3 py-2 text-left font-medium text-neutral-300">User</th>
                    <th className="px-3 py-2 text-left font-medium text-neutral-300">Status</th>
                    <th className="px-3 py-2 text-left font-medium text-neutral-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {paginatedData.map((user, index) => (
                    <motion.tr 
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ backgroundColor: 'rgb(23 23 23)' }}
                      className="transition-colors"
                    >
                      <td className="px-3 py-2">
                        <div className="flex items-center space-x-2">
                          <div className={`h-6 w-6 rounded-full flex items-center justify-center text-white font-medium text-xs ${getAvatarColor(user.name)}`}>
                            {user.initials}
                          </div>
                          <div>
                            <div className="font-medium text-neutral-100 text-xs">{user.name}</div>
                            <div className="text-neutral-400 text-xs truncate max-w-[120px]">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2">
                        <motion.span 
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                            user.status === 'Active' ? 'bg-green-900 text-green-300' :
                            user.status === 'Inactive' ? 'bg-red-900 text-red-300' :
                            'bg-yellow-900 text-yellow-300'
                          }`}
                        >
                          {user.status}
                        </motion.span>
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex space-x-1">
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1 rounded text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800"
                          >
                            <Eye className="w-3 h-3" />
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1 rounded text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800"
                          >
                            <Edit className="w-3 h-3" />
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1 rounded text-neutral-400 hover:text-red-400 hover:bg-neutral-800"
                          >
                            <Trash2 className="w-3 h-3" />
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="px-3 py-2 border-t border-neutral-800 bg-neutral-900">
            <div className="flex items-center justify-between">
              <div className="text-xs text-neutral-400">
                {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length}
              </div>
              <div className="flex items-center gap-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-2 py-1 text-xs rounded disabled:opacity-50 text-neutral-300 border border-neutral-700 hover:bg-neutral-800 disabled:hover:bg-transparent"
                >
                  <ChevronLeft className="w-3 h-3" />
                </motion.button>
                <span className="text-xs text-neutral-400 px-2">{currentPage}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-2 py-1 text-xs rounded disabled:opacity-50 text-neutral-300 border border-neutral-700 hover:bg-neutral-800 disabled:hover:bg-transparent"
                >
                  <ChevronRight className="w-3 h-3" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </ComponentContainer>
  );
};

export default DataTable;

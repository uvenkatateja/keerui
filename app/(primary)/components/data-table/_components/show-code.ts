export const title = "Data Table";
export const routepoint = "data-table";
export const description = "Interactive data table with sorting, filtering, pagination, and search functionality. Perfect for dashboards and admin panels.";

export const cliscript = "add https://keerui.dev/registry/data-table.json";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

const packagescript = "motion lucide-react clsx tailwind-merge next-themes";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const dataTableProps = [
  {
    prop: "data",
    type: "User[]",
    default: "sampleData",
    description: "Array of user objects to display in the table.",
  },
  {
    prop: "itemsPerPage",
    type: "number",
    default: "5",
    description: "Number of items to display per page.",
  },
];


export const democode = `import DataTable from '@/components/keerui/data-table';

export function ${title.replace(/\s+/g, "")}Example() {
  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "2024-01-15",
      initials: "JD"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      role: "Editor",
      status: "Active",
      joinDate: "2024-02-20",
      initials: "SW"
    },
    // Add more data as needed
  ];

  return (
    <div className="p-8">
      <DataTable 
        data={sampleData}
        itemsPerPage={5}
      />
    </div>
  );
}`;

export const code = `"use client";

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Search, ChevronLeft, ChevronRight, Eye, Edit, Trash2 } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive" | "Pending";
  joinDate: string;
  avatar: string;
}

const sampleData: User[] = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active", joinDate: "2024-01-15", avatar: "https://avatar.iran.liara.run/public/10" },
  { id: 2, name: "Sarah Wilson", email: "sarah.wilson@example.com", role: "Editor", status: "Active", joinDate: "2024-02-20", avatar: "https://avatar.iran.liara.run/public/47" },
  { id: 3, name: "Mike Johnson", email: "mike.johnson@example.com", role: "User", status: "Inactive", joinDate: "2024-01-10", avatar: "https://avatar.iran.liara.run/public/42" },
  { id: 4, name: "Emily Davis", email: "emily.davis@example.com", role: "Editor", status: "Pending", joinDate: "2024-03-05", avatar: "https://avatar.iran.liara.run/public/41" },
  { id: 5, name: "Alex Chen", email: "alex.chen@example.com", role: "User", status: "Active", joinDate: "2024-02-28", avatar: "https://avatar.iran.liara.run/public/27" }
];

export default function DataTable({ data = sampleData, itemsPerPage = 5 }: { data?: User[]; itemsPerPage?: number }) {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const isDark = theme === 'dark';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={\`rounded-lg border \${isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-gray-200'} overflow-hidden\`}
    >
      {/* Search */}
      <div className={\`p-4 border-b \${isDark ? 'border-neutral-800' : 'border-gray-200'}\`}>
        <div className="relative">
          <Search className={\`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 \${isDark ? 'text-neutral-400' : 'text-gray-400'}\`} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={\`w-full pl-10 pr-4 py-2 rounded-lg border \${
              isDark 
                ? 'bg-neutral-900 border-neutral-700 text-neutral-100 placeholder-neutral-500' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            } focus:outline-none focus:ring-2 focus:ring-cyan-500\`}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={isDark ? 'bg-neutral-900' : 'bg-gray-50'}>
            <tr>
              <th className={\`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider \${isDark ? 'text-neutral-300' : 'text-gray-500'}\`}>User</th>
              <th className={\`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider \${isDark ? 'text-neutral-300' : 'text-gray-500'}\`}>Role</th>
              <th className={\`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider \${isDark ? 'text-neutral-300' : 'text-gray-500'}\`}>Status</th>
              <th className={\`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider \${isDark ? 'text-neutral-300' : 'text-gray-500'}\`}>Actions</th>
            </tr>
          </thead>
          <tbody className={\`divide-y \${isDark ? 'divide-neutral-800' : 'divide-gray-200'}\`}>
            {paginatedData.map((user) => (
              <motion.tr key={user.id} whileHover={{ backgroundColor: isDark ? 'rgb(23 23 23)' : '#f9fafb' }}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Image className="h-10 w-10 rounded-full" src={user.avatar} alt={user.name} width={40} height={40} />
                    <div className="ml-4">
                      <div className={\`text-sm font-medium \${isDark ? 'text-neutral-100' : 'text-gray-900'}\`}>{user.name}</div>
                      <div className={\`text-sm \${isDark ? 'text-neutral-400' : 'text-gray-500'}\`}>{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className={\`px-6 py-4 whitespace-nowrap text-sm \${isDark ? 'text-neutral-100' : 'text-gray-900'}\`}>{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={\`inline-flex px-2 py-1 text-xs font-semibold rounded-full \${
                    user.status === 'Active' ? 'bg-green-100 text-green-800' :
                    user.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }\`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                    <button className={\`p-1 rounded hover:bg-gray-100 \${isDark ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800' : 'text-gray-400'}\`}>
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className={\`p-1 rounded hover:bg-gray-100 \${isDark ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800' : 'text-gray-400'}\`}>
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className={\`p-1 rounded hover:bg-gray-100 \${isDark ? 'text-neutral-400 hover:text-red-400 hover:bg-neutral-800' : 'text-gray-400'}\`}>
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
      <div className={\`px-6 py-4 border-t \${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-gray-50 border-gray-200'}\`}>
        <div className="flex items-center justify-between">
          <div className={\`text-sm \${isDark ? 'text-neutral-400' : 'text-gray-700'}\`}>
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} results
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={\`flex items-center gap-1 px-3 py-2 text-sm rounded-lg disabled:opacity-50 \${
                isDark ? 'text-neutral-300 border-neutral-700 hover:bg-neutral-800' : 'text-gray-500 border-gray-300 hover:bg-gray-50'
              } border\`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={\`flex items-center gap-1 px-3 py-2 text-sm rounded-lg disabled:opacity-50 \${
                isDark ? 'text-neutral-300 border-neutral-700 hover:bg-neutral-800' : 'text-gray-500 border-gray-300 hover:bg-gray-50'
              } border\`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}`;

export const title = "Blockchain Tracker";
export const routepoint = "blockchain-tracker";
export const description = "Real-time blockchain transaction visualization with animated flows between network nodes and transaction status tracking.";

export const cliscript = "add https://keerui.dev/registry/blockchain-tracker.json";

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
}`;

const packagescript = "motion lucide-react clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const blockchainTrackerProps = [
  {
    prop: "networkSize",
    type: "number",
    default: "4",
    description: "Number of blockchain nodes in the network.",
  },
  {
    prop: "transactionSpeed",
    type: "number",
    default: "3000",
    description: "Interval between new transactions in milliseconds.",
  },
  {
    prop: "showGrid",
    type: "boolean",
    default: "true",
    description: "Whether to show the background grid pattern.",
  },
];

export const democode = `import BlockchainTracker from '@/components/keerui/blockchain-tracker';

export function ${title.replace(/\s+/g, "")}Example() {
  return (
    <div className="p-8 flex items-center justify-center">
      <BlockchainTracker />
    </div>
  );
}`;

export const code = `"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface Transaction {
  id: string;
  from: number;
  to: number;
  amount: number;
  status: "pending" | "confirmed" | "failed";
  progress: number;
}

interface Block {
  id: number;
  x: number;
  y: number;
  transactions: number;
  mining: boolean;
}

const blocks: Block[] = [
  { id: 1, x: 100, y: 120, transactions: 0, mining: false },
  { id: 2, x: 250, y: 80, transactions: 0, mining: false },
  { id: 3, x: 400, y: 120, transactions: 0, mining: false },
  { id: 4, x: 250, y: 200, transactions: 0, mining: false },
];

export default function BlockchainTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [activeBlocks, setActiveBlocks] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Create new transaction
      const fromBlock = Math.floor(Math.random() * blocks.length);
      let toBlock = Math.floor(Math.random() * blocks.length);
      while (toBlock === fromBlock) {
        toBlock = Math.floor(Math.random() * blocks.length);
      }

      const newTransaction: Transaction = {
        id: Math.random().toString(36).substr(2, 9),
        from: fromBlock,
        to: toBlock,
        amount: Math.floor(Math.random() * 100) + 1,
        status: "pending",
        progress: 0,
      };

      setTransactions(prev => [...prev.slice(-2), newTransaction]);
      setActiveBlocks([fromBlock, toBlock]);

      // Animate transaction progress
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress += 2;
        setTransactions(prev =>
          prev.map(tx =>
            tx.id === newTransaction.id
              ? { ...tx, progress, status: progress >= 100 ? "confirmed" : "pending" }
              : tx
          )
        );

        if (progress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setTransactions(prev => prev.filter(tx => tx.id !== newTransaction.id));
          }, 1000);
        }
      }, 50);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[20rem] w-full max-w-[500px] rounded-md border border-neutral-800 bg-neutral-950 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#404040" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {blocks.map((from, i) =>
          blocks.slice(i + 1).map((to, j) => (
            <line
              key={\`\${i}-\${j}\`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#404040"
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="5,5"
            />
          ))
        )}
      </svg>

      {/* Transaction flows */}
      {transactions.map(tx => {
        const fromBlock = blocks[tx.from];
        const toBlock = blocks[tx.to];
        const x = fromBlock.x + (toBlock.x - fromBlock.x) * (tx.progress / 100);
        const y = fromBlock.y + (toBlock.y - fromBlock.y) * (tx.progress / 100);

        return (
          <motion.div
            key={tx.id}
            className="absolute w-2 h-2 rounded-full"
            style={{ left: x - 4, top: y - 4 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: tx.status === "confirmed" ? 0 : 1,
              backgroundColor: tx.status === "confirmed" ? "#10b981" : "#06b6d4",
              boxShadow: tx.status === "confirmed" 
                ? "0 0 10px rgba(16, 185, 129, 0.6)" 
                : "0 0 8px rgba(6, 182, 212, 0.6)"
            }}
            transition={{ duration: 0.3 }}
          />
        );
      })}

      {/* Blockchain nodes */}
      {blocks.map((block, i) => (
        <motion.div
          key={block.id}
          className="absolute flex items-center justify-center"
          style={{ left: block.x - 20, top: block.y - 20 }}
        >
          <motion.div
            className="w-10 h-10 rounded-lg border-2 flex items-center justify-center text-xs font-bold"
            animate={{
              borderColor: activeBlocks.includes(i) ? "#06b6d4" : "#525252",
              backgroundColor: activeBlocks.includes(i) ? "#0f172a" : "#171717",
              color: activeBlocks.includes(i) ? "#06b6d4" : "#a3a3a3",
              scale: activeBlocks.includes(i) ? 1.1 : 1,
              boxShadow: activeBlocks.includes(i) 
                ? "0 0 15px rgba(6, 182, 212, 0.4)" 
                : "0 0 0px rgba(6, 182, 212, 0)"
            }}
            transition={{ duration: 0.3 }}
          >
            {block.id}
          </motion.div>
        </motion.div>
      ))}

      {/* Status indicator */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <motion.div
          className="w-2 h-2 rounded-full bg-green-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs text-neutral-400">Network Active</span>
      </div>

      {/* Transaction count */}
      <div className="absolute top-4 right-4 text-xs text-neutral-400">
        {transactions.length} Active
      </div>
    </div>
  );
}`;
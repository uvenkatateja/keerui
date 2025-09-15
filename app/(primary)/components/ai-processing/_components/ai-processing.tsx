"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

interface Node {
    id: number;
    x: number;
    y: number;
    layer: number;
    active: boolean;
}

interface Connection {
    from: Node;
    to: Node;
    active: boolean;
}

const layers = [
    { nodes: 4, x: 80 },
    { nodes: 6, x: 200 },
    { nodes: 4, x: 320 }
];

const generateNodes = (): Node[] => {
    let nodeId = 0;
    return layers.flatMap((layer, layerIndex) =>
        Array.from({ length: layer.nodes }, (_, i) => ({
            id: nodeId++,
            x: layer.x,
            y: 60 + (i * 40) + (layerIndex === 1 ? -20 : 0),
            layer: layerIndex,
            active: false
        }))
    );
};

export default function AIProcessing() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [nodes, setNodes] = useState<Node[]>(() => generateNodes());
    const [processingWave, setProcessingWave] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProcessingWave(prev => (prev + 1) % 3);

            setNodes(prevNodes =>
                prevNodes.map(node => ({
                    ...node,
                    active: Math.random() > 0.6 && node.layer <= processingWave
                }))
            );
        }, 1500);

        return () => clearInterval(interval);
    }, [processingWave]);

    const connections = React.useMemo(() => {
        const conns: Connection[] = [];
        for (let i = 0; i < layers.length - 1; i++) {
            const currentLayer = nodes.filter(n => n.layer === i);
            const nextLayer = nodes.filter(n => n.layer === i + 1);

            currentLayer.forEach(from => {
                nextLayer.forEach(to => {
                    conns.push({ from, to, active: from.active && to.active });
                });
            });
        }
        return conns;
    }, [nodes]);

    const isDark = mounted ? (resolvedTheme === 'dark') : true;

    return (
        <div className={`relative h-[20rem] w-full max-w-[400px] rounded-md border overflow-hidden ${isDark ? 'border-neutral-800 bg-neutral-950' : 'border-gray-200 bg-white'
            }`}>
            <svg className="absolute inset-0 w-full h-full">
                {connections.map((conn, i) => (
                    <motion.line
                        key={i}
                        x1={conn.from.x}
                        y1={conn.from.y}
                        x2={conn.to.x}
                        y2={conn.to.y}
                        stroke={conn.active ? "#06b6d4" : (isDark ? "#404040" : "#d1d5db")}
                        strokeWidth={conn.active ? 2 : 1}
                        opacity={conn.active ? 0.8 : 0.3}
                        animate={{
                            opacity: conn.active ? [0.3, 0.8, 0.3] : 0.3
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                ))}
            </svg>

            {nodes.map(node => (
                <motion.div
                    key={node.id}
                    className="absolute w-3 h-3 rounded-full border-2"
                    style={{ left: node.x - 6, top: node.y - 6 }}
                    animate={{
                        backgroundColor: node.active ? "#06b6d4" : (isDark ? "#404040" : "#9ca3af"),
                        borderColor: node.active ? "#22d3ee" : (isDark ? "#525252" : "#6b7280"),
                        scale: node.active ? [1, 1.3, 1] : 1,
                        boxShadow: node.active
                            ? "0 0 15px rgba(6, 182, 212, 0.6)"
                            : "0 0 0px rgba(6, 182, 212, 0)"
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            ))}

            <motion.div
                className={`absolute top-4 left-4 text-xs ${isDark ? 'text-neutral-400' : 'text-gray-600'}`}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Processing...
            </motion.div>


        </div>
    );
}
import { useState, useEffect, useCallback } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import ReactFlow, {
  useEdgesState,
  useNodesState,
  addEdge,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import { cn } from "@/lib/utils";
import animationData from "@/data/confetti.json";
import NeuralNetworkVisualization from "./NeuralNetworkVisualization";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const generateData = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    name: i + 1,
    value: Math.floor(Math.random() * 100) + 10,
  }));
};

const initialNodes = [
  {
    id: "1",
    data: { label: "Smart Work" },
    position: { x: 100, y: 100 },
    draggable: true,
    style: { border: "2px solid black", backgroundColor: "white" },
  },
  {
    id: "2",
    data: { label: "Curiosity" },
    position: { x: 300, y: 100 },
    draggable: true,
    style: { border: "2px solid black", backgroundColor: "white" },
  },
];

const successNode = {
  id: "3",
  data: { label: "Success" },
  position: { x: 200, y: 200 },
  draggable: false,
  style: { border: "2px solid black", backgroundColor: "white" },
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  const [data, setData] = useState(generateData());
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onConnect = useCallback(
    (params: any) => {
      setEdges((eds) => addEdge(params, eds));
      if (edges.length === 0) {
        setNodes([...initialNodes, successNode]);
        setShowOverlay(true);
      }
    },
    [edges]
  );

  const handleReset = () => {
    setNodes(initialNodes);
    setEdges([]);
    setShowOverlay(false);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
    >
      {id === 1 ? (
        <div className="h-full relative">
          <div className="absolute top-4 left-0 w-full text-white text-center">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
          <div className="absolute inset-0 justify-center bg-black bg-opacity-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#ddd" />
                <YAxis stroke="#ddd" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#222",
                    borderColor: "#444",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#82ca9d"
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  activeDot={{ r: 10 }}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : id === 2 ? (
        <div className="h-full flex flex-col relative">
          <div className="flex-grow h-[80%] border border-white/[0.1] rounded-lg overflow-hidden bg-white relative">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onConnect={onConnect}
              fitView
            >
              <Background color="#ccc" gap={16} />
            </ReactFlow>

            {showOverlay && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-85">
                {/* Confetti animation (plays until reset is clicked) */}
                <Lottie
                  options={{ loop: true, autoplay: true, animationData }}
                  height={200}
                  width={200}
                />
                {/* Reset button */}
                <button
                  onClick={handleReset}
                  className="mt-4 bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
                >
                  Reset
                </button>
              </div>
            )}
          </div>
          <div className="h-[20%] p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </div>
      ) : id == 3 ? (
        <div className="p-4 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
          <div className="bg-black bg-opacity-10">
            <NeuralNetworkVisualization />
          </div>
        </div>
      ) : id === 4 ? (
        <div className="p-4 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      ) : id === 5 ? (
        <div className="h-full relative"></div>
      ) : id === 6 ? (
        <div className="h-full flex flex-col relative"></div>
      ) : null}
    </div>
  );
};

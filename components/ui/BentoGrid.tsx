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
} from "recharts";
import ReactFlow, {
  useEdgesState,
  useNodesState,
  addEdge,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";
import { MovingBorder } from "./MovingBorders";
import { cn } from "@/lib/utils";
import animationData from "@/data/confetti.json";
import NeuralNetworkVisualization from "./NeuralNetworkVisualization";
import { motion } from "framer-motion";

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
  const [isHovered, setIsHovered] = useState(false);

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
        setNodes([successNode]);
        setTimeout(() => {
          setShowOverlay(true);
        }, 2000);
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
    <motion.div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-xl border-2 border-white/20 group/bento flex flex-col space-y-4 bg-black/10 backdrop-blur-sm",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0.8, scale: 0.97 }}
      animate={{
        opacity: 1,
        scale: isHovered ? 1.03 : 1,
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ duration: 0.2 }}
      whileHover={{
        y: -8,
      }}
    >
      {/* Border Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-white/0"
        animate={{
          boxShadow: isHovered
            ? "0 0 20px 2px rgba(255, 255, 255, 0.5), inset 0 0 15px 2px rgba(255, 255, 255, 0.3)"
            : "0 0 0px 0px rgba(255, 255, 255, 0), inset 0 0 0px 0px rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Moving Border Effect wrapper */}
      <div className="absolute inset-0 z-0">
        <MovingBorder
          duration={5000}
          rx="16"
          ry="16"
          pathLength={1}
          isHovered={isHovered}
        >
          <div
            className={cn(
              "h-full w-full scale-[1.01] rounded-xl",
              isHovered ? "opacity-100" : "opacity-50"
            )}
          />
        </MovingBorder>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full p-2">
        {id === 1 ? (
          <div className="h-full relative rounded-lg overflow-hidden">
            <motion.div
              className="absolute top-4 left-0 w-full text-white text-center z-10"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold tracking-wide mb-2">{title}</h2>
              <p className="text-lg text-gray-200">{description}</p>
            </motion.div>
            <motion.div
              className="w-full h-full"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 80, right: 50, left: 20, bottom: 15 }}
                >
                  <XAxis dataKey="name" stroke="#ddd" tick={false} />
                  <YAxis stroke="#ddd" tick={false} />
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
                    strokeWidth={isHovered ? 4 : 3}
                    dot={{ r: isHovered ? 8 : 6 }}
                    activeDot={{ r: 10 }}
                    animationDuration={3000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          </div>
        ) : id === 2 ? (
          <div className="h-full min-h-96 flex flex-col relative rounded-lg overflow-hidden">
            <motion.div
              className="flex-grow h-[80%] border border-white/20 rounded-lg overflow-hidden bg-white relative"
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
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
                  <Lottie
                    options={{ loop: true, autoplay: true, animationData }}
                    height={200}
                    width={200}
                  />
                  <motion.button
                    onClick={handleReset}
                    className="mt-4 bg-white text-black px-6 py-3 rounded-lg text-xl font-semibold shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reset
                  </motion.button>
                </div>
              )}
            </motion.div>
            <motion.div
              className="h-[20%] p-4 flex flex-col items-center justify-center"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold tracking-wide mb-1">{title}</h2>
              <p className="text-lg text-gray-200">{description}</p>
            </motion.div>
          </div>
        ) : id === 3 ? (
          <div className="p-4 flex flex-col items-center justify-center">
            <motion.div
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <h2 className="text-2xl font-bold tracking-wide text-center mb-2">
                {title}
              </h2>
              <p className="text-lg text-gray-200 text-center">{description}</p>
            </motion.div>
            <motion.div
              className="min-w-[900px]"
              animate={{ scale: isHovered ? 1.03 : 1 }}
              transition={{ duration: 0.4 }}
            >
              <NeuralNetworkVisualization isHovered={isHovered} />
            </motion.div>
          </div>
        ) : null}
      </div>

      {/* Pop animation on hover instead of color animation */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-xl"
        animate={{
          scale: isHovered ? 1.08 : 1,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.2,
        }}
      />
    </motion.div>
  );
};

import { useState, useEffect, useCallback } from "react";
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
import { cn } from "@/lib/utils";
import NeuralNetworkVisualization from "./NeuralNetworkVisualization";

// Types
interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

// Helper functions
const generateData = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    name: i + 1,
    value: Math.floor(Math.random() * 100) + 10,
  }));
};

// Flow chart initial configuration
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

// Main Components
export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
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

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  id,
  title,
  description,
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
        setNodes((nodes) => [...nodes, successNode]);
        setTimeout(() => setShowOverlay(true), 2000);
      }
    },
    [edges, setNodes, setEdges]
  );

  const handleReset = () => {
    setNodes(initialNodes);
    setEdges([]);
    setShowOverlay(false);
  };

  const renderContent = () => {
    switch (id) {
      case 1:
        return (
          <LineChartSection
            title={title}
            description={description}
            data={data}
          />
        );
      case 2:
        return (
          <FlowChartSection
            title={title}
            description={description}
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            showOverlay={showOverlay}
            handleReset={handleReset}
          />
        );
      case 3:
        return <NeuralNetworkSection title={title} description={description} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-xl border-2 border-white/20 flex flex-col space-y-4 bg-black/10 backdrop-blur-sm",
        className
      )}
    >
      <div className="relative z-10 h-full w-full p-2">{renderContent()}</div>
    </div>
  );
};

// Section Components
const LineChartSection: React.FC<{
  title: any;
  description: any;
  data: any[];
}> = ({ title, description, data }) => (
  <div className="h-full relative rounded-lg overflow-hidden">
    <div className="absolute top-4 left-0 w-full text-white text-center z-10">
      <h2 className="text-2xl font-bold tracking-wide mb-2">{title}</h2>
      <p className="text-lg text-gray-200">{description}</p>
    </div>
    <ChartComponent data={data} />
  </div>
);

const FlowChartSection: React.FC<{
  title: any;
  description: any;
  nodes: any[];
  edges: any[];
  onConnect: any;
  showOverlay: boolean;
  handleReset: () => void;
}> = ({
  title,
  description,
  nodes,
  edges,
  onConnect,
  showOverlay,
  handleReset,
}) => (
  <div className="h-full min-h-96 flex flex-col relative rounded-lg overflow-hidden">
    <FlowChartComponent
      nodes={nodes}
      edges={edges}
      onConnect={onConnect}
      showOverlay={showOverlay}
      handleReset={handleReset}
    />
    <div className="h-[20%] p-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold tracking-wide mb-1">{title}</h2>
      <p className="text-lg text-gray-200">{description}</p>
    </div>
  </div>
);

const NeuralNetworkSection: React.FC<{
  title: any;
  description: any;
}> = ({ title, description }) => (
  <div className="p-4 flex flex-col items-center justify-center">
    <div className="mb-4">
      <h2 className="text-2xl font-bold tracking-wide text-center mb-2">
        {title}
      </h2>
      <p className="text-lg text-gray-200 text-center">{description}</p>
    </div>
    <div className="min-w-[900px]">
      <NeuralNetworkVisualization isAnimating={false} />
    </div>
  </div>
);

// Helper Components
const ChartComponent: React.FC<{ data: any[] }> = ({ data }) => (
  <div className="w-full h-full">
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
          strokeWidth={3}
          dot={{ r: 6 }}
          activeDot={{ r: 10 }}
          animationDuration={3000}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const FlowChartComponent: React.FC<{
  nodes: any[];
  edges: any[];
  onConnect: any;
  showOverlay: boolean;
  handleReset: () => void;
}> = ({ nodes, edges, onConnect, showOverlay, handleReset }) => (
  <div className="flex-grow h-[80%] border border-white/20 rounded-lg overflow-hidden bg-white relative">
    <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect} fitView>
      <Background color="#ccc" gap={16} />
    </ReactFlow>
    {showOverlay && (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-85">
        <div className="text-white text-2xl mb-4">Success!</div>
        <button
          onClick={handleReset}
          className="mt-4 bg-white text-black px-6 py-3 rounded-lg text-xl font-semibold shadow-lg"
        >
          Reset
        </button>
      </div>
    )}
  </div>
);

export default BentoGrid;

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";

interface NeuralNetworkVisualizationProps {
  isAnimating: boolean;
}

const NeuralNetworkVisualization: React.FC<NeuralNetworkVisualizationProps> = ({
  isAnimating,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current) as d3.Selection<
      SVGSVGElement,
      unknown,
      null,
      undefined
    >;
    svg.selectAll("*").remove();

    const width = wrapperRef.current?.clientWidth ?? 900;
    const height = wrapperRef.current?.clientHeight ?? 500;
    const layers = 5;
    const nodesPerLayer = [5, 5, 6, 5, 5];
    const nodeSize = [20, 15, 15, 15, 20];

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 2])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    const xScale = d3
      .scaleLinear()
      .domain([0, layers - 1])
      .range([100, width - 100]);

    const yScale = (layer: number) =>
      d3
        .scaleLinear()
        .domain([0, nodesPerLayer[layer] - 1])
        .range([
          layer === 0 || layer === 4 ? 100 : 200,
          layer === 0 || layer === 4 ? height - 100 : height - 200,
        ]);

    interface Node {
      id: string;
      x: number;
      y: number;
      layer: number;
    }

    interface Link {
      source: string;
      target: string;
    }

    const nodes: Node[] = [];
    const links: Link[] = [];

    nodesPerLayer.forEach((count, layer) => {
      for (let i = 0; i < count; i++) {
        const node = {
          id: `${layer}-${i}`,
          x: xScale(layer),
          y: yScale(layer)(i),
          layer,
        };
        nodes.push(node);
        if (layer > 0) {
          for (let j = 0; j < nodesPerLayer[layer - 1]; j++) {
            links.push({ source: `${layer - 1}-${j}`, target: node.id });
          }
        }
      }
    });

    const g = svg.append("g");

    g.append("text")
      .attr("x", xScale(0))
      .attr("y", 50)
      .attr("fill", "white")
      .attr("font-size", "16px")
      .attr("text-anchor", "middle")
      .text("Input Layer");

    g.append("text")
      .attr("x", xScale(2))
      .attr("y", 150)
      .attr("fill", "white")
      .attr("letter-spacing", "2.75px")
      .attr("font-size", "16px")
      .attr("text-anchor", "middle")
      .text("Hidden Layers");

    g.append("text")
      .attr("x", xScale(4))
      .attr("y", 50)
      .attr("fill", "white")
      .attr("font-size", "16px")
      .attr("text-anchor", "middle")
      .text("Output Layer");

    g.selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("x1", (d) => nodes.find((n) => n.id === d.source)!.x)
      .attr("y1", (d) => nodes.find((n) => n.id === d.source)!.y)
      .attr("x2", (d) => nodes.find((n) => n.id === d.target)!.x)
      .attr("y2", (d) => nodes.find((n) => n.id === d.target)!.y)
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .style("opacity", 0.5);

    g.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => nodeSize[d.layer])
      .attr("fill", "white");

    svg.on("mouseover", function (event) {
      const mouseX = d3.pointer(event, this)[0];
      const layerIndex = Math.round(xScale.invert(mouseX));

      g.selectAll("line").style("opacity", (d: any) =>
        nodes.find((n) => n.id === d.source)!.layer === layerIndex ||
        nodes.find((n) => n.id === d.target)!.layer === layerIndex
          ? 1
          : 0.5
      );
      g.selectAll("circle").style("fill", (d: any) =>
        d.layer === layerIndex ? "#82ca9d" : "white"
      );
    });

    svg.on("mouseout", function () {
      g.selectAll("line").style("opacity", 0.5);
      g.selectAll("circle").style("fill", "white");
    });
  }, []);

  return (
    <motion.div
      className="w-full h-full min-h-[400px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl"
      animate={{
        scale: isAnimating ? 1.02 : 1,
        filter: isAnimating ? "brightness(1.1)" : "brightness(1)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        ref={wrapperRef}
        style={{ width: "100%", height: "500px", overflow: "hidden" }}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${wrapperRef.current?.clientWidth || 900} ${
            wrapperRef.current?.clientHeight || 500
          }`}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          style={{ display: "block" }}
        ></svg>
      </div>
    </motion.div>
  );
};

export default NeuralNetworkVisualization;

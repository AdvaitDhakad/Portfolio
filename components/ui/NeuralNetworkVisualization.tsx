import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const NeuralNetworkVisualization = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 900;
    const height = 500;
    const layers = 5;
    const nodesPerLayer = [5, 5, 6, 5, 5];
    const nodeSize = [20, 15, 15, 15, 20];

    const xScale = d3
      .scaleLinear()
      .domain([0, layers - 1])
      .range([100, width - 100]);

    const yScale = (layer) =>
      d3
        .scaleLinear()
        .domain([0, nodesPerLayer[layer] - 1])
        .range([
          layer === 0 || layer === 4 ? 100 : 200,
          layer === 0 || layer === 4 ? height - 100 : height - 200,
        ]);

    const nodes = [];
    const links = [];

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

    svg
      .append("text")
      .attr("x", xScale(0))
      .attr("y", 50)
      .attr("fill", "white")
      .attr("font-size", "20px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .text("Input Layer");

    svg
      .append("text")
      .attr("x", xScale(2))
      .attr("y", 150)
      .attr("fill", "white")
      .attr("font-size", "20px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .text("Hidden Layers");

    svg
      .append("text")
      .attr("x", xScale(4))
      .attr("y", 50)
      .attr("fill", "white")
      .attr("font-size", "20px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .text("Output   ");

    const line = svg
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("x1", (d) => nodes.find((n) => n.id === d.source).x)
      .attr("y1", (d) => nodes.find((n) => n.id === d.source).y)
      .attr("x2", (d) => nodes.find((n) => n.id === d.target).x)
      .attr("y2", (d) => nodes.find((n) => n.id === d.target).y)
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .style("opacity", 0.5);

    const circles = svg
      .selectAll("circle")
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

      line.style("opacity", (d) =>
        nodes.find((n) => n.id === d.source).layer === layerIndex ||
        nodes.find((n) => n.id === d.target).layer === layerIndex
          ? 1
          : 0.5
      );
      circles.style("fill", (d) =>
        d.layer === layerIndex ? "#82ca9d" : "white"
      );
    });

    svg.on("mouseout", function () {
      line.style("opacity", 0.5);
      circles.style("fill", "white");
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      width={900}
      height={500}
      //   style={{ background: "black" }}
    ></svg>
  );
};

export default NeuralNetworkVisualization;

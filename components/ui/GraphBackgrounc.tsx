import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const GraphBackground = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg
      .attr("width", width)
      .attr("height", height)
      .style("background", "black");

    const xScale = d3
      .scaleLinear()
      .domain([0, 30])
      .range([50, width - 50]);
    const yScale = d3
      .scaleLinear()
      .domain([-15, 15])
      .range([height - 50, 50]);

    const data = Array.from({ length: 30 }, (_, i) => ({
      x: i,
      y: Math.sin(i / 5) * 10 + Math.random() * 5,
    }));

    const lineGenerator = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveCatmullRom);

    svg.selectAll("path").remove(); // Remove previous graph before re-rendering
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "cyan")
      .attr("stroke-width", 3)
      .attr("d", lineGenerator);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* D3 Graph Background */}
      <svg ref={svgRef} className="absolute inset-0"></svg>

      {/* Portfolio Card */}
      <div className="relative z-10 bg-white bg-opacity-80 p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-xl font-bold">My Portfolio</h2>
        <p className="text-gray-600">Data Science | Financial Analysis</p>
      </div>
    </div>
  );
};

export default GraphBackground;

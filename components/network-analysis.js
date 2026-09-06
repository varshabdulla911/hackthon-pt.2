import React, { useEffect } from 'react';
import { select, forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3';

const NetworkAnalysis = ({ data }) => {
    useEffect(() => {
        const svg = select('#network-graph')
            .attr('width', 800)
            .attr('height', 600);

        const simulation = forceSimulation()
            .force('link', forceLink().id(d => d.id).distance(100))
            .force('charge', forceManyBody().strength(-300))
            .force('center', forceCenter(400, 300));

        const links = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(data.links)
            .enter().append('line')
            .attr('stroke-width', 2)
            .attr('stroke', '#999');

        const nodes = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(data.nodes)
            .enter().append('circle')
            .attr('r', 5)
            .attr('fill', '#69b3a2')
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        nodes.append('title')
            .text(d => d.id);

        simulation
            .nodes(data.nodes)
            .on('tick', ticked);

        simulation.force('link')
            .links(data.links);

        function ticked() {
            links
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            nodes
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);
        }

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    }, [data]);

    return (
        <div>
            <h2>Network Analysis</h2>
            <svg id="network-graph"></svg>
        </div>
    );
};

export default NetworkAnalysis;
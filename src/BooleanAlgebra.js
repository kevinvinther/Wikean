import React from "react"
import ReactDOM from "react-dom"
import Graph from "react-graph-vis"
import { NavLink } from "react-router-dom"

export default function GraphView() {
    const graph = {
        nodes: [
            {
                id: 1,
                label: "Introduction to Boolean Algebra",
                title: "Introduction to Boolean Algebra",
            },
            {
                id: 2,
                label: "Propositional Calculus",
                title: "Propositional Calculus",
            },
            { id: 3, label: "Boolean Functions", title: "Boolean Functions" },
            { id: 4, label: "Logic Gates", title: "Logic Gates" },
            {
                id: 5,
                label: "Boolean Algebra Theorems",
                title: "Boolean Algebra Theorems",
            },
            {
                id: 6,
                label: "Boolean Algebra Applications",
                title: "Boolean Algebra Applications",
            },
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 3, to: 4 },
            { from: 4, to: 5 },
            { from: 5, to: 6 },
        ],
    }

    const options = {
        layout: {
            hierarchical: true,
        },
        nodes: {
            shadow: true,
        },
        edges: {
            color: "#000000",
            shadow: true,
        },
        height: "1000px",
    }

    const events = {
        select: function(event) {
            var { nodes, edges } = event
        },
    }
    return (
        <div className="flex">
            <Graph
                graph={graph}
                options={options}
                events={events}
                onClick={(event) => {
                    if (event.nodes.length > 0) {
                        const nodeId = event.nodes[0]
                        // Only return the NavLink for node 1
                        if (nodeId === 1) {
                            return (
                                <NavLink to="/article">Introduction to Boolean Algebra</NavLink>
                            )
                        }
                    }
                }}
                getNetwork={(network) => {
                    //  if you want access to vis.js network api you can set the state in a parent component using this property
                }}
            />
            <NavLink to="/article">
                <a className="text-blue-400">Introduction to Boolean Algebra</a>
            </NavLink>
        </div>
    )
}

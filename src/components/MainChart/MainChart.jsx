import { useRef } from "react";
import { RadialGraph } from "@ant-design/graphs";
import css from './MainChart.module.css'
import { v4 as uuidv4 } from 'uuid';


export const MainChart = ({ data }) => {
  const chartRef = useRef();

  console.log(data)

  const getNodes = (data) => {
    return Object.entries(data).flatMap(([label, {id, income = 0, percentage , ...nodes}]) => {
      const element = {
        id: uuidv4(),
        label: `${label} – ${income}`
      };
      
      if (Object.values(nodes).length > 0) {
          return [element, ...getNodes(nodes)]
      }

      return [element]
    })
  }

  console.log(getNodes(data))
  const RadialData = {
    nodes: [
      {
        id: "0",
        label: 'Income Achieved - 80%',
      },
      {
        id: "1",
        label: "Usage fees - 177110",
      },
      {
        id: "2",
        label: "25%",
      },
      {
        id: "3",
        label: "12%",
      },
    ],
    edges: [
      {
        source: "0",
        target: "1",
      },
      {
        source: "1",
        target: "2",
      },
      {
        source: "2",
        target: "3",
      },
    ],
  };

  const config = {
    data: RadialData,
    autoFit: false,
    layout: {
      unitRadius: 240,
      linkDistance: 140,
      preventOverlap: true,
    },
    nodeCfg: {
      size: 140,
      style: {
        fill: "rgb(77 21 163)",
        stroke: "rgb(187 44 250)",
      },
      labelCfg: {
        style: {
          fontSize: 14,
          fill: "#fff",
        },
      },
    },
    edgeCfg: {
      style: {
        lineWidth: 3,
      },
      endArrow: {
        d: 10,
        size: 2,
      },
    },
    behaviors: ["drag-canvas", "zoom-canvas", "drag-node"],
    onReady: (graph) => {
      chartRef.current = graph;
    },
  };

  return <RadialGraph {...config} className={css.root} />;
};




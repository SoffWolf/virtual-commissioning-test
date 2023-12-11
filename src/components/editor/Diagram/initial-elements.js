import { MarkerType, Position } from 'reactflow';

export const nodes = [
  {
    id: '4',
    type: 'custom',
    position: { x: 100, y: 200 },
    data: {
      label: 'Controller A',
      inputs: {
        'in-0-0': 'smoothstep',
        'in-0-1': 'smoothstep',
        'in-0-2': 'smoothstep',
        'in-0-3': 'smoothstep',
      },
      outputs: {
        'out-0-0': 'smoothstep',
        'out-0-1': 'smoothstep',
        'out-0-2': 'smoothstep',
        'out-0-3': 'smoothstep',
      },
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 400, y: 200 },
    data: {
      label: 'Controller B',
      inputs: {
        'in-1-0': 'smoothstep',
        'in-1-1': 'smoothstep',
        'in-1-2': 'smoothstep',
        'in-1-3': 'smoothstep',
      },
      outputs: {
        'out-1-0': 'smoothstep',
        'out-1-1': 'smoothstep',
        'out-1-2': 'smoothstep',
        'out-1-3': 'smoothstep',
      },
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 700, y: 200 },
    data: {
      label: 'Controller C',
      inputs: {
        'in-2-0': 'smoothstep',
        'in-2-1': 'smoothstep',
        'in-2-2': 'smoothstep',
        'in-2-3': 'smoothstep',
      },
      outputs: {
        'out-2-0': 'smoothstep',
        'out-2-1': 'smoothstep',
        'out-2-2': 'smoothstep',
        'out-2-3': 'smoothstep',
      },
    },
  },
];

export const edges = [
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    animated: true,
    type: 'smoothstep',
    sourceHandle: 'out-0-0',
    targetHandle: 'in-1-0',
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e4-6',
    source: '5',
    target: '6',
    animated: true,
    type: 'smoothstep',
    sourceHandle: 'out-1-0',
    targetHandle: 'in-2-0',
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
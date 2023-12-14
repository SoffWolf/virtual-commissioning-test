import { MarkerType, Position } from 'reactflow';

export const nodes = [
  {
    id: '4',
    type: 'custom',
    position: { x: 100, y: 200 },
    data: {
      label: 'Siemens Controller',
      inputs: {
        'in-0-0': 'INIT',
        'in-0-2': 'QI',
        'in-0-3': 'LABEL',
      },
      outputs: {
        'out-0-0': 'INITO',
        'out-0-1': 'IND',
        'out-0-2': 'QO',
      },
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 400, y: 200 },
    data: {
      label: 'Rockwell Controller',
      inputs: {
        'in-1-0': 'INIT',
        'in-1-1': 'UpdateEnabled',
        'in-1-2': 'PedReq',
        'in-1-3': 'enabled',
      },
      outputs: {
        'out-1-0': 'INITO',
        'out-1-1': 'UpdatePedReq',
        'out-1-2': 'PedPending',
        'out-1-3': 'timeOut',
      },
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 700, y: 200 },
    data: {
      label: 'Mitsubishi Controller',
      inputs: {
        'in-2-0': 'INIT',
        'in-2-1': 'UpdateEnabled',
        'in-2-2': 'PedReq',
        'in-2-3': 'enabled',
      },
      outputs: {
        'out-2-0': 'INITO',
        'out-2-1': 'UpdatePedReq',
        'out-2-2': 'PedRequestPending',
        'out-2-3': 'timeOut',
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
    id: 'e5-6',
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
  {
    id: 'e5-6-2',
    source: '5',
    target: '6',
    animated: true,
    type: 'smoothstep',
    sourceHandle: 'out-1-3',
    targetHandle: 'in-2-2',
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
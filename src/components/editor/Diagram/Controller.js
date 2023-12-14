// import { Handle, Position } from 'reactflow';

// const Controller = ({ data, isConnectable }) => {
//   return (
//     <div className="bg-orange-500 text-white p-4 rounded">
//       <div className="flex justify-center mb-4">{data.label}</div>
//       <div className="flex justify-between">
//         <div className="flex flex-col items-center">
//           {[...Array(3)].map((_, index) => (
//             <Handle
//               key={`input-${index}`}
//               type="target"
//               position={Position.Left}
//               isConnectable={isConnectable}
//             />
//           ))}
//         </div>
//         <div className="flex flex-col items-center">
//           {[...Array(3)].map((_, index) => (
//             <Handle
//               key={`output-${index}`}
//               type="source"
//               position={Position.Right}
//               isConnectable={isConnectable}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Controller;

import React, { memo } from "react";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";

function Port({ value, handleId, nodeId, position, type, index, portName }) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();
  return (
      <Handle
        type={type}
        position={position}
        id={handleId}
        style={{ top: 50 + index * 30, zIndex: "initial" }}
      >
        {type === "target" ? (
          <p className="input">{portName}</p>
        ) : (
          <p className="output">{portName}</p>
        )}
      </Handle>
  );
}

function Controller({ id, data }) {
  return (
    <>
      <div className="custom-node__header">
        <strong>{data.label}</strong>
      </div>
      <div className="custom-node__body">
        {Object.keys(data.inputs).map((handleId, index) => (
          <Port
            key={handleId}
            nodeId={id}
            value={data.inputs[handleId]}
            handleId={handleId}
            position={Position.Left}
            type={"target"}
            index={index}
            portName={data.inputs[handleId]}
          />
        ))}
        {Object.keys(data.outputs).map((handleId, index) => (
          <Port
            key={handleId}
            nodeId={id}
            value={data.outputs[handleId]}
            handleId={handleId}
            position={Position.Right}
            type={"source"}
            index={index}
            portName={data.outputs[handleId]}
          />
        ))}
      </div>
    </>
  );
}

export default memo(Controller);

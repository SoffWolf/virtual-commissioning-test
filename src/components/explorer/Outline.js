import React from "react";
import outlineTreeData from "./outlineTreeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder, faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

const PLCOutline = ({ outlineTreeData }) => {
  const renderNode = (node, nodeName) => {
    const { type, children } = node;

    const handleToggle = () => {
      // Your toggle logic if needed
    };

    const icon = <FontAwesomeIcon icon={faSignInAlt} className="text-orange-400 text-sm mr-2" />

    return (
      <div key={nodeName}>
        <div
          className="flex items-center cursor-pointer mb-1"
          onClick={handleToggle}
        >
          {type === "folder" && (
            <span className="mr-1">
              {/* Your folder icon */}
              {/* Replace with your folder icon */}
              {icon}
            </span>
          )}
          <span>{nodeName}</span>
        </div>
        {children && type === "folder" && (
          <div className="ml-8">
            {Object.keys(children).map((childName) => (
              <div key={childName}>
                {renderNode(children[childName], childName)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full text-white pl-4 overflow-y-auto">
      <div>
        {Object.keys(outlineTreeData).map((nodeName) => (
          <div key={nodeName}>
            {renderNode(outlineTreeData[nodeName], nodeName)}
          </div>
        ))}
      </div>
    </div>
  );
};

const Outline = () => {
  // Outline content or functionality goes here
  return (
    <div className="text-white p-4">
      <h1 className="text-lg font-bold mb-4">Outline</h1>
      <PLCOutline outlineTreeData={outlineTreeData} />
    </div>
  );
};

export default Outline;

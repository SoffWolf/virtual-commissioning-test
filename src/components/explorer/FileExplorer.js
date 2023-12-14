import React from "react";
import fileTreeData from "./fileTreeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faCogs,
  faCog,
  faMicrochip,
  faBook,
  faClipboardList,
  faPencilRuler,
  faThermometerHalf
} from "@fortawesome/free-solid-svg-icons";
import Outline from "./Outline";

const FileIcon = ({ icon }) => {
  if (icon === "project") {
    return (
      <span className="mr-3">
        <FontAwesomeIcon icon={faClipboardList} className="text-orange-500" />
      </span>
    );
  }
  if (icon === "system") {
    return (
      <span className="mr-3">
        <FontAwesomeIcon icon={faCogs} className="text-gray-300" />
      </span>
    );
  }
  if (icon === "library") {
    return (
      <span className="mr-3">
        <FontAwesomeIcon icon={faBook} className="text-orange-300" />
      </span>
    );
  }
  if (icon === "setting") {
    return (
      <span className="mr-3 ml-4">
        <FontAwesomeIcon icon={faCog} className="text-gray-500" />
      </span>
    );
  }
  if (icon === "design") {
    return (
      <span className="mr-3 ml-4">
        <FontAwesomeIcon icon={faPencilRuler} className="text-orange-500" />
      </span>
    );
  }
  if (icon === "controller") {
    return (
      <span className="mr-3 ml-4">
        <FontAwesomeIcon icon={faMicrochip} className="text-blue-500" />
      </span>
    );
  }
  if (icon === "sensor") {
    return (
      <span className="mr-3 ml-4">
        <FontAwesomeIcon icon={faThermometerHalf} className="text-blue-500" />
      </span>
    );
  }
};

const FileNode = ({ name, type, icon, children, topLevel = false }) => {
  const [isOpen, setIsOpen] = React.useState(true); // Keeps the top level always open

  const handleToggle = () => {
    if (!topLevel) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center cursor-pointer mb-1 ${
          topLevel ? "font-bold text-lg" : ""
        }`}
        onClick={handleToggle}
      >
        {!topLevel && type === "folder" && (
          <span className="mr-1">
            <FontAwesomeIcon
              icon={isOpen ? faAngleDown : faAngleRight}
              className="text-gray-400 mr-1"
            />
          </span>
        )}
        {!topLevel && <FileIcon icon={icon} />}
        <span>{name}</span>
      </div>
      {isOpen && type === "folder" && (
        <div className="ml-4">
          {Object.keys(children).map((childName) => (
            <FileNode key={childName} {...children[childName]} />
          ))}
        </div>
      )}
    </div>
  );
};

const FileExplorer = () => {
  return (
    <div className="h-full flex flex-col bg-black text-white">
      {/* File Tree */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h1 className="text-lg font-bold mb-4">Explorer</h1>
        <div>
          {Object.keys(fileTreeData).map((nodeName) => (
            <FileNode
              key={nodeName}
              {...fileTreeData[nodeName]}
              topLevel={true}
            />
          ))}
        </div>
      </div>

      {/* Outline Section */}
      <div className="h-1/3 border-t border-gray-800 overflow-y-auto no-scrollbar">
        <Outline />
      </div>
    </div>
  );
};

export default FileExplorer;

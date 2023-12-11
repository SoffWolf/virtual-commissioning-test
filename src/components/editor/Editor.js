import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faCog, faMicrochip, faTimes } from '@fortawesome/free-solid-svg-icons';
import Content from './Content';

const Editor = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setSelectedTab(tabNumber);
  };

  return (
    <div className="h-full flex flex-col bg-black text-white">
      {/* Tab section */}
      <div className="flex">
        <div
          className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-800 ${
            selectedTab === 1 ? 'border-t-2 border-orange-500 bg-gray-900' : ''
          }`}
          onClick={() => handleTabChange(1)}
        >
          <FontAwesomeIcon icon={faFileCode} className="mr-2" />
          script.txt 
          {selectedTab === 1 ? <FontAwesomeIcon icon={faTimes} className="ml-4 text-sm" /> : <></>}
        </div>
        <div
          className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-800 ${
            selectedTab === 2 ? 'border-t-2 border-orange-500 bg-gray-900' : ''
          }`}
          onClick={() => handleTabChange(2)}
        >
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          ChainLogic
          {selectedTab === 2 ? <FontAwesomeIcon icon={faTimes} className="ml-4 text-sm" /> : <></>}
        </div>
        <div
          className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-800 ${
            selectedTab === 3 ? 'border-t-2 border-orange-500 bg-gray-900' : ''
          }`}
          onClick={() => handleTabChange(3)}
        >
          <FontAwesomeIcon icon={faCog} className="mr-2" />
          ChainVisual
          {selectedTab === 3 ? <FontAwesomeIcon icon={faTimes} className="ml-4 text-sm" /> : <></>}
        </div>
      </div>

      {/* Text editor area */}
      <div className="flex-1 p-0">
        <Content tab={selectedTab} />
      </div>
    </div>
  );
};

export default Editor;

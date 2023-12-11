import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBug,
  faPuzzlePiece,
  faBox,
  faCube,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  const [activeSection, setActiveSection] = React.useState('explorer');

  const handleClick = (section) => {
    setActiveSection(section);
    // Handle click action for each section if needed
    // For now, just updating activeSection state
  };

  return (
    <div className="w-16 bg-gray-900">
      <div className="flex flex-col items-center py-4">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer mb-4 ${
            activeSection === 'explorer' ? 'bg-blue-600' : ''
          }`}
          onClick={() => handleClick('explorer')}
        >
          <FontAwesomeIcon icon={faBox} className="text-white text-lg" />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer mb-4"
          onClick={() => handleClick('search')}
        >
          <FontAwesomeIcon icon={faSearch} className="text-white text-lg" />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer mb-4"
          onClick={() => handleClick('debugger')}
        >
          <FontAwesomeIcon icon={faBug} className="text-white text-lg" />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer mb-4"
          onClick={() => handleClick('extensions')}
        >
          <FontAwesomeIcon icon={faPuzzlePiece} className="text-white text-lg" />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer mb-4"
          onClick={() => handleClick('docker')}
        >
          <FontAwesomeIcon icon={faCube} className="text-white text-lg" />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-md cursor-pointer mb-4"
          onClick={() => handleClick('versionControl')}
        >
          <FontAwesomeIcon icon={faCodeBranch} className="text-white text-lg" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

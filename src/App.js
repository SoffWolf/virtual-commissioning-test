import React from 'react';
import './App.css';
import FileExplorer from './components/explorer/FileExplorer';
import SideBar from './components/explorer/SideBar'
import Editor from './components/editor/Editor';
import Terminal from './components/terminal/Terminal';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-800">
      {/* Top Section */}
      <div className="flex flex-1">
        <SideBar />
        {/* File Explorer */}
        <div className="w-1/5 border-r border-gray-700">
          <FileExplorer />
        </div>

        {/* Editor and Terminal */}
        <div className="flex flex-col w-4/5">
          {/* Editor */}
          <div className="flex-1 bg-gray-900 text-white">
            <Editor />
          </div>

          {/* Terminal */}
          <div className="h-1/4 bg-black text-white border-t border-gray-700 px-4">
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
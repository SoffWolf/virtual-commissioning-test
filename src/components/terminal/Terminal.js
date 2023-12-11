import React, { useState, useEffect } from "react";

const Terminal = () => {
  const [activeTab, setActiveTab] = useState("Console");
  const [showCursor, setShowCursor] = useState(true);
  const [consoleOutput, setConsoleOutput] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    if (activeTab === "Console") {
      const outputText = `Building project...\n[1/5] Compiling main program...\n[2/5] Optimizing memory usage...\n[3/5] Generating configuration files...\n[4/5] Verifying dependencies...\n[5/5] Build successful!\n`;
      setConsoleOutput(outputText);
    }
  }, [activeTab]);

  // Function to toggle cursor visibility every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col bg-black text-white">
      {/* Tab section */}
      <div className="flex">
        <div
          className={`flex items-center px-4 py-2 cursor-pointer ${
            activeTab === "Terminal" ? "border-b-2 border-orange-500" : ""
          }`}
          onClick={() => handleTabClick("Terminal")}
        >
          Terminal
        </div>
        <div
          className={`flex items-center px-4 py-2 cursor-pointer ${
            activeTab === "Console" ? "border-b-2 border-orange-500" : ""
          }`}
          onClick={() => handleTabClick("Console")}
        >
          Console
        </div>
        <div
          className={`flex items-center px-4 py-2 cursor-pointer ${
            activeTab === "Properties" ? "border-b-2 border-orange-500" : ""
          }`}
          onClick={() => handleTabClick("Properties")}
        >
          Properties
        </div>
      </div>

      {/* Terminal content */}
      <div className="flex-1 p-4">
        {activeTab === "Terminal" && (
          <div className="bg-black h-full">
            <div className="flex items-center text-green-400">
              <span className="mr-2">
                hacker@thinkpad &gt;&gt; .../virtual-commissioning &gt;&gt;
                master &gt;&gt; v18.17.1 &gt;&gt; 19:53:
              </span>
              <span className={`${showCursor ? "opacity-0" : "opacity-100"}`}>
                |
              </span>
              <input
                type="text"
                className="bg-transparent focus:outline-none text-white flex-1"
              />
            </div>
          </div>
        )}
        {activeTab === "Console" && (
          <div className="bg-black h-full">
            <div className="flex flex-col">
              {consoleOutput.split("\n").map((line, index) => (
                <p key={index} className="text-green-300">
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
        {activeTab === "Properties" && <p>Properties Content Goes Here</p>}
      </div>
    </div>
  );
};

export default Terminal;

import Diagram from "./Diagram";
import Robot from "./Robot";

const Content = ({ tab }) => {
  const welcomeText =
    "\n\
      Welcome to the demonstration of the Virtual Commissioning IDE! \n\
      \n\
      This demonstration serves as a visual proof of concept. \n\
      Please note that most interactive features are not functional in this demo version. In this IDE, you can: \n\
        - Edit text documents, such as the one you are currently viewing. \n\
        - Modify Programmable Logic Controller (PLC) logic, which is showcased in the second tab. \n\
        - Explore a virtual factory simulation, illustrated in the third tab. \n\
          Hold \"b\" button and click to add blocks, \"Shift\" to delete. \n\
      \n\
      I encourage you to explore the other two tabs for a comprehensive understanding of the IDE's capabilities. \n\
    ";
  if (tab === 1) {
    const lineNumbers = Array.from({ length: 11 }, (_, i) => i + 1).join("\n");

    return (
      <div className="flex h-full">
        <div className="bg-gray-900 text-gray-400 px-4 py-4">
          <pre className="h-full select-none">{lineNumbers}</pre>
        </div>
        <textarea
          className="w-full bg-gray-900 text-white p-4 rounded-none !outline-none"
          defaultValue={welcomeText}
        ></textarea>
      </div>
    );
  }
  if (tab === 2) return <Diagram />;
  if (tab === 3) return <Robot />;
  return;
};

export default Content;

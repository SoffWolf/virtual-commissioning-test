import Diagram from "./Diagram";
import Robot from "./Robot";

const Content = ({ tab }) => {
  const welcomeText =
    "\n\
     Welcome to the demo of the virtual commissioning IDE!\n\
     \n\
     This is just a visual proof of concept so most interactions won't work.\n\
     In this IDE, you can:\n\
      - Edit text files, like this one.\n\
      - Edit PLC logic, example in the second tab.\n\
      - Visualize a virtual factory, example in the third tab.\n\
     Please check the other 2 tabs!";
  if (tab === 1) {
    const lineNumbers = Array.from({ length: 9 }, (_, i) => i + 1).join(
      "\n"
    );

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

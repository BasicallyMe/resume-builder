import Form from "./components/Form";
import Resume from "./components/Resume";
import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

function App() {
  const [data, setData] = useState({});
  const resumeRef = useRef();

  const handleExport = () => {
    var opt = {
      margin: 5,
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(resumeRef.current).save();
  };

  return (
    <div className="grid grid-cols-3">
      <Form setData={setData} />
      <Resume data={data} ref={resumeRef} />
      <div className="fixed bottom-5 px-2">
        <button
          onClick={handleExport}
          className="text-sm bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Export
        </button>
      </div>
    </div>
  );
}

export default App;

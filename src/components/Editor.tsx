import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface EditorProps {
  jsonSchema: string;
  setJsonSchema: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
}

const Editor: React.FC<EditorProps> = ({ jsonSchema, setJsonSchema, darkMode }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonSchema(e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonSchema);
    alert('Copied to clipboard!');
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">JSON Editor</h2>
      <textarea
        value={jsonSchema}
        onChange={handleChange}
        className={`w-full h-60 border p-2 font-mono ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      />
      <SyntaxHighlighter language="json" style={dracula} className="mt-4">
        {jsonSchema}
      </SyntaxHighlighter>
      <button
        onClick={copyToClipboard}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Copy Form JSON
      </button>
    </div>
  );
};

export default Editor;

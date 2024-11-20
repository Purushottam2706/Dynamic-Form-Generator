import React, { useState } from 'react';
import Editor from './components/Editor';
import FormPreview from './components/FormPreview';

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<string>(`{
    "formTitle": "Sample Form",
    "formDescription": "This is a sample form",
    "fields": []
  }`);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <div className="flex justify-between p-4">
        <h1 className="text-2xl">Dynamic Form Generator</h1>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Toggle Dark Mode
        </button>
      </div>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 p-4">
          <Editor jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} darkMode={darkMode} />
        </div>
        <div className="w-full md:w-1/2 p-4 bg-gray-100 dark:bg-gray-800">
          <FormPreview jsonSchema={jsonSchema} />
        </div>
      </div>
    </div>
  );
};

export default App;

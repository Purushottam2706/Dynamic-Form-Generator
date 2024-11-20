import React from 'react';
import DynamicForm from './DynamicForm';

interface FormPreviewProps {
  jsonSchema: string;
}

const FormPreview: React.FC<FormPreviewProps> = ({ jsonSchema }) => {
  let schema;
  try {
    schema = JSON.parse(jsonSchema);
  } catch (error) {
    return <p className="text-red-500">Invalid JSON</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">{schema.formTitle}</h2>
      <p className="mb-4">{schema.formDescription}</p>
      <DynamicForm schema={schema} />
    </div>
  );
};

export default FormPreview;

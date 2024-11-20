import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface DynamicFormProps {
  schema: {
    fields: Array<{
      id: string;
      type: string;
      label: string;
      required: boolean;
      placeholder?: string;
      options?: { value: string; label: string }[];
    }>;
  };
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    alert('Form submitted!');
    downloadJSON(data);
  };

  const downloadJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form-submission.json';
    link.click();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {schema.fields.map((field) => (
        <div key={field.id}>
          <label>{field.label}</label>
          {field.type === 'text' || field.type === 'email' ? (
            <input
              type={field.type}
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="w-full border p-2"
            />
          ) : field.type === 'select' ? (
            <select {...register(field.id, { required: field.required })} className="w-full border p-2">
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : null}
          {errors[field.id] && <p className="text-red-500">{field.label} is required</p>}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;

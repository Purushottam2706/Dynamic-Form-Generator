interface FieldValidation {
    pattern?: string;
    message?: string;
  }
  
  interface FieldOption {
    value: string;
    label: string;
  }
  
  interface FormField {
    id: string;
    type: string;
    label: string;
    required: boolean;
    placeholder?: string;
    validation?: FieldValidation;
    options?: FieldOption[];
  }
  
  interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: FormField[];
  }
  
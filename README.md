A dynamic form generator that takes a JSON schema and generates a styled, functional form in real-time. The application allows users to input a JSON schema, which is then used to generate a form. The form updates dynamically as the JSON schema is edited, and the application includes error handling, form validation, and dark mode support.
Installation
To run this project locally, follow these steps:

1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/dynamic-form-generator.git
cd dynamic-form-generator
2. Install Dependencies
bash
Copy code
npm install
3. Start the Development Server
bash
Copy code
npm start
The app will be running on http://localhost:3000.
How to Use
On the left side, you will find a JSON editor.
Paste a valid JSON schema in the editor (see example below).
As you edit the JSON, the form preview on the right side will update in real-time.
The form includes validation, and once you fill out the fields and submit, the data will be logged to the console.
Example JSON Schema
Here is an example of a valid JSON schema you can use to test the form:

json
Copy code
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,
      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    }
  ]
}
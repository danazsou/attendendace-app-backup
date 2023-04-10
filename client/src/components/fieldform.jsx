import React, { useState } from "react";

function FieldForm() {
  const [fieldCount, setFieldCount] = useState(1);
  const [fields, setFields] = useState([{ id: 1, name: "field-1" }]);

  function addField() {
    const newFieldCount = fieldCount + 1;
    const newFields = [...fields, { id: newFieldCount, name: `field-${newFieldCount}` }];
    setFieldCount(newFieldCount);
    setFields(newFields);
  }

  return (
    <div>
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.name}>Student Name {field.id}:</label>
          <input type="text" id={field.name} name={field.name} class="field"/>
        </div>
      ))}
      
      <button type="button" onClick={addField} class="addfield">
        Add Field
      </button>
    </div>
  );
}

export default FieldForm;

/*import React, { useState } from "react";//


function FieldForm() {
  const [fieldCount, setFieldCount] = useState(1);
  const [fields, setFields] = useState([{ id: 1, name: "field-1" }]);

  function addField() {
    const newFieldCount = fieldCount + 1;
    const newFields = [...fields, { id: newFieldCount, name: `field-${newFieldCount}` }];
    setFieldCount(newFieldCount);
    setFields(newFields);
    
    
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.name}>Field {field.id}:</label>
          <input type="text" id={field.name} name={field.name} />
        </div>
      ))}
      <button type="button" onClick={addField}>Add Field</button>
    
    
    
    
    */

      import FieldForm from "../components/fieldform";





      export const Create = () => {
          return (
      
      <div className="form-group-attendance">
      <form className="form" method="POST" action="/portal">
                    <FieldForm class="form"/>
                    <button class="save"type="submit">Save</button>
                    </form>
                    </div>
                
      
      
      
      
          );
        };
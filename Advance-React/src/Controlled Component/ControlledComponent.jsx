import React, { useState } from 'react';


function ControlledComponent() {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Log");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor='name'>Name:</label>
            <input 
              id="name"
              type="text" 
              name="name"
              placeholder='Name'  
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default ControlledComponent;

import React, { useState } from 'react';

const add = () => {
  const AddTodo = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  };

  return (
    <div className="container mt-5">
      <h3 className="font-weight-light">Add Todo</h3>
      <form action="">
        <div className="mt-5 form-row">
          <div className="form-col">
            <input
              value="{name}"
              // onChange={(e) => setName(e.target)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="form-col pt-5">
            <input
              value="{description}"
              type="text"
              className="form-control"
              placeholder="description"
            />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default add;

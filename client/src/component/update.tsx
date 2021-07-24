import React from 'react';

const update = () => {
  return (
    <div className="container pt-5">
      <h3>update</h3>
      <form action="">
        <div className="form-row">
          <div className="col">
            <label htmlFor="name">name</label>
            <input value="" id="name" type="text" className="form-control" />
          </div>
          <div className="col">
            <label htmlFor="description">description</label>
            <input
              value=""
              id="description"
              type="text"
              className="form-control"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default update;

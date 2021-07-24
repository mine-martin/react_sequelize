import React from 'react';

const home = () => {
  return (
    <div className="container">
      <div>
        <h3 className="font-weight-light text-center mt-3">
          React and Sequelize Tutorial
        </h3>
      </div>
      <div className="block">
        <ul>
          <li>
            <a href="/add">Add Tutorial</a>
          </li>
          <li>
            <a href="/update">Update Tutorial</a>
          </li>
        </ul>
      </div>
      <div>
        <table className="table rounded-lg table-dark font-weight-light">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>description</td>
              <td>
                <button className="btn btn-">update</button>
              </td>
              <td>
                <button className="btn btn-danger">delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default home;

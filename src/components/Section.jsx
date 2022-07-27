import React from "react";

const section = (props) => {
  return (
    <div className="section">
      Section
      {props.users.map((e, index) => {
        console.log(e);
        return (
          <table className="table" key={index}>
            <tbody>
              <tr>
                <th scope="row">{index}</th>
                <td colSpan="2">{e.name}</td>
                <td>{e.lastName}</td>
                <td>{e.age}</td>
                <td>{e.id}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default section;

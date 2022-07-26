import React from "react";

const List = ({ items, handleRemove }) => {
  return (
    <>
      {items.map((item) => {
        let { id, name, age } = item;
        return (
          <div key={id}>
            <span>{name}</span>
            <span>{age}</span>
            <span className="action" onClick={() => handleRemove(id)}>
              &times;
            </span>
          </div>
        );
      })}
    </>
  );
};

export default List;

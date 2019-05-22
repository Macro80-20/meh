import React from "react";

const Filter = props => {
  return (
    <div>
      <select onChange={e => props.handleDropdown(e)}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
        <option value="low">Health Low to High</option>
        <option value="high">Health High to Low</option>
        <option value="weak">Damage Low to High</option>
        <option value="strong">Damage High to Low</option>
      </select>
    </div>
  );
};

export default Filter;

import React from 'react';

const Searchbox = ({inputChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="search robots"
        onChange={inputChange}
        />
    </div>
  );
}

export default Searchbox;

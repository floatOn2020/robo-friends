import React from 'react';

const Searchbox = ({searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="search robots"
        onChange={searchChange}
        style={{borderRadius: '5px'}}
        />
    </div>
  );
}

export default Searchbox;

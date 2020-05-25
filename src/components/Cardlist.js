import React from 'react';
import { robots } from '../robots.js'
import '.'

const Cardlist = () => {
  return (
     <Card name={robots[0].name} email={robots[0].email} />
    );
}

export default Cardlist;

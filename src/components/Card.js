import React from 'react';

const Card = ({name, email, id}) => {
  return (
    <div className="tc bg-light-grey dib br3 pa3 ma2 grow bw2 shadow-5"
         style={{background: 'lightgrey'}}>
      <img src={`https://robohash.org/${id}?200x200`} alt="person "/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
    );
}
export default Card;

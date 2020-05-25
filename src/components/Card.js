import React from 'react';

const Card = ({email="email@email.com", name="frieda"}) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${name}?200x200`} alt="person "/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
    );
}

export default Card;

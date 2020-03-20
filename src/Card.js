import React from 'react';

const Card = ({ name, email, website, id }) => {
  
  return (
    <div className='tc bg-light-green dib  br3 pa3 ma2 grow bw2 shadow-s'>
      <img alt='robots' src={`https://robohash.org/${ id }?200x200`}/>
      <div>
        <h3>{ name }</h3>
        <p>{ email }</p> 
        <strong>{ website }</strong>
      </div>
    </div>
  );
}

export default Card;
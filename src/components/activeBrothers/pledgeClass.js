import React from 'react'

export const PledgeClass = (props) => {
  return (
    <div>
      <h2 id="founders">{ props.name }</h2>
      <h3>{ props.inducted }</h3>
      <p>
        { props.members }
        <a href={props.photo}>[photo]</a>
      </p>
    </div>
  );
}

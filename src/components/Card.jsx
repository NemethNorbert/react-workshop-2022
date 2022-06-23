import React from 'react';

export default function Card (props) {
    return (
      <div style={{ margin: '1em' }}>
        <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
        <div>
          <div style={{ fontWeight: 'bold' }}>{props.name}</div>
          <div>{props.blog}</div>
        </div>
      </div>
    )
  };
import React from 'react';

export default function Spinner() {
  return (
    <div className='loading'>
      <span role='img' aria-label='Emoji esperando'>
        🙄
      </span>{' '}
      esto se esta demorando
    </div>
  );
}

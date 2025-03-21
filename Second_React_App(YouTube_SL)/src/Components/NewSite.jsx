import React from 'react';
import './newsite.css';

export default function NewSite(props) {
    const language = "My favourite language Languages: ";
  return (
    <div>
      <div className='newsite'>
        <span className='text'>{language}{props.project}</span>
      </div>
    </div>
  );
}

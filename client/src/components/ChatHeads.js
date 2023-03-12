import React,{Component} from 'react';
import '../css/chatheads.css';

function ChatHeads({name, image}) {
  return (
    <div className='chatheads-parent'>
        <div className='chatheads-img-container'>
            <img src={image} alt={name}/>
            <span></span>
        </div>
        <div className='chatheads-name'>{name}</div>
    </div>
  );
}

export default ChatHeads;
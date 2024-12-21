import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import FacebookEmojiCounter from './FacebookEmoji';
import ToggleMode from './ToggleModeComponent';

ReactDOM.render(

  <React.Fragment>
  <FacebookEmojiCounter type= "Like"/>
  < FacebookEmojiCounter type= "Love"/>
  <ToggleMode/>
  </React.Fragment>,
  document.getElementById('root'));

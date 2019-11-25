import React from 'react';
import ReactRotatingText from 'react-rotating-text';

export default class Title extends React.Component {
  render() {
    return (
      <div class='title'>
        <img draggable='false' id='avatar' src='https://is-going-to-rickroll.me/api/image/user/145557815287611393/' onerror="this.src='assets/img/icon.gif'" alt='Avatar'></img>
        <h1>David Ralph</h1>
        <ReactRotatingText items={['Web Developer', 'Backend Developer', 'Fullstack Developer', 'Otaku']} class='rotate' />
      </div>
    )
  }
}
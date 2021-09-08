import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/index.css';
import Profile from './Components/Profile';
import Purchase from './Components/Purchase';
import Wallet from './Components/Wallet';
import Pic from './images/prof.png';

const App = () => {
  return (
    <div className="container">
      <Profile firstName="Noura" lastName="Tajdini" age="21" job="student" email="tajdini@gmail.com" phoneNumber="+1234567890" 
      hobbies="Coding, Playing Guitar, Watching videos" education="Computer Engineering" imageSrc="./images/prof.png">
        <img src={Pic} className="profilepic"/>
      </Profile>
      <Wallet wal="3$"></Wallet>
      <Purchase pur="4 purchases"></Purchase>
    </div>
  )
}

ReactDOM.render(<App /> , document.getElementById('root'))
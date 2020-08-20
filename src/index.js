import React from 'react'
import ReactDom from 'react-dom'
import Exercises from './pages/exercises' 
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/app'

/*
const element = document.createElement('h1');
element.innerText = "Hello react";
const container = document.getElementById('root');

container.appendChild(element);
*/

/*
const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatar: '../public/logo192.png'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const name = "Raul"
const element = (
                 <div> 
                  {getGreeting(user)}
                 </div>
                )
const container = document.getElementById('root');
ReactDom.render(element, container);


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDom.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
*/
const container =  document.getElementById('root');
ReactDom.render(<App/>, container)
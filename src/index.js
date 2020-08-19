/*
const element = document.createElement('h1');
element.innerText = "Hello react";
const container = document.getElementById('root');

container.appendChild(element);
*/

import React from 'react'
import ReactDom from 'react-dom'


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
                  <img src={user.avatar}></img>
                 </div>
                )
const container = document.getElementById('root');
ReactDom.render(element, container);


import React from 'react'
import './styles/addButton.css'
import buttomImg from '../images/add.png'
import { Route, Link  } from 'react-router-dom'

const AddButton = () => (
    <Link to="exercise/new">
        <img src={buttomImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)

export default AddButton
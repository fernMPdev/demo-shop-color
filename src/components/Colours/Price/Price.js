import React from 'react';

import classes from './Price.module.css'

const price = (props) => (
    <div className = {classes.Price}>
        <span>{props.price}€ </span>
    </div>
)

export default price;
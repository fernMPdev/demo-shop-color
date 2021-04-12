import React from 'react';

import classes from './Spinner.module.css';

const spinner = (props) => (
    <div className ={classes.Spinner}> 
    <div className={classes.Loader}></div>
    <div className={classes.Message}><p>{props.message}</p></div>
    </div>
);

export default spinner;
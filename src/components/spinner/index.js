import React from 'react';
import classes from "./styles.module.scss";

const Spinner = () => {
  return (
    <div className={classes.loader}> Loading ...
      <div className={classes.loader_inner}> 
      <div className={classes.loader_line_wrap_one}>
        <div className={classes.loader_line}></div>
      </div>
      <div className={classes.loader_line_wrap_two}>
        <div className={classes.loader_line}></div>
      </div>
      <div className={classes.loader_line_wrap_three}>
        <div className={classes.loader_line}></div>
      </div>
      <div className={classes.loader_line_wrap_four}>
        <div className={classes.loader_line}></div>
      </div>
      <div className={classes.loader_line_wrap_five}>
        <div className={classes.loader_line}> </div>
      </div>
      </div>
  </div>
  )
}
export default Spinner
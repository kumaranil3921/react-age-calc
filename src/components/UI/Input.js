import classes from './Input.module.css'
function Input(props) {
  return <input type={props.type} className={classes.input}></input>;
}

export default Input;

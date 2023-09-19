import classes from './Button.module.css'

function Button(props){
  return (
    <button type={props.type} className={classes.button}>{props.label}</button>
  )
}

export default Button
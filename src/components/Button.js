import ProtoTypes from "prop-types";

const Button = ({color, text, onClick}) => {
  return (
    <button onClick={onClick} 
    style={{ backgroundColor: color }} className="btn"
    >
        {text}
      </button>
    )
}

Button.defaultProps = {
  color: "steelblue",
}

Button.protoTypes = {
  text: ProtoTypes.string,
  color: ProtoTypes.string,
  onClick: ProtoTypes.func
}

export default Button
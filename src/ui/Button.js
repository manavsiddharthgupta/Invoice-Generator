import "./Button.css";
const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};
export default Button;

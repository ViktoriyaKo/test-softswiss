import "./Button.scss";

const Button = (props) => {
  const { text, variant = "filled", handleClick } = props;

  return (
    <button className={`button button--${variant}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

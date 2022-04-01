import "./customButton.css";

const CustomButton = ({ children, className, ...otherProps }) => {
  return (
    <button className={`default-button ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;

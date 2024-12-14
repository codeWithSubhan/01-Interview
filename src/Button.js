import plusIcon from "./images/plus.svg";
function Button({ children }) {
  return (
    <button type="button" className="flex">
      <img src={plusIcon} alt="Plus Icon" /> {children}
    </button>
  );
}

export default Button;

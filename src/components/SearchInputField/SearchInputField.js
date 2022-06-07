import './SearchInputField.scss';

const SearchInputField = ({ value, onSearchClick, onKeyboardClick, onChange }) => {
  const searchClickHandler = () => {
    onSearchClick && onSearchClick();
  };
  const keyboardClickHanlder = () => {
    onKeyboardClick && onKeyboardClick();
  };
  const changeHandler = ({ target: { value } }) => {
    onChange && onChange(value);
  };

  return (
    <div className="input-box">
      <input onChange={changeHandler} value={value} type="text" />
      <span onClick={keyboardClickHanlder} className="material-icons md-dark">
        keyboard
      </span>
      <span onClick={searchClickHandler} className="material-icons md-dark">
        search
      </span>
    </div>
  );
};

export default SearchInputField;

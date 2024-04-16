import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <label className={css.searchtitle}> Find contacts by name:</label>
      <input
        className={css.searchinput}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    </>
  );
};

export default SearchBox;

import './Bar.scss';
import classNames from 'classnames';

function Bar({ sort, setSort }) {
  const { value, isAscending } = sort;

  const handleChange = ({ target: { value } }) => {
    setSort((prevSort) => ({ ...prevSort, value }));
  };

  const handleClick = () => {
    setSort((prevSort) => ({
      ...prevSort,
      isAscending: !isAscending,
    }));
  };

  const buttonClass = classNames('bar__button', {
    'bar__button--ascending': isAscending,
  });

  return (
    <div className="bar">
      <label className="bar__label" htmlFor="select">
        Sort by:
      </label>
      <select
        className="bar__select"
        id="select"
        value={value}
        onChange={handleChange}
      >
        <option value="date">Date</option>
        <option value="name">Name</option>
      </select>
      <button className={buttonClass} onClick={handleClick}></button>
    </div>
  );
}

export default Bar;

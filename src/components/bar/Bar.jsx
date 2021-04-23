import './Bar.scss';

function Bar() {
  return (
    <div className="bar">
      <label className="bar__label" htmlFor="select">
        Sort by:
      </label>
      <select className="bar__select" id="select">
        <option value="">Name</option>
        <option value="">Date</option>
      </select>
      <button className="bar__button bar__button--descending"></button>
      <button className="bar__button bar__button--ascending"></button>
    </div>
  );
}

export default Bar;

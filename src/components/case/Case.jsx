import './Case.scss';

function Case(props) {
  const {
    name,
    imageUrl,
    setList,
    type,
    collection,
    finishes,
    setLoadedImages,
  } = props;

  const image = `https://community.akamai.steamstatic.com/economy/image/${imageUrl}/250fx200f`;
  const alt = `${name} image`;

  const handleClick = () => {
    setList({
      type,
      collection,
      finishes,
    });
  };

  const handleLoad = () => {
    setLoadedImages((prevAmount) => prevAmount + 1);
  };

  return (
    <li className="list__item case" onClick={handleClick}>
      <img src={image} alt={alt} className="case__image" onLoad={handleLoad} />
      <span className="case__name">{name}</span>
    </li>
  );
}

export default Case;

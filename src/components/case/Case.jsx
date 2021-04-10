import './Case.scss';

function Case(props) {
  const {
    name,
    imageUrl,
    setList,
    type,
    collection,
    finishes,
    setIsLoading,
    loadedImages,
    imagesAmount,
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
    loadedImages.current++;

    if (loadedImages.current === imagesAmount) {
      setIsLoading(false);
    }
  };

  return (
    <li className="list__item case" onClick={handleClick}>
      <img
        src={image}
        alt={alt}
        className="case__image"
        onLoad={handleLoad}
        onError={handleLoad}
      />
      <span className="case__name">{name}</span>
    </li>
  );
}

export default Case;

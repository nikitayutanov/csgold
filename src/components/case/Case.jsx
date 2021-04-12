import './Case.scss';
import { Link } from 'react-router-dom';

function Case(props) {
  const {
    name,
    imageUrl,
    type,
    collection,
    setIsLoading,
    loadedImages,
    imagesAmount,
  } = props;

  const image = `https://community.akamai.steamstatic.com/economy/image/${imageUrl}/250fx200f`;
  const alt = `${name} image`;
  const formattedCollection = collection.toLowerCase().split(' ').join('-');

  const handleLoad = () => {
    loadedImages.current++;

    if (loadedImages.current === imagesAmount) {
      setIsLoading(false);
    }
  };

  return (
    <li className="list__item case">
      <Link to={`/${formattedCollection}-${type}`} className="list__link">
        <img
          src={image}
          alt={alt}
          className="case__image"
          onLoad={handleLoad}
          onError={handleLoad}
        />
        <span className="case__name">{name}</span>
      </Link>
    </li>
  );
}

export default Case;

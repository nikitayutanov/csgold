import './Item.scss';
import classNames from 'classnames';

function Item(props) {
  const {
    type,
    name,
    skin,
    imageUrl,
    setIsLoading,
    loadedImages,
    imagesAmount,
  } = props;

  const image = `https://community.akamai.steamstatic.com/economy/image/${imageUrl}/360fx360f`;
  const alt = classNames(name, skin, 'image');
  const className = classNames('list__item', 'item', type, {
    'knife--vanilla': !skin,
  });

  const handleLoad = () => {
    loadedImages.current++;

    if (loadedImages.current === imagesAmount) {
      setIsLoading(false);
    }
  };

  return (
    <li className={className}>
      <img
        src={image}
        alt={alt}
        className={`item__image ${type}__image`}
        onLoad={handleLoad}
        onError={handleLoad}
      />
      <p className={`item__text ${type}__text`}>
        <span className={`item__name ${type}__name`}>{name}</span>
        {skin && <span className={`item__skin ${type}__skin`}>{skin}</span>}
      </p>
    </li>
  );
}

export default Item;

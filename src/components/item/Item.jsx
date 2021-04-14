import './Item.scss';
import classNames from 'classnames';

function Item(props) {
  const { item, type, setIsLoading, loadedImages, imagesAmount } = props;
  const { name, skin, imageUrl, marketName } = item;
  const isVanilla = !skin;

  const image = `https://community.akamai.steamstatic.com/economy/image/${imageUrl}/360fx360f`;
  const alt = classNames(name, skin, 'image');
  const className = classNames('list__item', 'item', type, {
    'knife--vanilla': isVanilla,
  });

  const handleLoad = () => {
    loadedImages.current++;

    if (loadedImages.current === imagesAmount) {
      setIsLoading(false);
    }
  };

  const getHref = () => {
    const baseLink = 'https://steamcommunity.com/market/search?category_730_';

    if (type === 'knife') {
      if (isVanilla) {
        return `https://steamcommunity.com/market/listings/730/%E2%98%85%20${name}`;
      } else {
        return `${baseLink}Weapon%5B%5D=tag_weapon_${marketName}&q=${skin}`;
      }
    } else {
      const [glovesMarketName] = name.split(' ');
      return `${baseLink}Type%5B0%5D=tag_Type_Hands&q=${glovesMarketName}+${skin}`;
    }
  };

  return (
    <li className={className}>
      <a
        href={getHref()}
        className="list__link"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
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
      </a>
    </li>
  );
}

export default Item;

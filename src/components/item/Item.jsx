import './Item.scss';
import classNames from 'classnames';

function Item(props) {
  const { type, name, skin, imageUrl } = props;

  const image = `https://community.akamai.steamstatic.com/economy/image/${imageUrl}/360fx360f`;
  const alt = classNames(name, skin, 'image');
  const vanillaModifier = !skin ? `${type}--vanilla` : null;
  const className = classNames('list__item', 'item', type, vanillaModifier);

  return (
    <li className={className}>
      <img src={image} alt={alt} className={`item__image ${type}__image`} />
      <p className={`item__text ${type}__text`}>
        <span className={`item__name ${type}__name`}>{name}</span>
        {skin && <span className={`item__skin ${type}__skin`}>{skin}</span>}
      </p>
    </li>
  );
}

export default Item;

import './Item.scss';

function Item(props) {
  const { type, name, skin, image, alt, isVanilla } = props;

  return (
    <li className={`item ${type} ${isVanilla && `${type}--vanilla`}`}>
      <img src={image} alt={alt} className={`item__image ${type}__image `} />
      {name && <span className={`${type}__text ${type}__name`}>{name}</span>}
      {skin && <span className={`${type}__text ${type}__skin`}>{skin}</span>}
    </li>
  );
}

export default Item;

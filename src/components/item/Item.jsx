import './Item.scss';

function Item(props) {
  const { type, topName, bottomName, image, alt } = props;

  return (
    <li className={`item ${type}`}>
      {topName && (
        <span className={`item__name ${type}__name ${type}__name--top`}>
          {topName}
        </span>
      )}
      <img src={image} alt={alt} className={`item__image ${type}__image `} />
      {bottomName && (
        <span className={`item__name ${type}__name ${type}__name--bottom`}>
          {bottomName}
        </span>
      )}
    </li>
  );
}

export default Item;

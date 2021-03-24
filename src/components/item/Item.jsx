import './Item.scss';
import classNames from 'classnames';

function Item(props) {
  const { type, name, skin, image, isVanilla } = props;

  const vanillaModifier = `${type}--vanilla`;
  const itemClassName = classNames('item', type, {
    [vanillaModifier]: isVanilla,
  });
  const imageClassName = classNames('item__image', `${type}__image`);
  const textClassName = classNames('item__text', `${type}__text`);
  const nameClassName = classNames('item__name', `${type}__name`);
  const skinClassName = classNames('item__skin', `${type}__skin`);
  const alt = classNames(name, skin, 'image');

  return (
    <li className={itemClassName}>
      <img src={image} alt={alt} className={imageClassName} />
      <p className={textClassName}>
        {name && <span className={nameClassName}>{name}</span>}
        {skin && <span className={skinClassName}>{skin}</span>}
      </p>
    </li>
  );
}

export default Item;

import './Case.scss';

function Case(props) {
  const { name, imageUrl } = props;

  const image = `https://community.akamai.steamstatic.com/economy/image/${imageUrl}/250fx200f`;
  const alt = `${name} image`;

  return (
    <li className="list__item case">
      <img src={image} alt={alt} className="case__image" />
      <span className="case__name">{name}</span>
    </li>
  );
}

export default Case;

import './List.scss';
import caseImage from 'assets/images/case.png';
import knifeImage from 'assets/images/knife.png';
import glovesImage from 'assets/images/gloves.png';
import Item from 'components/item/Item';

const finishes = {
  original: 13,
  other: 7,
  gloves: 4,
};

const getItems = (type) => {
  const items = [];
  let amount;
  switch (type) {
    case 'knives':
      amount = 65;
      break;
    case 'gloves':
      amount = 24;
      break;
    default:
      amount = 30;
  }
  for (let i = 0; i < amount; i++) {
    switch (type) {
      case 'knives':
        items[i] = (
          <Item
            type="knife"
            name="M9 Bayonet"
            skin="Vanilla"
            image={knifeImage}
            isVanilla={i % 13 === 0}
          />
        );
        break;
      case 'gloves':
        items[i] = (
          <Item
            type="gloves"
            name="Bloodhound Gloves"
            skin="Bronzed"
            image={glovesImage}
            isVanilla={i % 4 === 0}
          />
        );
        break;
      default:
        items[i] = (
          <Item type="case" name={'CS:GO Weapon Case'} image={caseImage} />
        );
    }
  }
  return items;
};

function List(props) {
  // const { items } = props;
  const items = 'gloves';
  // const finishes = 'original-finishes';

  return (
    <ul
      className={`list ${items}-list ${
        finishes && `${items}-list--${finishes}`
      } `}
    >
      {getItems(items)}
    </ul>
  );
}

export default List;

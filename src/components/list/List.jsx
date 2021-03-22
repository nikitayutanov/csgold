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
            topName="M9 Bayonet"
            bottomName="Vanilla"
            image={knifeImage}
          />
        );
        break;
      case 'gloves':
        items[i] = (
          <Item
            type="gloves"
            topName="Bloodhound Gloves"
            bottomName="Bronzed"
            image={glovesImage}
          />
        );
        break;
      default:
        items[i] = (
          <Item
            type="case"
            bottomName={'CS:GO Weapon Case'}
            image={caseImage}
          />
        );
    }
  }
  return items;
};

function List(props) {
  // const { items } = props;
  const items = 'knives';
  const finishes = 'original-finishes';

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

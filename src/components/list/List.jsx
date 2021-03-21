import './List.scss';
import caseImage from 'assets/images/case.png';
import knifeImage from 'assets/images/knife.png';

const style = {
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(13, 1fr)',
    marginRight: '44px',
  },
};

const caseItem = (
  <li className="list__item case">
    <img src={caseImage} alt="Case" className="list__image case__image" />
    CS:GO Weapon Case
  </li>
);

const knifeItem = (
  <li className="list__item knife">
    {/* M9 Bayonet */}
    <img src={knifeImage} alt="Knife" className="list__image knife__image" />
    {/* Vanilla */}
  </li>
);

const getItems = (type) => {
  const items = [];
  const amount = type === 'k' ? 65 : 30;
  for (let i = 0; i < amount; i++) {
    switch (type) {
      case 'k':
        items[i] = knifeItem;
        break;
      default:
        items[i] = caseItem;
    }
  }
  return items;
};

function List() {
  return (
    <ul className="list" style={style.grid}>
      {getItems('k')}
    </ul>
  );
}

export default List;

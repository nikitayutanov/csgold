import './List.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Item from 'components/item/Item';

// const finishes = {
//   original: 13,
//   other: 7,
//   gloves: 4,
// };

function List(props) {
  const { type, finishes } = props;

  const [items, setItems] = useState([]);

  const gistUrl = 'https://gist.githubusercontent.com/nikitayutanov/';
  const casesJson =
    'e9b76e5d75293b2051693fac275a9cee/raw/98d25472ad8da8c6d14ca52d764128743d4ba833/csgold-cases-data.json';
  const knivesJson =
    '599f3f095371bbd291287894ad8b5678/raw/727fb75289948f3e21430fe452e04c0ac804ac46/csgold-knives-data.json';
  const glovesJson =
    '5a943f75ac99edb89d9527a54c67229c/raw/1b78f0c3b4d63c6a599d0ea79c55fc053d323783/csgold-gloves-data.json';
  const casesUrl = `${gistUrl + casesJson}`;
  const knivesUrl = `${gistUrl + knivesJson}`;
  const glovesUrl = `${gistUrl + glovesJson}`;

  const fetchItems = () => {
    switch (type) {
      case 'cases':
        fetch(casesUrl)
          .then((response) => response.json())
          .then((json) => {
            const { cases } = json;
            setItems(cases);
          });
        break;
      case 'knives':
        fetch(knivesUrl)
          .then((response) => response.json())
          .then((json) => {
            const { knives } = json;
            setItems(
              knives.filter((knife) => {
                const { name, skin, finish } = knife;
                return (
                  (name === 'Bayonet' && finish === 'Original') ||
                  (name === 'Bayonet' && !skin) ||
                  (name === 'Flip Knife' && finish === 'Original') ||
                  (name === 'Flip Knife' && !skin) ||
                  (name === 'Karambit' && finish === 'Original') ||
                  (name === 'Karambit' && !skin) ||
                  (name === 'Gut Knife' && finish === 'Original') ||
                  (name === 'Gut Knife' && !skin) ||
                  (name === 'M9 Bayonet' && finish === 'Original') ||
                  (name === 'M9 Bayonet' && !skin)
                );
              })
            );
          });
        break;
      case 'gloves':
        fetch(glovesUrl)
          .then((response) => response.json())
          .then((json) => {
            const { gloves } = json;
            setItems(gloves);
          });
        break;
    }
  };

  useEffect(() => fetchItems(), []);

  const specificList = `${type}-list`;
  const finishesModifier = `${specificList}--${finishes}`;
  const className = classNames('list', specificList, {
    [finishesModifier]: finishes,
  });

  const getItems = () => {
    return items.map((item) => {
      const { name, skin, finish, imageUrl } = item;
      return (
        <Item
          type="knife"
          name={name}
          skin={skin}
          imageUrl={imageUrl}
          isVanilla={finish === 'Vanilla'}
        />
      );
    });
  };

  return <ul className={className}>{getItems()}</ul>;
}

export default List;

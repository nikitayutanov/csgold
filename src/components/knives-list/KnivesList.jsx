import './KnivesList.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Item from 'components/item/Item';

function KnivesList(props) {
  const { collection } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchKnives = () => {
      const url =
        'https://gist.githubusercontent.com/nikitayutanov/599f3f095371bbd291287894ad8b5678/raw/csgold-knives-data.json';

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const { knives } = json;
          setItems(
            knives.filter((knife) => knife.collection.includes(collection))
          );
        })
        .catch((err) => console.log(`Something went wrong! ${err}`));
    };

    fetchKnives();
  }, [collection]);

  const finish = collection === 'Original' ? 'original' : 'other';
  const className = classNames(
    'list',
    'knives-list',
    `knives-list--${finish}-finishes`
  );

  const getItems = () => {
    return items.map((item, index) => {
      const { name, skin, imageUrl } = item;
      return (
        <Item
          key={index}
          type="knife"
          name={name}
          skin={skin}
          imageUrl={imageUrl}
          isVanilla={skin === 'Default'}
        />
      );
    });
  };

  return <ul className={className}>{getItems()}</ul>;
}

export default KnivesList;

import './ItemsList.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Item from 'components/item/Item';

function ItemsList(props) {
  const { type, collection, finishes } = props;
  const [items, setItems] = useState([]);
  const isKnives = type === 'knives';

  useEffect(() => {
    const fetchItems = () => {
      const url = `https://gist.githubusercontent.com/nikitayutanov/599f3f095371bbd291287894ad8b5678/raw/csgold-${type}-data.json`;

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const key = Object.keys(json)[0];
          const itemsObj = json[key];
          setItems(
            itemsObj.filter((item) => item.collection.includes(collection))
          );
        })
        .catch((err) => console.log(`Something went wrong! ${err}`));
    };

    fetchItems();
  }, [type, collection]);

  const finish = finishes === 'Original' ? 'original' : 'other';
  const finishesModifier = isKnives ? `knives-list--${finish}-finishes` : null;
  const className = classNames('list', `${type}-list`, finishesModifier);

  const getItems = () => {
    const itemType = isKnives ? 'knife' : type;

    return items.map((item, index) => {
      const { name, skin, imageUrl } = item;
      return (
        <Item
          key={index}
          type={itemType}
          name={name}
          skin={skin}
          imageUrl={imageUrl}
        />
      );
    });
  };

  return <ul className={className}>{getItems()}</ul>;
}

export default ItemsList;

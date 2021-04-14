import './ItemsList.scss';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import Item from 'components/item/Item';

const otherFinishes = ['gamma', 'chroma', 'spectrum', 'prisma'];

function ItemsList(props) {
  const { isLoading, setIsLoading } = props;

  const [items, setItems] = useState([]);
  const loadedImages = useRef(0);
  const { id } = useParams();

  const lowerCaseId = id.toLowerCase(); // cuz url should be case insensitive
  const splittedId = lowerCaseId.split('-');
  const [type] = splittedId.splice(splittedId.length - 1, 1);
  const collection = splittedId.join(' ');

  const isKnives = type === 'knives';
  const isOtherFinishes = otherFinishes.includes(collection);

  useEffect(() => {
    const fetchItems = () => {
      const url = `https://gist.githubusercontent.com/nikitayutanov/599f3f095371bbd291287894ad8b5678/raw/csgold-${type}-data.json`;

      setIsLoading(true);

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const key = Object.keys(json)[0];
          const itemsObj = json[key];
          setItems(
            itemsObj.filter((item) =>
              item.collection.toLowerCase().includes(collection)
            )
          );
        })
        .catch((err) => console.log(`Something went wrong! ${err}`));
    };

    fetchItems();
  }, [type, collection, setIsLoading]);

  const finish = isOtherFinishes ? 'other' : 'original';
  const finishesModifier = `knives-list--${finish}-finishes`;
  const className = classNames('list', `${type}-list`, {
    [finishesModifier]: isKnives,
    'list--hidden': isLoading,
  });

  const getItems = () => {
    const itemType = isKnives ? 'knife' : type;

    return items.map((item, index) => (
      <Item
        key={index}
        item={item}
        type={itemType}
        setIsLoading={setIsLoading}
        loadedImages={loadedImages}
        imagesAmount={items.length}
      />
    ));
  };

  return <ul className={className}>{getItems()}</ul>;
}

export default ItemsList;

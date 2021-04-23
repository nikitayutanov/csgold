import './ItemsList.scss';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import Item from 'components/item/Item';
import Loader from 'components/loader/Loader';

const otherFinishes = ['gamma', 'chroma', 'spectrum', 'prisma'];

function ItemsList(props) {
  const { items, setItems } = props;

  const [isLoading, setIsLoading] = useState(true);
  const loadedImages = useRef(0);
  const { id } = useParams();

  const lowerCaseId = id.toLowerCase(); // cuz url should be case insensitive
  const splittedId = lowerCaseId.split('-');
  const [type] = splittedId.splice(splittedId.length - 1, 1);
  const collection = splittedId.join(' ');

  const currentItems = items[type];
  const isAnyItems = currentItems?.length; // optional chain, cuz currentItems can be undefined if wrong url
  const isKnives = type === 'knives';
  const isOtherFinishes = otherFinishes.includes(collection);

  useEffect(() => {
    const fetchItems = () => {
      const url = `https://gist.githubusercontent.com/nikitayutanov/599f3f095371bbd291287894ad8b5678/raw/csgold-${type}-data.json`;

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const itemsObj = json[type];
          setItems((prevItems) => ({ ...prevItems, [type]: itemsObj }));
        })
        .catch((err) => console.log(`Something went wrong! ${err}`));
    };

    if (!isAnyItems) {
      fetchItems();
    }
  }, [items, setItems, type, isAnyItems]);

  const finish = isOtherFinishes ? 'other' : 'original';
  const finishesModifier = `knives-list--${finish}-finishes`;
  const className = classNames('list', 'items-list', `${type}-list`, {
    [finishesModifier]: isKnives,
    'list--hidden': isLoading,
  });

  const getItems = () => {
    const filteredItems = currentItems.filter((item) =>
      item.collection.toLowerCase().includes(collection)
    );
    const itemType = isKnives ? 'knife' : type;

    return filteredItems.map((item, index) => (
      <Item
        key={index}
        item={item}
        type={itemType}
        setIsLoading={setIsLoading}
        loadedImages={loadedImages}
        imagesAmount={filteredItems.length}
      />
    ));
  };

  return (
    <div className="container main__container main__container--items">
      {isLoading && <Loader />}
      <ul className={className}>{isAnyItems && getItems()}</ul>
    </div>
  );
}

export default ItemsList;

import './GlovesList.scss';
import { useState, useEffect } from 'react';
import Item from 'components/item/Item';

function GlovesList(props) {
  const { collection } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchGloves = () => {
      const url =
        'https://gist.githubusercontent.com/nikitayutanov/5a943f75ac99edb89d9527a54c67229c/raw/csgold-gloves-data.json';

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const { gloves } = json;
          setItems(
            gloves.filter((glovesItem) => glovesItem.collection === collection)
          );
        })
        .catch((err) => console.log(`Something went wrong! ${err}`));
    };

    fetchGloves();
  }, [collection]);

  const getItems = () => {
    return items.map((item, index) => {
      const { name, skin, imageUrl } = item;
      return (
        <Item
          key={index}
          type="gloves"
          name={name}
          skin={skin}
          imageUrl={imageUrl}
        />
      );
    });
  };

  return <ul className="list gloves-list">{getItems()}</ul>;
}

export default GlovesList;

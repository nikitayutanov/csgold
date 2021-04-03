import './CasesList.scss';
import { useState, useEffect } from 'react';
import Item from 'components/item/Item';

function CasesList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCases = () => {
      const url =
        'https://gist.githubusercontent.com/nikitayutanov/e9b76e5d75293b2051693fac275a9cee/raw/csgold-cases-data.json';

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const { cases } = json;
          setItems(cases);
        })
        .catch((err) => console.log(`Something went wrong! ${err}`));
    };

    fetchCases();
  }, []);

  const getItems = () => {
    return items.map((item, index) => {
      const { name, imageUrl } = item;
      return <Item key={index} type="case" name={name} imageUrl={imageUrl} />;
    });
  };

  return <ul className="list cases-list">{getItems()}</ul>;
}

export default CasesList;

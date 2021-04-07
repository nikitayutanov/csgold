import './CasesList.scss';
import { useState, useEffect } from 'react';
import Case from 'components/case/Case';

function CasesList({ setList }) {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = () => {
      const url =
        'https://gist.githubusercontent.com/nikitayutanov/e9b76e5d75293b2051693fac275a9cee/raw/csgold-cases-data.json';

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const { cases } = json;
          setCases(cases);
        })
        .catch((err) => console.log(`Something went wrong! ${err}`));
    };

    fetchCases();
  }, []);

  const getCases = () => {
    return cases.map((caseItem, index) => {
      const { name, imageUrl, type, collection, finishes } = caseItem;
      return (
        <Case
          key={index}
          name={name}
          imageUrl={imageUrl}
          setList={setList}
          type={type}
          collection={collection}
          finishes={finishes}
        />
      );
    });
  };

  return <ul className="list cases-list">{getCases()}</ul>;
}

export default CasesList;

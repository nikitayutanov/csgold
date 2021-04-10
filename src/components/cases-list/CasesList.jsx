import './CasesList.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Case from 'components/case/Case';
import Loader from 'components/loader/Loader';

function CasesList({ setList }) {
  const [cases, setCases] = useState([]);
  const [loadedImages, setLoadedImages] = useState(0);

  const isLoading = loadedImages !== cases.length;

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
          setLoadedImages={setLoadedImages}
        />
      );
    });
  };

  const className = classNames('list', 'cases-list', {
    'list--hidden': isLoading,
  });

  return (
    <>
      {isLoading && <Loader />}
      <ul className={className}>{getCases()}</ul>
    </>
  );
}

export default CasesList;

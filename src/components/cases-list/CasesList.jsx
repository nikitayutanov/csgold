import './CasesList.scss';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Case from 'components/case/Case';

function CasesList(props) {
  const { isLoading, setIsLoading } = props;

  const [cases, setCases] = useState([]);
  const loadedImages = useRef(0);

  useEffect(() => {
    const fetchCases = () => {
      const url =
        'https://gist.githubusercontent.com/nikitayutanov/e9b76e5d75293b2051693fac275a9cee/raw/csgold-cases-data.json';

      setIsLoading(true);

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const { cases } = json;
          setCases(cases);
        })
        .catch((err) => console.log(`Something went wrong! ${err}`));
    };

    fetchCases();
  }, [setIsLoading]);

  const getCases = () => {
    return cases.map((caseItem, index) => {
      const { name, imageUrl, type, collection, finishes } = caseItem;
      return (
        <Case
          key={index}
          name={name}
          imageUrl={imageUrl}
          type={type}
          collection={collection}
          finishes={finishes}
          setIsLoading={setIsLoading}
          loadedImages={loadedImages}
          imagesAmount={cases.length}
        />
      );
    });
  };

  const className = classNames('list', 'cases-list', {
    'list--hidden': isLoading,
  });

  return <ul className={className}>{getCases()}</ul>;
}

export default CasesList;

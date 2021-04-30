import './CasesList.scss';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Case from 'components/case/Case';
import Loader from 'components/loader/Loader';
import Bar from 'components/bar/Bar';

function CasesList(props) {
  const { cases, setCases, sort, setSort } = props;

  const [isLoading, setIsLoading] = useState(true);
  const loadedImages = useRef(0);

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

    if (!cases.length) {
      fetchCases();
    }
  }, [cases, setCases]);

  const getSortedCases = () => {
    const sortedCases = [...cases];
    const { value, isAscending } = sort;
    const isName = value === 'name';
    const isDate = value === 'date';

    const byName = (a, b) => {
      return a.name.localeCompare(b.name);
    };
    const byDate = (a, b) => {
      return a.date - b.date;
    };

    if (isName && isAscending) {
      sortedCases.sort(byName);
    } else if (isName && !isAscending) {
      sortedCases.sort(byName).reverse();
    } else if (isDate && isAscending) {
      sortedCases.sort(byDate);
    } else if (isDate && !isAscending) {
      sortedCases.sort(byDate).reverse();
    }

    return sortedCases;
  };

  const getCases = () => {
    return getSortedCases().map((caseItem, index) => {
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

  return (
    <div className="container main__container main__container--cases">
      {isLoading && <Loader />}
      {!isLoading && <Bar sort={sort} setSort={setSort} />}
      <ul className={className}>{getCases()}</ul>
    </div>
  );
}

export default CasesList;

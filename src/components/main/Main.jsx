import './Main.scss';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemsList from 'components/items-list/ItemsList';
import CasesList from 'components/cases-list/CasesList';

function Main() {
  const [cases, setCases] = useState([]);
  const [items, setItems] = useState({});

  const getCasesList = () => {
    return <CasesList cases={cases} setCases={setCases} />;
  };

  const getItemsList = () => {
    return <ItemsList items={items} setItems={setItems} />;
  };

  return (
    <main className="main">
      <div className="container main__container">
        <Switch>
          <Route exact path="/" render={getCasesList} />
          <Route path="/:id" render={getItemsList} />
        </Switch>
      </div>
    </main>
  );
}

export default Main;

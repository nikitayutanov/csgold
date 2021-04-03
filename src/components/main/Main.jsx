import './Main.scss';
import KnivesList from 'components/knives-list/KnivesList';
import GlovesList from 'components/gloves-list/GlovesList';
import CasesList from 'components/cases-list/CasesList';

function Main() {
  return (
    <main className="main">
      <div className="container main__container">
        <CasesList />
        {/* <KnivesList collection='Spectrum' /> */}
        {/* <GlovesList collection="Original" /> */}
      </div>
    </main>
  );
}

export default Main;

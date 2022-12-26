import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import listTitels from './constansts';

function App() {
  return (
    <div className="main-page">
      <div className="main-page__container">
        <Header />
        <div className="body">
          {listTitels.map((i) => {
            return <List key={i} name={i} />;
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

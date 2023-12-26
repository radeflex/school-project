import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import classes from './helpers/data';
import Choosed from './pages/Choosed/Choosed';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' Component={Main} />
          {classes.map(el => <Route path={"/" + el.title} Component={Choosed}/>)}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

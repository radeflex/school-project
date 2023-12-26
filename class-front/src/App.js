import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';


function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' Component={Main} />
        </Routes>
    </div>
  );
}

export default App;

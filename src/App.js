import './styles/app.scss'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

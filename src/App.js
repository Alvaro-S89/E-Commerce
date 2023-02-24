import { Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './views/HomePage/HomePage';
import {ProductPage} from './views/ProductPage/ProductPage';

// const HomePage = () : Element => <h1>Home</h1>
function App() {
  return (
    <div className="App">
      <ProductPage />
      <Route path='/' element={<HomePage />} />
    </div>
  );
}

export default App;
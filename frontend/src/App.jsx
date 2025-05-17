import { Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import './app.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;

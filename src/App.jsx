import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ERROR_ROUTE, HOME_ROUTE } from './constants/routes';
import { EventsList } from './pages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<EventsList />} />
          <Route path={ERROR_ROUTE} element={<div>Events</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

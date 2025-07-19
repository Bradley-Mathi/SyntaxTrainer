import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { Homepage } from './Pages/Homepage/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import  List from './Components/List'
import './App.css';
import Profiledetail from './pages/Profiledetail';

function App() {
  return (
    <div className="App">
     
     
     <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <>
            <List/>
            </>
          }
        />
        <Route
          path="/:productId"
          element={
            <>
             <Profiledetail/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

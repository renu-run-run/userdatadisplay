
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserData from './Components/UserData';

import Comments from './Components/Comments';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<UserData/>}/>
      <Route path='/comments/:id' element={<Comments/>}/>
      <Route path='*' element={<UserData/>}/>
    </Routes>
   
    </div>
  );
}

export default App;

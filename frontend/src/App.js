import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './Pages/HomeScreen';
import AddStudentScreen from './Pages/AddStudentScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
        <Route path='/add' element={<AddStudentScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

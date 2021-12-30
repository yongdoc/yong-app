
import Navbar from './components/Navbar'
import Home from './components/Home'
import Create from './components/Create'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
/*
apparently, react-router-dom v6 has some changes, that is:
- Switch changed to Routes
- remove 'exact' options on Route
- etc.
*/

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

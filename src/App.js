import { Box } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from 'routes'
import Navbar from 'components/navbar'
import Home from 'views/landingPage'
function App() {
  return (
    <Box>
      <Router>
          <Navbar />
        <Routes>
          {routes.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;

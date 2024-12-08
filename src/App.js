import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/edit'; // Import the Edit component

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} /> {/* Add the Edit route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/edit'; // Import the Edit component

// App component definition
function App() {
  return (
    // Router component to enable routing
    <Router>
      {/* Navigation bar component */}
      <NavigationBar />
      {/* Routes component to define the routes */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Content />} />
        {/* Route for the read page */}
        <Route path="/read" element={<Read />} />
        {/* Route for the create page */}
        <Route path="/create" element={<Create />} />
        {/* Route for the edit page */}
        <Route path="/edit/:id" element={<Edit />} /> {/* Add the Edit route */}
      </Routes>
      {/* Footer component */}
      <Footer />
    </Router>
  );
}

// Export the App component as the default export
export default App;s
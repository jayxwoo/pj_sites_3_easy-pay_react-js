import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IsMobileContextProvider from './contexts/IsMobileContext';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <IsMobileContextProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/services"><Services /></Route>
            <Route exact path="/products"><Products /></Route>
            <Route exact path="/signup"><SignUp /></Route>
          </Switch>
          <Footer />
        </div>
      </IsMobileContextProvider>
    </Router>
  );
}

export default App;

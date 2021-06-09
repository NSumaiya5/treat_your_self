import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Dropdown from './Components/Dropdwon';
import Footer from './Components/Fotter';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu= () =>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false)
        console.log('resized successfully');
      }
    };

    window.addEventListener('resize', hideMenu);

    return ()=>{
      window.removeEventListener('remove',hideMenu);
    }

  });
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer></Footer>
      
    </>
  );
}

export default App;
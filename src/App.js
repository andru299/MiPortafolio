import './App.css';
import NavBar from './components/NavBar';
import Container from "./components/Container/Container";
import AboutMe from "./components/AboutMe/AboutMe";


function App() {
  return (
    <>  
      <NavBar />
      <Container>
        <AboutMe/>
        
      </Container>
    </>
  );
}

export default App;

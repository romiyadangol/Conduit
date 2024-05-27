import Nav from './components/Nav';
import Banner from './components/Banner';
import Container from './components/Container';

// import './App.css';

function App() {

  return (
    <>
    <Nav />
    <Banner 
    title="conduit"
    label="A place to share your knowledge."/>
    <Container/>
    </>
  );
}

export default App;
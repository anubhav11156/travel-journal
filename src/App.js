import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Home />
      </Container>
    </div>
  );
}

export default App;

const Container=styled.div`
  margin-top: 60px;
  width: 590px;
  height: 100%;
  background-color: white;
`

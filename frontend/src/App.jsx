import { Routes, Route } from 'react-router-dom';
import { Container, useColorModeValue } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import './app.css';

function App() {
  return (
    <Container maxW={'container.xxl'} minH="100vh" bg={useColorModeValue('#e5ded2', '#1A212D')}>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
      </Routes>
    </Container>
  );
}

export default App;

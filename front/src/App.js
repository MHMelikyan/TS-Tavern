import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

//Component Import
import Home from './Components/Home';
import Food from './Components/Food';
import Drink from './Components/Drink';
import Employees from './Components/Employees';
import Equipment from './Components/Equipment';
import Rooms from './Components/Rooms';
import QuestBoard from './Components/QuestBoard';
import './App.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar className='app-header' variant='light'expand="lg">
      <Container>
        <Nav className='navbar justify-content-center' activeKey='/' >
          <Navbar.Brand><img id='tavern_brand' src='/imgs/tavern_logo.png' alt='tavern logo'/></Navbar.Brand>
          <Nav.Item>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/employees'>Employees</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/rooms'>Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/questboard'>Quest Board</Nav.Link>
              </Nav.Item>
              <DropdownButton id="dropdown-basic-button" variant='secondary' title="Inventory">
                <Dropdown.Item href="/food">Food</Dropdown.Item>
                <Dropdown.Item href="/drink">Drinks</Dropdown.Item>
                <Dropdown.Item href="/equipment">Equipment</Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Container>
        </Navbar>

        <div className='display'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/food' element={<Food />} />
            <Route path='/drink' element={<Drink />} />
            <Route path='/equipment' element={<Equipment />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/questboard' element={<QuestBoard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

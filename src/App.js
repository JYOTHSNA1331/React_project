import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import Detail from './components/Detail';
import AddStudent from './components/AddStudent';
import Edit from './components/Edit';

function App() {
  return (

    <Detail>
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/addStudent' element={<AddStudent/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>

    </Detail>
  );
}

export default App;
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { Home } from './pages/Home.jsx';
import './styles/static.css';
import Modulo from './pages/modulo/Modulo.jsx';
import Nmateria from './pages/modulo/Nmateria.jsx';
import Nprofesor from './pages/modulo/Nprofesor.jsx';
import { Comentario } from './pages/Comentario.jsx';
import { Perfil } from './pages/Perfil.jsx';
import Maestros from './pages/Maestro.jsx';
import Materia from './pages/Materia.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/comentarios' element={<Comentario />} />
        <Route path='/asignaturas' element={<Materia />} />
        <Route path='/maestros' element={<Maestros/>} />
        <Route path='/carreras' element={<h1>Carreras</h1>} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/module' element={<Modulo />}>
          <Route path='new/materia' element={<Nmateria />} />
          <Route path='new/profesor' element={<Nprofesor />} />
        </Route>
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

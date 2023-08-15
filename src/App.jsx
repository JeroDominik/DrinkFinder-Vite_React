import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoTragos from './components/ListadoTragos'
import ModalTrago from './components/ModalTrago'
import { CategoriasProvider } from './context/CategoriasProvider'

function App() {

  return (
    <CategoriasProvider>
      <header className='py-5'>
        <h1>Buscador de Tragos</h1>
      </header>

      <Container className='mt-5'>
        <Formulario/>

        <ListadoTragos/>
        <ModalTrago></ModalTrago>
      </Container>
    </CategoriasProvider>

  )
}

export default App

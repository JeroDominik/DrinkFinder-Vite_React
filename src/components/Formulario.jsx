import { useState } from 'react'
import { Button, Form, Col, Row, Alert } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'

export default function Formulario() {

    const [ busqueda, setBusqueda ] = useState({
        nombre: '',
        categoria: ''
    })
    const [ alerta, setAlerta ] = useState('')

    const { categorias } = useCategorias()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los Campos son Obligatorios')
            return
        }
        setAlerta('')
    }

  return (
    <Form
        onSubmit={handleSubmit}
    >
        {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='nombre'>Nombre Bebidas</Form.Label>
                    <Form.Control
                        id='nombre'
                        type='text'
                        name='nombre'
                        placeholder='Ej: Whisky, Ron, Vodka'
                        value={busqueda.nombre}
                        onChange={ e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='categoria'>Categoria Tragos</Form.Label>
                    <Form.Select
                        name='categoria'
                        id='categoria'
                        value={busqueda.categoria}
                        onChange={ e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    >
                        <option value="">- Seleccione Categoría -</option>
                        {categorias.map( categoria => (
                            <option 
                                value={categoria.strCategory}
                                key={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>

        <Row className='justify-content-end'>
            <Col md={3}>
                <Button
                    variant='danger'
                    className='text-uppercase w-100'
                    type='submit'
                >
                    Buscar Bedida
                </Button>
            </Col>
            
        </Row>
    </Form>
  )
}

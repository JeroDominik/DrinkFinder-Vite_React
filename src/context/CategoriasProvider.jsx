import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const CategoriasContext = createContext()

const CategoriasProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [ tragos, setTragos ] = useState([])
    const [ modal, setModal ] = useState(false)
    const [ bebidaId, setBebidaId ] = useState(null)
    const [ receta, setReceta ] = useState({})

    const obtenerCategorias = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/list.php?c=list`
            const { data } = await axios(url)

            setCategorias(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    const consultarTragos = async busqueda => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/search.php?s=${busqueda.nombre}&c=${busqueda.categoria}`
            const {data} = await axios(url)

            setTragos(data.drinks)

        } catch (error) {
            console.log(error)
        }
    }

    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleBebidaIdClick = id => {
        setBebidaId(id)
    }

    useEffect(() => {
        const obtenerReceta = async () => {
            if(!bebidaId) return
            try {
                const url = `${import.meta.env.VITE_API_URL}/lookup.php?i=${bebidaId}`

                const { data  } = await axios(url)
                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            }
        }
        obtenerReceta()
    }, [bebidaId])
    

    return (
        <CategoriasContext.Provider
            value={{
                categorias,
                consultarTragos,
                tragos,
                modal,
                handleModalClick,
                handleBebidaIdClick,
                receta,
                setReceta
            }}
        >
            {children}
        </CategoriasContext.Provider>
    )
}
export {
    CategoriasProvider
}

export default CategoriasContext 
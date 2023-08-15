import { Row } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import Trago from "./Trago"

export default function ListadoTragos() {

    const { tragos } = useCategorias()

    return (
        <Row className="mt-5">
            {tragos?.map( trago => (
                <Trago
                key={trago.idDrink}
                trago={trago}
                />
            ))}
        </Row>
    )
}

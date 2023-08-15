import { Col, Card, Button } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"

export default function Trago({trago}) {

    const { handleModalClick, handleBebidaIdClick } = useCategorias()

    return (
        <Col md={6} lg={3}>

            <Card className="mb-4">
                <Card.Img
                    variant="top"
                    src={trago.strDrinkThumb}
                    alt={`Imagen de ${trago.strDrink}`}
                />

                <Card.Body>
                    <Card.Title>{trago.strDrink}</Card.Title>

                    <Button
                        variant="warning"
                        className="text-uppercase w-100 mt-2"
                        onClick={() => {
                            handleModalClick()
                            handleBebidaIdClick(trago.idDrink)
                        }}
                    >
                        Ver Receta
                    </Button>
                </Card.Body>
            </Card>

        </Col>
    )
}

import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Card, CardText, CardBody, CardLink,CardDeck,
    CardTitle, CardSubtitle, Container,Spinner, Col, Row
  } from 'reactstrap';
import {useRouter} from 'next/router'
import { head } from 'next/head'


export default function Home({characters}) {
    const { isFallback } = useRouter()

    if (isFallback) {
        return (
            <Spinner style={{ width: '3rem', height: '3rem' }} />
        )
    }
    return (
        <Container>
            <CardDeck>
                <Row className="d-flex flex-row flex-nowrap">
                    {characters.results.map(char => (                  
                    <Col sm="5">
                        <Card key={char.id} width="20px" height="20px">
                            <CardBody>
                                <CardTitle tag="h5">{char.name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Status: {char.status}</CardSubtitle>
                                        </CardBody>
                                            <img width="100%" src={char.image} alt="Card image cap" />
                                        <CardBody>
                                        <CardText>{char.gender}</CardText>
                                    <CardLink href="#">Card Link</CardLink>
                                <CardLink href="#">Another Link</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
                </Row>
            </CardDeck> 
        </Container>  
        
  )
}



export const getStaticProps = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await response.json()
    
    return {
        props: {
            characters: data,
        }
        
    }
}

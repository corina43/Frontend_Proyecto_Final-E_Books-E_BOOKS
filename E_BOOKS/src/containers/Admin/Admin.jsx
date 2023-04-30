import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch ,useSelector } from 'react-redux';
import { userData } from '../User/userSlice';
import { adminData } from '../../containers/Admin/AdminSlice';
import { verUsuarios } from '../../services/apiCalls';
//import './Admin.css'
import { Col, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';


export const Admin = () => {

    const ReduxCredentials = useSelector(userData);
    const isAdmin = useSelector(adminData)
    const navigate = useNavigate();
    

    // HOOKS
    const [usuarios, setUsuarios] = useState([]);

  

    useEffect(() => {

        if(usuarios.length === 0){

            verUsuarios(ReduxCredentials?.credentials?.token)
                .then(
                    result => {

                        setUsuarios(result.data.data)                      
                        console.log(result.data.data, "hola result")
                    }
                )
                .catch(error => console.log(error))

        }
    }, [usuarios]);
console.log(usuarios, "sou users")
    return (
        

<div className="usersDesign">
  <h3>Usuarios existentes:</h3>
     {usuarios.length > 0 ? (
        <Row xs={1} md={2} lg={5}>
          {usuarios.map((data) => {
            return (
              <Col key={data.id}>
                <Card className="my-3">
           <ListGroup variant="flush"> 
            <ListGroup.Item>
              <span className="text1">Nombre:</span>
              <span className="text2"> {data.nombre}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1"> Apellido: </span>
              <span className="text2"> {data.apellido}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1"> Email: </span>
              <span className="text2"> {data.email}</span>
            </ListGroup.Item>
          
            <ListGroup.Item>
              <span className="text1"> Fecha nacimiento: </span>
              <span className="text2"> {data.fecha_nacimiento}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1"> Fecha registro: </span>
              <span className="text2"> {data.fecha_registro}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1"> Ciudad: </span>
              <span className="text2"> {data.ciudad}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1">Pais </span>
              <span className="text2"> {data.pais}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1">Generos preferidos </span>
              <span className="text2"> {data.generos_preferidos}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1">Biografia </span>
              <span className="text2"> {data.biografia}</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
               
                 </Col>
            );
          })}
        </Row>
      ) : (
        
        <div>ESTAN VINIENDO</div>
      )}
    </div>
  );
};


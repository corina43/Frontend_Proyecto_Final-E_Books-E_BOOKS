import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { verUsuariosPerfil } from "../../services/apiCalls";
import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from 'react-bootstrap';

export const Usuarios = () => {
  const ReduxCredentials = useSelector(userData);
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
 

  useEffect(() => {
    if (usuarios.length === 0) {
       
      verUsuariosPerfil(ReduxCredentials?.credentials?.token)
        .then((result) => {
         
          setUsuarios({

            nombre: result.data.nombre,
            apellido: result.data.apellido,
            email: result.data.email,
            fecha_nacimiento: result.data.fecha_nacimiento,
            fecha_registro: result.data.fecha_registro,
            ciudad: result.data.ciudad,
            pais: result.data.pais,
            generos_preferidos: result.data.generos_preferidos,
            biografia: result.data.biografia,
          });
        setUsuarios(result.data)
       
    }
)
        
        .catch((error) => console.log(error));
    };
  }, [usuarios]);

  return (
      
    <>

<div className="info">
        <Card  style={{ width: "25rem" }}>
          <ListGroup variant="flush" className="profile">
            <ListGroup.Item>
              <span className="text1">Nombre:</span>
              <span className="text2"> {usuarios.nombre}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1"> Apellido: </span>
              <span className="text2"> {usuarios.apellido}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1"> Email: </span>
              <span className="text2"> {usuarios.email}</span>
            </ListGroup.Item>
          
            <ListGroup.Item>
              <span className="text1"> Fecha nacimiento: </span>
              <span className="text2"> {usuarios.fecha_nacimiento}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1"> Fecha registro: </span>
              <span className="text2"> {usuarios.fecha_registro}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1"> Ciudad: </span>
              <span className="text2"> {usuarios.ciudad}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1">Pais </span>
              <span className="text2"> {usuarios.pais}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1">Generos preferidos </span>
              <span className="text2"> {usuarios.generos_preferidos}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="text1">Biografia </span>
              <span className="text2"> {usuarios.biografia}</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
   

    </>
)
}; 
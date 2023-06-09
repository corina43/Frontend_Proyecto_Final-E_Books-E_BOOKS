import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";


function BookCard({ productos }) {
  const [remove, setRemove] = useState(false);
  const handleCloseRemove = () => setRemove(false);
  const handleShowRemove = () => setRemove(true);


  const [update, setUpdate] = useState(false);
  const handleCloseUpdate = () => setUpdate(false);
  const handleShowUpdate = () => setUpdate(true);




  return (
    <Card style={{ width: "20rem"  }}>
      <Card.Img variant="top" src={productos.poster_path} />
      <Card.Body>

      
        <ul>
         
          <li>
            <span className="textColor">Titulo: </span>
            {productos.titulo}
          </li>
          <li>
            <span className="textColor">Autor: </span>
            {productos.autor}
          </li>
         <li>
            <span className="textColor">Descripcion: </span>
            {productos.descripcion}
          </li>
          <li>
            <span className="textColor">Fecha Publicacion: </span>
            {productos.fecha_publicacion}
          </li>
          <li>
            <span className="textColor">Tipo: </span>
            {productos.tipo}
          </li>
          <li>
            <span className="textColor">Categoria: </span>
            {productos.categoria}
          </li>
          <li>
            <span className="textColor">Genero: </span>
            {productos.genero}
          </li>
          
        </ul>
       
      </Card.Body>
    </Card>
  );
}

export default BookCard;

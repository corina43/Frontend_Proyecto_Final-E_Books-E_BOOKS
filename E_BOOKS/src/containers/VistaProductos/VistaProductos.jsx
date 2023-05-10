import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../services/apiCalls";
import { userData } from "../../containers/User/userSlice";
import { Card, CardGroup, CardImg, Col, Container, Row } from "react-bootstrap";
import BookCard from "../../common/BookCard/BookCard";
import { addChoosen } from "../../containers/Detail/detailSlice";
import './VistaProductos.css';



const VistaProductos = () => {
  const root = "http://localhost:3009"
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState('');

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${root}/productos`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
    }
  };

  const getProductByTitulo = async (titulo) => {
    try {
      const response = await axios.get(`${root}/productos/titulo/${titulo}`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener producto por título:', error);
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`${root}/productos/id/${id}`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener producto por ID:', error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getProductByTitulo(search);
  };

  const selected = (prestamo) => {
    dispatch(addChoosen({ choosenObject: prestamo }))
    console.log(prestamo,'tengo sueño')
   
  }
  
  return (
    <div>
      <h1>Productos</h1>
      <form className='formProductos' onSubmit={handleSubmit}>
        <input className='inputProductos'
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar por título"
        />
        <button className='btnProductos' type="submit">Buscar</button>
      </form>
      <div className="book-card-container">
        {productos.map((producto) => (
          <CardImg variant="top" src={producto.poster_path}
          style={{ width: "18rem" }}
            key={producto.id}
            titulo={producto.titulo}
            autor={producto.autor}
          />
        ))}
      </div>
    </div>
  );
};


export default VistaProductos;


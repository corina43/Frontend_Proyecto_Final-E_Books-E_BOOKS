import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Productos } from '../Productos/Productos';

import { Usuarios } from '../Profile/Profile';
import { Admin } from '../Admin/Admin';

import { AdminPrestamos } from '../Admin/AdminPrestamos';
import {Home} from '../../containers/Home/Home'
import VistaProductos from '../VistaProductos/VistaProductos';
import { Prestamos } from '../Prestamos/Prestamos';


import  { DeleteUsuarios } from '../Admin/AdminDelete';
import { EditarPerfil } from '../Profile/ProfileUpdate';
import CrearProductoForm from '../CreateProducto/CreateProducto';
import { EditarProductos } from '../UpdateProductos/UpdateProductos';





export const Body =() =>{
    return (
      <>
      
     <Routes>
     
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/usuarios/profile" element={<Usuarios />} />
  <Route path="/usuarios/perfil" element={<EditarPerfil />} />
  <Route path="/usuarios/todos" element={<Admin />} />
  <Route path="/usuarios/prestamos" element={<AdminPrestamos />} />
  <Route path="/usuarios/delete/${id}" element={<DeleteUsuarios />} />
  <Route path="/productos/autor/${autor}" element={<Productos />} />
  <Route path="/productos/productos/${id}" element={<EditarProductos />} />
  <Route path="/productos/newproducto" element={<CrearProductoForm/>} />
  <Route path="/Vistaproductos" element={<VistaProductos />} />
  <Route path="/prestamos" element={<Prestamos />} /> 
 

       
       
       
     </Routes>
     </>
    )
  }
  
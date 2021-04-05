import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom'


const EditarProducto = () => {

    const history = useHistory();
    const dispacth = useDispatch();

    const [producto, setProducto] = useState({
        nombre: '',
        precio: 0
    });

    const productoEditar = useSelector(state => state.productos.productoeditar);

    useEffect(() => {
        setProducto(productoEditar);
    }, [productoEditar]);

    const onChangeFormulario = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    }

    const { nombre, precio} = producto;

    const submitEditarProducto = e => {
        e.preventDefault();
        dispacth(editarProductoAction(producto));
        history.push('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>
                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                    />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary fofnt-weight-bold text-uppercase d-block w-100">
                                Guardar Cambios
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto

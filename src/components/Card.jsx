import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { APP_ROUTES } from "../utility"


const Card = ({ index, item, eliminarRegistro }) => {


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleDelete = () => {

        Swal.fire({
            icon: 'warning',
            title: 'Estas seguro de eliminar?',
            showCancelButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: 'dodgerblue',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: 'darkgray',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                // Eliminar de la lista
                eliminarRegistro()
            }
        })

    }

    return (
        <>

            <div className="col d-flex align-items-stretch">
                <div className="card rounded-4 w-100">
                    <img  src={item.image} className="card-img-top rounded-top-4" alt={item.name} />
                    <div className="card-body">
                        <h4 className="card-title h4 me-4 ">{capitalizeFirstLetter(item.name)}</h4>
                        <p className="small">Status: {item.status}</p>
                        <hr className="mb-2" />
                        <ul>
                            <li>Gender: {item.gender}</li>
                            <li>Specie: {item.species}</li>
                            <li>Origin: {item.origin.name}</li>
                        </ul>

                    </div>
                    <div className="card-footer  py-2">
                        <div className="d-grid d-lg-flex justify-content-lg-between">
                            <Link to={APP_ROUTES.EDIT + '/' + index} className="btn btn-warning mb-2 px-4"><i className="bi bi-pencil me-2"></i>Edit</Link>
                            <button onClick={handleDelete} className="btn btn-danger mb-2 px-4"><i className="bi bi-trash me-2"></i>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
import { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { APP_ROUTES } from '../utility';

const Edit = () => {
    const { index } = useParams();

    const [list, setList] = useOutletContext();

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [specie, setSpecie] = useState('');
    const [origin, setOrigin] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (list) {
            setName(list[index].name);
            setStatus(list[index].status);
            setGender(list[index].gender);
            setSpecie(list[index].species);
            setOrigin(list[index].origin.name);
            setImage(list[index].image);
        }
    }, [list])


    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (validateFields()) {
            let data = { ...list[index], name, status, species: specie, gender, origin: { name: origin }, image }
            // Hacer copia de la lista
            let newList = [...list]
            // Eliminar el actual y colocar el nuevo
            newList.splice(index, 1, data)
            setList(newList)
            Swal.fire({ icon: 'success', text: 'Editado correctamente' })
            navigate(APP_ROUTES.HOME)
        }
    }

    const isEmpty = (str) => {
        return str.trim() == ''
    }

    const validateFields = () => {
        let noError = true;

        let message = ''

        if (isEmpty(name)) {
            message += "Nombre inválido. <br/>"
        }
        if (isEmpty(status)) {
            message += "Status inválido. <br/>"
        }
        if (isEmpty(gender)) {
            message += "Genero inválido. <br/>"
        }
        if (isEmpty(specie)) {
            message += "Especie inválido. <br/>"
        } if (isEmpty(origin)) {
            message += "Origen inválido. <br/>"
        } if (isEmpty(image)) {
            message += "Imagen inválida. <br/>"
        }

        console.log(message)
        if (message != '') {
            noError = false
            Swal.fire({ icon: 'error', title: 'Complete todos los campos', html: message })
        }

        return noError
    }

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        switch (id) {
            case "name": setName(value); break;
            case "status": setStatus(value); break;
            case "gender": setGender(value); break;
            case "specie": setSpecie(value); break;
            case "origin": setOrigin(value); break;
            case "image": setImage(value); break;
            default:
                break;
        }
    }


    return (
        <div>
            <PageTitle title={'Edit'} />
            <form className='col-sm-8 col-lg-6 mx-auto' onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <input type="text" className="form-control" id="status" value={status} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input type="text" className="form-control" id="gender" value={gender} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="specie" className="form-label">Specie</label>
                    <input type="text" className="form-control" id="specie" value={specie} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="origin" className="form-label">Origin</label>
                    <input type="text" className="form-control" id="origin" value={origin} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image url</label>
                    <input type="text" className="form-control" id="image" value={image} onChange={handleInputChange} />
                </div>

                <button type="submit" className="btn btn-primary w-100">Edit</button>
            </form>
        </div>
    )
}

export default Edit
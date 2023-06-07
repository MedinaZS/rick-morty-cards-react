import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import Swal from 'sweetalert2';
import { APP_ROUTES } from '../utility';

const AddNew = () => {

    const [list, setList] = useOutletContext();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [specie, setSpecie] = useState('');
    const [origin, setOrigin] = useState('');
    const [image, setImage] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (validateFields()) {
            let data = { name, status, species: specie, gender, origin: { name: origin }, image }
            let newList = [...list, data]
            setList(newList)
            Swal.fire({icon:'success', text:'Agregado correctamente'})
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
            <PageTitle title={'Add new'} />
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

                <button type="submit" className="btn btn-primary w-100">Add</button>
            </form>
        </div>
    )
}

export default AddNew
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Button,Modal} from 'react-bootstrap';
import './Add.css';
import PropTypes from "prop-types";


const Add = ({handleAdd}) => {
    const [movieAdd, setMovieAdd] = useState({
        title:'',
        description:'',
        posterURL:'',
        rating:0
    });
    const handleChange=(e)=>{
        setMovieAdd({...movieAdd,[e.target.name]:e.target.value})
    }
    console.log(movieAdd)

    const handleSubmit=(e)=>{
        if(movieAdd.title===""|| movieAdd.description==="" ||movieAdd.posterURL ==="" ){
            return alert("items required!!")
        }
        handleAdd(movieAdd)
        handleClose()
        setMovieAdd("")
    }
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="Add-movie">
            <Button className='btn-add' variant="primary" onClick={handleShow}>
                Add Movies 
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="title">Add Movie Here!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder='Add a title here!' onChange={handleChange} name='title'  value={movieAdd.title}  />
                    <input type="text" placeholder='Add a description here!' onChange={handleChange} name='description'   value={movieAdd.description}    />
                    <input type='url' placeholder='Add the poster URL!' onChange={handleChange} name='posterURL'  value={movieAdd.posterURL}  />
                    <input type='text' placeholder='Add rating here!' onChange={handleChange} name='rating' value={movieAdd.rating}  />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    
    ) ;
};
//Prototypes for controlling inputs
Add.propTypes = {
    movieAdd:PropTypes.shape({
        title:PropTypes.string,
        description:PropTypes.string,
        posterURL:PropTypes.string,
        rating:PropTypes.number
    }
    )
};

export default Add;
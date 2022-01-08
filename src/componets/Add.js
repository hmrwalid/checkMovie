import React,{useState} from "react";
import {Modal,Button,Form} from "react-bootstrap" ;

function Add({addMovie}){

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [rate, setRate] = useState(0);
    const [overview, setOverview] = useState("");
    const [video, setVideo] = useState("");



      const handelClick =()=>{
        let newMovie = {
          name:name,
          img:image,
          rate:rate,
          overview:overview,
          video : video
        };
        setOverview('')
        setImage('')
        setName('')
        setRate(0)
        setVideo('')
        addMovie(newMovie)
        handleClose()

      }
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
    return(
        <div className="Add">
          <Button variant="primary" onClick={handleShow}>
            Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" required value={name} onChange={(e)=>setName(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>image</Form.Label>
    <Form.Control type="url" required value={image} onChange={(e)=>setImage(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>video</Form.Label>
    <Form.Control type="url" required value={video} onChange={(e)=>setVideo(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>rate</Form.Label>
    <Form.Control type="number" min={0} max={5} required value={rate} onChange={(e)=>setRate(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>overviem</Form.Label>
    <Form.Control type="text" required value={overview} onChange={(e)=>setOverview(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
          </Form>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
 



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelClick} >
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
          
    </div>

    )
}

export default Add;
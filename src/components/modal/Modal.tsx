import { Button, Modal } from "solid-bootstrap";


const Modals =(props:{handleClose:()=>void,show:boolean,out:()=>void}) =>{
return(
<Modal show={props.show} onHide={props.handleClose}>
  <Modal.Header closeButton>
    <Modal.Title style={"color:black;"}>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body  style={"color:black;"}>
    Woohoo, you're reading this text in a modal!
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
    <Button variant="primary" onClick={props.out}>Save Changes</Button>
  </Modal.Footer>
</Modal>
);
}

export { Modals };
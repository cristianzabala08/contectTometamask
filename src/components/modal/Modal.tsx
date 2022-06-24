import { Button, Modal } from "solid-bootstrap";


const Modals =(props:{handleClose:()=>void,show:boolean,out?:()=>void,title:string,body:any,showOut?:boolean}) =>{
return(
<Modal show={props.show} onHide={props.handleClose}>
  <Modal.Header closeButton>
    <Modal.Title style={"color:black;"}>{props.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body  style={"color:black;"}>
   {props.body}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={props.handleClose}>Cancelar</Button>
    {props.showOut ? <Button variant="primary" onClick={props.out}>Aceptar</Button> : null}
  </Modal.Footer>
</Modal>
);
}

export { Modals };
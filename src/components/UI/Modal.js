import classes from './Modal.module.css'
import ReactDom from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}/>
}

const ModalOverLay = props => {
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
}

const portalEl = document.getElementById('overlays');

const Modal = props => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onClick={props.onClick}/>, portalEl)}
            {ReactDom.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalEl)}
        </>
    )
}

export default Modal;
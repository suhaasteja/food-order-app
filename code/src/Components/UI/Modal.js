import React from "react";
import ReactDOM  from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClick = {props.onHideCart} />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        document.getElementById("overlays")
      )}
    </>
  );
};

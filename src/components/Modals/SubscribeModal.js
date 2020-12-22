import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
const SubscribeModal = ({ handleClose }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Please fill in your email address!!"),
  });

  const onSubmit = (values) => {
    console.log(formik.values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setShow(false);
        toast.success("Thank you for Subscription!!", {
          autoClose: 2000,
        });
        form.reset();
      } else {
      }
    };
    xhr.send(data);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <ToastContainer />
      <form
        onSubmit={submitForm}
        action="https://formspree.io/f/xknpvlvv"
        method="POST"
      >
        <Modal.Header closeButton>
          <Modal.Title>Norrdex Travels</Modal.Title>
        </Modal.Header>
        <Modal.Body>Subscribe to receive our exclusive offers</Modal.Body>
        <Modal.Body>
          <div className="form-row">
            <div className="col">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="success">
            Subscribe
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default SubscribeModal;

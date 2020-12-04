import React from "react";
import Title from "../../components/Title";
import { ToastContainer, toast } from "react-toastify";
import flag from "../../images/visa/united-states.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const AmericaV = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    dob: "",
    dot: "",
    nationality: "",
  };

  const onSubmit = (values) => {
    console.log(formik.values);
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("required!!"),
    lastname: Yup.string().required("required!!"),
    email: Yup.string().email("invalid email address").required("required!!"),
    phone: Yup.string().required("required!!"),
    address: Yup.string().required("required!!"),
    dob: Yup.string().required("required!!"),
    dot: Yup.string().required("required!!"),
    nationality: Yup.string().required("required!!"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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
        form.reset();
        toast.success("Thank you...we will contact you shortly");
      } else {
        toast.error("please fill in the required fields");
      }
    };
    xhr.send(data);
  };

  return (
    <div className="container">
      <section className="services">
        <img src={flag} width="200px" height="150px" alt="usa-visa" />
        <Title title="USA ESTA" />
        <div className="services-center">
          <p>
            Please fill in your Details and someone from our Office will get in
            touch with you shortly
          </p>
        </div>
      </section>
      <ToastContainer />
      <form
        style={{ marginTop: "20px" }}
        onSubmit={submitForm}
        action="https://formspree.io/f/xdoplvez"
        method="POST"
      >
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstname"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastname"
            />
          </div>
          <div className="col">
            <input
              type="tel"
              className="form-control"
              placeholder="phone number"
              name="phone"
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="email address"
              name="email"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              name="address"
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="form-group col-md-4">
            <input type="date" className="form-control" id="dob" name="dob" />
            <small id="dob" className="form-text text-muted">
              date of Birth
            </small>
          </div>
          <div className="form-group col-md-4">
            <input type="date" className="form-control" name="dot" />
            <small id="emailHelp" className="form-text text-muted">
              date of travel
            </small>
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Passport of citizenship"
              name="nationality"
            />
          </div>
        </div>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="form-row mt-3"
        >
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AmericaV;

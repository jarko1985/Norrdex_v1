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

  const onSubmit = (values) => {
    console.log(formik.values);
  };

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
        toast.success("Thank you!!");
        form.reset();
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
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div className="error">{formik.errors.firstname}</div>
            ) : null}
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <div className="error">{formik.errors.lastname}</div>
            ) : null}
          </div>
          <div className="col">
            <input
              type="tel"
              className="form-control"
              placeholder="phone number"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="email address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="error">{formik.errors.address}</div>
            ) : null}
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="form-group col-md-4">
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <div className="error">{formik.errors.dob}</div>
            ) : null}
            <small id="dob" className="form-text text-muted">
              date of Birth
            </small>
          </div>
          <div className="form-group col-md-4">
            <input
              type="date"
              className="form-control"
              name="dot"
              value={formik.values.dot}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dot && formik.errors.dot ? (
              <div className="error">{formik.errors.dot}</div>
            ) : null}
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
              value={formik.values.nationality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nationality && formik.errors.nationality ? (
              <div className="error">{formik.errors.nationality}</div>
            ) : null}
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

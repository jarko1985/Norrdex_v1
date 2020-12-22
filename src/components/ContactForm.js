import React from "react";
import Title from "./Title";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
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
      }
    };
    xhr.send(data);
  };
  return (
    <section className="py-5">
      <ToastContainer />
      <div className="row">
        <div className="col-xl-7 col-lg-6 col-md-5 col-sm-10 my-3">
          <Title title="Contact us" />
          <form
            onSubmit={submitForm}
            className="mt-5 ml-3"
            action="https://formspree.io/f/myynwqbl"
            method="POST"
          >
            {/*First name*/}
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="firstName"
                placeholder="e.g John smith"
              />
            </div>
            {/*First name*/}

            {/*email*/}
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="e.g email@email.com"
              />
            </div>
            {/*email*/}

            {/*subject*/}
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="subject"
                placeholder="e.g important"
              />
            </div>
            {/*subject*/}

            {/*text area*/}
            <div className="form">
              <textarea
                name="message"
                className="form-control"
                rows="11"
                placeholder="type your message here.. "
              ></textarea>
            </div>
            {/*text area*/}

            {/*Submit Button*/}
            <div className="form-group my-3">
              <input
                type="submit"
                className="form-control bg-primary text-white"
                value="submit"
              />
            </div>
          </form>
        </div>
        <div
          style={{ textAlign: "center" }}
          className="col-xl-4 col-lg-5 col-md-5 col-sm-12 my-3"
        >
          <Title title="Reach us" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.4722717253312!2d17.96666471615849!3d59.37514611439008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9fb251f34769%3A0xdc86cce6ebf81f69!2sNorrdex%20Travel!5e0!3m2!1sen!2sae!4v1591601336505!5m2!1sen!2sae"
            width="400"
            height="500"
            frameBorder="1"
            title="myFrame"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import React from "react";
import Title from "./Title";
const TurkeyV = () => {
  return (
    <div className="container">
      <section className="services">
        <Title title="Turkey e-Visa" />
        <div className="services-center">
          <p>
            Please fill in your Details and someone from our Office will get in
            touch with you shortly
          </p>
        </div>
      </section>
      <form style={{ marginTop: "20px" }}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="col">
            <input
              type="tel"
              className="form-control"
              placeholder="phone number"
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="email address"
            />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Address" />
          </div>
        </div>
        <div className="form-row mt-3">
          <div class="form-group col-md-4">
            <input type="date" class="form-control" id="dob" />
            <small id="dob" class="form-text text-muted">
              date of Birth
            </small>
          </div>
          <div class="form-group col-md-4">
            <input type="date" class="form-control" id="inputCity" />
            <small id="emailHelp" class="form-text text-muted">
              date of travel
            </small>
          </div>
          <div class="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Passport of citizenship"
            />
          </div>
        </div>
        <div class="custom-file mb-3">
          <input
            type="file"
            class="custom-file-input"
            id="validatedCustomFile"
            required
          />
          <label class="custom-file-label" for="validatedCustomFile">
            Please Upload your passport copy here
          </label>
          <div class="invalid-feedback">
            Example invalid custom file feedback
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="form-row mt-3"
        >
          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TurkeyV;

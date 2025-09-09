import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ReservationForm.css";

/* global fetchAPI, submitAPI */

const ReservationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  resDate: Yup.date().required("Please choose a date"),
  resTime: Yup.string().required("Please choose a time"),
  guests: Yup.number()
    .min(1, "At least 1 guest")
    .max(10, "Max 10 guests allowed")
    .required("Please enter number of guests"),
  occasion: Yup.string().required("Please select an occasion"),
});

const Reservations = () => {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
      const date = new Date();
      const availableTimes = fetchAPI(date);
      setAvailableTimes(availableTimes)
  }, []);

  return (
    <div className="form-container">
      <div className="green-bg" />
      <div className="form-box">
        <h2 className="form-title">Reserve a Table</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            resDate: "",
            resTime: "",
            guests: "",
            occasion: "",
          }}
          validationSchema={ReservationSchema}
          onSubmit={(values, { resetForm }) => {
            const result = submitAPI(values)
            console.log(`test phil ${result}`)
            resetForm();
          }}
        >
          {() => (
            <Form className="form-grid">
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" className="input" />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />

              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" className="input" />
              <ErrorMessage name="lastName" component="div" className="error" />

              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" className="input" />
              <ErrorMessage name="email" component="div" className="error" />

              <label htmlFor="phone">Phone Number</label>
              <Field type="tel" id="phone" name="phone" className="input" />
              <ErrorMessage name="phone" component="div" className="error" />

              <label htmlFor="resDate">Choose Date</label>
              <Field
                type="date"
                id="resDate"
                name="resDate"
                className="input"
              />
              <ErrorMessage name="resDate" component="div" className="error" />

              <label htmlFor="resTime">Choose Time</label>
              <Field as="select" id="resTime" name="resTime" className="input">
                {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
              </Field>
              <ErrorMessage name="resTime" component="div" className="error" />

              <label htmlFor="guests">Number of Guests</label>
              <Field
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                placeholder="Enter guests number"
                className="input"
              />
              <ErrorMessage name="guests" component="div" className="error" />

              <label htmlFor="occasion">Occasion</label>
              <Field
                as="select"
                id="occasion"
                name="occasion"
                className="input"
              >
                <option value="">-- Select Occasion --</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Field>
              <ErrorMessage name="occasion" component="div" className="error" />

              <button type="submit" className="submit-btn">
                Make Your Reservation
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Reservations;

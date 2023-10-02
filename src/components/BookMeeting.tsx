import React, { useState, useEffect } from "react";
import "./css/BookModal.scss";
import { db } from "../firebase/firebaseconfig";
import {
  QuerySnapshot,
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Form, Formik, FormikProps } from "formik";
import { GetAQuoteValidationSchema } from "../utils/validationSchemas/getQuote";

interface ObjectTypes {
  [key: string]: string;
}
interface getQuoteFormDataType extends ObjectTypes {
  client_email: string;
  client_name: string;
  client_phone: string;
  client_requirement: string;
}

const Options = [
  "Interior Works",
  "Exteriors",
  "Constructions",
  "Electricals",
  "Plumbing",
  "Fabrications",
  "Painting",
  "Flooring Works",
  "Glass Works",
  "Cladding Works & Upvc Works",
  "Upvc Works",
  "Aluminium Doors & Window Solutions",
  "Poultry Farms & Hatchery",
];
const BookMeeting = () => {
  const get_quote_collection = collection(db, "get_quote");
  const [quote_exists, setquote_exists] = useState(false);

  const [formData, setFormData] = useState<getQuoteFormDataType>({
    client_email: "",
    client_name: "",
    client_phone: "",
    client_requirement: "",
  });
  useEffect(() => {
    const query_quote_exists = query(
      get_quote_collection,
      where("client_email", "==", formData.client_email),
      where("client_phone", "==", formData.client_phone)
    );
    getDocs(query_quote_exists)
      .then((result) => {
        if (!result) {
          setquote_exists(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    meta: FormikProps<getQuoteFormDataType>
  ) => {
    setFormData((prevValues: getQuoteFormDataType) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
    meta.handleChange(e);
  };
  const addQuote = async () => {
    try {
      const response = await addDoc(get_quote_collection, {
        ...formData,
      });
      if (response.id) {
        alert(
          "Your quote has been received. You will receive a call from our correspondent soon"
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  const hanldeClear = () => {
    setFormData({
      client_email: "",
      client_name: "",
      client_phone: "",
      client_requirement: "Interior Works",
    });
  };
  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <h4 className="modal-title">Contact Us</h4>
        </div>
        <div className="modal-body">
          <Formik
            initialValues={formData}
            onSubmit={addQuote}
            validationSchema={GetAQuoteValidationSchema}
            enableReinitialize
          >
            {(meta) => {
              return (
                <Form className="modal-form">
                  <label>
                    Name
                    <input
                      type="text"
                      name="client_name"
                      id="name"
                      required
                      onChange={(e) => handleChange(e, meta)}
                    />
                  </label>
                  <span className="field_error">
                    {meta.errors.client_name && meta.touched.client_name
                      ? meta.errors.client_name
                      : ""}
                  </span>
                  <label>
                    Phone Number
                    <input
                      type="tel"
                      name="client_phone"
                      id="phone"
                      required
                      onChange={(e) => handleChange(e, meta)}
                    />
                  </label>
                  <span className="modal-form-field_error">
                    {meta.errors.client_phone && meta.touched.client_phone
                      ? meta.errors.client_phone
                      : ""}
                  </span>
                  <label>
                    Email
                    <input
                      name="client_email"
                      id="email"
                      required
                      onChange={(e) => handleChange(e, meta)}
                    />
                  </label>
                  <span className="modal-form-field_error">
                    {meta.errors.client_email && meta.touched.client_email
                      ? meta.errors.client_email
                      : ""}
                  </span>
                  <label>
                    Type of Service
                    <select
                      name="client_requirement"
                      id="type_of_service"
                      onChange={(e) => handleChange(e, meta)}
                    >
                      {Options.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </select>
                  </label>
                  <span className="modal-form-field_error">
                    {meta.errors.client_requirement &&
                    meta.touched.client_requirement
                      ? meta.errors.client_requirement
                      : ""}
                  </span>
                  <div className="modal-form-buttons">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={hanldeClear}>
                      Clear
                    </button>
                    <button type="button">Cancel</button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default BookMeeting;

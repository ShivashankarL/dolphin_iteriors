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
const BookMeeting = () => {
  const get_quote_collection = collection(db, "get_quote");
  const [quote_exists, setquote_exists] = useState(false);
  console.log(get_quote_collection);
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
    e: React.ChangeEvent<HTMLInputElement>,
    meta: FormikProps<getQuoteFormDataType>
  ) => {
    setFormData((prevValues: getQuoteFormDataType) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
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
            validateOnChange
            enableReinitialize
          >
            {(meta) => {
              return (
                <Form className="modal-form">
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      onChange={(e) => {
                        setFormData((prevValues) => ({
                          ...prevValues,
                          client_name: e.target.value.trim(),
                        }));
                      }}
                    />
                  </label>

                  <label>
                    Phone Number
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      onChange={(e) => {
                        setFormData((prevValues) => ({
                          ...prevValues,
                          client_phone: e.target.value.trim(),
                        }));
                      }}
                    />
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      onChange={(e) => {
                        setFormData((prevValues) => ({
                          ...prevValues,
                          client_email: e.target.value.trim(),
                        }));
                      }}
                    />
                  </label>

                  <label>
                    Type of Service
                    <select
                      name="type_of_service"
                      id="type_of_service"
                      onChange={(e) => {
                        setFormData((prevValues) => ({
                          ...prevValues,
                          client_requirement: e.target.value.trim(),
                        }));
                      }}
                    >
                      <option value="Web Design">Web Design</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="SEO">SEO</option>
                    </select>
                  </label>
                  <div className="modal-form-buttons">
                    <button type="submit">Submit</button>
                    <button type="button">Clear</button>
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

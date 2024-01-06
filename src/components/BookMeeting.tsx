import React, { useState } from "react";
import "./css/BookModal.scss";
import { db } from "../firebase/firebaseconfig";
import {
  DocumentData,
  addDoc,
  collection,
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

interface Props {
  setModalFlag: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: boolean;
}
const BookMeeting = ({ setModalFlag, isModal }: Props) => {
  const get_quote_collection = collection(db, "get_quote");
  const [formData, setFormData] = useState<getQuoteFormDataType>({
    client_email: "",
    client_name: "",
    client_phone: "",
    client_requirement: "Interior Works",
  });

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
      const query_quote_exists = query(
        get_quote_collection,
        where("client_email", "==", formData.client_email),
        where("client_phone", "==", formData.client_phone)
      );
      const querySnapshort = await getDocs(query_quote_exists);
      let queries: DocumentData = [];
      querySnapshort.forEach((doc) => {
        queries.push(doc.data());
      });

      if (queries.length > 0) {
        alert(
          "The quote already exists; please await further instructions or clarification from our team. Thank you for your patience."
        );

        return;
      }
      const response = await addDoc(get_quote_collection, {
        ...formData,
      });
      if (response.id) {
        alert(
          "Your quote has been received. You will receive a call from our correspondent soon"
        );
        hanldeClear();
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
      {isModal ? (
        <div className="row close-tag">
          <span
            className="close-tag-css material-symbols-outlined"
            onClick={() => {
              setModalFlag(false);
            }}
          >
            close
          </span>
        </div>
      ) : null}
      <div className="modal">
        <div className="modal-header">
          <h4 className="modal__title">Contact Us</h4>
        </div>
        <div className="modal-body">
          <Formik
            initialValues={formData}
            onSubmit={addQuote}
            validationSchema={GetAQuoteValidationSchema}
            enableReinitialize
            validateOnChange
          >
            {(meta) => {
              console.log(meta.values, meta.errors);

              return (
                <Form className="modal-form">
                  <label>
                    Name
                    <input
                      type="text"
                      name="client_name"
                      id="name"
                      value={formData.client_name}
                      required
                      onKeyDown={(e) => {
                        console.log(e.key);
                        if (e.key === "Enter") {
                          e.preventDefault();
                          (
                            document.getElementsByName(
                              "client_phone"
                            )[0] as HTMLInputElement
                          ).focus();
                        }
                      }}
                      onChange={(e) => handleChange(e, meta)}
                    />
                  </label>
                  <span className="field_error">
                    {meta.errors.client_name ? meta.errors.client_name : ""}
                  </span>
                  <label>
                    Phone Number
                    <input
                      type="number"
                      name="client_phone"
                      id="phone"
                      required
                      value={formData.client_phone}
                      onKeyDown={(e) => {
                        console.log(e.key);
                        if (e.key === "Enter") {
                          e.preventDefault();
                          (
                            document.getElementsByName(
                              "client_email"
                            )[0] as HTMLInputElement
                          ).focus();
                        }
                      }}
                      onChange={(e) => handleChange(e, meta)}
                    />
                  </label>
                  <span className="modal-form-field_error">
                    {meta.errors.client_phone ? meta.errors.client_phone : ""}
                  </span>
                  <label>
                    Email
                    <input
                      name="client_email"
                      id="email"
                      required
                      value={formData.client_email}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          (
                            document.getElementsByName(
                              "client_requirement"
                            )[0] as HTMLInputElement
                          ).focus();
                        }
                      }}
                      onChange={(e) => handleChange(e, meta)}
                    />
                  </label>
                  <span className="modal-form-field_error">
                    {meta.errors.client_email ? meta.errors.client_email : ""}
                  </span>
                  <label>
                    Type of Service
                    <select
                      name="client_requirement"
                      id="type_of_service"
                      value={formData.client_email}
                      onKeyDown={(e) => {
                        console.log(e.key);
                        if (e.key === "Enter") {
                          e.preventDefault();
                          (
                            document.getElementsByName(
                              "sub"
                            )[0] as HTMLButtonElement
                          ).focus();
                        }
                      }}
                      onChange={(e) => handleChange(e, meta)}
                    >
                      {Options.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </select>
                  </label>
                  <span className="modal-form-field_error">
                    {meta.errors.client_requirement
                      ? meta.errors.client_requirement
                      : ""}
                  </span>
                  <div className="modal-form-buttons">
                    <button type="submit" name="sub">
                      Submit
                    </button>
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

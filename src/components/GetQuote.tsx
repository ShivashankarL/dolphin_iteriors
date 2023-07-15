import React, { useEffect, useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import "./css/getAquote.css";
import { GetAQuoteValidationSchema } from "../utils/validationSchemas/getQuote";
import {
  QuerySnapshot,
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { error, log } from "console";
import { db } from "../firebase/firebaseconfig";

interface ObjectTypes {
  [key: string]: string;
}
interface getQuoteFormDataType extends ObjectTypes {
  client_email: string;
  client_name: string;
  client_phone: string;
  client_requirement: string;
}
const GetQuote = () => {
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
  console.log(quote_exists);

  const [documents, setDocuments] = useState([]);
  const formJson = [
    {
      inputName: "client_email",
      labelName: "Email",
      type: "email",
    },
    {
      inputName: "client_name",
      labelName: "FullName",
    },
    {
      inputName: "client_phone",
      labelName: "Contact No",
    },
    {
      inputName: "client_requirement",
      labelName: "Requirment",
      type: "text_area",
    },
  ];

  useEffect(() => {});
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
    <div className="getAQuoteDiv">
      <h1 className="heading_quote">Get Quote</h1>
      <Formik
        initialValues={formData}
        onSubmit={addQuote}
        validationSchema={GetAQuoteValidationSchema}
        validateOnChange
        enableReinitialize
      >
        {(meta) => {
          console.log(meta.errors);

          return (
            <Form className="form-getquote">
              {formJson.map((form, index) => {
                return (
                  <>
                    <input
                      name={form.inputName}
                      value={formData[form.inputName]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange(e, meta);
                      }}
                      className="input_field"
                      type={form.type}
                      placeholder={form.labelName}
                    />
                    <span className="error_field">
                      {meta.errors[`${form.inputName}`]}
                    </span>
                  </>
                );
              })}
              <button className="submit_quote" type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default GetQuote;

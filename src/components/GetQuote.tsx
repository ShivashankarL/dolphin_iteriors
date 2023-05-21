import React, { useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import "./css/getAquote.css";
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
const GetQuote = () => {
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
      inputName: "client_requirment",
      labelName: "Requirment",
      type: "text_area",
    },
  ];
  const [formData, setFormData] = useState<getQuoteFormDataType>({
    client_email: "",
    client_name: "",
    client_phone: "",
    client_requirement: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    meta: FormikProps<getQuoteFormDataType>
  ) => {
    setFormData((prevValues: getQuoteFormDataType) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="getAQuoteDiv">
      <h1 className="heading_quote">Get Quote</h1>
      <Formik
        initialValues={formData}
        onSubmit={() => {}}
        validationSchema={GetAQuoteValidationSchema}
      >
        {(meta) => {
          console.log(meta.values);

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

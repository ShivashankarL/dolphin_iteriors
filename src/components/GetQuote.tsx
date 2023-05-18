import React, { useState } from "react";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    client_email: "",
    client_name: "",
    client_phone: "",
    client_requirement: "",
  });
  return (
    <div>
      <h1>Get Quote</h1>
      <Formik
        initialValues={formData}
        onSumit={() => {
          console.log();
        }}
      ></Formik>
    </div>
  );
};

export default GetQuote;

import * as Yup from 'yup'


export const GetAQuoteValidationSchema = Yup.object({
    client_email: Yup.string().email("Invalid email").required("Email Missing!"),
    client_name: Yup.string().required("FullName Missing!"),
    client_phone: Yup.string().required("Contact No. Missing!"),
    client_requirement: Yup.string().required("Requirment is Missing!"),
})
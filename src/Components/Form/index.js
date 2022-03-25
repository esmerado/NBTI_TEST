import {prepareDataForValidation,useFormik} from "formik";
import {nbt_text_template} from "Templates/cv";
import {DivForm, Error, Form} from "./styles";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {Buffer} from 'buffer';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const downloadPdf = (values) => {
  console.log('values', values)
  const pdf = pdfMake.createPdf(nbt_text_template({
    ...values
  }))
  console.log('pdf', pdf);

  encodePdf(pdf)


}
// Buffer.from(str, 'base64') and buf.toString('base64')
const encodePdf = async (pdf) => {

  const encpdf = await pdf.getBase64(data => {
    console.log('encodned', data)
    const decPdf = Buffer.from(data, 'base64')
  console.log('decoded', decPdf)
  createAndDownloadBlobFile(decPdf,'test.pdf')
  })
  
}

function crFeateAndDownloadBlobile(body, filename, extension = 'pdf') {
  const blob = new Blob([body]);
  const fileName = `${filename}.${extension}`;
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, fileName);
  } else {
    const link = document.createElement('a');
    // Browsers that support HTML5 download attribute
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', fileName);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "Nombre demasiado corto";
  }

  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "Apellido demasiado corto";
  }

  if (!values.email) {
    errors.email = "Requerido";
  }

  return errors;
};

export default function FormikForm() {

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: ""
    },
    validate,
    onSubmit: (values) => {
      downloadPdf(values)
    },
  });

  return (
    <DivForm id='htmlData'>
      <Form onSubmit={formik.handleSubmit}>
        <label>Name:</label>
        <input
          placeholder="name..."
          type="text"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <Error>{formik.errors.name}</Error>
        ) : null}
        <br />
        <label>Lastname:</label>
        <input
          placeholder="lastname..."
          type="text"
          {...formik.getFieldProps("lastname")}
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <Error>{formik.errors.lastname}</Error>
        ) : null}
        <br />
        <label>Email:</label>
        <input
          placeholder="email..."
          type="text"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </Form>
    </DivForm>
  );
}
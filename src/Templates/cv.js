export const nbt_text_template = ({ name, lastname, email, image }) => {
  const nbti = {
    content: [
      {
        text: `Mi nombre es ${name}`,
        style: "header",
      },
      "Esto es un texto de ejemplo.\n\n",
      {
        text: `Email: ${email}`,
        style: "subheader",
      },
      `${name} ${lastname}, ${email} .\n\n`,
      {
        text: "Hola caracola",
        style: "subheader",
      },
      {
        text: `Politica de privacidad de prueba`,
        style: ["quote", "small"],
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
      },
      quote: {
        italics: true,
      },
      small: {
        fontSize: 8,
      },
    },
  };

  return nbti;
};

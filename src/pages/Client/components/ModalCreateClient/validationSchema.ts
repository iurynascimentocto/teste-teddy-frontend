import * as yup from "yup";

export const clientSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  salary_price: yup.string().required("Campo obrigatório"),
  company_price: yup.string().required("Campo obrigatório"),
});

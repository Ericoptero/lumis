import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';

import { Container, Content, ButtonWrapper, Error } from './styles';

export function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      telephone: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('O nome é obrigatório'),
      email: Yup.string()
        .email('Email inválido')
        .required('O email é obrigatório'),
      telephone: Yup.string()
        .max(11, 'O telefone deve ter no máximo 11 números')
        .min(10, 'O telefone deve ter no mínimo 10 números')
        .required('O telefone é obrigatório')
    }),
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <>
      <Header />

      <Container>
        <Content>
          <h2>Entre em contato com a Lumis</h2>
          <form onSubmit={formik.handleSubmit}>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Informe o seu nome"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <Error>{formik.errors.name}</Error>
            ) : null}

            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Informe o seu email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Error>{formik.errors.email}</Error>
            ) : null}

            <Input
              id="telephone"
              name="telephone"
              type="text"
              placeholder="Informe o seu telefone"
              onChange={formik.handleChange}
              value={formik.values.telephone}
            />
            {formik.touched.telephone && formik.errors.telephone ? (
              <Error>{formik.errors.telephone}</Error>
            ) : null}

            <ButtonWrapper>
              <Button type="reset">Resetar</Button>
              <Button type="submit">Enviar</Button>
            </ButtonWrapper>  
          </form>
        </Content>
      </Container>
    </>
  );
}
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const validateEmail = (email) => {
    return null != String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


const LoginForm: React.FC = () => {
    const navigate = useNavigate()

    const handleSubmit = async (values, { setErrors }) => {
        try {
            // Faça a solicitação para a rota de login
            const response = await axios.post('http://localhost:8000/api/login', {
                username: values.username,
                password: values.password,
                institution: values.institution,
            });

            // Se a autenticação for bem-sucedida, redirecione para a página home
            navigate('/home');
        } catch (error) {
            // Se a autenticação falhar, exiba uma mensagem de erro
            console.error('Falha na autenticação', error);
            setErrors({ username: 'Falha na autenticação' });
        }
    };

    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
                institution: '',
            }}
            validationSchema={Yup.object().shape({
                username: Yup.string()
                    .required('O nome de usuário ou email é obrigatório.')
                    .test('is-email', 'Email invalido', (value) => {
                        if (value.includes('@')) {
                            const allowedDomains = ['fatec.sp.gov.br']; // Substitua pelos domínios permitidos
                            const emailDomain = value.split('@')[1];
                            return allowedDomains.includes(emailDomain) && validateEmail(value);
                        }

                        return true;
                    }),
                password: Yup.string().required('A senha é obrigatória.'),
                institution: Yup.string().required('Selecione uma instituição.')


            })
            }
            onSubmit={handleSubmit}
        >
            <Form className="signin-form">
                <div className="form-row align-items-center form-group mt-3">
                    <div className="col-auto my-1">
                        <label className="mr-sm-2 sr-only" htmlFor="institution">Instituição</label>
                        <Field as="select" name="institution" className="custom-select mr-sm-2" id="institution">
                            <option value="1">Faculdade de Tecnologia de Sorocaba</option>
                            <option value="2">Faculdade de Tecnologia de Itu</option>
                            <option value="3">Anhanguera Sorocaba</option>
                        </Field>
                        <ErrorMessage name="institution" component="div" className="error" />
                    </div>
                </div>

                <div className="form-group mt-3">
                    <Field type="text" name="username" className="form-control" placeholder="Nome de usuário/Email" />
                    <ErrorMessage name="username" component="div" className="error" />
                </div>

                <div className="form-group">
                    <Field type="password" name="password" className="form-control" placeholder="Senha" />
                    <ErrorMessage name="password" component="div" className="error" />
                    <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Acessar</button>
                </div>
                <div className="form-group d-md-flex">
                    <div className="w-50 text-left">
                        <label className="checkbox-wrap checkbox-primary mb-0">Lembrar de mim
                            <Field type="checkbox" name="rememberMe" checked={false} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="w-50 text-md-right">
                        <a href="recuperar-senha.html">Esqueci minha senha...</a>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

export default LoginForm;
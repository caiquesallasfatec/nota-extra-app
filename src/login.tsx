import React from 'react';

import LoginForm from './components/login/LoginForm';


const Login: React.FC = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Área de membros</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="wrap">
              <div className="img" style={{ backgroundImage: 'url(../../Materiais/Logotipo/PNG-2.png)' }}></div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">
                      <center>Login de membros</center>
                    </h3>
                  </div>
                </div>
                <LoginForm />
                <p className="text-center">Ainda não é cadastrado? <a data-toggle="tab" href="../login-form-15/cadastrar.html">Cadastrar</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

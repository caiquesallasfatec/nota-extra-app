var iframeCode;

export default iframeCode =
	`
<html lang="pt-br">
<head>
	<title>Faça seu login/Cadastro</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel="stylesheet" href="css/style.css">

</head>

<body>
	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Área de membros</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-7 col-lg-5">
					<div class="wrap">
						<div class="img" style="background-image: url(../../Materiais/Logotipo/PNG-2.png);"></div>
						<div class="login-wrap p-4 p-md-5">
							<div class="d-flex">
								<div class="w-100">
									<h3 class="mb-4">
										<center>Login de membros</center>
									</h3>
								</div>
							</div>
							<form action="#" class="signin-form">
								<div class="form-row align-items-center form-group mt-3">
									<div class="col-auto my-1">
										<label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Instituição</label>
										<select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
											<option selected>Instituição...</option>
											<option value="1">Faculdade de Tecnologia de Sorocaba</option>
											<option value="2">Faculdade de Tecnologia de Itu</option>
											<option value="3">Anhanguera Sorocaba</option>
										</select>
									</div>
								</div>

								<div class="form-group mt-3">
									<input type="text" class="form-control" required>
									<label class="form-control-placeholder" for="username">Nome de usuário/Email</label>
								</div>
								<div class="form-group">
									<input id="password-field" type="password" class="form-control" required>
									<label class="form-control-placeholder" for="password">Senha</label>
									<span toggle="#password-field"
										class="fa fa-fw fa-eye field-icon toggle-password"></span>
								</div>
								<div class="form-group">
									<button type="submit"
										class="form-control btn btn-primary rounded submit px-3">Acessar</button>
								</div>
								<div class="form-group d-md-flex">
									<div class="w-50 text-left">
										<label class="checkbox-wrap checkbox-primary mb-0">Lembrar de mim
											<input type="checkbox" checked>
											<span class="checkmark"></span>
										</label>
									</div>
									<div class="w-50 text-md-right">
										<a href="recuperar-senha.html">Esqueci minha senha...</a>
									</div>
								</div>
							</form>
							<p class="text-center">Ainda não é cadastrado? <a data-toggle="tab"
									href="../login-form-15/cadastrar.html">Cadastrar</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<script src="js/jquery.min.js"></script>
	<script src="js/popper.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>

</body>

</html>
`


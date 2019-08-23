function onInit() {

	// Variável com Current Date
	var today = new Date();

	// Recupera a instância do objeto pelo seu ID
	var myDate = document.querySelector("#data_cotacao");

	// Insere o valor, formatando as 10 primeiras posições
	myDate.value = today.toISOString().substr(0, 10);
}

function chamarAPI() {

	var dDate = $("#data_cotacao").val();
	var cEndPoint = "/api";
	var sSulfix;

	// Verifica se a data foi informada para montagem da URL
	if (dDate === null || dDate === "") {
		sSulfix = "/latest";
	} else {
		sSulfix = "/" + dDate;

	}

	// Monta a URL Final para chamada de serviço
	var sFullURL = cEndPoint + sSulfix;
	
	// Monta objeto para envio de QUERY PARAMETERS
	var oQueryParam = {
		base: document.querySelector("#moeda_origem").value
	};

	// Chamada de metodo GET, informando a rotina de Callback
	$.ajax(sFullURL, {
		data: oQueryParam,
		success: callback_sucess,
		error: callback_error,
		method: "GET"
	});

}

function callback_sucess(resultado) {

	// Captura o resultado baseado na moeda destino informada
	var sMoedaDestino = $("#moeda_destino").val();
	var sData = $("#data_cotacao").val();
	var fValor = resultado.rates[sMoedaDestino];

	// Atualiza os dados dos campos baseado no ID
	$("#valor_destino_resultado").text(fValor);
	$("#moeda_destino_resultado").text(sMoedaDestino);
	$("#data_cotacao_resultado").text(sData);

}

function callback_error(resultado) {
	console.log("NOT OK");
}
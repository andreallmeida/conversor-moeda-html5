function chamarAPI() {

	const cEndPoint = "https://api.exchangeratesapi.io/latest";

	// Chamada de metodo GET, informando a rotina de Callback
	$.ajax("https://api.exchangeratesapi.io/latest", {
		success: callback_sucess,
		error: callback_error,
		method: "GET"
	});

}

function callback_sucess(resultado) {

	// Captura o resultado baseado na moeda destino informada
	var sMoedaDestino = $("#moeda_destino").val();
	var fValor = resultado.rates[sMoedaDestino];

	// Atualiza os dados dos campos baseado no ID
	$("#valor_destino_resultado").text(fValor);
	$("#moeda_destino_resultado").text(sMoedaDestino);

}

function callback_error(resultado) {
	console.log("NOT OK");
}
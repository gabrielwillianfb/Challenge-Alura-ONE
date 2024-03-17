function criptografar() {
	let textoInicial = document.getElementById("textarea").value;

	let criptografarTexto = textoInicial
		.replace(/e/gi, "enter")
		.replace(/i/gi, "imes")
		.replace(/a/gi, "ai")
		.replace(/o/gi, "ober")
		.replace(/u/gi, "ufat");

	if (textoInicial.length != 0) {
		document.getElementById("resultado").removeAttribute("style");
		document.getElementById("boneco-img").setAttribute("style", "display: none");
		document.getElementById("msg-nao-encontrada").setAttribute("style", "display: none");
		document.getElementById("texto-resultado").textContent = criptografarTexto;
	} else {
		alert("Não é possível criptografar com o campo de texto em branco.");
		document.getElementById("resultado").setAttribute("style", "display: none");
		document.getElementById("boneco-img").removeAttribute("style");
		document.getElementById("msg-nao-encontrada").removeAttribute("style");
	}
}

function descriptografar() {
	let textoCriptografado = document.getElementById("textarea").value;

	let descriptografarTexto = textoCriptografado
		.replace(/enter/gi, "e")
		.replace(/imes/gi, "i")
		.replace(/ai/gi, "a")
		.replace(/ober/gi, "o")
		.replace(/ufat/gi, "u");

	if (textoCriptografado.length != 0) {
		document.getElementById("resultado").removeAttribute("style");
		document.getElementById("boneco-img").setAttribute("style", "display: none");
		document.getElementById("msg-nao-encontrada").setAttribute("style", "display: none");
		document.getElementById("texto-resultado").textContent = descriptografarTexto;
	} else {
		alert("Não é possível descriptografar com o campo de texto em branco.");
	}
}

function copiarTexto() {
	const copiarTexto = document.getElementById("texto-resultado").textContent;
	navigator.clipboard.writeText(copiarTexto);
}

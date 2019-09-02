function validarToken(){
	
	var token = document.getElementById("token").value;
	var data  = "{\"TokenCode\":\""+token+"\"}";
	var xhr = new XMLHttpRequest();

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === this.DONE) {
	    console.log(this.responseText);
	  }
	});

	try{
		xhr.open("PUT", "https://sms.comtele.com.br/api/v2/tokenmanager");
		xhr.setRequestHeader("content-type", "application/json");
		xhr.setRequestHeader("auth-key", "4eb69eca-b44b-400f-88b6-0545191c4f1f ");
		xhr.send(data);	
		document.getElementById('resultadoValidacaoValido').innerHTML = "Token valido!";
	}catch(e){
		console.log(e);
		document.getElementById('resultadoValidacaoInvalido').innerHTML = "Token invalido!";
	}
}
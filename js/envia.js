function envia(){

	var destinatario_var = document.getElementById("destinatario").value;
	var mensagem_var = document.getElementById("mensagem").value;
	var data  = "{\"PhoneNumber\":\""+destinatario_var+"\",\"Prefix\":\""+mensagem_var+"\"}";
	var xhr = new XMLHttpRequest();

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === this.DONE) {
	  	console.log(this.responseText);
	  }
	});

	try{
		xhr.open("POST", "https://sms.comtele.com.br/api/v2/tokenmanager");
		xhr.setRequestHeader("content-type", "application/json");
		xhr.setRequestHeader("auth-key", "4eb69eca-b44b-400f-88b6-0545191c4f1f ");
		xhr.send(data);	
		alert("Mensagem enviada");
	}catch(e){
		console.log(e);
		alert("ocorreu um erro");
	}
}
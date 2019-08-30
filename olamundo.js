var data = "{\"PhoneNumber\":\"11966402850\",\"Prefix\":\"Ola Mundo!!\"}";

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://sms.comtele.com.br/api/v2/tokenmanager");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("auth-key", "4eb69eca-b44b-400f-88b6-0545191c4f1f ");

xhr.send(data);
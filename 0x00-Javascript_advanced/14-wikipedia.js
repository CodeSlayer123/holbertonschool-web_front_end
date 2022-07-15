function createElement(data){
    let body = document.querySelector("body")
    p1 = document.createElement("p")
    let text = document.createTextNode(data);
    p1.appendChild(text);
    body.appendChild(p1);


}

function queryWikipedia(callback){
    let xhr = new XMLHttpRequest();

    if(this.readyState === 4 && this.status === 200)
    {
      document.getElementById('body').innerHTML = this.responseText
    }

    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    xhr.send();
    xhr.onload = function() {
        callback(xhr.response)
    }

}
queryWikipedia(createElement);
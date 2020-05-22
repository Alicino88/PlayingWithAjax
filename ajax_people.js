const links = document.getElementById('json-links');
links.addEventListener('click', handleClick);

function handleClick(event) {

 event.preventDefault();
 let request = new XMLHttpRequest();
 request.addEventListener('load', rewriteContent);
 request.open('GET', '/json/' + event.target.innerText);
 request.send();
}

function rewriteContent() {

    let parsedText = JSON.parse(this.responseText);
    console.log(parsedText);
    let name=document.getElementById('name');
    name.innerText=parsedText.name;
    let born=document.getElementById('born');
    born.innerText=parsedText.born;
    let link=document.getElementById('link');
    link.innerText=parsedText.link;
    link.href=parsedText.link;edw

}

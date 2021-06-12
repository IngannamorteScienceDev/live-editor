let snippetsjs = document.getElementById('snippetsjs')
let preview = document.getElementById('preview')
let buttonGenerateCSS = document.getElementById('generateCSS')
let filter = document.querySelector('.js-filter')
let lastEdit;
let block;
const microHTML = html => `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="dist/framework.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" 
    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" 
    crossorigin="anonymous">
    <title>micro.css Template</title>
  </head>
  <body>${html}</body>
</html>`;

for(let snippet of snippets){
    let figure = document.createElement('figure')
    let img = document.createElement('img')
    
    for(let classValue of ['m-0','w-1/2','p-2','snippet-js', snippet.class]){
      figure.classList.add(classValue)
    }
    
    for(let classValue of ['h-auto','w-full','border-1','border-solid','border-gray-400','border-black:hover']){
      img.classList.add(classValue)
    }
    
    img.setAttribute('draggable',false)
    img.src = `./images/${snippet.image}`
    
    figure.setAttribute('id',snippet.name)
    figure.setAttribute('draggable',true)

    snippetsjs.appendChild(figure)
    figure.appendChild(img)
}

function masonry(grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) {
  var g = document.getElementById(grid),
    gc = document.querySelectorAll(gridCell),
    gcLength = gc.length,
    gHeight = 0,
    i;

  for (i = 0; i < gcLength; ++i) {
    gHeight += gc[i].offsetHeight + parseInt(gridGutter);
  }

  if (window.screen.width >= 1200)
    g.style.height = gHeight / dGridCol + gHeight / (gcLength + 1) + 100 + "px";
  else if (window.screen.width < 1200 && window.screen.width >= 768)
    g.style.height = gHeight / tGridCol + gHeight / (gcLength + 1) + "px";
  else g.style.height = gHeight / mGridCol + gHeight / (gcLength + 1) + "px";
}

let jssnippet = document.querySelectorAll('.snippet-js')

filter.addEventListener("click", event => {
    if (event.target.tagName !== "BUTTON") {
      return;
    }
    const val = event.target.getAttribute("data-filter");
    
    for (var i = 0; i < jssnippet.length; i++) {
      if (jssnippet[i].classList.contains(val)) {
        jssnippet[i].style.display = "block";
      } 
      else {
         jssnippet[i].style.display = "none";
      }
    }

    masonry("snippetsjs", ".snippet-js", 0, 2, 2, 1);
  });

for (let snippet of jssnippet){
    snippet.addEventListener(`dragstart`, (evt) => {
        block = evt.target.cloneNode(true)
        document.body.appendChild(block)
        block.hidden = true
    })
    snippet.addEventListener(`dragend`, (evt) => {
        if(block){
            document.body.removeChild(block)
            if(lastEdit){
              lastEdit.hidden = false
            }
            block = null
        }
    });
}

preview.addEventListener(`dragenter`, (evt)=>{
    evt.stopPropagation()
    evt.preventDefault()
});

preview.addEventListener(`dragover`, (evt)=>{
    evt.preventDefault()
})

preview.addEventListener(`dragleave`, (evt)=>{
    evt.preventDefault()
})

preview.addEventListener('drop',(evt)=>{
   
    let active = document.querySelector('.active')
    let current = evt.target
    currentCoord = current.getBoundingClientRect()
    cursosPos = evt.clientY
    isCorrect = (block !== current && current === preview) || current.parentElement.classList.contains('buildet')
    if(!isCorrect){
        return;
    }
    if(active && active!== undefined){
      if(current.parentElement.classList.contains('buildet')){
        if(cursosPos < currentCoord.y + currentCoord.height / 2 ){
          current.parentElement.before(active)
          return
        }
        else{
          current.parentElement.after(active)
          return
        }
      }
    } 
    
    block.innerHTML+=`<div class='js-delete-btn bg-white hidden absolute top-0 left-1 border-1 border-solid border-gray-400 px-4 py-2 shadow shadow-lg'>
    <i class="far fa-trash-alt"></iс>
    </div>`;

    for(let classValue of ['border-1:hover','border-solid:hover','border-black:hover']){
      block.childNodes[0].classList.remove(classValue)
    }

    for(let classValue of ['active','w-1/2','p-2']){
      block.classList.remove(classValue)
    }
    
    for(let classValue of ['relative','p-0','buildet']){
      block.classList.add(classValue)
    }
    
    if(current.parentElement.classList.contains('buildet')){
      if(cursosPos < currentCoord.y + currentCoord.height / 2 ){
        lastEdit = block.cloneNode(true)
        current.parentElement.before(lastEdit)
        return
      }
      else{
        lastEdit = block.cloneNode(true)
        current.parentElement.after(lastEdit)
        return
      }
    }

    preview.appendChild(block.cloneNode(true))
    preview.lastChild.hidden = false
})

buttonGenerateCSS.addEventListener('click',(evt)=>{
    let snippetToHTML = [];
    let htmlToFile = '';
    for (let elem of preview.childNodes){
        let snipppetObject = snippets.find(snippet => snippet.name === elem.id)
        if(snipppetObject !== undefined){
            snippetToHTML.push(snipppetObject)
        }
    }
    for(let snipppetObject of snippetToHTML){
        htmlToFile += snipppetObject.content + '\n'
    }
    
    let blob = new Blob([microHTML(htmlToFile)],{type: 'text/html'})

    let link = document.createElement('a');
    link.download = 'result.html';
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
})

document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains('js-delete-btn')) {
      preview.removeChild(evt.target.parentElement);
  }
  else if (evt.target.parentElement.classList.contains('js-delete-btn')){
      preview.removeChild(evt.target.parentElement.parentElement)
  }
});

document.addEventListener("dragstart", function (evt) {
  if (evt.target.classList.contains('buildet')) {
    evt.target.classList.add('active')
  }
});
document.addEventListener("dragend", function (evt) {
  if (evt.target.classList.contains('buildet')) {
    evt.target.classList.remove('active')
  }
});

window.addEventListener('load', (evt)=>{
      masonry("snippetsjs", ".snippet-js", 0, 2, 2, 1);
})
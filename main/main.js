let snippetsjs = document.getElementById('snippetsjs')
preview = document.getElementById('preview')
let buttonGenerateCSS = document.getElementById('generateCSS')
let filter = document.querySelector('.js-filter')
let block;
const microHTML = html => `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="путь к файлу css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <title>Stitches</title>
  </head>
  <body>${html}</body>
</html>`;



for(let snippet of snippets){
    let figure = document.createElement('figure')
    let img = document.createElement('img')
    figure.setAttribute('id',snippet.name)
    figure.setAttribute('draggable',true)
    img.setAttribute('draggable',false)
    
    for(let classValue of ['m-0','w-1/2','p-2']){
        figure.classList.add(classValue)
    }
    
    //img.classList.add('m-auto')
    img.classList.add('h-auto')
    img.classList.add('w-full')
    img.classList.add('border-1')
    img.classList.add('border-solid')
    img.classList.add('border-gray-400')
    img.classList.add('border-1:hover')
    img.classList.add('border-solid:hover')
    img.classList.add('border-black:hover')
    
    figure.classList.add(`snippet-js`)
    figure.classList.add(snippet.class)
    img.src = `/images/${snippet.image}`
    snippetsjs.appendChild(figure)
    figure.appendChild(img)
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
      } else {
          jssnippet[i].style.display = "none";
      }
    }

    masonry("snippetsjs", ".snippet-js", 0, 2, 2, 1);
  });

  function masonry(grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) {
    var g = document.getElementById(grid),
      gc = document.querySelectorAll(gridCell),
      gcLength = gc.length,
      gHeight = 0,
      i;
  
    for (i = 0; i < gcLength; ++i) {
      gHeight += gc[i].offsetHeight + parseInt(gridGutter);
    }
  
    if (window.screen.width >= 1024)
      g.style.height = gHeight / dGridCol + gHeight / (gcLength + 1) + 100 + "px";
    else if (window.screen.width < 1024 && window.screen.width >= 768)
      g.style.height = gHeight / tGridCol + gHeight / (gcLength + 1) + "px";
    else g.style.height = gHeight / mGridCol + gHeight / (gcLength + 1) + "px";
  }

let snipp_s = document.querySelectorAll('.snippet-js')
for (let snippet of snipp_s){
    snippet.addEventListener(`dragstart`, (evt) => {
        evt.target.classList.add(`active`);
        block = evt.target.cloneNode(true)
        document.body.appendChild(block)
        block.hidden = true
    })
    snippet.addEventListener(`dragend`, (evt) => {
        evt.target.classList.remove(`active`);
        if(block){
            document.body.removeChild(block)
            block = null
        }
    });
}




preview.addEventListener(`dragenter`, (evt)=>{
    evt.stopPropagation()
    evt.preventDefault()
    
    active = document.querySelector('.active')
    current = evt.target
    
});

preview.addEventListener(`dragover`, (evt)=>{
    evt.preventDefault()
})

preview.addEventListener(`dragleave`, (evt)=>{
    evt.preventDefault()
})

preview.addEventListener('drop',(evt)=>{
    if(!block){
        return
    }
    evt.stopPropagation()
    evt.preventDefault()
    current = evt.target

    isCorrect = block !== current && current === preview

    console.log(isCorrect)
    if(!isCorrect){
        return;
    }
    
    block.classList.remove('active')
    block.classList.remove('w-1/2')
    block.classList.remove('p-2')
    block.classList.add('p-0')
    block.classList.add('buildet')
    block.innerHTML+=`<div class='js-delete-btn bg-white hidden absolute top-0 left-0 border-1 border-solid border-gray-400 px-4 py-2 shadow shadow-lg'>
    <i>Удалить</i>
    </div>`;
    block.classList.add('relative')
    if(current.classList.contains('buildet')){
        preview.inserBefore(evt.target)
    }
    block.hidden = false
    preview.appendChild(block.cloneNode(true))
   
})

buttonGenerateCSS.addEventListener('click',(evt)=>{
    let arr = [];
    let htmlToFile = '';
    for (let elem of preview.childNodes){
        let non = snippets.find(snippet => snippet.name === elem.id)
        if(non !== undefined){
            arr.push(non)
        }
    }
    console.log(arr)
    for(let snippet of arr){
        htmlToFile += snippet.content + '\n'
    }
    let blob = new Blob([microHTML(htmlToFile)],{type: 'text/html'})

    let link = document.createElement('a');
    link.download = 'result.html';
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
})

  window.addEventListener('load', (evt)=>{
        masonry("snippetsjs", ".snippet-js", 0, 2, 2, 1);
  })
  window.addEventListener('resize', (evt)=>{
        masonry("snippetsjs", ".snippet-js", 0, 2, 2, 1);
  })

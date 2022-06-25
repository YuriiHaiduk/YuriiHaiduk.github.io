window.addEventListener('load',async ()=>{

    if(navigator.serviceWorker){
        try{
            await navigator.serviceWorker.register('/sw.js')
            console.log('service worker register successed')
        }
        catch{
            console.log('service worker register failed')
        }
    }

    await loadPosts()
})

async function loadPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    console.log(data.map(d=>d.name+' it is name'))

    const container = document.querySelector('.list-container');
    container.innerHTML = data.map(data=>toCard(data)).join('\n')
}

function toCard(post) {
    return `
    <div class="card" style="margin-bottom:10px;">
      <div class="card-title">
        ${post.name}
      </div>
      <div class="card-body">
        ${post.email}
      </div>
    </div>
  `
}

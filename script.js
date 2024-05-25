
    const btn = document.getElementById("btn")
    btn.addEventListener('click', async () => {
        console.log("clicked")
        const response = await fetch("https://picsum.photos/200/300")
        console.log(response.url)

        document.querySelector('#output img').setAttribute("src", response.url)
    })

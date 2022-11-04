//loading page
const loadingPage = document.querySelector('.loading_page')
const loadingSvg = document.querySelector('.loading_page svg')
const loadingSpan = document.querySelector('.loading_page span')
const loadingP = document.querySelector('.loading_page p')
const body = document.querySelector('body')


function loading() {
    if (window.innerWidth > 959) {
        loadingP.style.transform = 'translate(0,0)'
        loadingSvg.style.transform = 'translate(0,0)'
    } else {
        loadingP.style.transform = 'translate(0,0)'
        loadingSvg.style.transform = 'rotate(90deg) translate(0,0)'
    }
    for (let i = 0; i < 101; i++) {
        setTimeout(function loading() {
            loadingSpan.innerHTML = `${i}`
        }, i * i / 3.5)
        body.style.overflow = 'hidden'
    }
}
loading()
setTimeout(function loadingFin() {
    body.style.overflow = 'auto'
    loadingPage.style.display = 'none'
}, 3000)

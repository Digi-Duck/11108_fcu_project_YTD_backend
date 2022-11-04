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


//banner video
const bannerVideo = document.querySelector('header > video')
setTimeout(function() {
    bannerVideo.play()
},3300)

screen.width < 500 ? bannerVideo.src = "./home_img/phone_YesTerDay.mp4" : bannerVideo.src = "./home_img/video_banner.mp4"

window.addEventListener('resize',function() {
    if(window.innerWidth <500){
        bannerVideo.src = "./home_img/phone_YesTerDay.mp4" 
    }else{
        bannerVideo.src = "./home_img/video_banner.mp4" 
    }

})
//burger show & hidden

const header = document.querySelector('header')
const nav = document.querySelector('nav')
const burger = document.querySelector('.burger')
function toggleburger(e) {
    nav.classList.toggle('open')
    nav.classList.contains('open') ? body.style.overflow = 'hidden' : body.style.overflow = 'auto'
}

function navshow(e) {
    window.scrollY > header.offsetHeight * 0.9 ? burger.classList.add('active') : burger.classList.remove('active')
}

window.addEventListener('scroll', navshow)

//text translation - title

function changeFonts(self, text) {
    self.innerHTML = text
    self.classList.toggle('font')
}

function changeFontsBack(self, text) {
    self.innerHTML = text
    self.classList.toggle('font')
}

//text translation - content

const serviceContent = document.querySelector('.service>p')
const goalContent = document.querySelector('.goal>p')

serviceContent.addEventListener('mouseenter', () => {
    serviceContent.classList.toggle('font')
    serviceContent.innerHTML = `
    獨特的價值，選對了光更能展露專屬的鋒芒。</br>
    我們承載著各路人的期盼，提供上山下海的各式攝影服務。並為客戶客製化報價，以達到雙贏的最大效益。</br>
    我們穩扎穩打，涵蓋企劃、設計、拍攝、後製 ，並有各行各業的合作團隊可配合。</br>
    以真心相待，也總獲得最大的收穫。
    `
})

serviceContent.addEventListener('mouseout', () => {
    serviceContent.classList.toggle('font')
    serviceContent.innerHTML = `
    Unique value, choose the right light to reveal the exclusive sharpness.</br>
                We provide all kinds of photography services with the expectation of all people.</br>
                We also provide customized quotations for our clients to achieve the maximum benefit of win-win situation.</br>
                We cover planning, design, shooting, and post-production, and have a team of collaborators from various industries to work with. We treat each other with sincerity and get the biggest harvest.</br>
    `
})

goalContent.addEventListener('mouseover', () => {
    goalContent.classList.toggle('font')
    goalContent.innerHTML = `
    以客戶品牌內涵為要點，</br>
    專注於建構專業形象涵蓋不同領域與產業，</br>
    協助品牌行銷國際市場。
    `
})

goalContent.addEventListener('mouseout', () => {
    goalContent.classList.toggle('font')
    goalContent.innerHTML = `
    Focusing on customer brand connotation,</br>
    Focus on building a professional image covering different fields and industries,</br>
    Assist brand marketing in international market.
    `
})

//banner svg move

const paths = document.querySelectorAll('header>svg>path')
const polygons = document.querySelectorAll('header>svg>polygon')
function bannerTextMove() {
    if (window.scrollY < header.offsetHeight) {
        paths.forEach(path => {
            path.style.transform = `translate(0,${-Math.floor(Math.random() * 15) - window.scrollY}px)`
        });

        polygons.forEach(polygon => {
            polygon.style.transform = `translate(0,${-Math.floor(Math.random() * 15) - window.scrollY}px)`
        });
    }
}
window.addEventListener('scroll', bannerTextMove)

//profile img move
const intro = document.querySelector('.intro')
const profilePicLeft1 = document.querySelector('.profile_pic_left1')
const profilePicLeft2 = document.querySelector('.profile_pic_left2')
const profilePicLeft3 = document.querySelector('.profile_pic_left3')
const profilePicRight = document.querySelector('.profile_pic_right')
const profilePicCenter = document.querySelector('.profile_pic_center')

function profileMove(){
    if(screen.width > 1099 &&window.scrollY > intro.offsetTop +intro.clientHeight/2 && window.scrollY < intro.offsetTop +intro.clientHeight*2){
    var moveStart = window.scrollY - intro.offsetTop - intro.clientHeight/2
    profilePicLeft1.style.left =  `${20.26-18*moveStart/intro.clientHeight/1.5}%`
    profilePicLeft2.style.top = `${49.58-9.12*moveStart/intro.clientHeight/1.5}%`
    profilePicLeft2.style.left  = `${28.85-11.57*moveStart/intro.clientHeight/1.5}%`
    profilePicLeft3.style.left = `${19.11-12.03*moveStart/intro.clientHeight/1.5}%`
    profilePicRight.style.top = `${25.28+16.43*moveStart/intro.clientHeight/1.5}%`
    profilePicRight.style.left = `${59.79+15.42*moveStart/intro.clientHeight/1.5}%`
    }
}

window.addEventListener('scroll', profileMove)

//SVG animation
const service = document.querySelector('.service')
const goal = document.querySelector('.goal')
const servicePath = document.querySelector('.service >svg>path')
const goalPath = document.querySelector('.goal >svg>path')
const photoPath = document.querySelector('.svg_photo>path')
const graphyPath = document.querySelector('.svg_graphy>path')
const studioPath = document.querySelector('.svg_studio>path')


window.addEventListener('scroll',()=>{
    if(scrollY>service.offsetTop){
        servicePath.classList.add('svg_animation')
    }
    if(scrollY>goal.offsetTop){ 
        goalPath.classList.add('svg_animation')
    }
    if(scrollY>goal.offsetTop + goal.clientHeight / 1.75){
        photoPath.classList.add('svg_animation')
        graphyPath.classList.add('svg_animation')
        studioPath.classList.add('svg_animation')
    }
})

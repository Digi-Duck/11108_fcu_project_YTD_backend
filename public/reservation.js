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

const mask1 = document.querySelector('.mask1')
const mask2 = document.querySelector('.mask2')
const mask3 = document.querySelector('.mask3')
const mask4 = document.querySelector('.mask4')

const id_photo1 = document.querySelector('.id_photo1')
const selfi1 = document.querySelector('.selfi1')

const id_select = document.querySelector('#id_select')
const text_idphoto = document.querySelector('.text_idphoto')
const ntd_orgi_idphoto = document.querySelector('.ntd_orgi_idphoto')
const ntd_real_idphoto = document.querySelector('.ntd_real_idphoto')

const ntd_orgi_selfieshoot = document.querySelector('.ntd_orgi_selfieshoot')
const selfi_select = document.querySelector('#selfi_select')

const pro_select = document.querySelector('#pro_select')
const text_pro = document.querySelector('.text_pro')
const ntd_orgi_pro = document.querySelector('.ntd_orgi_pro')
const pro_photo = document.querySelector('.pro_photo')

const artist_photo = document.querySelector('.artist_photo')
const artist_select = document.querySelector('#artist_select')
const text_artist = document.querySelector('.text_artist')
const ntd_artist = document.querySelector('.ntd_artist')

const other_photo = document.querySelector('.other_photo')
const other_select = document.querySelector('#other_select')
const other_sec = document.querySelector('.other_sec')

function commercial1() {
    mask1.style.height='100%'

    mask1.innerHTML =
    `
    <div style = 'height: 100%;display:flex;flex-direction: column;justify-content: center;'>
        <div style = 'font-family:GenRyuMin JP;'>
            <span style = 'font-size:2.083vw;'>????????????</span>
        </div>
        <div
        style =
        'font-size:clamp(12px,1.354vw,26px);
        font-family:GenRyuMin JP;
        line-height: 5vh;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        '
        >
            <span><a href="#other">????????????</a></span>
            <span><a href="#other">??????</a></span>
            <span><a href="#other">????????????</a></span>
        </div>
    </div>
    `
}
function commercial2() {
    mask1.style.height='8vh'
    mask1.innerHTML =
    `
    Commercial
    `
}
function portraits1() {
    mask2.style.height='100%'
    mask2.innerHTML =
    `
    <div style = 'height: 100%;display:flex;flex-direction: column;justify-content: center;'>
        <div style = 'font-family:GenRyuMin JP;'>
            <span style = 'font-size:2.083vw;'>????????????</span>
        </div>
        <div style = 'font-size:clamp(12px,1.354vw,26px);font-family:GenRyuMin JP;line-height: 5vh;display:flex;flex-direction: column;align-items: center;justify-content: center;'>
            <span><a href="#pro">?????????</a></span>
            <span><a href="#artist">????????????</a></span>
            <span><a href="#other">??????</a></span>
        </div>
    </div>
    `
}
function portraits2() {
    mask2.style.height='8vh'
    mask2.innerHTML =
    `
    Portraits
    `
}
function selection1() {
    mask3.style.height='100%'
    mask3.innerHTML =
    `
    <div style = 'height: 100%;display:flex;flex-direction: column;justify-content: center;'>
        <div style = 'font-family:GenRyuMin JP;'>
            <span style = 'font-size:2.083vw;'>???????????????</span>
        </div>
        <div style = 'font-size:clamp(12px,1.354vw,26px);font-family:GenRyuMin JP;line-height: 5vh;display:flex;flex-direction: column;align-items: center;justify-content: center;'>
            <span><a href="#id_photo">?????????</a></span>
            <span><a href="#selfieshoot">????????????</a></span>
            <span><a href="#petphoto">?????????</a></span>
        </div>
    </div>
    `
}
function selection2() {
    mask3.style.height='8vh';
    mask3.innerHTML =
    `
    Selection
    `
}
function activity1() {
    mask4.style.height='100%';
    mask4.innerHTML =
    `
    <div style = 'height: 100%;display:flex;flex-direction: column;justify-content: center;'>
        <div style = 'font-family:GenRyuMin JP;'>
            <span style = 'font-size:2.083vw;'>????????????</span>
        </div>
        <div style = 'font-size:clamp(12px,1.354vw,26px);font-family:GenRyuMin JP;line-height: 5vh;display:flex;flex-direction: column;align-items: center;justify-content: center;'>
            <span><a href="#other">????????????</a></span>
            <span><a href="#other">????????????</a></span>
        </div>
    </div>
    `
}
function activity2() {
    mask4.style.height='8vh';
    mask4.innerHTML =
    `
    Activity record
    `
}

function changephoto_id_before() {
    if (id_select.value == "1") {
        id_photo1.src =`
        ./id_photo1_before.png
        `
    }else if(id_select.value == "2"){
        id_photo1.src =`
        ./id_photo2_before.png
        `
    }
}
function changephoto_id_after() {
    if (id_select.value == "1") {
        id_photo1.src =`
        ./id_photo1_after.png
        `
    }else if(id_select.value == "2"){
        id_photo1.src =`
        ./id_photo2_after.png
        `
    }
}
function changephoto_selfi1() {
    selfi1.src =`
    ./colorbg.png
    `
}
function changephoto_selfi2() {
    if(selfi_select.value == "1"){
        selfi1.src =`
        ./selfieshoot1.png
        `
    }else if(selfi_select.value == "2"){
        selfi1.src =`
        ./selfieshoot2.png
        `
    }else if(selfi_select.value == "3"){
        selfi1.src =`
        ./selfieshoot3.png
        `
    }

}

function change_id_op() {
    if (id_select.value == "2") {
        text_idphoto.innerHTML =
        `
        <h3>Lv2 ????????????????????????
        <span class="res">???????????????</span>
        </h3>
        <ul>
            <li>?????????????????????????????????????????????</li>
            <li>??????????????????????????????????????????</li>
            <li>????????????????????????????????????????????????</li>
            <li>?????????????????????????????????????????????????????????????????????</li>
        </ul>
        `
        id_photo1.src =`
        ./id_photo2_after.png
        `
        ntd_orgi_idphoto.innerHTML=`
        NT$ 2000
        `
        ntd_real_idphoto.innerHTML=`
        NT$ 1000
        `

    }else if(id_select.value == "1"){
        text_idphoto.innerHTML =`
                <h3>Lv1 ???????????????
                    <span class="res">???????????????</span>
                </h3>
                <ul>
                    <li>?????????????????????????????????????????????</li>
                    <li>???????????????????????????????????????</li>
                    <li>????????????????????????????????????????????????</li>
                    <li>?????????????????????????????????????????????????????????????????????</li>
                </ul>
        `
        id_photo1.src =`
        ./id_photo1_after.png
        `
        ntd_orgi_idphoto.innerHTML=`
        NT$ 800
        `
        ntd_real_idphoto.innerHTML=`
        NT$ 650
        `
    }

}

function change_selfi_op() {
    if (selfi_select.value == "2") {
    ntd_orgi_selfieshoot.innerHTML = `
    NT$ 2000
    `
    selfi1.src =`
    ./selfieshoot2.png
    `
    }else if(selfi_select.value == "3"){
    ntd_orgi_selfieshoot.innerHTML = `
    NT$ 1200
    `
    selfi1.src =`
    ./selfieshoot3.png
    `

    }else if(selfi_select.value == "1"){
    ntd_orgi_selfieshoot.innerHTML = `
    NT$ 1800
    `
    selfi1.src =`
    ./selfieshoot1.png
    `
    }
}

function change_pro_op(){
    if (pro_select.value == "2") {
        pro_photo.src=`
        ./pro2.png
        `
        ntd_orgi_pro.innerHTML=`
        NT$ 2000/???
        `
        text_pro.innerHTML=`
        <h3>?????????????????????<span class="res">???????????????</span></h3>
        <ul>
            <li>????????????????????????????????????</li>
            <li>?????????????????????????????????????????? 1 - 1.5 ??????</li>
            <li>????????????????????????????????????????????????</li>
            <li>?????????????????????????????????????????????</li>
        </ul>
        `
    }else if(pro_select.value == "3"){
        pro_photo.src=`
        ./pro3.png
        `
        ntd_orgi_pro.innerHTML=`
        NT$ 2200/???
        `
        text_pro.innerHTML=`
        <h3>?????????????????????<span class="res">???????????????</span></h3>
        <ul>
            <li>?????????????????????????????????</li>
            <li>?????????????????????????????????????????? 1 - 1.5 ??????</li>
            <li>????????????????????????????????????????????????</li>
            <li>?????????????????????????????????????????????</li>
        </ul>
        `
    }else if(pro_select.value == "4"){
        pro_photo.src=`
        ./pro4.png
        `
        ntd_orgi_pro.innerHTML=`
        NT$ 1000/???
        `
        text_pro.innerHTML=`
        <h3>?????????<span class="res">???????????????</span></h3>
        <ul>
            <li>????????????????????????????????????</li>
            <li>???????????? 30 ??????</li>
            <li>??????????????? 2 ???</li>
            <li>????????????????????????????????????????????????</li>
            <li>????????????????????????????????????????????????????????????</li>
        </ul>
        `
    }else if(pro_select.value == "1"){
        pro_photo.src=`
        ./pro1.png
        `
        ntd_orgi_pro.innerHTML=`
        NT$ 1500/???
        `
        text_pro.innerHTML=`
        <h3>???????????????<span class="res">???????????????</span></h3>
        <ul>
            <li>????????????????????????????????????????????????</li>
            <li>???????????????????????????</li>
            <li>???????????? 30 ??????</li>
            <li>????????????????????????????????????????????????</li>
            <li>?????????????????????????????????????????????</li>
        </ul>
        `
    }
}

function change_artist_op() {
    if (artist_select.value == "2") {
        artist_photo.src=`
        ./artist2.png
        `
        ntd_artist.innerHTML=`
        NT$ 3000/???
        `
        text_artist.innerHTML=`
        <h3>????????????<span class="res">???????????????</span></h3>
        <ul>
            <li>???????????? 30 ??????</li>
            <li>????????????????????? 4 ?????????????????????????????????</li>
            <li>?????????????????????????????????????????????????????????</li>
            <li>?????????????????????????????????????????????????????????????????????</li>
        </ul>
        `
    }else if(artist_select.value == "3") {
        artist_photo.src=`
        ./artist3.png
        `
        ntd_artist.innerHTML=`
        NT$ 5000/???
        `
        text_artist.innerHTML=`
        <h3>????????????<span class="res">???????????????</span></h3>
        <ul>
            <li>??????????????????????????? 2 - 4 ??????</li>
            <li>????????? 5 ???/???????????????????????????</li>
            <li>?????????????????????????????????????????????????????????</li>
            <li>?????????????????????????????????????????????????????????????????????</li>
        </ul>
        `
    }else if(artist_select.value == "1") {
        artist_photo.src=`
        ./artist1.png
        `
        ntd_artist.innerHTML=`
        NT$ 8000/???
        `
        text_artist.innerHTML=`
        <h3>????????????
            <span class="res">???????????????</span>
        </h3>
        <ul>
            <li>???????????? 2 ??????</li>
            <li>????????? 8 ???/???????????????????????????</li>
            <li>?????????????????????????????????????????????????????????</li>
        </ul>
        `
    }
}
function change_other_op() {
    if (other_select.value == "2") {
        other_photo.src=`
        ./other2.png
        `
        other_sec.innerHTML=`
        ????????????<span class="res">???????????????</span>
        `
    }else if(other_select.value == "3") {
        other_photo.src=`
        ./other3.png
        `
        other_sec.innerHTML=`
        ????????????<span class="res">???????????????</span>
        `
    }else if(other_select.value == "4") {
        other_photo.src=`
        ./other4.png
        `
        other_sec.innerHTML=`
        ????????????<span class="res">???????????????</span>
        `
    }else if(other_select.value == "5") {
        other_photo.src=`
        ./other5.png
        `
        other_sec.innerHTML=`
        ????????????<span class="res">???????????????</span>
        `
    }else if(other_select.value == "6") {
        other_photo.src=`
        ./other6.png
        `
        other_sec.innerHTML=`
        ????????????<span class="res">???????????????</span>
        `
    }else if(other_select.value == "7") {
        other_photo.src=`
        ./other7.png
        `
        other_sec.innerHTML=`
        ????????????<span class="res">???????????????</span>
        `
    }else if(other_select.value == "8") {
        other_photo.src=`
        ./other8.png
        `
        other_sec.innerHTML=`
        ?????????<span class="res">???????????????</span>
        `
    }else if(other_select.value == "1") {
        other_photo.src=`
        ./other1.png
        `
        other_sec.innerHTML=`
        ????????????<span class="res">???????????????</span>
        `
    }
}

if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
mask1.addEventListener('mouseenter',commercial1)
mask1.addEventListener('mouseleave',commercial2)

mask2.addEventListener('mouseenter',portraits1)
mask2.addEventListener('mouseleave',portraits2)

mask3.addEventListener('mouseenter',selection1)
mask3.addEventListener('mouseleave',selection2)

mask4.addEventListener('mouseenter',activity1)
mask4.addEventListener('mouseleave',activity2)

id_photo1.addEventListener('mouseenter',changephoto_id_before)
id_photo1.addEventListener('mouseleave',changephoto_id_after)

selfi1.addEventListener('mouseenter',changephoto_selfi1)
selfi1.addEventListener('mouseleave',changephoto_selfi2)
}else{
    mask1.addEventListener('touchstart',commercial1)
    mask2.addEventListener('touchstart',portraits1)
    mask3.addEventListener('touchstart',selection1)
    mask4.addEventListener('touchstart',activity1)
}

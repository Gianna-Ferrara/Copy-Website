function apwebp() {
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-principles", "_blank")
}
function apweba(){
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-a", "_blank")
}
function buttonright(){
    if(document.getElementById("carosel").src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10"){
        document.getElementById("carosel").src = "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"
    }
    else if(document.getElementById("carosel").src === "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"){
        document.getElementById("carosel").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10"
    }
    else if(document.getElementById("carosel").src === "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"){
        document.getElementById("carosel").src = "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
    }
}
function buttonleft(){
    if(document.getElementById("carosel").src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10"){
        document.getElementById("carosel").src = "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
    }
    else if(document.getElementById("carosel").src === "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"){
        document.getElementById("carosel").src = "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"
    }
    else if(document.getElementById("carosel").src === "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg"){
        document.getElementById("carosel").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10"
    }
}
function moveMain(){
    window.location.href="#program"
}
function moveCourse(){
    window.location.href="#courses"
}
function moveExtra(){
    window.location.href="#extra"
}
function moveColl(){
    window.location.href="#coll"
}
function hide(){
  let hid =  document.getElementById("sidebar")
    console.log(hid.style.display)
    if(hid.style.display === "none"){
        hid.style.display = "block"
    }
    else{
        hid.style.display = "none"
    }
}
function hide2(){
    let hid =  document.getElementById("course")
    console.log(hid.style.display)
    if(hid.style.display === "none"){
        hid.style.display = "block"
    }
    else{
        hid.style.display = "none"
    }
    let other = document.getElementById("extracir")
    if(other.style.display === "block"){
        other.style.display = "none"
    }
}
function hide3(){
    let hid =  document.getElementById("extracir")
    console.log(hid.style.display)
    if(hid.style.display === "none"){
        hid.style.display = "block"
    }
    else{
        hid.style.display = "none"
    }
    let other = document.getElementById("course")
    if(other.style.display === "block"){
        other.style.display = "none"
    }
}
function color(){
    if(document.getElementById("ham").style.color === "white"){
        document.getElementById("ham").style.color = "black"
    }
    else{
        document.getElementById("ham").style.color = "white"
    }
}
function movePrince(){
    window.location.href="#prince"
}
function moveA(){
    window.location.href="#A"
}
function moveData(){
    window.location.href="#data"
}
function moveCap(){
    window.location.href="#cap"
}
function moveMath(){
    window.location.href="#math"
}
function moveRob(){
    window.location.href="#rob"
}
function moveCyb(){
    window.location.href="#cyb"
}
function moveCSL(){
    window.location.href="#csl"
}
function moveCIMA(){
    window.location.href="#CIMA"
}

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
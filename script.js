
function initMap() {
    var uluru = { lat: 53.9, lng: 27.5 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 7, center: uluru });

        let oneImage = document.getElementsByClassName("responsible")[0];
        let twoImage = document.getElementsByClassName("responsible")[1];
        let section = document.getElementsByTagName("section")[0];
    
        function isVisible(elem) {
            let coords = elem.getBoundingClientRect();
            let windowHeight = document.documentElement.clientHeight;
            let topVisible = coords.top > 0 && coords.top < windowHeight - 200;
            return topVisible;
        }
    
        section.onscroll = function () {
            if (isVisible(oneImage)) {
                oneImage.classList.remove('hidenLeft');
            }
            if (isVisible(twoImage)) {
                twoImage.classList.remove('hidenRight');
            }
        } 

        window.onscroll = function () {
            if (isVisible(oneImage)) {
                oneImage.classList.remove('hidenLeft');
            }
            if (isVisible(twoImage)) {
                twoImage.classList.remove('hidenRight');
            }
        }

}

window.onload = function () {

    let oneImage = document.getElementsByClassName("responsible")[0];
    let twoImage = document.getElementsByClassName("responsible")[1];
    let section = document.getElementsByTagName("section")[0];

    function isVisible(elem) {
        let coords = elem.getBoundingClientRect();
        let windowHeight = document.documentElement.clientHeight;
        let topVisible = coords.top > 0 && coords.top < windowHeight - 200;
        return topVisible;
    }

    section.onscroll = function () {
        if (isVisible(oneImage)) {
            oneImage.classList.remove('hidenLeft');
        }
        if (isVisible(twoImage)) {
            twoImage.classList.remove('hidenRight');
        }
        console.log("тест");
    }
}



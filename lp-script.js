const navbar = document.querySelector("nav.navbar")
const titleLogo = document.querySelector(".title-logo")
const itemMenuAll = Array.from(document.querySelectorAll(".item-menu"))
const logoWhite = document.querySelector(".logo-white")

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;

    if (prevScrollpos < 100) {
        scrollPositionTop()
    } else {
        scrollPositionBottom()
    }
}

function scrollPositionTop() {
    navbar.classList.add("bg-transparent")
    navbar.classList.remove("bg-white")

    titleLogo.classList.add("color-white")
    titleLogo.classList.remove("color-black")

    itemMenuAll.map((m, i) => {
        m.classList.add("color-white")
        m.classList.remove("color-black")
    })

    logoWhite.setAttribute("src", "https://1.bp.blogspot.com/-PQIVixUIlPg/YN1HeEOaz9I/AAAAAAAAAG0/tv0icj2iBHIkPmsPgHcZRdxU2xGOpQSHQCPcBGAYYCw/s320/manrisk-white.png")
}

function scrollPositionBottom() {
    navbar.classList.remove("bg-transparent")
    navbar.classList.add("bg-white")

    titleLogo.classList.remove("color-white")
    titleLogo.classList.add("color-black")

    itemMenuAll.map((m, i) => {
        m.classList.remove("color-white")
        m.classList.add("color-black")
    })

    logoWhite.setAttribute("src", "https://1.bp.blogspot.com/-jkTYDveiZPY/YN1Hd8V3SFI/AAAAAAAAAG4/eidkyOMbS7ABZjkeEk5WDhQ4MO9QG2A9QCPcBGAYYCw/s320/manrisk-red.png")
}

// ======================================================
// STATE LYT QUEST
let state = {
    menuActive: "Beranda"
}
// ================================


$('[nav-info="beranda"]').click(function () {
    goToContent(".section-app")
    setMenuActive("beranda")
})
$('[nav-info="solusi"]').click(function () {
    goToContent(".content-banyak-masalah")
    setMenuActive("solusi")
})
$('[nav-info="testimoni"]').click(function () {
    goToContent(".kata-mereka")
    setMenuActive("testimoni")
})
$('[nav-info="keuntungan"]').click(function () {
    goToContent(".berbagai-keuntungan")
    setMenuActive("keuntungan")
})
$('[nav-info="faq"]').click(function () {
    goToContent(".selalu-ada-lr.right .content-title", "nav-bar")
    setMenuActive("faq")
})
$('[nav-info="kontak"]').click(function () {
    goToContent(".hubungi-kami")
    setMenuActive("kontak")
})

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("link-kontak")) {
        if (e.target.innerHTML === "Apa itu Manrisk?") {
            goToContent(".content-banyak-masalah")
            setMenuActive("Solusi")
        }
        if (e.target.innerHTML === "Testimoni") {
            goToContent(".kata-mereka")
            setMenuActive("Testimoni")
        }
        if (e.target.innerHTML === "Keunggulan Manrisk") {
            goToContent(".berbagai-keuntungan")
            setMenuActive("Keuntungan")
        }
        if (e.target.innerHTML === "FAQ") {
            goToContent(".selalu-ada-lr.right .content-title")
            setMenuActive("FAQ")
        }
        if (e.target.innerHTML === "Konsultasi") {
            goToContent(".hubungi-kami")
            setMenuActive("Kontak")
        }
    }
})

function goToContent(element, event) {
    if (event === undefined) {
        $("html, body").animate({
            scrollTop: element === ".beranda" ? 0 : element === ".selalu-ada-lr.right .content-title" ? $(element).offset().top - 100 : $(element).offset().top
        },
            500
        );
        return;
    }
    $("html, body").animate({
        scrollTop: element === ".beranda" ? 0 : element === ".selalu-ada-lr.right .content-title" ? $(element).offset().top - 50 : $(element).offset().top
    },
        500
    );
}

function setMenuActive(menuActive) {
    console.log(menuActive)
    state = {
        ...state,
        menuActive: {
            ...state.menuActive,
            menuActive
        }
    }
    itemMenuAll.map((m, i) => m.getAttribute("nav-info") === menuActive.toLowerCase() ? m.classList.add("active") : m.classList.remove("active"))
}

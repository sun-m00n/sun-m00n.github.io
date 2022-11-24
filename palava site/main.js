const _$ = (Selector) => document.querySelector(Selector)

const EnquiryBox = {
    // open: () => _$("#form").classList.add("open"),
    // close: (e) => {
    //     let i = ["FORM", "INPUT", "H3", "BUTTON"]
    //     if (e && i.includes(e.target.tagName)) return
    //     _$("#form").classList.remove("open")
    // }
    view: () => {
        window.scrollTo(0, document.body.scrollHeight)
    }
}

_$("#enquiry_btn").onclick = EnquiryBox.view
window.onscroll = function () {

    if (window.scrollY < 1000 || window.scrollY > 1600) _$("#enquiry_btn").style.display = "initial"
    else if (window.scrollY > 1000 && window.scrollY < 1600) _$("#enquiry_btn").style.display = "none"
}

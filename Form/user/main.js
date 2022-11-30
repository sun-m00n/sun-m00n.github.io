'use strict';

let input_names = [];
(function () {
    // apply CustomCroppr
    ["ApplicantImage", "ApplicantSign"].forEach(fileTagID => {
        let i = document.querySelector(`input[name='${fileTagID}']`)
        let btns = (i.parentNode).querySelectorAll("button")
        CustomCroppr.init({ input: i, crop: btns[0], view: btns[1] })
    })

    // collect form input names
    let names = [];
    document.querySelectorAll("[name]").forEach(node => {
        if (node.tagName == "META") return
        node.setAttribute("required", true)
        names.push(node.name)
    })
    input_names = new Set(names)
})();

function handleFormSubmission(e) {
    e.preventDefault();
    let data = {}
    input_names.forEach(function (name) {
        let field = document.querySelector(`[name=${name}]`)
        let val
        if (field.type != "file") val = field.value
        else if (field.type == "file") val = field.getAttribute("data-of-cropped-image")
        data[name] = val
        // console.log(name)
    })

    document.querySelector("button[type='submit']").setAttribute("disabled", true)

    fetch("https://script.google.com/macros/s/AKfycbwp1qkRfKWUYBZUF4avhbGgDRWXcnrkfRoXcZaXRJHgFmlafbqr-HlG8uTpWPdGV4fb/exec", {
        method: "POST",
        body: JSON.stringify(data),
    })
        // .then(response => console.log(response))
        .then(response => response.json())
        .then(result => {
            alert("Response has been collected.")
            alert("Your Form No:. " + result.formNo)
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
            alert("WAIT...")
            setTimeout(function (e) {
                handleFormSubmission(e)
            }, 60 * 1000, e)
        })
    // console.log(data)
    // console.log(Object.keys(data))
    // console.log(sizeOfData(data))
}

document.querySelector("form").onsubmit = handleFormSubmission


// function sizeOfData(json_data) {
//     let str = null;
//     if (typeof json_data === 'string') str = json_data
//     else str = JSON.stringify(json_data)
//     // Get the length of the Uint8Array
//     let bytes = new TextEncoder().encode(str).length;
//     let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//     if (bytes == 0) return `0 ${sizes[0]}`;
//     let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
//     if (i == 0) return bytes + ' ' + sizes[i];
//     return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
// }

function addScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
}
addScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');


function print() {
    let e = document.querySelector("form")
    html2pdf(e)
}


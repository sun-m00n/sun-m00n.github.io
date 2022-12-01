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
    })

    document.querySelector("button[type='submit']").setAttribute("disabled", true)

    fetch("https://script.google.com/macros/s/AKfycbwp1qkRfKWUYBZUF4avhbGgDRWXcnrkfRoXcZaXRJHgFmlafbqr-HlG8uTpWPdGV4fb/exec", {
        method: "POST",
        body: JSON.stringify(data),
    })
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
}

document.querySelector("form").onsubmit = handleFormSubmission


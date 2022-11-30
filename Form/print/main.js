function getPDF(selector) {
    html2pdf()
        .set({
            margin: 0,
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        })
        .from(selector)
        .save()
}

const print = () => getPDF(document.querySelector("#A4"))

const api_keys = {
    client: "https://script.google.com/macros/s/AKfycbwp1qkRfKWUYBZUF4avhbGgDRWXcnrkfRoXcZaXRJHgFmlafbqr-HlG8uTpWPdGV4fb/exec",
    admin: "https://script.google.com/macros/s/AKfycbzEIbRCEIle4IR3Ax073-BYS-gSRkgXGzjHsYOT06MFzFrOO5NLPbn2z1Cv6lrKl8aV/exec"
}
//create JSON object from 2 dimensional Array
function arrToObject(arr) {
    //assuming header
    var keys = arr[0];
    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);

    var formatted = [],
        data = newArr,
        cols = keys,
        l = cols.length;
    for (var i = 0; i < data.length; i++) {
        var d = data[i],
            o = {};
        for (var j = 0; j < l; j++)
            o[cols[j]] = d[j];
        formatted.push(o);
    }
    return formatted;
}
function FETCH(type) {
    let req_body = {}
    if (type == "all") req_body.type = "all"
    else if (type == "new") req_body.type = "new"
    fetch(api_keys.admin, {
        method: "POST",
        body: JSON.stringify(req_body)
    })
        .then(response => response.json())
        .then(result => {
            // console.log(result)
            // (result.data).forEach(async function (a) {
            //     // console.log(a)
            //     addRecord(a)
            // })
            addRecords(result.data)
        })
        .catch(error => console.log(error))
}
function DELETE(formID) {
    fetch(api_keys.client, {
        method: "POST",
        body: JSON.stringify({ formNo: formID })
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log(error))
}
const main = document.querySelector("main")
async function addRecord(record) {
    console.log(record)
    main.innerHTML += `
         <div class="list">
            <input type="checkbox">
            <input type="text" name="formID" value="${record[0]}" readonly>
            <input type="text" name="name" value="${record[1]}" readonly>
            <a href="tel:${"d.ContactNo"}">
                <input type="tel" name="contactNo" value="${"d.ContactNo"}" readonly>
            </a>
            <button type="button">View</button>
            <button type="button">Download</button>
            <button type="button">Delete</button>
            <input type="text" name="data" value='${"JSON.stringify(d)"}' hidden readonly/>
        </div>
        `;
}
function addRecords(data) {
    data = arrToObject(data)
    data.forEach(async function (d) {
        main.innerHTML += `
         <div class="list">
            <input type="checkbox">
            <input type="text" name="formID" value="${d["Form No."]}" readonly>
            <input type="text" name="name" value="${d.FullNameOfBride_Groom}" readonly>
            <a href="tel:${d.ContactNo}">
                <input type="tel" name="contactNo" value="${d.ContactNo}" readonly>
            </a>
            <button type="button">View</button>
            <button type="button">Download</button>
            <button type="button">Delete</button>
            <input type="text" name="data" value='${JSON.stringify(d)}' hidden readonly/>
        </div>
        `;
    })

    fetched_data.push(...data)
    // console.log(data)
    console.log(fetched_data)
}
let fetched_data = [];
FETCH("all")

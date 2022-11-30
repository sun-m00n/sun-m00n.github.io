const
    URLS = {
        client: "https://script.google.com/macros/s/AKfycbwp1qkRfKWUYBZUF4avhbGgDRWXcnrkfRoXcZaXRJHgFmlafbqr-HlG8uTpWPdGV4fb/exec",
        admin: "https://script.google.com/macros/s/AKfycbzEIbRCEIle4IR3Ax073-BYS-gSRkgXGzjHsYOT06MFzFrOO5NLPbn2z1Cv6lrKl8aV/exec"
    },
    $ = (e) => document.querySelector(e);

let last_record_no = 1;

//create JSON object from 2 dimensional Array
function arrToObject(arr) {
    //assuming header
    let keys = arr[0];
    //vacate keys from main array
    let newArr = arr.slice(1, arr.length);

    let formatted_array = [],
        data = newArr,
        cols = keys,
        l = cols.length;
    for (let i = 0; i < data.length; i++) {
        let d = data[i],
            o = {};
        for (let j = 0; j < l; j++)
            o[cols[j]] = d[j];
        formatted_array.push(o);
    }
    return formatted_array;
}
async function add_records(records) {
    records.forEach(async function (data) {
        $("main").innerHTML += `
         <div class="list">
            <input type="checkbox">
            <input type="text" name="formID" value="${data["Form No."]}" readonly>
            <input type="text" name="name" value="${data.FullNameOfBride_Groom}" readonly>
            <a href="tel:${"d.ContactNo"}">
                <input type="tel" name="contactNo" value="${"d.ContactNo"}" readonly>
            </a>
            <button type="button">View</button>
            <button type="button">Download</button>
            <button type="button">Delete</button>
            <input type="text" name="data" value='${"JSON.stringify(d)"}' hidden readonly/>
        </div>
        `;
    })
}

function no_records_available() {
    $("main").innerHTML += `<h3>No records found</h3>`
}
function fetch_records() {
    console.log(last_record_no)
    fetch(URLS.admin, {
        method: "POST",
        body: JSON.stringify({
            lastrecord: last_record_no
        })
    })
        .then(response => response.json())
        .then(function (res) {
            console.log(res)
            if (!res.data) {
                no_records_available()
                return
            }
            last_record_no = last_record_no + (res.data).length - 1
            // console.log(res.data.length, last_record_no)
            let data = arrToObject(res.data)
            add_records(data)
        })

}
let should_fetch = true
function handleInfiniteScroll() {
    if (!should_fetch) return
    // if reached to the end of the page
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        fetch_records()
        should_fetch = false
        setTimeout(function () {
            should_fetch = true
        }, 3000)
        // console.log("joo")
    }
}



window.onscroll = handleInfiniteScroll
handleInfiniteScroll()
// end

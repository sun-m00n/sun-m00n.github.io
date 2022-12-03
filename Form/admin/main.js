const api_url = "https://script.google.com/macros/s/AKfycbzEIbRCEIle4IR3Ax073-BYS-gSRkgXGzjHsYOT06MFzFrOO5NLPbn2z1Cv6lrKl8aV/exec"
const _$ = (e) => document.querySelector(e)

let _ids = []
let _fetched_info_ids = []
let _unfetched_info_ids = []
let _fetched_record_ids = []
let _unfetched_record_ids = []
let _rendered_items_id = []
let _info = {}
let _record = {}

const unqiue_union = (a, b) => [...new Set([...a, ...b])]
const symmetrical_difference = (a, b) => a.filter(x => !b.includes(x)).concat(b.filter(y => !a.includes(y)));
function arrayCompare(_arr1, _arr2) {
    if (
        !Array.isArray(_arr1)
        || !Array.isArray(_arr2)
        || _arr1.length !== _arr2.length
    ) {
        return false;
    }

    // .concat() to not mutate arguments
    const arr1 = _arr1.concat().sort();
    const arr2 = _arr2.concat().sort();

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function get_IDS() {
    fetch(api_url, {
        method: 'POST',
        body: JSON.stringify({ type: "ids" }),
    })
        .then(response => response.json())
        .then(function (ids) {
            ids = ids.filter(function (i) {
                if (i == '' || i == null || i == undefined) { }
                else { return i }
            })
            if (arrayCompare(_ids, ids)) {
                console.log("No new record found!")
                return
            }
            console.log("New records found!")
            _ids = unqiue_union(_ids, ids.reverse())
            _unfetched_info_ids = symmetrical_difference(_unfetched_info_ids, _ids)
            _unfetched_record_ids = symmetrical_difference(_unfetched_record_ids, _ids)
            get_INFO()
        })
        .catch(error => console.log('error', error));
}

function get_INFO() {

    for (let i of Object.keys(_info)) {
        if (_info[Number(i)]) {
            render(_info[Number(i)])
            if (_unfetched_info_ids.indexOf(Number(i))) {
                _unfetched_info_ids.splice(
                    _unfetched_info_ids.indexOf(Number(i)),
                    1)
            }
        }
    }
    if (_unfetched_info_ids.length < 1) return

    let id = _unfetched_info_ids.splice(0, 25)

    console.log("Fetching info of ids : ", id)

    fetch(api_url, {
        method: 'POST',
        body: JSON.stringify({ type: "basic_info", ids: id }),
    })
        .then(response => response.json())
        .then(function (data) {
            _fetched_info_ids += [...id]
            let arr = objFrom2Darr(data)
            _info = { ..._info, ...arr }
            for (let i in arr) {
                render(arr[i])
                if (_unfetched_info_ids.indexOf(Number(i)) < 0) continue
                _unfetched_info_ids.splice(
                    _unfetched_info_ids.indexOf(Number(i)),
                    1)
            }
        })
        .catch(error => console.log('error', error));
}
async function get_RECORDS(id) {
    let filteredID = [...id]

    for (let i of id) {
        if (_record[Number(i)]) {
            downloadPDF(_record[Number(i)])
            filteredID.splice(filteredID.indexOf(i), 1)
        }
    }

    id = filteredID
    if (id.length < 1) return

    console.log("Fetching records of id : ", id)

    fetch(api_url, {
        method: 'POST',
        body: JSON.stringify({ type: "records", ids: id }),
    })
        .then(response => response.json())
        .then(function (data) {
            console.log("new records fetched")
            let arr = objFrom2Darr(data, 1)
            _fetched_record_ids += [...id]
            _record = { ..._record, ...arr }
            for (let i in arr) {
                downloadPDF(_record[Number(i)])
                _unfetched_record_ids.splice(
                    _unfetched_record_ids.indexOf(Number(i)),
                    1)
                break;
            }
        })
        .catch(error => console.log('error', error));
}

function objFrom2Darr(arr, primary_key = 0) {
    let keys = arr[0]
    // arr = arr.shift()
    let obj = {}
    for (let i in arr) {
        let o = {}
        for (let j in arr[i]) {
            o[keys[j]] = arr[i][j]
        }
        obj[arr[i][primary_key]] = o
    }
    if (obj["Form No."]) delete obj["Form No."]
    return obj
}

async function render(data) {

    if (_rendered_items_id.includes(Number(data["Form No."]))) return
    _rendered_items_id.push(Number(data["Form No."]))

    let p = document.createElement("table")
    p.innerHTML = `<tr class="" name="${data["Form No."]}">
    <td>${data["Form No."]}</td>
    <td>${data.FullNameOfBride_Groom}</td>
    <td>${data.ApplicantFullName}</td>
    <td><a href="tel:+91${data.ContactNo}">${data.ContactNo}</a></td>
    <td><svg data-formno="${data['Form No.']}" onclick="get_RECORDS([this.getAttribute('data-formno')],this)" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
            image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"
            onclick="init_download_all()" id="dwnbtn">
            <path
                d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm264.81 31.11c3.56.15 6.09 1.33 7.54 3.55 3.98 5.94-1.44 11.81-5.19 15.94l-40.04 40.71c-4.32 4.26-9.32 4.31-13.64 0l-41.01-41.82c-3.51-3.95-7.86-9.36-4.19-14.83 1.49-2.22 4-3.4 7.56-3.55h19.74v-32.45c0-5.82 4.81-10.69 10.7-10.69h28.06c5.9 0 10.71 4.8 10.71 10.69v32.45h19.76z" />
        </svg></td>
    </tr>`;
    console.log()
    _$("table.sortable tbody").prepend(p.querySelector("tr"))
}

function fillPDF(data) {
    let gdate = (str) => {
        let d = new Date(str)
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    }
    let $ = (e) => document.querySelector("#print").querySelector(e)
    let $$ = (e) => document.querySelector("#print").querySelectorAll(e)

    for (let key in data) {
        let e = _$(`[name='${key}']`)
        if (e == null) continue
        e.innerText = data[key]
    }

    let keys = ["BirthDate", "BirthTime", "TimeStamp", "ApplicantSign", "ApplicantImage", "FormNo", "Home", "OtherInfo"]
    $(`[name="${keys[0]}"]`).innerText = gdate(data[keys[0]])
    $(`[name="${keys[1]}"]`).innerText = new Date(data[keys[1]]).toLocaleTimeString("en-US")
    $(`[name="${keys[2]}"]`).innerText = gdate(data[keys[2]])
    $(`[name="${keys[3]}"]`).src = data[keys[3]]
    $(`[name="${keys[4]}"]`).src = data[keys[4]]
    $(`[name="${keys[5]}"]`).innerText = data["Form No."]

    $$(`[name=${keys[6]}]`).forEach(i => {
        if (i.value == data[keys[6]]) i.checked = true
    })
    $$(`[name=${keys[7]}]`).forEach(i => {
        if (i.value == data[keys[7]]) i.checked = true
    })
}

function downloadPDF(data) {
    // fill data
    fillPDF(data)
    console.log("printing...", data["Form No."])
    // print
    let makePDF = document.querySelector("#A4")
    setTimeout(() => {
        html2pdf().set({
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        }).from(makePDF).save(`${data["Form No."]}-${new Date()}`);

    }, 1000);
}
function* download_all(ids) {
    get_RECORDS(ids)
}
function init_download_all() {
    let ids = [..._ids]
    let chunkSize = 5
    let chunks = []
    let request_time = 0

    for (let i = 0; i < ids.length; i += chunkSize) {
        let chunkOfIds = ids.slice(i, i + chunkSize)
        chunks.push(chunkOfIds)
        setTimeout(function () {
            download_all(chunkOfIds).next()
        }, request_time)
        request_time += 3000
    }
}

function search(value) {
    let items = [...document.querySelectorAll("tr[name]")]
    if (value.length < 1)
        items.forEach(item => { item.classList.remove("hide") })

    items.forEach(item => {
        let context = (item.innerText).toLowerCase()
        if (context.includes(value)) item.classList.remove("hide")
        else item.classList.add("hide")
    })
}

get_IDS()
setInterval(get_IDS, 60 * 1000)

// end

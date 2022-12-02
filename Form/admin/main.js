const api_url = "https://script.google.com/macros/s/AKfycbzEIbRCEIle4IR3Ax073-BYS-gSRkgXGzjHsYOT06MFzFrOO5NLPbn2z1Cv6lrKl8aV/exec"
const _$ = (e) => document.querySelector(e)

let _ids = []
let _fetched_info_ids = []
let _unfetched_info_ids = []
let _fetched_record_ids = []
let _unfetched_record_ids = []
let _info = {}
let _record = {}

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
            console.log(ids)
            _ids = ids.reverse()
            _unfetched_info_ids = _ids
            _unfetched_record_ids = _ids
            get_INFO()
        })
        .catch(error => console.log('error', error));
}

function get_INFO() {
    let id = _unfetched_info_ids.splice(0, 25)
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
            console.log(arr)
            // console.log(_fetched_info_ids, _unfetched_info_ids)
        })
        .catch(error => console.log('error', error));
}

async function get_RECORDS(id) {

    for (let i of id) {
        if (_record[Number(i)]) {
            downloadPDF(_record[Number(i)])
            id.splice(
                id.indexOf(Number(i)), 1
            )
        }
    }
    if (id.length < 1) return

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
            // console.log(data, arr, _fetched_record_ids, _unfetched_record_ids, _record)
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
    let p = document.createElement("table")
    p.innerHTML = `<tr>
            <td>${data["Form No."]}</td>
            <td>${data.FullNameOfBride_Groom}</td>
            <td>${data.ApplicantFullName}</td>
            <td>${data.ContactNo}</td>
            <td><button data-formno="${data['Form No.']}" onclick="get_RECORDS([this.getAttribute('data-formno')])">Download</button></td>
        </tr>`;
    console.log()
    _$("table.sortable tbody").prepend(p.querySelector("tr"))
}

function fillPDF(data) {
    // let data = _data["1007"]
    let gdate = (str) => {
        let d = new Date(str)
        console.log(d)
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
    $(`[name="${keys[1]}"]`).innerText = new Date(data[keys[1]]).toLocaleTimeString()
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
    console.log("print")
    // print
    html2pdf()
        .set({
            margin: 0,
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        })
        .from(_$("#A4"))
        .save()
}
function* download_all(ids) {
    get_RECORDS(ids)
}
function init_download_all() {
    let ids = [..._ids]
    // let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15]
    let chunkSize = 5
    let chunks = []
    let request_time = 0
    for (let i = 0; i < ids.length; i += chunkSize) {
        let chunkOfIds = ids.slice(i, i + chunkSize)
        chunks.push(chunkOfIds)
        setTimeout(function () {
            console.log(chunkOfIds)
            // download_all(chunkOfIds).next()
        }, request_time)
        request_time += 5000
    }
}

function search(value) {
    if (value.length < 1) return
    console.log(value)
}

function enableClicks() { }

// function TEST() {
// get_IDS()
// render({ formNo: 1, n: "A", b: 'b', contact: 908765 })
// render({ formNo: 2, n: "b", b: 'e', contact: 908765 })
// render({ formNo: 5, n: "c", b: 'd', contact: 908765 })
// render({ formNo: 7, n: "d", b: 'c', contact: 908765 })
// render({ formNo: 9, n: "e", b: 'v', contact: 908765 })
// setTimeout(() => {
//     render({ formNo: 12, n: "f", b: 'a', contact: 908765 })
// }, 3000);
// arr2obj([["a", 'b', 'c'], ["d", 'e', 'f'], ["g", 'h', 'i']])
// } TEST()

// get_IDS()


















// end

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
            // console.log(_fetched_info_ids, _unfetched_info_ids)
        })
        .catch(error => console.log('error', error));
}

async function get_RECORDS(id) {
    fetch(api_url, {
        method: 'POST',
        body: JSON.stringify({ type: "records", ids: id }),
    })
        .then(response => response.json())
        .then(function (data) {
            let arr = objFrom2Darr(data, 1)
            _fetched_record_ids += [...id]
            _record = { ..._record, ...arr }
            for (let i in arr) {
                print(_record[i])
                _unfetched_record_ids.splice(
                    _unfetched_record_ids.indexOf(Number(i)),
                    1)
                break;
            }
            console.log(data, arr)
        })
        .catch(error => console.log('error', error));
}

function objFrom2Darr(arr, primary_key = 0) {
    let keys = arr[0]
    arr.shift()
    let obj = {}
    for (let i in arr) {
        let o = {}
        for (let j in arr[i]) {
            o[keys[j]] = arr[i][j]
        }
        obj[arr[i][primary_key]] = o
    }
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

function print(data) {
    // fill data
    _$("#A4 * #sign img").src = data["ApplicantSign"]
    _$("#A4 * #photo img").src = data["ApplicantImage"]
    for (let key in data) {
        let e = _$(`[name='${key}']`)
        if (e == null) continue
        e.value = data[key]
    }
    // console.log(key)

    // print
    // _$("#print").style.display = "block"
    // html2pdf()
    //     .set({
    //         margin: 0,
    //         pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    //     })
    //     .from(_$("#A4"))
    //     .save()
}
function* download_step() {

}
function init_download_all() {
    let r = { 1: 0, 2: 0 }
    // for (const key in _record) {
    for (const key in r) {
        console.log(key)
    }
}

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

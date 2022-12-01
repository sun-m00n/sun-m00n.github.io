const api_url = "https://script.google.com/macros/s/AKfycbzEIbRCEIle4IR3Ax073-BYS-gSRkgXGzjHsYOT06MFzFrOO5NLPbn2z1Cv6lrKl8aV/exec"
const _$ = (e) => document.querySelector(e)

let _ids = []
let _fetched_info_ids = []
let _unfetched_info_ids = []
let _fetched_record_ids = []
let _unfetched_record_ids = []
let _info = {}
let _record = {}

const GET = {
    ids: function () {
        // fetch ids
        // _ids = response_ids
        // _ids_unfetched_info = _ids
        // _ids_unfetched_records = _ids
    },
    info: function () {
        // 1st 25 from idsunfetched
        // fetch 
        // add into ids fetched
        // add into info
        // render
    },
    record: function () {
        // 1st 5 from idsunfetched
        // fetch 
        // add into ids fetched
        // add into info
        // render
    }
}
function get_IDS() { }
function get_INFO() { }
function get_RECORDS() { }
function arr2obj(arr) {
    //assuming header
    let keys = arr[0];
    //vacate keys from main array
    let newArr = arr.slice(1, arr.length);

    let array = [],
        data = newArr,
        cols = keys,
        l = cols.length;
    for (let i = 0; i < data.length; i++) {
        let d = data[i], o = {};
        for (let j = 0; j < l; j++)o[cols[j]] = d[j];
        array.push(o);
    }
    console.log(array)
    return array;
}
async function render(data) {
    let p = document.createElement("table")
    p.innerHTML = `<tr>
            <td>${data.formNo}</td>
            <td>${data.n}</td>
            <td>${data.b}</td>
            <td>${data.contact}</td>
            <td><button>Download</button></td>
        </tr>`;
    console.log()
    _$("table.sortable tbody").prepend(p.querySelector("tr"))
}
function download() { }
function downloadAll() { }

function TEST() {
    // render({ formNo: 1, n: "A", b: 'b', contact: 908765 })
    // render({ formNo: 2, n: "b", b: 'e', contact: 908765 })
    // render({ formNo: 5, n: "c", b: 'd', contact: 908765 })
    // render({ formNo: 7, n: "d", b: 'c', contact: 908765 })
    // render({ formNo: 9, n: "e", b: 'v', contact: 908765 })
    // setTimeout(() => {
    //     render({ formNo: 12, n: "f", b: 'a', contact: 908765 })
    // }, 3000);
    // arr2obj([["a", 'b', 'c'], ["d", 'e', 'f'], ["g", 'h', 'i']])
} TEST()

// 

// response
let req_ids = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002]
let req_infos = [
    ["Form No.", "FullNameOfBride_Groom", "ApplicantFullName", "ContactNo"],
    [2, "Leonardo Banisch", "Robby Farey", 1081198599],
    [4, "Roman Halt", "Giuseppe Genery", 4872149533],
    [9, "Travers Hurdiss", "Gawen Rogier", 5115630497],
    [10, "Donall Roft", "Roley Bainbridge", 7792034546],
    // [89, "Christophe Scutchings", "Davidde Lashmar", 6355464447], 
    // [16, "Ray Banville", "Pedro Vertey", 4342549720], 
    // [15, "Fay Salzburger", "Shelby Mewes", 1594159403], 
    // [11, "Daniela Gothliff", "Gerri Farrer", 6682828940]
]
let req_infos_opt = {
    "type": "info",
    "ids": [2, 4, 9, 10, 89, 16, 15, 11]
}
let req_records = [
    [
        "TimeStamp",
        "Form No.",
        "FullNameOfBride_Groom",
        "ApplicantFullName",
        "ContactNo",
        "Address",
        "PlaceOfBirth",
        "BirthDate",
        "BirthTime",
        "HeightInFoot",
        "HeightInInch",
        "DescribeColor",
        "Qualification",
        "Occupation",
        "Salary",
        "Home",
        "Expectations",
        "OtherInfo",
        "FatherFullName",
        "GuardianOccupation",
        "MotherFullName",
        "FamilyInfo",
        "Bride_GroomRelationship",
        "ApplicantImage",
        "ApplicantSign"
    ],
    [
        "2022-07-22T20:44:48Z",
        2,
        "Leonardo Banisch",
        "Robby Farey",
        1081198599,
        "11207 Continental Lane",
        "Declaration",
        "6/13/2022",
        "1899-12-30T08:53:50.000Z",
        69,
        3,
        "Red",
        "Hawk-eagle, crowned",
        "Vagram",
        1430275,
        false,
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n \n Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n \n Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n \n Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "####",
        "Kenny Haythorn",
        "Spizaetus coronatus",
        "Cal Hischke",
        "울란바토르",
        "",
        ""
    ],
    [
        "2022-11-11T16:35:50Z",
        4,
        "Roman Halt",
        "Giuseppe Genery",
        4872149533,
        "99 Beilfuss Plaza",
        "Lyons",
        "10/15/2022",
        "1899-12-30T15:59:50.000Z",
        45,
        70,
        "Purple",
        "Little blue penguin",
        "Konklab",
        5418077,
        true,
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n \n Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "####",
        "Raven Peet",
        "Eudyptula minor",
        "Cooper Pendergast",
        "‪‪test‪",
        "",
        ""
    ],
    [
        "2022-11-04T00:22:59Z",
        9,
        "Travers Hurdiss",
        "Gawen Rogier",
        5115630497,
        "5 Riverside Point",
        "Donald",
        "2/18/2022",
        "1899-12-30T07:52:50.000Z",
        70,
        86,
        "Turquoise",
        "European red squirrel",
        "Biodex",
        1698106,
        false,
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n \n Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n \n Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n \n In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n \n Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "####",
        "Binnie Lewsey",
        "Sciurus vulgaris",
        "Aubine Golledge",
        ",。・:*:・゜’( ☻ ω ☻ )。・:*:・゜’",
        "",
        ""
    ],
    [
        "2022-08-18T22:59:07Z",
        10,
        "Donall Roft",
        "Roley Bainbridge",
        7792034546,
        "45081 Scott Trail",
        "Nelson",
        "2022-04-04T18:30:00.000Z",
        "1899-12-30T07:53:50.000Z",
        49,
        73,
        "Puce",
        "Superb starling",
        "Sub-Ex",
        1911478,
        false,
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n \n Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n \n Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "####",
        "Lauren Southall",
        "Lamprotornis superbus",
        "Yvor Tubb",
        "",
        "",
        ""
    ]
]
let req_records_opt = {
    "type": "records",
    "ids": [2, 4, 9, 10]
}


// const api_url = "https://script.google.com/macros/s/AKfycbzEIbRCEIle4IR3Ax073-BYS-gSRkgXGzjHsYOT06MFzFrOO5NLPbn2z1Cv6lrKl8aV/exec"
const api_url = ""
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

// let myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append('Access-Control-Allow-Origin', 'https://*');
// myHeaders.append("Cookie", "NID=511=pjEz7jYmE1eIwlDhVQyK-bf8rW5Khjduu01vvngCxMfH1YLkMFKt4ClEfUJvBoiPHyjYQdMugGMig1HHX-AuAcxMv_VpVahHyROTsjIzm2opOEvub1QaQkVjfRYDUEkEeqbJ6PDELClYiRYuLDR_8H5JOn-2dBPxMGfvrGQ4xjc");

function get_IDS() {
    // fetch(api_url, {
    //     method: 'POST',
    //     body: JSON.stringify({ type: "ids" }),
    // })
    //     .then(response => response.text())
    //     .then(function (ids) {
    let ids = req_ids
    _ids = ids
    _unfetched_info_ids = _ids
    _unfetched_record_ids = _ids
    get_INFO()
    // })
    // .catch(error => console.log('error', error));
}
function get_INFO() {
    // let id = _unfetched_info_ids.slice(0, 25)
    id = [2, 4, 9, 10]
    // fetch(api_url, {
    //     method: 'POST',
    //     // mode: "no-cors",
    //     body: JSON.stringify({ type: "basic_info", ids: id }),
    // })
    //     .then(response => console.log(response))
    //     .then(function (data) {
    let data = req_infos
    _fetched_info_ids += [...id]
    let arr = objFrom2Darr(data)
    _info = { ..._info, ...arr }
    for (let i in arr) {
        render(arr[i])
        _unfetched_info_ids.splice(
            _unfetched_info_ids.indexOf(Number(i)),
            1)
    }
    // console.log(_fetched_info_ids, _unfetched_info_ids)
    // })
    // .catch(error => console.log('error', error));
    // let data = [["Form No.", "FullNameOfBride_Groom", "ApplicantFullName", "ContactNo"], [2, "Leonardo Banisch", "Robby Farey", 1081198599], [4, "Roman Halt", "Giuseppe Genery", 4872149533], [9, "Travers Hurdiss", "Gawen Rogier", 5115630497], [10, "Donall Roft", "Roley Bainbridge", 7792034546], [89, "Christophe Scutchings", "Davidde Lashmar", 6355464447], [16, "Ray Banville", "Pedro Vertey", 4342549720], [15, "Fay Salzburger", "Shelby Mewes", 1594159403], [11, "Daniela Gothliff", "Gerri Farrer", 6682828940]]
    // let arr = arr2obj(data)
    // for (let i of arr) {
    //     render(i)
    // }
}
function get_RECORDS(id) {
    // console.log(id)
    // let id = _unfetched_info_ids.slice(0, 5)
    // fetch(api_url, {
    //     method: 'POST',
    //     body: JSON.stringify({ type: "records", ids: id }),
    // })
    //     .then(response => console.log(response))
    //     .then(function (data) {
    let arr = objFrom2Darr(req_records, 1)
    _fetched_record_ids += [...id]
    _record = { ..._record, ...arr }
    // _record += [...arr]
    for (let i in arr) {
        // console.log(i)
        init_download(_record[i])
        _unfetched_record_ids.splice(
            _unfetched_record_ids.indexOf(Number(i)),
            1)
        break;
    }
    console.log(_fetched_record_ids, _unfetched_record_ids)

    //     })
    //     .catch(error => console.log('error', error));
}
function arr2obj2(arr) {
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
function init_download(data) {

    console.log(data)
    // fill data
    for (let key in data) {
        let e = _$(`[name='${key}']`)
        console.log(e)
    }
    // console.log(key)

    // print
    // html2pdf()
    //     .set({
    //         margin: 0,
    //         pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    //     })
    //     .from(_$("#A4"))
    //     .save()

}
function downloadAll() { }

function TEST() {
    get_IDS()
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


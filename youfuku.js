let tops_ichiran = document.querySelector('#tops_ichiran');
let bottoms_ichiran = document.querySelector('#bottoms_ichiran');
let outer_ichiran = document.querySelector('#outer_ichiran');
let accessories_ichiran = document.querySelector('#accessories_ichiran');

const tops = [
    {
        name: 'Tシャツ',
        img: 't.png',
        category: 'トップス',
        sleeveLength: '半袖',
        color: 'White',
        material_1: '綿',
    },

    {
        name: 'ソフトネックフリースクルーネックT',
        img: 'tb.png',
        category: 'トップス',
        sleeveLength: '長袖',
        color: 'Dark Gray',
        material_1: 'ポリエステル',
        material_2: 'ポリウレタン',
    },
];

for (let i = 0; i < tops.length; i++) {
    const { name, img } = tops[i];
    const content = `<div><img id=${tops[i].name} class="topsImg" src="images/${img}"alt=""><p>${name}</p></div>`;
    tops_ichiran.insertAdjacentHTML('beforeend', content);

    console.log(tops[i].name);
}
$('.topsImg').on('click', function (e) {
    $('#topsChoice').text(e.target.id);
    console.log(e.target.id);
});


// let topsHtml = [];

// for (let i = 0; i < tops.length; i++) {
//     topsHtml.push('<p>' + tops[i].name + '<p>');
//     // topsHtml,push('<img>' + tops[i].image + 'img')
// }
// $('#tops_ichiran').html(topsHtml);
// console.log(topsHtml);




// $('#bottoms').on('click', function () {
const bottoms = [
    {
        name: 'ツイードタックワイドパンツ',
        img: 'tweed.png',
        category: 'ボトムス',
        color: 'Dark Gray',
        material_1: '毛',
        material_2: 'ポリエステル',
        material_3: 'レーヨン',
        material_4: '綿',
    },
];

for (let i = 0; i < bottoms.length; i++) {
    const { name, img } = bottoms[i];
    const content_b = `<div><img id=${bottoms[i].name} class="bottomsImg" src="images/${img}" alt=""><p>${name}</p></div>`;
    bottoms_ichiran.insertAdjacentHTML('beforeend', content_b);
}
$('.bottomsImg').on('click', function (e) {
    $('#bottomsChoice').text(e.target.id);
    console.log(e.target.id);
});

// $('#outer').on('click', function () {
const outer = [
    {
        name: 'ダブルフェイスラップコート',
        img: 'coat.png',
        category: 'アウター',
        sleeveLength: '長袖',
        color: 'Navy',
        material_1: 'ナイロン',
        material_2: '毛',
        material_3: 'ポリエステル',
    },
    {
        name: 'ライトフリースフルジップパーカ',
        img: 'hoodie.png',
        category: 'アウター',
        sleeveLength: '長袖',
        color: 'Off White',
        material_1: 'ポリエステル',
    },
];

for (let i = 0; i < outer.length; i++) {
    const { name, img } = outer[i];
    const content_o = `<div><img id=${outer[i].name} class="outerImg" src="images/${img} "alt=""><p>${name}</p></div>`;
    outer_ichiran.insertAdjacentHTML('beforeend', content_o);
}
$('.outerImg').on('click', function (e) {
    $('#outerChoice').text(e.target.id);
    console.log(e.target.id);
});
console.log(outer_ichiran);

const accessories = [
    {
        name: 'ウールベレー',
        img: 'beret.png',
        category: '小物',
        color: 'Off White',
        material_1: '毛',
        material_2: 'ポリエステル',
    },
];

for (let i = 0; i < accessories.length; i++) {
    const { name, img } = accessories[i];
    const content_a = `<div><img id=${accessories[i].name} class="accessoriesImg" src="images/${img}" alt=""><p>${name}</p></div>`;
    accessories_ichiran.insertAdjacentHTML('beforeend', content_a);
}
$('.accessoriesImg').on('click', function (e) {
    $('#accessoriesChoice').text(e.target.id);
    console.log(e.target.id);
});
console.log(accessories_ichiran);

// const data = {
//     tops: "",
//     bottoms: "",
//     outer:"",
//     accessories"",
// };

// const jsonData = JSON.stringify(data);
// localStorage.setItem("memo", jsonData);
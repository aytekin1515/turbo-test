const arr = [
    { id: 1, marka: 'Mercedes', qiymet: '10 500', model: 'w202', mator: '2.0', il: '1998', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2022%2F02%2F07%2F16%2F20%2F36%2F05ae3ec7-b845-4458-8033-99eec8aec1a2%2F83217_ryHX2Q7AONB3-jC_sEJ3mQ.jpg' },
    { id: 2, marka: 'Kia', qiymet: '21 000', model: 'Rio', mator: '1.4', il: '2014', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2021%2F09%2F10%2F11%2F40%2F18%2Fbe262b8b-13ff-40ee-9664-4c7c4ea93e4b%2F94552_bf7HpneCobaNn8ooAalBwg.jpg' },
    { id: 3, marka: 'Hyundai', qiymet: '12 000', model: 'Tucson', mator: '2.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/f660x496/2020%2F02%2F08%2F12%2F31%2F23%2Fdfd4bcdd-5279-4807-85cb-58aa153c900f%2F44290_Il5UqH7nhzVTrAAfdt5BuQ.jpg' },
    { id: 4, marka: 'LADA (VAZ)', qiymet: '35 000', model: '2107', mator: '1.6', il: '2010', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2022%2F09%2F29%2F04%2F48%2F26%2Ff85c3fb0-4f77-4157-8b15-a3122bbaf36d%2F15612_S_xRbeuG6jQhZhkc_JM3wg.jpg' },
    { id: 5, marka: 'BMW', qiymet: '28 700', model: 'M5 e39', mator: '4.4', il: '1998', reng: 'blue', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F15%2F17%2F42%2F55%2F5e61d0d8-ac41-42d4-8a34-33f9c563bba8%2F4747_ZOpsrcdSRl_mByG6tDsiqQ.jpg' },
    { id: 6, marka: 'Mercedes', qiymet: '86 500', model: 'CLS', mator: '5.5', il: '2013', reng: 'gray', img: 'https://turbo.azstatic.com/uploads/full/2021%2F12%2F09%2F01%2F51%2F22%2F2e3d6e19-baa7-4625-89e0-d358238808ce%2F21872_z_Z4BhoRifgwGf0Fz_hvJw.jpg' },
    { id: 7, marka: 'Toyota', qiymet: '54 000', model: 'Camry', mator: '3.0', il: '2021', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2021%2F06%2F18%2F16%2F16%2F02%2Fd4a556f8-adc6-4ff8-897b-2079ea777987%2F24971_KEan9mcELSSmUAPbxG1KEw.jpg' },
    { id: 8, marka: 'Porche', qiymet: '118 400', model: '911 Carrera', mator: '4.4', il: '2023', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F13%2F13%2F32%2F55%2F012a26df-efae-4cf0-b763-a4c3de17ae23%2F46349_cqQK5HyMFGcJOEMh1pCm1A.jpg' },
    { id: 9, marka: 'Dodge', qiymet: '38 500', model: 'Challenger', mator: '7.2', il: '2018', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2021%2F04%2F09%2F10%2F02%2F28%2F9a6bf393-9f08-476b-abc0-d6278f1d6668%2F37456_34ZTVBn26COoCWhsqBx3vw.jpg' },
    { id: 10, marka: 'Nissan', qiymet: '86 000', model: 'GTR R-35', mator: '3.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2017%2F02%2F16%2F00%2F02%2F00%2F573%2F54000_4wUHTVdrb_-kLx6BJMuF8Q.jpg' },
    { id: 11, marka: 'Audi', qiymet: '124 100', model: 'RS7', mator: '4.0', il: '2015', reng: 'dimgrey', img: 'https://turbo.azstatic.com/uploads/full/2021%2F05%2F29%2F15%2F33%2F07%2Fc9bec2ac-97eb-4e07-bc8a-509f1898dd7d%2F82001_MmzL0_nnwbSnJI6rtabq7Q.jpg' },
    { id: 12, marka: 'Toyota', qiymet: '15 800', model: 'Corolla', mator: '1.6', il: '2016', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2020%2F09%2F24%2F08%2F21%2F40%2Facdc9e7e-d243-46fd-b2ce-dc51a85c8343%2F66667_OxPaAqSg8MzGM7diar5WlQ.jpg' },
    { id: 13, marka: 'Honda', qiymet: '18 500', model: 'Civic', mator: '1.8', il: '2017', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2023%2F03%2F29%2F18%2F06%2F09%2F1dc0eed8-15d4-46f9-abf5-0b772be61d2d%2F98117_r2JD4f3tCYHUBNquO-VTdQ.jpg' },
    { id: 14, marka: 'Volkswagen', qiymet: '23 200', model: 'Golf', mator: '2.0', il: '2019', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2023%2F02%2F17%2F15%2F03%2F28%2F97566bce-3bcb-43ff-8c96-5274fdf59360%2F74622_ZZd9ojx9ZyTk5EOyx7D3wA.jpg' }
]

const cards = document.getElementById('cards')
const search = document.getElementById('search')
const carDetail = document.getElementById('carDetail')
const select = document.getElementById('select')
const showBtn = document.getElementById('showBtn')
const sidebar = document.getElementById('sidebar')
const basketList = document.getElementById('basketList')
const totalCal = document.getElementById('totalCal')
const selectOne = document.getElementById('selectOne')
const minYear = document.getElementById('minYear')
const maxYear = document.getElementById('maxYear')
const minPrice = document.getElementById('minPrice')
const maxPrice = document.getElementById('maxPrice')
const navBar = document.getElementById('navBar')
const navB = document.getElementById('navB')
let count = 4


function showCars() {
    navBar.style.display = "block"
    cards.innerHTML = ''
    arr
        .filter(item => select.value ? item.marka == select.value : item)
        .slice(0, count)
        .forEach((item) => {
            cards.innerHTML += `
        <div  class="card flex flex-col mb-3 bg-white rounded-lg overflow-hidden relative shadow-2xl">
            <img onclick="detailCars(${item.id})" class="w-[290px] h-[250px] object-cover" src="${item.img}" alt="car-img">
            <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[10px] right-[10px]"></i>
            <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
            <h3 class="px-5 py-1 text-lg font-medium">${item.marka} ${item.model}</h3>
            <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
            <button onclick="addBasket(${item.id})" class="bg-red-600 text-white text-center py-3 px-4 rounded-lg">Səbətə əlavə et</button>
        </div>
`
        })

}
showCars()

function initSwiper() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = ''

    arr.sort((a, b) => parseFloat(b.qiymet.replace(/\s+/g, '')) - parseFloat(a.qiymet.replace(/\s+/g, '')))
        .forEach(item => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.innerHTML = `
 <div class="parallax-bg" style="
  background-image: url(${item.img});
" data-swiper-parallax="-23%"></div>
    <div class="title" data-swiper-parallax="-300">${item.marka} ${item.model}</div>
    <div class="subtitle" data-swiper-parallax="-200">${item.qiymet} AZN</div>
    <div class="text" data-swiper-parallax="-100">
        <p>${item.il} il, ${item.mator} L, ${item.reng}</p>
    </div>
  
`;
            swiperWrapper.appendChild(slide);
        });
}

// Swiper slider-ini ilk dəfə başladın
initSwiper();

// Məlumatlar dəyişdikdə Swiper slider-ini yeniləyin
function updateSwiper() {
    initSwiper();
}

function detailCars(id) {
    const car = arr.find(item => item.id === id);
    showBtn.style.display = "none"
    navBar.style.display = "none"
    search.value = ''
    cards.innerHTML = ''
    cards.innerHTML = `<section class="dark:bg-gray-800 dark:text-gray-100">
        <i onclick="showCars()" class="fa-solid fa-arrow-left text-4xl text-red-600"></i>
        <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 gap-4">
                                  <h3 class="text-2xl font-semibold sm:text-3xl group-hover:underline group-focus:underline">${car.marka}, ${car.model}, ${car.il},${car.mator},${car.reng}</h3>
                                <a rel="noopener noreferrer" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                                    <img src="${car.img}" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
                                    <div class="p-6 mb-3 border-2 border-blue-400 rounded-lg bg-[#effcff] space-y-2 lg:col-span-5 ">
                                        <h3 class="font-bold text-2xl">Qiymət: ${car.qiymet} AZN</h3>
                                        <div class="flex  items-center gap-2">
                                        <img src="${car.img}" class="w-[70px] h-[70px] object-cover rounded-lg">
                                        <div class="flex flex-col gap-1">
                                            <h4 class="text-md font-bold">Autolux Azerbaijan - ${car.marka} </h4>
                                        <p class="text-[#959ca6]">Rəsmi nümayəndə</p>
                                        </div>
                                        </div>
                                        <div class="flex flex-col gap-3">
                                            <button class="bg-green-600 text-white text-center py-3 px-5 rounded-lg"><i class="fa-solid fa-phone"></i> Zəng et</button>
                                             <div>
                                                <h5>There's Only One.</h5>
                                                <p>${car.marka} avtomobillərinin Azərbaycanda rəsmi distribütoru Avtolüks Azərbaycan MMC-dir.20% ilkin ödəniş,10% illik bank faizi,5 illik
                                                </p>
                                                </div>
                                                <button class="bg-blue-600 text-white text-center py-3 px-5 rounded-lg"> Salona Keç</button>
                                            </div>
                                            
                                    </div>
                                </a>
                                </div>
                        </section>`
}

let basketArr = []

function addBasket(id) {
    const obj = arr.find(item => item.id === id);
    const element = basketArr.find(item => item.id == id)
    if (!element) {
        basketArr.push({ ...obj, count: 1 })
    } else element.count += 1
    printBasket()
}


function handleCount(x, id) {
    const element = basketArr.find(item => item.id == id)
    if (element.count + x >= 1) element.count += x
    printBasket()
}


function removeModel(id) {
    basketArr = basketArr.filter(item => item.id !== id);
    printBasket()
}

function resetFilter() {
    selectOne.value = ''
    select.value = ''
    minYear.value = ''
    maxYear.value = ''
    minPrice.value = ''
    maxPrice.value = ''
    showCars()
}

function printBasket() {
    const total = basketArr.reduce((sum, item) => { return sum + parseFloat(item.qiymet.replace(/\s+/g, '')) * item.count }, 0)
    totalCal.innerHTML = total
    basketList.innerHTML = '';
    basketArr.forEach(item =>
        basketList.innerHTML += `<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div class="flex w-full space-x-2 sm:space-x-4">
        <img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="${item.img}" alt="Polaroid camera">
        <div class="flex flex-col justify-between w-full pb-4">
            <div class="flex justify-between w-full pb-2 space-x-2">
                <div class="space-y-1">
                    <h3 class="text-lg font-semibold leadi sm:pr-8">${item.marka}, ${item.model}</h3>
                    <p class="text-sm dark:text-gray-400">${item.il} ${item.mator} ${item.reng}</p>
                    <div class="flex items-center mt-2">
                        <button onclick="handleCount(-1,${item.id})" class="bg-white text-red-800 px-2 font-bold  rounded-[50%]">-</button>
                        <span class="mx-2 font-bold">${item.count}</span>
                        <button onclick="handleCount(1,${item.id})" class="bg-white text-red-800 px-2 font-bold  rounded-[50%]">+</button>
                        </div>
                        </div>
                        <div class="text-right"
                        <p class="text-sm text-gray-400">${parseFloat(item.qiymet.replace(/\s+/g, '')) * item.count} AZN</p>
                        </div>
            </div>
            <div class="flex text-sm divide-x">
                <button onclick="removeModel(${item.id})" type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span >Təmizlə</span>
                        </button>
                        <button type="button" class="flex items-center px-2 py-1 space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                    <span>Favorilərə əlavə et</span>
                </button>
                
                </div>
        </div>
    </div>
    </li>
    
    `
    );
}

function searchCars() {
    cards.innerHTML = ''
    arr
        .filter(item => item.marka.toLowerCase().startsWith(search.value.toLowerCase()))
        .forEach((item) => {
            cards.innerHTML += `
            <div onclick="detailCars(${item.id})" class="card flex flex-col mb-8 bg-white rounded-lg overflow-hidden relative shadow-2xl">
            <img class="w-[320px] h-[300px] object-cover" src="${item.img}" alt="car-img">
        <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[10px] right-[10px]"></i>
        <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
        <h3 class="px-5 py-1 text-lg font-medium">${item.marka} ${item.model}</h3>
        <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
        </div>
        `
        })
    showBtn.style.display = "none"
}

function sortCars() {
    const selectedValue = selectOne.value;

    if (selectedValue === "op2") {
        arr.sort((a, b) => a.marka.localeCompare(b.marka));
    } else if (selectedValue === "op3") {
        arr.sort((a, b) => b.marka.localeCompare(a.marka));
    } else if (selectedValue === "op4") {
        arr.sort((a, b) => parseFloat(a.qiymet.replace(/\s+/g, '')) - parseFloat(b.qiymet.replace(/\s+/g, '')));
    } else if (selectedValue === "op5") {
        arr.sort((a, b) => parseFloat(b.qiymet.replace(/\s+/g, '')) - parseFloat(a.qiymet.replace(/\s+/g, '')));
    } else if (selectedValue === "op6") {
        arr.sort((a, b) => a.id - b.id);
    } else if (selectedValue === "op7") {
        arr.sort((a, b) => b.id - a.id);
    } else if (selectedValue === "op8") {
        arr.sort((a, b) => parseFloat(a.mator) - parseFloat(b.mator));
    } else if (selectedValue === "op9") {
        arr.sort((a, b) => parseFloat(b.mator) - parseFloat(a.mator));
    }

    showCars();
}


function filterBtn() {
    const minYearValue = minYear.value ? Number(minYear.value) : 0;
    const maxYearValue = maxYear.value ? Number(maxYear.value) : Infinity;
    const minPriceValue = minPrice.value ? Number(minPrice.value) : 0;
    const maxPriceValue = maxPrice.value ? Number(maxPrice.value) : Infinity;

    if (isNaN(minYearValue) || isNaN(maxYearValue) || isNaN(minPriceValue) || isNaN(maxPriceValue)) {
        alert("Düzgün dəyərlər daxil edin!");
        return;
    }

    cards.innerHTML = '';
    carDetail.innerHTML = '';

    arr
        .filter(item => {
            const carYear = Number(item.il);
            const carPrice = parseFloat(item.qiymet.replace(/\s+/g, ''));

            const brendCondition = select.value ? item.marka === select.value : true;
            const yearCondition = carYear >= minYearValue && carYear <= maxYearValue;
            const priceCondition = carPrice >= minPriceValue && carPrice <= maxPriceValue;

            return brendCondition && yearCondition && priceCondition;
        })
        .forEach((item) => {
            cards.innerHTML += `
        <div class="card flex flex-col mb-3 bg-white rounded-lg overflow-hidden relative shadow-2xl">
            <img onclick="detailCars(${item.id})" class="w-[290px] h-[250px] object-cover" src="${item.img}" alt="car-img">
            <i class="fa-regular fa-heart text-2xl bg-red-600 text-white rounded-full p-[5px] absolute top-[20px] right-[20px]"></i>
            <h3 class="px-5 py-1 text-2xl font-bold">${item.qiymet} AZN</h3>
            <h3 onclick="detailCars(${item.id})" class="px-5 py-1 text-lg font-medium">${item.marka} ${item.model}</h3>
            <h4 class="px-5 py-1 text-lg font-medium">${item.il} ${item.mator} ${item.reng}</h4>
            <button onclick="addBasket(${item.id})" class="bg-red-600 text-white text-center py-3 px-4 rounded-lg">Səbətə əlavə et</button>
        </div>
    `;
        });
}

function newElan() {
    cards.innerHTML = ""
    navBar.style.display = "none"
    navB.style.display = "block"
    showBtn.style.display = "none"
    navB.innerHTML = `<div class=" container w-[75%] mx-auto flex flex-row items-center gap-4">
        <div class="flex flex-col gap-1">
        <input id="marka" type="text" class="p-1 outline-none rounded-md w-[250px]" placeholder="Marka">
          <input id="model" type="text" class="p-1 outline-none rounded-md w-[250px]" placeholder="Model">
          </div>
          <div class="flex flex-col gap-1">
            <input id="qiymet"  type="text" class="p-1 outline-none rounded-md w-[250px]" placeholder="Qiymət">
              <input id="mator"  type="text" class="p-1 outline-none rounded-md w-[250px]" placeholder="Mator">
              </div>
              <div class="flex flex-col gap-1">
                <input id="il"  type="text" class="p-1 outline-none rounded-md w-[250px]" placeholder="Il">
                  <input id="reng" type="text" class="p-1 outline-none rounded-md w-[250px]" placeholder="Rəng">
                  </div>
                  <div class="flex flex-col gap-1">
                    <input id="image"  type="text" class="p-1 outline-none rounded-md w-[250px]" placeholder="Img">
                <button onclick="addCars()" type="button" class="bg-red-600 py-1 rounded-md text-white">Add</button>
                </div>
                <div>
                     <button type="button" onclick="hiddenBar()"  class="bg-black text-white p-2 rounded-md">Gizlət</button></div>
        </div>
        
    `

}

function addCars() {
    const marka = document.getElementById('marka')
    const model = document.getElementById('model')
    const qiymet = document.getElementById('qiymet')
    const mator = document.getElementById('mator')
    const il = document.getElementById('il')
    const reng = document.getElementById('reng')
    const image = document.getElementById('image')
    showBtn.style.display = "block"
    if (marka.value && model.value && qiymet.value && mator.value && il.value && reng.value && image.value) {
        const newCar = {
            id: arr.length + 1,
            marka: marka.value,
            model: model.value,
            qiymet: qiymet.value,
            mator: mator.value,
            il: il.value,
            reng: reng.value,
            img: image.value,

        }
        arr.push(newCar)
        showCars()
        marka.value = ""
        model.value = ""
        qiymet.value = ""
        mator.value = ""
        il.value = ""
        reng.value = ""
        image.value = ""
    } else {
        alert("Zəhmət olmasa bütün məlumatları daxil edin!")
    }
}


function hiddenBar() {
    navB.style.display = "none"
    navBar.style.display = "block"
    showCars()
    showBtn.style.display = "block"
}



const brends = []
function printBrends() {
    arr.forEach(item => !brends.includes(item.marka) && brends.push(item.marka))
    brends.forEach(item => select.innerHTML += `<option value="${item}">${item}</option>`)
}
printBrends()

function showMore() {
    count += 4
    showBtn.style.display = count >= arr.length ? 'none' : 'block'
    showCars()
}


function handleSideBar(status) {
    sidebar.style.transform = status ? 'translateX(0)' : 'translateX(100%)'
}


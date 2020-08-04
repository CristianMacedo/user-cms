let list
let form
let currentItem

const itemsData = [
    {
      "name": "Parker Fox Beasley",
      "age": 19,
      "location": "Kansas, Gambia"
    },
    {
      "name": "Olga Franklin Walton",
      "age": 26,
      "location": "Marshall Islands, Tonga"
    },
    {
      "name": "Hess Fields Boone",
      "age": 37,
      "location": "Maine, Benin"
    },
    {
      "name": "Cabrera Ryan Henderson",
      "age": 30,
      "location": "Louisiana, Egypt"
    },
    {
      "name": "Karin Travis Holman",
      "age": 34,
      "location": "Virgin Islands, Somalia"
    },
    {
      "name": "Reilly Ballard Merritt",
      "age": 23,
      "location": "Tennessee, Nigeria"
    },
    {
      "name": "Byers Gilbert Alexander",
      "age": 30,
      "location": "Montana, Martinique"
    },
    {
      "name": "Mae Tucker Fuentes",
      "age": 27,
      "location": "Oklahoma, Poland"
    },
    {
      "name": "Susan Foster Fowler",
      "age": 39,
      "location": "Pennsylvania, Brazil"
    },
    {
      "name": "Renee Roberson Hanson",
      "age": 40,
      "location": "Minnesota, Heard and McDonald Islands"
    },
    {
      "name": "Lynch Acevedo Montoya",
      "age": 20,
      "location": "Massachusetts, Kenya"
    },
    {
      "name": "Fanny Francis Webb",
      "age": 31,
      "location": "Illinois, Palau"
    },
    {
      "name": "Craft Lambert Holland",
      "age": 20,
      "location": "Michigan, Panama"
    },
    {
      "name": "Higgins Mayo Whitehead",
      "age": 35,
      "location": "Nevada, Afghanistan"
    },
    {
      "name": "Parrish Rodgers Patel",
      "age": 20,
      "location": "Vermont, Solomon Islands"
    },
    {
      "name": "Hutchinson Levine Johns",
      "age": 34,
      "location": "California, Austria"
    },
    {
      "name": "Marquez Mosley Rodriquez",
      "age": 25,
      "location": "New York, Chad"
    },
    {
      "name": "Petersen Ross Santana",
      "age": 34,
      "location": "Federated States Of Micronesia, Norfolk Island"
    },
    {
      "name": "Walters Stephenson Patrick",
      "age": 21,
      "location": "Oregon, United Kingdom"
    },
    {
      "name": "Gibson Craft Mcneil",
      "age": 26,
      "location": "Indiana, Latvia"
    },
    {
      "name": "Leila Orr Mueller",
      "age": 38,
      "location": "Virginia, Belarus"
    },
    {
      "name": "Nadine Herring Barker",
      "age": 33,
      "location": "Alabama, United States"
    },
    {
      "name": "Blair Knapp Hoffman",
      "age": 40,
      "location": "Arizona, Jordan"
    },
    {
      "name": "Shawn Cummings Ruiz",
      "age": 22,
      "location": "Northern Mariana Islands, Uzbekistan"
    },
    {
      "name": "Vivian Mcclain Conrad",
      "age": 39,
      "location": "Washington, Saint Kitts and Nevis"
    },
    {
      "name": "Martinez Dale Cabrera",
      "age": 35,
      "location": "Iowa, Netherlands Antilles"
    },
    {
      "name": "Kaitlin Wheeler Casey",
      "age": 31,
      "location": "Guam, Bolivia"
    },
    {
      "name": "Lauren Padilla Gay",
      "age": 24,
      "location": "South Carolina, Macau"
    },
    {
      "name": "Mcgowan Merrill Delaney",
      "age": 18,
      "location": "Nebraska, Viet Nam"
    },
    {
      "name": "Julia Pruitt Lee",
      "age": 21,
      "location": "Utah, New Zealand"
    },
    {
      "name": "Delores Booth Finley",
      "age": 28,
      "location": "Palau, Russian Federation"
    },
    {
      "name": "Long Perkins Noel",
      "age": 24,
      "location": "Mississippi, Eritrea"
    },
    {
      "name": "Simpson Hardy Owen",
      "age": 22,
      "location": "Ohio, Northern Mariana Islands"
    },
    {
      "name": "Becker Burch Gonzales",
      "age": 28,
      "location": "South Dakota, Costa Rica"
    },
    {
      "name": "Jewell Mccullough Watson",
      "age": 40,
      "location": "Arkansas, China"
    },
    {
      "name": "Gina Farmer Horton",
      "age": 29,
      "location": "Alaska, Tuvalu"
    },
    {
      "name": "Kent Mcgee Moore",
      "age": 24,
      "location": "Maryland, Zaire"
    },
    {
      "name": "Mendoza Cook Serrano",
      "age": 22,
      "location": "North Dakota, South Africa"
    },
    {
      "name": "Knapp Blanchard Duke",
      "age": 20,
      "location": "Florida, St. Helena"
    }
  ]


const itemTemplate = (name, location, age, image) => `
<div class="item">
    <img class="avatar" src="${image}" />
    <div class="item-content">
        <div class="name">${name}</div>
        <div class="location">${location}</div>
        <div><span class="age">${age}</span> years</div>
    </div>
    <span class="cta">Click to edit</span>
</div>
  `

function scrapItem(element) {
    return {
        name: element.querySelector('.name').innerText,
        age: element.querySelector('.age').innerText,
        location: element.querySelector('.location').innerText
    }
}

function initSelectors() {
    list = document.querySelector('.list')
    form = document.querySelector('.form')
}

function initList() {

    let i = 0
    for (const item of itemsData) {
        list.innerHTML += itemTemplate(item.name, item.location, item.age, `https://randomuser.me/api/portraits/men/${i}.jpg`)
        i+=1
    }

}

function initListeners() {
    
    [].forEach.call(document.querySelectorAll('.item'), function(item) {
        item.addEventListener('click', e => {
            editItem(e.target.parentNode)
        })
    });

    document.querySelector('[data-save]').addEventListener('click', () => saveItem())
    document.querySelector('[data-cancel]').addEventListener('click', () => resetEdit())


}

function setForm(name, location, age) {
    form.querySelector('#edit-name').value = name
    form.querySelector('#edit-location').value = location
    form.querySelector('#edit-age').value = age
}

function resetEdit() {

    currentItem = null
    setForm('', '', '')

}

function saveItem() {

    currentItem.querySelector('.name').innerText = form.querySelector('#edit-name').value || currentItem.querySelector('.name').innerText
    currentItem.querySelector('.location').innerText = form.querySelector('#edit-location').value || currentItem.querySelector('.location').innerText
    currentItem.querySelector('.age').innerText = form.querySelector('#edit-age').value || currentItem.querySelector('.age').innerText

    resetEdit()

}

function editItem(element) {

    currentItem = element
    
    let itemData = scrapItem(element)

    setForm(itemData.name, itemData.location, itemData.age)

}

window.onload = function() {

    initSelectors()
    initList()
    initListeners()

}
const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 36,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'Filip',
        city: 'Warszawa',
        age: 25,
        hobbies: ['football', 'horse riding']
    },
    {
        name: 'Kamila',
        city: 'Lublin',
        age: 39,
        hobbies: ['french', 'mountains', 'dogs']
    },
    {
        name: 'Piotrek',
        city: 'Warszawa',
        age: 34,
        hobbies: ['video games', 'sport']
    },
    {
        name: 'Błażej',
        city: 'Ełk',
        age: 47,
        hobbies: ['gym', 'books', 'shooting']
    },
    {
        name: 'Dominik',
        city: 'Krakow',
        age: 36,
        hobbies: ['js', 'python', 'travel']
    },
    {
        name: 'Sebastian',
        city: 'Gliwice',
        age: 29,
        hobbies: ['movies', 'games',]
    },
    {
        name: 'aga',
        city: 'gdansk',
        age: 27,
        hobbies: ['python', 'cats']
    },
    {
        name: 'Vitalii',
        city: 'Wieliczka',
        age: 31,
        hobbies: ['running', 'cycling', 'e-bikes']
    },
    {
        name: 'Piotr',
        city: 'Siedlce',
        age: 30,
        hobbies: ['python', 'road cycling']
    }
]

// calculate avg age
function avgAge(persons){
    let sumAge = 0;

    for (let i = 0; i < persons.length; i++) {
        sumAge += persons[i].age
    }
    return sumAge / persons.length
}


function avgAge1(persons){
    let sumAge = 0;

    persons.forEach((persons) => {
        sumAge += persons.age
    })

    return sumAge / persons.length
}


function avgAge2(persons){
    return persons.reduce((acc, ce) => acc + ce.age, 0) / persons.length
}


const avgAge3 = (persons) => persons.reduce((acc, ce) => acc + ce.age, 0) / persons.length


//const result = avgAge3(data);
//console.log(result)



function peopleUnder30(people){
    const temp = [];

    people.forEach(function(item){
        if (item.age <= 30){
            temp.push(item.name)

}
})
    return temp
}



function peopleUnder301(people){
    const filterPeople = people.filter((item) => item.age <=30);
    const peopleNames = filterPeople.map((item) => item.name )
    return peopleNames
}


const peopleUnder302 = (people) => people
    .filter ((item) => item.age <= 30)
    .map((item) => item.name)


function getCitiesForPythonLovers(items) {
    const filterPeople = items.filter((item) => item.hobbies.includes('python'))
    return filterPeople.map((item) => item.city)
}

//const result = getCitiesForPythonLovers(data)
//console.log(result)


function getAllHobbies(persons) {
    const temp = []
    for (let i = 0; i < persons.length; i++){
        for (let j=0; j < persons[i].hobbies.length; j++){
            temp.push(persons[i].hobbies[j])
        }
    }
    return temp
}


const getAllHobbies3 = (persons) => new Set(persons.map((person) => person.hobbies).flat())


//const result = getAllHobbies3(data);
//console.log(result)


//get all women
function getWomen(items) {
    const filterPeople = items.filter((item) => item.name[item.name.length - 1] === "a")
    return filterPeople.map((item) => item)
}

//const result = getWomen(data)
//console.log(result)



// list of sentences = mam na piotr i pochodze  z krakow
const makeSentence = (items) => items
    .map((item) => `Mam na imię ${item.name} i pochodzę z ${item.city}`)

const result = makeSentence(data)
console.log(result)

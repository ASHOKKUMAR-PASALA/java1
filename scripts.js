/*alert

alert('hello')

*/
/*
console.log('hello')

console.error('this is a error massege to us')

console.warn('warning')

// let, const
let age = 30 
age = 55
console.log (age)

const score = 40
console.log(score)

//string, number, boolean, null, undifined, 

const name ='john'
const hage = 100
const sun = false
const x = null
const y = undefined
let z;

console.log(typeof name)
console.log(typeof hage)
console.log(typeof sun)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

//concatenation
console.log('my name is '  + name+ ' and my age is ' + hage)
//template string
console.log(`my name is ${name} and my age is ${hage}`)
//split and lettering mode letter spacing
const s = 'hello world !'
console.log(s.substring(0, 5).toUpperCase().split(''))
console.log(s.length)
console.log(s.split(''))
//array
const furits = ("apples oranges pears");
console.log(Array.isArray('furits'));
console.log(furits.indexOf('pears'))
console.log(furits.split(' '));

const person = {
    Name: 'john',
    fatherName:  'doe',
    Age: 42,
    hoddies: ['movies', 'playing', 'reading' ],
    address: {
        streest: 'peadagdi',
        city: 'vizag',
        state: 'AP'
    }
}

person.email = 'ashukim@gmail.com',

 console.log(person.Name, person.fatherName)
 console.log(person.hoddies[2])
 console.log(person.address.streest.city)
 console.log(person)


//todos
const todos = [
    {
        id: 1,
        text: 'sure to move',
        islong: true
    },
    {
        id: 2,
        text: 'hold to open',
        islong: false
    },
    {
        id: 3,
        text: 'stat to press',
        islong: true
    }
]


/*
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);*/

/*
console.log(todos)
console.log(todos[1].text)
console.log(todos[2].islong)

//for loop
for(let i=0; i<=10; i++)
{
    console.log(i)
}



//while loop
let i=0;
while ( i <= 5 ) {
   console.log(i);
   i++;
}

const todoss = [
    {
        id: 1,
        text: 'sure to move',
        islong: true
    },
    {
        id: 2,
        text: 'hold to open',
        islong: false
    },
    {
        id: 3,
        text: 'stat to press',
        islong: true
    }
]

//foreach, map, filters
todoss.forEach(function
    (todoss) {
    console.log(todoss.text)
    console.log(todoss.id, todoss.islong)
}
    )
       //map
    const todossid = todoss.map(
        function(todoss){
            return todoss.id
        }
    )
console.log(todossid)
  
        //filters
const todossislong = todoss.filter(
    function(todoss){
        return todoss.islong == true
    }).map (function(todoss){
        return todoss.text
    })

console.log(todossislong)

   
//if else
const p = 5;

if(p == 10) {
     console.log('p is 10')
} else if (p > 10){
      console.log('p is greater than 10')
}else {
     console.log('p is less than 10')
}

const q = 15 ;
const color = q > 10 ? 'red' : 'bule'


switch(color){
    case 'red':
    console.log('color is red')
    break;

    case 'bule':
    console.log('color is bule')
    break;
    default:

    console.log('color is  not red and bule')
    break;
    
}

//functions

function addNums(num1, num2){
    console.log(num1+num2)
}
addNums(5, 10)



function addNums(num1=1, num2=20){
    return num1+num2
}
console.log(addNums(20, 35))

//constructor functions
function man  (firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}
man.prototype.getBirthyear = function(){
    return this.dob.getFullyear()
}

//instantiate odject
const man1 = new man('john', 'doe', '04-02-1987')
const man2 = new man('mach', 'leo', '10-05-2021')

console.log(man2.dob, man1.lastName,)
console.log(man1.dob, man2.firstName)



//class functions
class men {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
}



const men1 = new men('lesa', 'mari', '02-01-1995')
const men2 = new men('lora', 'koam', '03-04-1985')


console.log(men1.dob)
console.log(men2)*/







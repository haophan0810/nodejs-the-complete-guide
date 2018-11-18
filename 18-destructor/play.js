const persion = {
    name : 'hao',
    age : 28,
    city : 'Nghe An'
}


let { name, age, city} = persion;

console.log('name :', name);
console.log('age :', age);


const inforUser = {
    userName : 'hao',
    passWord : '12345',
    confirm : '12345'
}


function validateUser( {name:userName, passWord, confirm}) {
    console.log('userName :', name);
    console.log('passWord :', passWord);
    console.log('confirm :', confirm);
}

validateUser(inforUser);
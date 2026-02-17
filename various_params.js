function evenSizedString (str) {
  const result = str;
  const length = result.length;
  console.log(result, length);
  if(length % 2 === 0){
    console.log('even size');
    return true;
  }
  else{
    console.log('odd size');
    return false;
  }
}

// console.log(evenSizedString ('Dhaka'));
// console.log(evenSizedString ('Brahmanbaria'));

function doDoubleOrTriple (number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}

// const mainResult = doDoubleOrTriple (10, true);
// console.log(mainResult);

// const lastResult = doDoubleOrTriple (10, false);
// console.log(lastResult);

function isArrayElement (Arrays) {
    const len = Arrays.length;
    console.log(len);
    if (Arrays.includes('rose')) {
        console.log('rose ache');
        return true;
    }
    else {
        console.log('rose nai');
        return false;
    }
}
//  const result1 = isArrayElement (['rose', 'marigold', 'sunflower']);
//  console.log(result1);

//  const result2 = isArrayElement (['lily', 'marigold', 'sunflower']);
//  console.log(result2);

function showInfo (obj) {
    const name = obj.name;
    const age = obj.age;
    console.log(name ,age);
}

let person = {
    name: 'tisha',
    age: 23,
}

showInfo (person);
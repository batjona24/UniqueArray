import fsp from 'fs/promises';

async function FindUniqueArray(file) {
    const data = await fsp.readFile('./data.csv', 'utf8'); 
    const array = data.split('\r\n');  
    const unique = array.filter((item, i, ar) => ar.indexOf(item) === i);
    return unique;      
}
console.log(await FindUniqueArray('file.unique'));

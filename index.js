import fsp from 'fs/promises'
async function UniqueArray(arr){
    const data = await fsp.readFile('./data.csv', 'utf8') 
    let arr = data.split(/\r?\n/);  
    let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
    console.log(unique);      
}
await UniqueArray('./data.csv')

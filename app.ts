const element1=document.getElementById('num1')as HTMLInputElement;
const element2=document.getElementById('num2')as HTMLInputElement;
const button=document.querySelector('button')!;
const stringar:string[]=[];
const numar: Array<number>=[];

function add(num1: number | string,num2: number | string){
    if(typeof num1==='number'&&typeof num2==='number'){
        return num1+num2;

    }
    if(typeof num1==='string'&&typeof num2==='string'){
        return num1+''+num2;

    }
    return +num1+ +num2;
}


function printobje(obj :{val:number;timestamp: Date}){
    console.log(obj.val);
}
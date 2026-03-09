
let name = "Hashir";
console.log(name);

let fruit = ["Apple",54,"Mango","Banana","Orange"] ;
 let student = ["Owais","owais@gmail.com","2512x1","Karachi",20]
//  


for(f of fruit){
    document.write(f + "<br>")
}

student.forEach(e => {
    document.write(e + "<br>")
});



document.write("<----------------------------->")
fruit.forEach(phal => {
    document.write(phal + "<br>")
});



for(let i=0; i<fruit.length; i++){
     console.log(fruit[i]);
}
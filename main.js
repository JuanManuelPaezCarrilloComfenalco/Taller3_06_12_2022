addEventListener("DOMContentLoaded", (e)=>{



let num = Number(prompt("digite un numero"));

let divisorsSum = 0;
for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    divisorsSum += i;
  }
}
if (divisorsSum == num) {
  console.log(`${num} es un número perfecto.`);
} else {
  console.log(`${num} no es un número perfecto.`);
}
})
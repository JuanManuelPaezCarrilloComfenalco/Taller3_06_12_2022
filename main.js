addEventListener("DOMContentLoaded", (e)=>{ 
   
   let num=parseInt(prompt("Ingrese un número"));

   let suma=0;
   
   for (let i = 1; i <= num; i++) {
   suma+=i;
   
   if (i==num) {
       alert("numeros leidos son:" + suma)
   }
   }     
})
    


    

 
addEventListener("DOMContentLoaded", (e)=>{

  
  let lista = [];
  let suma = 0;
  let mult = 1;
  while(confirm("Desea ingresar datos")){
      lista.push(prompt());
  }
  for (let i = 0; i < lista.length; i++) {
      if(lista[i] % 2 == 0){
          suma += Number(lista[i]);
      }else{
          mult *= Number(lista[i]);
      }
  }
  console.log(`La suma de los pares es: ${suma}`);
  console.log(`El producto de los impares es: ${mult}`);
  console.log(lista);

})
   
   

    


    

 
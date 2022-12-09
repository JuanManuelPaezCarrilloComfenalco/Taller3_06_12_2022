addEventListener("DOMContentLoaded", (e)=>{
// Para insertar datos debe escribirlos en la linea de console.log
// inmediatamente los datos se imprimirán en la consola del navegador
  function obtenerNumeroMayor (a,b,c){
    let mayor=0;
    
    if(a > b){
        mayor=a;
    }else{
        mayor = b
    }
    if (c > mayor){
        mayor = c
    }
    return mayor;
  }
  
  console.log(obtenerNumeroMayor(400, 121, 21));
})

   
   

    


    

 
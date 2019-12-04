//fichero
const colors=require('colors');
const fs =require('fs')
let tareasPorHacer=[];

const guardarDB=()=>{
    let data=JSON.stringify(tareasPorHacer);
    fs.writeFile('db/data.json',data,(err)=>{
        if(err) throw new Error('No se pudo guardar ',err);
    });
}


const cargarDB=()=>{
    //guarda como un vector y guarda como un vector de objetos de javascrip
    try{
        tareasPorHacer=require('../db/data.json')
    }catch(error){
        tareasPorHacer=[]
    }
    
}


const crear=(descripcion)=>{
    cargarDB();
    let tarea={
        descripcion,
        completado:'false'
    };
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}

const actualizar1=(valor)=>{
  cargarDB();
  a=[]
  for (var i= 0;i<tareasPorHacer.length;i++){
        a.push(tareasPorHacer[i].completado)
  }
console.log(`las tareas que estan ${valor} son las siguientes :`.red)
  for (var i= 0;i<a.length;i++){
    if(valor===a[i]){
        console.log('Nombre de la tarea :',tareasPorHacer[i].descripcion,':',tareasPorHacer[i].completado)
    }
  }
}

const getlista=()=>{
    cargarDB();
    return tareasPorHacer
} 
const actualizar=(descripcion,completado=true)=>{
    cargarDB();
    //find index=devuelve in indice que coincida con el criterio de busqueda    
    let index=tareasPorHacer.findIndex(tarea=>tarea.descripcion===descripcion);
    if (index>=0){
        tareasPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }
    return false;
}



const eliminar=(descripcion)=>{
    cargarDB();
    let nuevolistado=tareasPorHacer.filter(tarea=>tarea.descripcion!==descripcion);
    //find index=devuelve in indice que coincida con el criterio de busqueda
    if(tareasPorHacer.length===nuevolistado.length){
        return false;
    }else{
         tareasPorHacer=nuevolistado;
         guardarDB();
         return true;
    }
}
module.exports={
    crear,getlista,actualizar,eliminar,actualizar1
}

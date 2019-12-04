const argv =require('./config/yargs').argv;

const tareas=require('./controlador/tareas-por-hacer');
const colors=require('colors');
let comando=argv._[0];
console.log(comando)

switch(comando){
    case 'crear':
        let tarea =tareas.crear(argv.descripcion)
        console.log(tarea)
        break;
    case 'listar':
        let listado=tareas.getlista();
        for(let tarea of listado){
            console.log('========== POR HACER==========='.green);
            console.log(tarea.descripcion);
            console.log('Estado :',tarea.completado)
        }
        break;
    case 'completar':
        // console.log(`Datos: ${row[2]}\n Pais: ${row[0]}\n Año: ${year}\n Valor: ${row[39]}`)
        if(argv.comple==="true" || argv.comple==="false"){
            console.log('========== TAREAS ==========='.green);
             tareas.actualizar1(argv.comple); 
        }else{
            console.log('OJO : Solo puedes listar las tareas con la opcion true o false'.green)
        } 
        break;
    case 'actualizar':
         let actualizado =tareas.actualizar(argv.descripcion,argv.completado);
         console.log(actualizado);
         break;
    case 'borrar':
            let elimina=tareas.eliminar(argv.descripcion);
            console.log(elimina);
         break;
    default:
        console.log('Comando no reconocido');
    }
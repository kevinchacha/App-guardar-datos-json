const descripcion={
    demand:true,
    alias:'d',
    desc:'descripcion de la tarea por hacer'
};
const completado={
    demand:true,
    alias:'c',
    desc:'Marca como completada la tarea'
};
const comple={
    demand:true,
    alias:'a',
    desc:'listar las tareas según estén completas'
};
const argv=require('yargs')
.command('crear','Crear una tarea',{
    descripcion
})
.command('actualizar','Actualiza una tarea',{
    descripcion,completado
})
.command('completar','verifica  una tarea',{
    comple
})
.command('borrar','Borar una tarea',{
    descripcion
})
.help()
.argv;

module.exports={
    argv
}
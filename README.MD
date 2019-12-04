##Aplicaciion de comandos 
recuerda aplicar los paquete
npm install

## Para la ejecucion debemos tener claro lo siguiente 
-d=descripcion 
-c=completar(actualizar)
-a=listar tareas segun el estado
----------------------- PASOS PARA EJECUTAR-------------------------------------------
Para crear :
node app crear -d nombre_de_la_tarea
ejemplo :
node app crear -d jorge
---------------------------------------
Para listar todas las tareas:
node app listar
---------------------------------------
Para listar tareas que esten hechas o no :
node app completar -a false
node app completar -a true
---------------------------------------
Para borrar:
node app borrar -d nombre_de_la_tarea
ejemplo :
node app borrar -d jorge
---------------------------------------
Para actualizar:
node app actualizar -d nombre_de_la_tarea -c complemento_a_actualizar
ejemplo :
node app actualizar -d kha -c true
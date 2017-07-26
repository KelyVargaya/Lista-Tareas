function tarea(id,title ) {
  this.userId = 0;
  this.id= id;
  this.title = title;
  this.completed=false;
}
var tareaList = [
  {"userId": 1,"id": 1,"title": "delectus aut autem","completed": false},
  {"userId": 1,"id": 2,"title": "quis ut nam facilis et officia qui","completed": false},
  {"userId": 1,"id": 3,"title": "fugiat veniam minus","completed": false},
  {"userId": 1,"id": 4,"title": "et porro tempora","completed": true},
  {"userId": 1,"id": 5,"title": "laboriosam mollitia et enim quasi adipisci quia provident illum","completed": false},
  {"userId": 1,"id": 6,"title": "qui ullam ratione quibusdam voluptatem quia omnis","completed": false},
  {"userId": 1,"id": 7,"title": "illo expedita consequatur quia in","completed": false},
  {"userId": 1,"id": 8,"title": "quo adipisci enim quam ut ab","completed": true},
  {"userId": 1,"id": 9,"title": "molestiae perspiciatis ipsa","completed": false},
  {"userId": 1,"id": 10,"title": "illo est ratione doloremque quia maiores aut","completed": true}
]

function lista_view(){
  this.lista = [];
  this.agregarTarea = document.getElementById("tareaInput");
  this.mostrar = function(tareas_ingresadas) {
    var html="";
    for(var i in this.lista){
      var datos = this.lista[i];
      if(datos.completed){
        html += "<li><a>" + datos.id + "." + datos.title + "</a></li>";
      }
      else {
        html += "<li><a>" + datos.id + "." + datos.title + "</a></li>";
      }
    }

  tareas_ingresadas.innerHTML = html;
  }
    for(i in tareaList){
  this.lista.push(tareaList[i]);
    }
  this.añadir=function () {
    this.lista.push(new tarea(this.lista.length +1 , this.agregarTarea.value, ));
    this.agregarTarea.value = '';
  }
}

var tareas = document.getElementById('tareas');
var list = new lista_view();
list.mostrar(tareas);

var agregar = document.getElementById('btn-agregar');
agregar.onclick = function() {
  list.añadir();
  list.mostrar(tareas);
}
/*
for (var i = 0; i <= lista_view.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
var eleminarTarea = function(){
  list.parentNode.removeChild(list);
  };
for (var i = 0; i <= lista_view.children.length -1; i++) {
lista.children[i].addEventListener("click", eleminarTarea);
*/

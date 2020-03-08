let peliculas = [];

//function obtenerDatosYRenderizar() {
  //console.log(1);
 // fetch('/peliculas').then(function(response){
   // if(response.ok){
     // response.json().then(function(data){
       // peliculas = data.peliculas;
        //rederizarPeliculas();
      //});
    //}    
  //});
  //console.log(3);
//}
async function obtenerDatosYRenderizar() {
  console.log(1);
  let response = await fetch('/peliculas');
  console.log(2);
  if(response.ok){
      let data = await response.json();
      console.log(3);
      peliculas = data.peliculas;
      rederizarPeliculas();
    }  
  console.log(4);
}

obtenerDatosYRenderizar();

function rederizarPeliculas() {
    let columnas = '';
    peliculas.forEach(function(item, index) {
        columnas += `
        <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
                <img src="${item.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">
                    <a href = "/detalle?imdbID=${item.imdbID}">${item.Title}</a>
                    </h5>
                    <p class="card-text">${item.Year} - ${item.Type}</p>
                    <button type="button" class="btn btn-primary" onclick="editar(${item.imdbID})">Editar</button>
                    <button type="button" class="btn btn-danger" onclick="eliminar(${item.imdbID})">Eliminar</button>
                </div>
            </div>
        </div>
    `;
    });
    document.getElementById('peliculas').innerHTML = columnas;
}

// rederizarPeliculas();

function guardarPelicula(event){
    event.preventDefault();

    let imdbID = document.getElementById('imdbID').value;

    if(!imdbID){
      let pelicula = {
        Title: document.getElementById('Title').value,
        Year: document.getElementById('Year').value,
        Poster: document.getElementById('Poster').value,
        Type: document.getElementById('Type').value,
        imdbID: peliculas.length + 1
      };

      crearPelicula(pelicula);
    } else {
       let pelicula = {
        Title: document.getElementById('Title').value,
        Year: document.getElementById('Year').value,
        Poster: document.getElementById('Poster').value,
        Type: document.getElementById('Type').value,
        imdbID: imdbID
      };
      
      let index = peliculas.findIndex(function(item){
        return item.imdbID == imdbID
      });

      peliculas[index] = pelicula;
      editarPelicula(pelicula);
    }    
    
    $('#exampleModal').modal('hide');
    event.target.reset();
    rederizarPeliculas();  
}
///Llamada a API
async function crearPelicula(pelicula){
  let response = await fetch('/peliculas', {
    method: 'POST',
    body: JSON.stringify(pelicula),
    headers: {"Content-Type":"application/json"}
  });
  if(response.ok){
      let data = await response.json();
      let mensaje = data.mensaje;
      alert(mensaje);
      obtenerDatosYRenderizar();
    }
}
async function editarPelicula(pelicula){
  let response = await fetch('/peliculas', {
    method: 'PUT',
    body: JSON.stringify(pelicula),
    headers: {"Content-Type":"application/json"}
  });
  if(response.ok){
      let data = await response.json();
      let mensaje = data.mensaje;
      alert(mensaje);
      obtenerDatosYRenderizar();
    }
}
async function eliminarPelicula(imdbID) {
	let response = await fetch('/peliculas/' + imdbID, {
		method: 'DELETE'
	});

	if (response.ok) {
		let data = await response.json();
		let mensaje = data.mensaje;
		alert(mensaje);
		obtenerDatosYRenderizar();
  };
}
  
function editar(imdbID){
  let pelicula = peliculas.find(function(item){
    return item.imdbID == imdbID;
  });  

  document.getElementById('imdbID').value = pelicula.imdbID;
  document.getElementById('Title').value = pelicula.Title;
  document.getElementById('Year').value = pelicula.Year;
  document.getElementById('Poster').value = pelicula.Poster;
  document.getElementById('Type').value = pelicula.Type;

  $('#exampleModal').modal('show');
}

function eliminar(imdbID) {
  eliminarPelicula(imdbID);
}
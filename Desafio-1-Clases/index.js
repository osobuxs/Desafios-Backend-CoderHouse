class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.libros = libros),
      (this.mascotas = mascotas);
  }
  getFullName() {
    return `Nombre: ${this.nombre} y Apellido: ${this.apellido}`;
  }
  addPets(newMascota) {
    this.mascotas.push(newMascota);
  }
  countPets() {
    return this.mascotas.length;
  }
  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }
  getBookNames() {
    const bookNames = this.libros.map((libro) => {
      return libro.nombre;
    });
    console.log(bookNames);
  }
}

const usuario = new Usuario(
  "Exequiel",
  "Vega",
  [
    { nombre: "La Zona Muerta", autor: "Stephen King" },
    { nombre: "Otra Vuelta de Tuerca", autor: "Herny James" },
  ],
  ["Perro", "Gato", "Tortuga"]
);

// muestra del nombre completo
console.log(usuario.getFullName());
//muestra de la cantidad y tipo de mascotas sin añadir
console.log(usuario.mascotas);
console.log(usuario.countPets());
//muestra de la cantidad y tipo mascotas añadida en las funciones.
usuario.addPets("Hamster");
console.log(usuario.mascotas);
console.log(usuario.countPets());
//libros antes de añadir
console.log(usuario.libros)
//libros despues de añadir
usuario.addBook("El Caballero de la Armadura Oxidada", "Robert Fisher");
console.log(usuario.libros);
//Muestra del nombre solamente de los libros
console.log(usuario.getBookNames());

class Person{
    #name;
    #age;
    #id;
    #gender;
    #weight;
    #height;
    #birth;
    constructor(nameParam, ageParam, idParam, genderParam, weightParam, heightParam, nacParam){
        this.#name = nameParam;
        this.#age = ageParam;
        this.#id = idParam;
        this.#gender = genderParam;
        this.#weight = weightParam;
        this.#height = heightParam;
        this.#birth = nacParam;
    }

    get name(){
        return this.#name;
    }
    set name(nameString){
        if (typeof nameString === "string" && nameString !== null) {
            this.#name = nameString;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    get age(){
        return this.#age;
    }
    set age(ageInt){
        if (typeof ageInt === "number" && !isNaN(ageInt) && ageInt !== null) {
            this.#age = ageInt;
        }else{
            alert("Ingrese un valor correcto");
        }
    }
    
    get id(){
        return this.#id;
    }
    set id(idInt){
        if (typeof idInt === "number" && !isNaN(idInt) && idInt !== null) {
            this.#id = idInt;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    get gender(){
        return this.#gender;
    }
    set gender(genderString){
        if (typeof genderString === "string" && genderString !== null) {
            this.#gender = genderString;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    get weight(){
        return this.#weight;
    }
    set weight(weightInt){
        if (typeof weightInt === "number" && !isNaN(weightInt) && weightInt !== null) {
            this.#weight = weightInt;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    get height(){
        return this.#height;
    }
    set height(heightInt){
        if (typeof heightInt === "number" && !isNaN(heightInt) && heightInt !== null) {
            this.#height = heightInt;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    get birth(){
        return this.#birth;
    }
    set birth(birthInt){
        if (typeof birthInt === "number" && !isNaN(birthInt) && birthInt !== null) {
            this.#birth = birthInt;
        }else{
            alert("Ingrese un valor correcto");
        }
    }

    mostrarGeneracion(){

        if (this.birth > 1993 && this.birth < 2011) {
            alert(`${this.name} pertenece a la Generacion Z\nSu rasgo caracteristico es la Irreverencia.\n`);
        }
        if (this.birth > 1980 && this.birth < 1994) {
            alert(`${this.name} pertenece a la Generacion Y\nSu rasgo caracteristico es la Frustración.\n`);
        }
        if (this.birth > 1968 && this.birth < 1981) {
            alert(`${this.name} pertenece a la Generacion X\nSu rasgo caracteristico es la Obsesión por el éxito.\n`);
        }
        if (this.birth > 1948 && this.birth < 1969) {
            alert(`${this.name} pertenece a la generación Baby Boom\nSu rasgo caracteristico es la Ambición.\n`);
        }
        if (this.birth > 1929 && this.birth < 1949) {
            alert(`${this.name} pertenece a la Silent Generation (niños posguerra)\nSu rasgo caracteristico es la Austeridad.\n`);
        }
        if (this.birth < 1994 || this.birth > 2010) {
            alert("No existe un identificador generacional para el año ingresado");
        }
       
    }
    esMayorDeEdad(){
        if (this.age > 17) {
            alert("Es mayor de edad");
        }else{
            alert("Es menor de edad");
        }
    }
    mostrarDatos(){
        const liNombre = document.createElement('li');
        liNombre.className = 'list-group-item fs-5';
        liNombre.innerHTML = `<b>Nombre y apellido:</b> ${this.name}`;

        const liEdad = document.createElement('li');
        liEdad.className = 'list-group-item fs-5';
        liEdad.innerHTML = `<b>Edad:</b> ${this.age}`;

        const liDNI = document.createElement('li');
        liDNI.className = 'list-group-item fs-5';
        liDNI.innerHTML = `<b>D.N.I:</b> ${this.id}`;

        const liSexo = document.createElement('li');
        liSexo.className = 'list-group-item fs-5';
        liSexo.innerHTML = `<b>Sexo:</b> ${this.gender}`;

        const liPeso = document.createElement('li');
        liPeso.className = 'list-group-item fs-5';
        liPeso.innerHTML = `<b>Peso:</b> ${this.weight}kg`;

        const liAltura = document.createElement('li');
        liAltura.className = 'list-group-item fs-5';
        liAltura.innerHTML = `<b>Altura:</b> ${this.height}m`;

        const liNacimiento = document.createElement('li');
        liNacimiento.className = 'list-group-item fs-5';
        liNacimiento.innerHTML = `<b>Año de nacimiento:</b> ${this.birth}`;

        const ulList = document.querySelector('ul');

        ulList.appendChild(liNombre);
        ulList.appendChild(liEdad);
        ulList.appendChild(liDNI);
        ulList.appendChild(liSexo);
        ulList.appendChild(liPeso);
        ulList.appendChild(liAltura);
        ulList.appendChild(liNacimiento);
    }

}

const getData = (e) =>{
    e.preventDefault();
    const inputName = document.getElementById('inputName');
    const inputAge = document.getElementById('inputAge');
    const inputID = document.getElementById('inputID');
    const inputGender = document.getElementById('inputGender');
    const inputWeight = document.getElementById('inputWeight');
    const inputHeight = document.getElementById('inputHeight');
    const inputBirth = document.getElementById('inputBirth');
    persona.name = inputName.value;
    persona.age = parseInt(inputAge.value);
    persona.id = parseInt(inputID.value);
    persona.gender = inputGender.value;
    persona.weight = parseFloat(inputWeight.value);
    persona.height = parseFloat(inputHeight.value);
    persona.birth = parseInt(inputBirth.value);
    persona.mostrarDatos();
    formData.className = 'd-none';
    sectionData.className = 'd-block container d-flex flex-column justify-content-center';
}

const generation = ()=>{
    persona.mostrarGeneracion()
}
const adultOrNot = ()=>{
    persona.esMayorDeEdad()
}
const arrayData = [];
const formData = document.getElementById('formData');
const sectionData = document.getElementById('sectionData');
const btnGeneration = document.getElementById('btnGeneration');
const btnAdultOrNot = document.getElementById('btnAdultOrNot');
formData.addEventListener('submit', getData);
btnGeneration.addEventListener('click', generation);  
btnAdultOrNot.addEventListener('click', adultOrNot);  
const persona = new Person();

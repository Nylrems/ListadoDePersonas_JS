const personas = [new Persona("Juan", "Pérez"), new Persona("Anna", "Pérez")];

const mostrarPersonas = () => {
  console.log("Mostrar persona");
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li> - ${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
};

const agregarPersona = () => {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();

    nombre.value = "";
    apellido.value = "";
  }
  else{
      console.log('Suministre información');
      
  }
};

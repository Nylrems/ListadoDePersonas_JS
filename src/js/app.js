const personas = [
    new Persona('Juan', 'Pérez'),
    new Persona('Anna', 'Pérez'),
];

const mostrarPersonas = () =>{
    console.log('Mostrar persona');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li> - ${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}
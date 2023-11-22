const BuscadorPokemon=document.getElementById("pokeID")
const EspacioInfo=document.getElementById("pokeInfo")
const pokeID=BuscadorPokemon.value; 
const BotonBuscador=document.getElementById("btn")

function PokeAPI (url){ //Función para realizar una solicitud a una api y mostrar la información de un pokemon
fetch (url) 
.then ((res) => {
    if (!res.ok){
        if (res.status===404){
            alert("La pokedex no ha descubierto tantos pokemon, intente de nuevo!")
        }
        throw new Error ("Hubo un error");
    }
    return res.json();
})

.then ((data)=>{
    const IDPokemon= data.id //acceder al dato de la ID del pokemon
    const NamePokemon=data.name //acceder al dato del nombre del pokemon
    const ExperienciePokemon=data.base_experience //acceder al dato la experiencia base del pokemon
    const HeightPokemon=data.height //acceder al dato de la altura del pokemon
    const ImgPokemon=data.sprites.front_default; //acceder al dato de la imagen pokemon

    //Esta parte del código permite tomar los datos indicados de la API y los muestra en el div vacio indicado (en este caso pokeInfo)
    pokeInfo.innerHTML= `
    <h2>${NamePokemon}</h2>
    <p>ID: ${IDPokemon}</p>
    <p>Altura: ${HeightPokemon} dm</p>
    <p>Experiencia: ${ExperienciePokemon} </p>
    <img src="${ImgPokemon}">`; 
});
}


BotonBuscador.addEventListener("click", function(){ 
    const pokeID=BuscadorPokemon.value;
    const APIPokemon=`https://pokeapi.co/api/v2/pokemon/${pokeID}`; 
    PokeAPI(APIPokemon);
});


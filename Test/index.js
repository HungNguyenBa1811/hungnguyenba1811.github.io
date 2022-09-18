const pokemonCount = 300;
var pokedex = {};

async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url);
    let pokemon = await res.json();
    // console.log(pokemon);

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"][0]["type"]["name"];
    let pokemonHeight = pokemon["height"];
    let pokemonWeight = pokemon["weight"];
    let pokemonImg = pokemon["sprites"]["front_default"];

    res = await fetch(pokemon["abilities"][0]["ability"]["url"]);
    let pokemonBio = await res.json();

    let lang = 0
    if(pokemonBio["effect_entries"][lang]["language"]["name"] != "en"){
        lang = 1
    } else {
        lang = 0
    }
    pokemonBio = pokemonBio["effect_entries"][lang]["short_effect"];

    pokedex[num] = {
        "name" : pokemonName,
        "img" : pokemonImg,
        "types" : pokemonType,
        "bio" : pokemonBio,
        "height" : `${pokemonHeight/10} m`,
        "weight" : `${pokemonWeight/10} kg`,
    };

    // console.log(pokedex)
}

window.onload = async function() {

    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
        let pokemon = document.createElement("option");
        pokemon.value = i;
        pokemon.innerText = pokedex[i]["name"];
        document.querySelector("#pokemon_namelist").append(pokemon);
    }

    // console.log(pokedex);
}

// console.log(Object.keys(pokedex))

document.querySelector("#submit_btn").addEventListener("click", ()=> {
    let selected_poke = document.getElementById("pokemon_namelist");
    let i = selected_poke.selectedIndex;
    // console.log(selected_poke.options[i].text, typeof selected_poke.options[i].text)
    document.querySelector("#pokemon-name").innerHTML = selected_poke.options[i].text
    for(let idx of Object.values(pokedex)){
        if(idx.name == selected_poke.options[i].text){
            document.querySelector("#pokemon-image").src = idx.img
            document.querySelector("#pokemon-type").innerHTML = idx.types
            document.querySelector("#pokemon-height").innerHTML = idx.height
            document.querySelector("#pokemon-weight").innerHTML = idx.weight
            document.querySelector("#pokemon-bio").innerHTML = idx.bio
            console.log(idx)
            break
        }
    }
    // document.querySelector("#pokemon-image").src = pokedex[selected_poke.options[i].text]
    console.log(Object.values(pokedex).length)
})
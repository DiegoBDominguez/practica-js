const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; 
    fetch(url).then((res) =>{
        return res.json()
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        let pokenombre = data.name;
        console.log("nombre: " + pokenombre);
        pokename(pokenombre);
        let pokeexp = data.abilities.base_experience;
        console.log("experiencia: " + pokeexp);
        pokeexperiencia(pokeexp);
        
        //es todo lo que pude hacer :,(

        
        
    })
    

}
//fetchPokemon();
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

}
//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png")

 
const fetchPokemon = () =>{
    let contenedorDatos1 = document.getElementById("datos1")
    let contenedorDatos= document.getElementById("datos")
    let name = document.getElementById("nombre")
    let numero=document.getElementById("numero")
    let habilidad = document.getElementById("habilidad")
    let hp = document.getElementById("hp")
    let attack = document.getElementById("attack")
    let defense=document.getElementById("defense")
    let spa = document.getElementById("spa")
    let spd = document.getElementById("spd")
    let speed = document.getElementById("speed")
    let ataques = document.getElementById("ataques")
    let a1 = document.getElementById("A1")
    let a2 = document.getElementById("A2")
    let a3 = document.getElementById("A3")
    let a4 = document.getElementById("A4")
    let a5 = document.getElementById("A5")
    let a6 = document.getElementById("A6")
    let tipo = document.getElementById("tipo")
    let mew= document.getElementById("mew")
    let w = document.getElementById("dato1")
    let a = document.getElementById("dato2")
    let nombre = document.getElementById("pokeName")
    let nombrePokemon = nombre.value.toLowerCase()
    const url= "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon;
    let img = document.getElementById("pokeImage")
    let dex = document.getElementById("dex")
    dex.src="./img/plantilla5.png"
    dex.style.marginTop="25%"
    let sello = document.getElementById("sello")
    sello.className="sellog"
    contenedorDatos.className="datosa"
    contenedorDatos1.className="datos1a"
    img.style.display="none"
    w.style.display="none"
    a.style.display="none"
    mew.style.display="none"
    
    setTimeout(() => {
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error(res.status)
            }else{
                return res.json();
            }
        })
        .then((data)=>{
            console.log(data.abilities)
            //data.moves[1].move.name
            name.textContent= data.name.toUpperCase()
            numero.textContent= "#" + data.id
            habilidad.textContent= "Habilidad: " + data.abilities[0].ability.name
            hp.textContent= "HP: " + data.stats[0].base_stat
            attack.textContent= "Attack: " + data.stats[1].base_stat
            defense.textContent= "Defense: " + data.stats[2].base_stat
            spa.textContent= "Sp. Attack: " + data.stats[3].base_stat
            spd.textContent = "Sp. Defense: " + data.stats[4].base_stat
            speed.textContent = "Speed: "  + data.stats[5].base_stat
            tipo.textContent= "Tipo: " + data.types[0].type.name
            a1.textContent = data.moves[0].move.name
            a2.textContent = data.moves[1].move.name
            a3.textContent = data.moves[2].move.name
            a4.textContent = data.moves[3].move.name
            a5.textContent = data.moves[4].move.name
            a6.textContent = data.moves[5].move.name
            ataques.textContent="Ataques"
            w.textContent= "Peso: " + data.weight
            a.textContent= "Altura: " + data.height
            pokeImage(data.sprites.front_default)

            name.style.display="block"
        numero.style.display="block"
        habilidad.style.display="block"
        hp.style.display="block"
        attack.style.display="block"
        spa.style.display="block"
        spd.style.display="block"
        speed.style.display="block"
        a1.style.display="block"
        a2.style.display="block"
        a3.style.display="block"
        a4.style.display="block"
        a5.style.display="block"
        a6.style.display="block"
        ataques.style.display="block"
        defense.style.display="block"
        tipo.style.display="block"
        dex.style.marginTop="0%"
        w.style.display="block"
        a.style.display="block"
        contenedorDatos.className="datos"
        contenedorDatos1.className="datos1"
        img.style.display="block"
        dex.src="./img/plantilla2.png"
        sello.className="sello"
        })
        .catch( error =>{
            const pokeImage = document.getElementById("pokeImage");
            pokeImage.src = "./img/404.png";
            name.style.display="none"
            numero.style.display="none"
            habilidad.style.display="none"
            hp.style.display="none"
            attack.style.display="none"
            spa.style.display="none"
            spd.style.display="none"
            speed.style.display="none"
            a1.style.display="none"
            a2.style.display="none"
            a3.style.display="none"
            a4.style.display="none"
            a5.style.display="none"
            a6.style.display="none"
            ataques.style.display="none"
            defense.style.display="none"
            dex.style.marginTop="0%"
            tipo.style.display="none"
            w.style.display="none"
            a.style.display="none"
            mew.style.display="block"
            contenedorDatos.className="datos"
            contenedorDatos1.className="datos1"
            img.style.display="block"
            dex.src="./img/plantilla2.png"
            sello.className="sello"
            contenedorDatos1.style.backgroundImage= url("./img/mew.gif")
        })
        
       
        
        

        
    }, 3800);
    
   

  
    

  


        
    

}

//fetchPokemon();



const pokeImage = (url) =>{
    const pokeImage = document.getElementById("pokeImage");
    pokeImage.src = url;
}

const imprimir= () =>{
    console.log("Hola Explorers");
}

document.getElementById("pokemonButton").addEventListener("click", function(event) {
  event.preventDefault();
  
  function capitalizeFirstLetter(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
  }

  const value = document.getElementById("pokemonField").value;
  let lowvalue = value.toLowerCase();
  let finalvalue = capitalizeFirstLetter(lowvalue);
  if (value === "")
    return;
  console.log(lowvalue);
  console.log(finalvalue);

  
// require ('@favware/graphql-pokemon');

// interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
//   data: Record<K, Omit<Query[K], '__typename'>>;
// }

// fetch('https://graphqlpokemon.favware.tech/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     query: `
//       {
//         getPokemon(pokemon:`+lowvalue+`) {
//             num
//             species
//             color
//             shinySprite
//             smogonTier
//             smogonPage
//             serebiiPage
//             bulbapediaPage
//             abilities
//         }
//       }
//     `
//   })
// })
//   .then((res) => res.json())
//   .then(function(json) {
//     console.log(json);
//     let results = "";
//     results+= "<h2> This is " + value+ "</h2>";
//     results+= "<p>Number:"+ json.data.getPokemon.num+"</p>";
//     results+= "<img src='"+json.data.getPokemon.shinySprite+"'/>";
//     results+= "<img src='"+json.data.getPokemon.smogonPage+"'/>";
  
//     document.getElementById("pokemonResults").innerHTML = results;
//   });
fetch('https://api.pokemontcg.io/v2/cards?q=name:'+finalvalue) 
.then((res) => res.json())
.then(function(json) {
  console.log(json);
  let results = "";
  console.log(json.data.find(obj => {
    return obj.name === finalvalue
  }));
  results+= "<img class = \"card\" src = '"+json.data.find(obj => {
    return obj.name === finalvalue
  }).images.small+"'/>";
  document.getElementById("pokemonResults").innerHTML = results;
});



});
const getSuperHero = () => { fetch('https://superheroapi.com/api.php/758853688673367/245')
  .then(response => response.json())
  .then(json => console.log(json))
}
getSuperHero()
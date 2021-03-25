
image_array = [
  'paulo',
  'guilherme',
  'jeniblo',
  'rafa'
]


function get_random_image(){  


  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  image_shower.src = `./images/${selected_image}.jpg`
  image_shower.nome = selected_image

  resultado.innerHTML =""
}

function gerar() {

  imagem_ativa = image_shower.src.split("/").pop().split(".")[0]
  
  if(p1.value == imagem_ativa)
    resultado.innerHTML =(`Você acertou parabéns !! `)
  else 
    resultado.innerHTML =(` Errou !`)

}


    
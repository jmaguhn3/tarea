
// Defino un tamaño de letra inicial de 16px
function tamañoLetra() {
  size = $(".mitexto" ).css("font-size");
  size = $(".text-center" ).css("font-size");
  size = parseInt(size, 10);
  $( ".tamaño-actual" ).text(size);
}

// Obtengo el tamaño de letra inicial de 16px 
tamañoLetra();

// Función para disminuir el tamaño del texto (fuente) 
$(".disminuir").on("click", function() {
  if ((size - 2) >= 13) {
    $(".mitexto").css("font-size", "-=2");
    $(".text-center").css("font-size", "-=2");

    $(".tamaño-actual").text(size -= 1);
  }
});

// Función para aumentar el tamaño del texto (fuente) 
$(".aumentar").on("click", function() { 
  if ((size + 2) <= 47) {
    $(".mitexto").css("font-size", "+=2");
    $(".text-center").css("font-size", "+=2");
    $(".tamaño-actual").text(size += 1);
  }
});

// Función para restablecer el tamaño del texto (fuente) al tamaño inicial 
$(".restablecer").on("click", function() {
  $(".mitexto").css("font-size", "initial");
  size = $(".mitexto" ).css("font-size");
  


  $(".text-center").css("font-size", "initial");
  size = $(".text-center" ).css("font-size");

  size = parseInt(size, 10);
  $( ".tamaño-actual" ).text(size);
}); 
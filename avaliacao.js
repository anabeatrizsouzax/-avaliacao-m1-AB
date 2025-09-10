const catalogo = [
    { id: 1, titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" },
    { id: 2, titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
    { id: 3, titulo: "A Origem", ano: 2010, nota: 8.8, genero: "Ficção Científica" },
    { id: 4, titulo: "Interestelar", ano: 2014, nota: 8.6, genero: "Ficção Científica" },
    { id: 5, titulo: "Pulp Fiction", ano: 1994, nota: 8.9, genero: "Crime" },
  ];
   //1
  function listarFilmesDeGenero(catalogo){
    return catalogo.filter(catalogos => catalogos.genero == "Ficção Científica")
  }
  console.log(listarFilmesDeGenero(catalogo))

   //2
  function  gerarListaDeTitulos(catalogo){
    return catalogo.map(filme => filme.titulo)}
   console.log(gerarListaDeTitulos(catalogo))

    //3
   function  gerarRelatorioDeFilmes(catalogo){
    return catalogo.filter(filme => filme.titulo  &&  filme.ano >= 2010)


   }
 console.log(gerarRelatorioDeFilmes(catalogo))
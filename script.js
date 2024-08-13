function toggleMode() {
   const html = document.createElement;
   html.classList.toggle("light");

   // pegar a tag img 
   const img = document.querySelector("#profile img");

   //Substituir a imagem 
   if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem lighr
    img.setAttribute("src", "./assets/avatar-light.jpg");
   } else {
    // Se tiver dark mode, adicionar a imagem dark
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "./assets/avatar.png");
   }
}


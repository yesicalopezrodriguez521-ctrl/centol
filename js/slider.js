const slides = [
    { img:"img/slide1.jpg", titulo:"Centollo", texto:"El centollo es un crustáceo marino que vive en fondos rocosos del océano, generalmente en aguas frías. Es muy apreciado en la gastronomía por su carne suave, dulce y delicada, especialmente en las patas y el interior del caparazón. Se suele cocinar hervido o al vapor para conservar su sabor natural." },
    { img:"img/slide2.jpg", titulo:"Camarón", texto:"El camarón es uno de los mariscos más consumidos en el mundo. Vive en aguas saladas y dulces, dependiendo de la especie. Su carne es ligera y versátil, por eso se usa en platos como ceviche, arroz con camarones o camarones al ajillo. Es rico en proteínas y bajo en grasa." },
    { img:"img/slide3.jpg", titulo:"Pulpo", texto:"El pulpo es un molusco marino que vive en el fondo del mar y tiene ocho tentáculos. Es muy inteligente entre los invertebrados. En la cocina se caracteriza por su textura firme y su sabor intenso. Se prepara a la parrilla, en guisos o en ensaladas." },
    { img:"img/slide4.jpg", titulo:"Pescado", texto:"El pescado es una de las principales fuentes de alimento en el mundo. Existen muchas especies como mojarra, pargo o tilapia. Su carne es saludable, rica en omega-3 y proteínas. Se puede preparar frito, asado, al horno o en sopas." },
    { img:"img/slide5.jpg", titulo:"Langosta", texto:"La langosta es un crustáceo de gran tamaño considerado un alimento gourmet. Vive en el fondo del mar y tiene un sabor dulce y refinado. Se cocina generalmente con mantequilla, ajo o a la parrilla. Es uno de los mariscos más costosos y valorados." }
];

let i = 0;

function cambiar(){
    i++;
    if(i >= slides.length) i = 0;

    document.getElementById("slide").src = slides[i].img;
    document.getElementById("titulo").textContent = slides[i].titulo;
    document.getElementById("texto").textContent = slides[i].texto;
}

setInterval(cambiar, 3000);
cambiar();
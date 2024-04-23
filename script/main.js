let immagineAttualmenteAttiva;
let prossimaSlide;
let prevSlide;

let slides = document.getElementsByClassName("slide");

document.getElementById("btnNext").addEventListener("click", function nextImage() {
    for (let i = 0; i < slides.length; i++) {

        const slide = slides[i]; //non ho ben capito perché qui prenda tutti gli i, invece di solamente l'ultimo. Ricollego il dubbio alla riga 17
        console.log(`i ${i}, slide ${slide}`);

        //controlliamo se questa slide ha la classe active
        if (slide.classList.contains("active")) {
            // Si toglie la classe, può confondere il fatto che questo testo sia simile e quindi da l'impressione di un merge
            slide.classList.remove("active");
            immagineAttualmenteAttiva = i;
        }
    }

    //prossima slide sarà idealmente quella attuale + 1
    prossimaSlide = immagineAttualmenteAttiva + 1;

    //se però l'immagine successiva non c'è, allora resetta la slide alla prima
    if (prossimaSlide >= slides.length) {
        //non può essere più grande o uguale, altrimenti al click non ci sarà nessuna immagine da visualizzare
        prossimaSlide = 0;
    }

    //in ogni caso, rendi active la slide che ci interessa
    slides[prossimaSlide].classList.add("active");

    console.log(`Sposto la selezione da ${immagineAttualmenteAttiva} a ${prossimaSlide}`);
})

document.getElementById("btnPrev").addEventListener("click", function prevImage() {
    for (let i = 0; i < slides.length; i++) {

        const slide = slides[i];
        console.log(`i ${i}, slide ${slide}`);

        //controlliamo se questa slide ha la classe active
        if (slide.classList.contains("active")) {

            slide.classList.remove("active");
            immagineAttualmenteAttiva = i;
        }
    }

    //precedente slide sarà idealmente quella attuale - 1
    prevSlide = immagineAttualmenteAttiva - 1;

    //se però l'immagine successiva non c'è, allora resetta la slide alla prima
    if (prevSlide = slides[0]) {
        //aiuto visivo per me, non è un merge
        prevSlide = slides.length;
    }

    //in ogni caso, rendi active la slide che ci interessa
    slides[prevSlide].classList.add("active");

    console.log(`Sposto la selezione da ${immagineAttualmenteAttiva} a ${prevSlide}`);
})
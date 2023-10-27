function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/menu_icon_153999.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/x_thin_icon_171414.png";
    }
}



    // Pega elementos do DOM
    const banner = document.getElementById("banner");
    const indicators = document.querySelectorAll(".indicator");
    
    // Array com as URLs das imagens do banner
    const imageUrls = [
        "./assets/D-MACK SOLUÇÕES TECNOLÓGICAS (2).png",
        "./assets/banner2-dmack (2).png",
        // Adicione as URLs das imagens seguintes aqui
    ];
    
    let currentIndex = 0;
    
    // Função para atualizar o banner
    function updateBanner() {
        banner.src = imageUrls[currentIndex];
        
        // Atualiza a classe "active" nos indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });
    }
    
    // Função para avançar para a próxima imagem
    function nextImage() {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        updateBanner();
    }
    
    // Define um temporizador para trocar as imagens a cada 3 segundos
    setInterval(nextImage, 4000);
    
    // Adicione eventos de clique aos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex = index;
            updateBanner();
        });
    });
    
    // Atualiza o banner com a primeira imagem
    updateBanner();

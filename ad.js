// znajdź obrazek i przypisz mu zmienne
const img = document.querySelector('.ad img');
const originalOpacity = 0.7;

// ustaw początkowe wartości stylów
img.style.opacity = originalOpacity;
img.style.transform='scale(1)';

// dodaj obsługę zdarzeń dla najechania i zjechania z obrazka kursorem
img.addEventListener('mouseenter',function() {
    
// dodaj przejście dla jasności i rozmiaru obrazka
img.style.transition='opacity 1s, transform 1s';

// podniesienie jasności i powiększenie
img.style.opacity=1;img.style.transform='scale(1.1)';
});

img.addEventListener('mouseleave',function() {

    // dodaj przejście dla jasności i rozmiaru obrazka
    img.style.transition='opacity 1s, transform1s';
    
    // przywrócenie początkowych wartości stylów
    img.style.opacity=originalOpacity;
    img.style.transform='scale(1)';
});

// po naciśnieciu przenosi nas do strony głównej PK
img.addEventListener('click',function() {
    window.location.href='https://pk.edu.pl/';
});




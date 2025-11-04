//Carousel
const testimonials = [
    {
        text: "Horváth Botond a Veszprémi irodából életbiztosítás, egyéb biztosításokban, hitellel kapcsolatos kérdésekben segített. Bármikor számíthattunk rá, akármikor kerestük.",
        reviewer: "- K. Szilvia",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Horváth Botond a család biztosítója, mi nagyon meg vagyunk vele elégedve! Egyik ismerősöm ajánlotta Botondott. A foglalkozásom végett fontos volt a biztosítás kötése. Nagyszerű ajánlatokat hozott nekem, rugalmasan tudtunk találkozni, érthetően elmondott minden információ a biztosítással kapcsolatban. Bármikor, ha kérdésem van szívesen segít. Kötöttünk már vele baleset,-betegség-, lakás biztosítást. Mindegyikkel meg vagyunk elégedve , sőt rengeteg pénz meg is spórolt nekünk! Közeljövőben pénzügyi tanácsaival fogunk élni! Bátran ajánlom Botondott, ha bárkinek biztosítási, pénzügyi, hitellel kapcsolatos segítségére van szüksége!",
        reviewer: "- K. Kitti",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "A mi tanácsadónk Horváth Botond. Ingatlan vásárlással kapcsolatba kerestük fel segítségért, és biztosítások átnézéséért. Nagyon elégedettek vagyunk a tudásával segítőkészségével több biztosításunkat ő rendezte ezzel több tízezer forintot megtakarítva nekünk. Hitelügyintézésben Majoros Szabolcs intézte a munkát, ezzel rengeteg időt, energiát spórolva. Eddig mindig negatív véleményeket hallottam a hasonló cégekről mint az OVB, de hatalmas pozitív meglepetés ért a fiukkal kapcsolatban. Nagyon elégedettek vagyunk, köszönjük szépen.",
        reviewer: "- M. Roland",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "A mi tanácsadónk Horváth Botond. Gyakorlatilag mindent ő intéz nekünk: az összes biztosításunk (kgfb, casco, egészség, baleset, élet), az egészségpénztár, a babaváró, a csok. A kgfb-nket konkrétan az idén lefelezte nekünk egy jobb ajánlattal. Az egészségbiztosítótól már kaptunk kifizetést pillanatok alatt, 0 kérdéssel. Mindig segítőkész és mindig tud is segíteni. Maximálisan elégedettek vagyunk vele. Köszönjük szépen a munkáját!",
        reviewer: "- P.Cs. Nikolett",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Az én pénzügyi tanácsadóm Horváth Botond. Boti rendkívûl rugalmas,a nap bármely pillanatában elérhetô, így rengeteg idôt spórol nekem.Az OVB-vel való eggyüttmûködésben mindenesetben összehasonlítjuk a lehetôségeket, így számomra mindig a legkedvezôbb ajánlatot kapom.Elôször kötelezô-,lakás biztosítást kötöttünk,késôbb nyúgdíj és életbiztosítás terén segített.Aki egy megbízható, közvetlen, szakmailag hozzáértô,precíz pénzügyi szakembert keres, Boti személyében garantáltan megtalálja. Ez úton is köszönök mindent.",
        reviewer: "- S. Péter",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Horváth Botond intézi minden piszkos pénzügyi kérdésemet/kérésemet nagyon rövid határidőn belül. Bármelyik nap bármilyen kérdéssel fordulhatok hozzá, mindig türelmesen végighallgat és utána elmondja, hogy melyik a legjobb választás nekem és persze segít is intézni minden velejáróját. Ilyen volt pl. legutóbb a kötelező biztosítás az új autómra, a legfrissebb amit kötöttünk az a nyaralásra utasbizti, de van nála már több, mint 1 éve futó megtakarításom is. Nyitottan beszéltünk múltkor a majdani leendő hitellehetőségekről is a jövőben, minden kötöttség nélkül. Bátran ajánlom, igazán tehetséges és segítőkész úriember Veszprémből.",
        reviewer: "- K. Adrienn",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Horváth Botond segítségére bármikor számíthatunk megtakarításainkkal, nyugdíj előtakarékosságunkkal és biztosítasainkkal kapcsolatban. Részletesen beszámol minden alkalommal az aktuális egyenlegünkről, grafikonok segítségével elemzi az aktuális helyzetet, és javaslatot tesz a módósításra a kedvezőbb eredmények eléréséért. Teljes mértékben elégedettek vagyunk a munkájával. Pontos, figyelmes, naprakész, segítőkész, kommunikatív.",
        reviewer: "- M. Georgina",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "A mi személyes tanácsadónk Horváth Botond. A mi helyzetünk nem hétköznapi, de mindenben segítségünkre volt. Általa kötöttünk egy megtakarítást. Mindenre volt egy jó ötlete , és a legjobb megoldást próbálta számunkra megtalálni.Bármilyen kérdésünk van, rendelkezésünkre áll.Azóta mióta Ő a mi tanácsadónk nem csak egy témában tudott segíteni, hanem szüleim biztosításaival kapcsolatban is megoldást találtunk vele. Egyszóval univerzális és segítőkész a fiatalos és lendületes hozzáállása pedig számunkra nagyon megnyerő volt , mert végre valaki aki nem a \"hogyan nem lehet megoldani\", hanem a \"hogyan lehet megoldani \" koncepciót tartotta fontosnak. Türelmesen és részletesen tájékoztatott minket, és mertünk is kérdezni, mert nem azt éreztük , hogy gyorsan csak \"letud\" minket.Szóval csak ajánlani tudjuk bárkinek , akinek ilyen dolgokban szüksége van segítségre.",
        reviewer: "- Á. Veronika",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Angerman Ferenc a tanácsadónk. Segítőkész, utánajár ha valami speciális esetről van szó. A hosszútávú megtakarításról eredményben nem lehet még nyilatkozni, de a lakásbiztosítás esetében tudtunk egy sokkal jobb ár-érték arányú szerződést kötni. Az előbb említett szerződések magánemberként nem elérhetőek, ami a legnagyobb előnyük a rengeteg általuk kínált szolgáltatás mellett. Ezen felül javasol olyan rövidtávú befektetéseket is, ami nem az ő portfóliójukat támogatja, viszont az ügyfèl elégedettségét növeli.",
        reviewer: "- B. Zoltán",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Angerman Ferenc segített nekem több témában is. Tanácsot adott hosszabbtávú megtakarítás témában, hogy mibe és mekkora összeget érdemes befektetnem a pénzügyi hátterem és céljaim ismeretében. Ajénlott a meglévő balesetbiztosításom helyett egy másikat, melynek összege nem magasabb ugyanakkor sokkal nagyobb tartalommal bír. Segített egy számomra sokkal kedvezőbb folyószámlacsomag kiválasztásában. Jelenleg egy lakásbiztosítás váltás van folyamatban, valamint egy lakáshitel kiváltása másik meglévő megtakarításból, melyben szintén rengeteg segítséget nyújt. Összességében teljesen elégedett vagyok a szolgáltatásaikkal, mivel minden esetben személyre szabott ajánlatokat (2-3 szinte minden esetben) nyújtottak és segített a számomra legmegfelelőbb kiválasztásában. Bármilyen kérdésem volt arra választ kaptam, és kellő mélységgel informált minden esetben.",
        reviewer: "- D. Gergő",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Angerman Ferenc a pénzügyi tanácsadóm, akit már régebb óta ismerek, de ebben a szerepkörben csak 2 hónapja találkoztunk. Ezen rövid idő alatt Feri több dologban is segített, mint pl. az eddigi megtakarításaim rendbetétele, babaváró hitel felvétele és a lakásbiztosítások megújítása. Ezenkívül rengeteg olyan dologra is felhívta a figyelmem, amit nem biztos, hogy saját magam is megtaláltam vagy kihasználtam volna (pl. önsegélyezés az egészségpénztáraknál) Ezek számomra rengeteg segítséget jelentettek, sok időt sporoltam vele. Ami nagyon pozítív volt, hogy sokszor több választási lehetőséget is hozott, melyek közt érthetően elmagyarázta a különbségeket.",
        reviewer: "- G. Péter",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Teljesen nyíltan, és érthetően magyarázta el a számunkra megfelelő lehetőségeket. Feleségemmel érdeklődtünk az OVB iránt, és a legjobb kollégát kaptuk, Angerman Ferenc személyében! Bármi kérdésünk volt, válaszolt készségesen. Akár babaváróról, akár nyugdíjról, vagy jövőbeli gyermekünk pénzbeli gyüjtéséről volt szó, nem volt gond, mindent intézett, és mutatott, ábrákkal, számításokkal. Kellemesen csalódtam az OVB-ben, bátran ajánlom, ha a legjobbat akarod magadnak, a jövőd érdekében, és ha biztosra akarsz menni, akkor Ferenc a Te embered! 😉",
        reviewer: "- P. Gábor",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        text: "Angerman Ferenc segítségével kötöttem élet és egészség biztosítást, valamint segített a korábban kötött megtakarítások felülvizsgálatával és módosításával kapcsolatban is. Összeségében azt mondanám szakmailag felkészült, tájékoztat minden lehetőségről, őszintén elmondja a véleményét az adott termékekről, de emellett nem akar rám sózni semmit, csak azért, hogy legyen szerződéskötés.",
        reviewer: "- T. László",
        stars: "⭐⭐⭐⭐⭐"
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener('DOMContentLoaded', function() {
    shuffleArray(testimonials);
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.innerHTML = '';

    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <p class="review-text">"${testimonial.text}"</p>
            <p class="reviewer">${testimonial.reviewer}</p>
            <div class="stars">${testimonial.stars}</div>
        `;
        carouselContainer.appendChild(slide);
    });

    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;
    let timer;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        resetTimer();
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(() => showSlide(currentSlide + 1), 20000);
    }

    prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

    resetTimer();
});

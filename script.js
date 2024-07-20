document.getElementById('modeToggle').addEventListener('click', function() {
    const body = document.body;
    const modeToggleBtn = document.getElementById('modeToggle');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = 'Bright Mode';
    } else {
        modeToggleBtn.textContent = 'Dark Mode';
    }
});

const translations = {
    "PRE-ORDER NOW": "წინასწარ შეკვეთა",
    "Typemaster Keyboard": "Typemaster კლავიატურა",
    "Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.": "გააუმჯობესეთ თქვენი პროდუქტიულობა და თამაში ბანკის გატეხვის გარეშე. განახლებული მაღალი ხარისხის მექანიკური ტიპის გამოცდილებისთვის.",
    "Release on 5/27": "გამოშვება 5/27",
    "mechanical wireless Keyboard": "მექანიკური უსადენო კლავიატურა",
    "The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.": "Typemaster კლავიატურა ამაყობს უმაღლესი აშენებით და პრაქტიკული დიზაინით. ის გთავაზობთ უამრავ გადართვას და საკვანძო კეპებს, საიმედო უსადენო კავშირით.",
    "HIGHLY COMPATIBLE": "მაღალი თავსებადობა",
    "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.": "მარტივი გამოყენება და კარგად მუშაობს ყველა ძირითადი კომპიუტერის ბრენდებთან, სათამაშო კონსოლებთან და მობილურ მოწყობილობებთან. შეაერთეთ და გამოიყენეთ, არ არის საჭირო ინსტალაცია ან დრაივერი.",
    "WIRELESS WITH BLUETOOTH": "უსადენო Bluetooth-ით",
    "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.": "ძლიერი 2.4G RF ტექნოლოგია გაძლევთ საშუალებას დააკავშიროთ უსადენო კლავიატურა 30 ფუტის მანძილიდან. უბრალოდ შეაერთეთ ერთიანი მიმღები თქვენს კომპიუტერში.",
    "HIGH CAPACITY BATTERY": "მაღალი ტევადობის ბატარეა",
    "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.": "აღჭურვილია ხანგრძლივი ჩაშენებული ბატარეით, თქვენ არასოდეს მოგიწევთ ერთი ცენტის დახარჯვა გამოცვლაზე. დატკბით 40 საათიანი გამოყენების დრო დატენვებს შორის.",
    "RGB BACKLIT MODES": "RGB განათებული რეჟიმები",
    "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.": "აირჩიეთ 4 განათების სიკაშკაშის დონე და რეგულირებადი სუნთქვის სიჩქარე. თითოეული ღილაკი ინტენსიურად ანათებს სიბნელეში და გეხმარებათ დაბალ განათების პირობებში ტიპისას."
};

const translationsReverse = {
    "წინასწარ შეკვეთა": "PRE-ORDER NOW",
    "Typemaster კლავიატურა": "Typemaster Keyboard",
    "გააუმჯობესეთ თქვენი პროდუქტიულობა და თამაში ბანკის გატეხვის გარეშე. განახლებული მაღალი ხარისხის მექანიკური ტიპის გამოცდილებისთვის.": "Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.",
    "გამოშვება 5/27": "Release on 5/27",
    "მექანიკური უსადენო კლავიატურა": "mechanical wireless Keyboard",
    "Typemaster კლავიატურა ამაყობს უმაღლესი აშენებით და პრაქტიკული დიზაინით. ის გთავაზობთ უამრავ გადართვას და საკვანძო კეპებს, საიმედო უსადენო კავშირით.": "The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.",
    "მაღალი თავსებადობა": "HIGHLY COMPATIBLE",
    "მარტივი გამოყენება და კარგად მუშაობს ყველა ძირითადი კომპიუტერის ბრენდებთან, სათამაშო კონსოლებთან და მობილურ მოწყობილობებთან. შეაერთეთ და გამოიყენეთ, არ არის საჭირო ინსტალაცია ან დრაივერი.": "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
    "უსადენო Bluetooth-ით": "WIRELESS WITH BLUETOOTH",
    "ძლიერი 2.4G RF ტექნოლოგია გაძლევთ საშუალებას დააკავშიროთ უსადენო კლავიატურა 30 ფუტის მანძილიდან. უბრალოდ შეაერთეთ ერთიანი მიმღები თქვენს კომპიუტერში.": "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
    "მაღალი ტევადობის ბატარეა": "HIGH CAPACITY BATTERY",
    "აღჭურვილია ხანგრძლივი ჩაშენებული ბატარეით, თქვენ არასოდეს მოგიწევთ ერთი ცენტის დახარჯვა გამოცვლაზე. დატკბით 40 საათიანი გამოყენების დრო დატენვებს შორის.": "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
    "RGB განათებული რეჟიმები": "RGB BACKLIT MODES",
    "აირჩიეთ 4 განათების სიკაშკაშის დონე და რეგულირებადი სუნთქვის სიჩქარე. თითოეული ღილაკი ინტენსიურად ანათებს სიბნელეში და გეხმარებათ დაბალ განათების პირობებში ტიპისას.": "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
};

let isEnglish = true;

document.getElementById('translateBtn').addEventListener('click', function() {
    const elementsToTranslate = document.querySelectorAll('p, h1, h2, button');

    if (isEnglish) {
        elementsToTranslate.forEach(element => {
            const translation = translations[element.textContent.trim()];
            if (translation) {
                element.textContent = translation;
            }
        });
        this.textContent = 'Translate to English';
    } else {
        elementsToTranslate.forEach(element => {
            const translation = translationsReverse[element.textContent.trim()];
            if (translation) {
                element.textContent = translation;
            }
        });
        this.textContent = 'Translate to Georgian';
    }
    isEnglish = !isEnglish;
});



document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 40 * dx / window.innerWidth / 2
    let angleY = 40 * dy / window.innerHeight / 2
        let body = document.body;
        body.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
    });

// test

function changeLanguage(selectedLanguage) {
    const enOption = document.getElementById("en");
    const knOption = document.getElementById("kn");

    enOption.classList.remove("selected");
    knOption.classList.remove("selected");

    if (selectedLanguage === "kn") {
        knOption.classList.add("selected");
    } else {
        enOption.classList.add("selected");
    }

    if (selectedLanguage === "kn") {
        // Kannada Translations
        document.getElementById("model-text").innerText = "ಮೋಡಲ್";
        document.getElementById("electronics-text").innerText = "ಇಲೆಕ್ಟ್ರಾನಿಕ್ಸ್";
        document.getElementById("location").innerText = "ಕೆಆರ್ ಪುರಮ್ ರಸ್ತೆ, ಶಿವಮೊಗ್ಗ";
        document.getElementById("headline1").innerText = "ಸ್ಕ್ರ್ಯಾಚ್‌ರಹಿತ ಸೆಕೆಂಡ್ ಹ್ಯಾಂಡ್ ಟಿವಿಗಳನ್ನು ಕಡಿಮೆ ಬೆಲೆಗೆ ಖರೀದಿಸಿ – ಉಚಿತ ಮನೆ ವಿತರಣೆ 🚚";

        // Banner translations
        document.getElementById("banner1").innerText = "ಕಡಿಮೆ ಬೆಲೆಗಳು";
        document.getElementById("banner2").innerText = "ದುರಸ್ತಿ ಸೇವೆಗಳಿಗೆ ಉಚಿತ ಪಿಕ್‌ಅಪ್ ಮತ್ತು ಡ್ರಾಪ್";
        document.getElementById("banner3").innerText = "ಅತ್ಯುತ್ತಮ ಸೆಕೆಂಡ್ ಹ್ಯಾಂಡ್ LCD ಮತ್ತು LED ಗಳು ಲಭ್ಯ";
        document.getElementById("banner4").innerText = "ಕಡಿಮೆ ಬೆಲೆಗಳು";
        document.getElementById("banner5").innerText = "ದುರಸ್ತಿ ಸೇವೆಗಳಿಗೆ ಉಚಿತ ಪಿಕ್‌ಅಪ್ ಮತ್ತು ಡ್ರಾಪ್";
        document.getElementById("banner6").innerText = "ಅತ್ಯುತ್ತಮ ಸೆಕೆಂಡ್ ಹ್ಯಾಂಡ್ LCD ಮತ್ತು LED ಗಳು ಲಭ್ಯ";

        document.getElementById("available-tvs").innerText = "ಲಭ್ಯವಿರುವ ಟಿವಿಗಳು";
        document.getElementById("tv1-title").innerText = "ಸ್ಯಾಮ್ಸಂಗ್ 40\" LED ಟಿವಿ";
        document.getElementById("tv1-price").innerText = "ಬೆಲೆ: ₹20,000";
        document.getElementById("call1").innerText = "ಈಗ ಕರೆ ಮಾಡಿ";

        document.getElementById("tv2-title").innerText = "ಸೋನಿ 50\" LCD ಟಿವಿ";
        document.getElementById("tv2-price").innerText = "ಬೆಲೆ: ₹12,350";
        document.getElementById("call2").innerText = "ಈಗ ಕರೆ ಮಾಡಿ";

        document.getElementById("tv3-title").innerText = "ಎಲ್‌ಜಿ 32\" LED ಟಿವಿ";
        document.getElementById("tv3-price").innerText = "ಬೆಲೆ: ₹10,050";
        document.getElementById("call3").innerText = "ಈಗ ಕರೆ ಮಾಡಿ";

        document.getElementById("footer-location").innerText = "ಮೋಡಲ್ ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್, ಶಿವಮೊಗ್ಗ";
        document.getElementById("footer-contact").innerText = "ಸಂಪರ್ಕ: 9448159465";

    } else {
        // English
        document.getElementById("model-text").innerText = "Model";
        document.getElementById("electronics-text").innerText = "Electronics";
        document.getElementById("location").innerText = "KR Puram Road, Shivamogga";
        document.getElementById("headline1").innerText = "Buy Scratchless Second-Hand TVs at Affordable price – Free Home Delivery 🚚";

        document.getElementById("banner1").innerText = "Affordable Prices";
        document.getElementById("banner2").innerText = "Free Pick-up and Drop for repairs";
        document.getElementById("banner3").innerText = "Best Second hand LCDs and LEDs available";
        document.getElementById("banner4").innerText = "Affordable Prices";
        document.getElementById("banner5").innerText = "Free Pick-up and Drop for repairs";
        document.getElementById("banner6").innerText = "Best Second hand LCDs and LEDs available";

        document.getElementById("available-tvs").innerText = "Available Used TVs";
        document.getElementById("tv1-title").innerText = "Samsung 40\" LED TV";
        document.getElementById("tv1-price").innerText = "Price: ₹20,000";
        document.getElementById("call1").innerText = "Call Now";

        document.getElementById("tv2-title").innerText = "Sony 50\" LCD TV";
        document.getElementById("tv2-price").innerText = "Price: ₹12,350";
        document.getElementById("call2").innerText = "Call Now";

        document.getElementById("tv3-title").innerText = "LG 32\" LED TV";
        document.getElementById("tv3-price").innerText = "Price: ₹10,050";
        document.getElementById("call3").innerText = "Call Now";

        document.getElementById("footer-location").innerText = "Model Electronics, Shivamogga";
        document.getElementById("footer-contact").innerText = "Contact: 9448159465";
    }
}

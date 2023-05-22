const toggleTheme = document.getElementById("toggle-theme");

const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
    if (toggleTheme.checked) {

        html.dataset.theme = "dark";
        localStorage.setItem('theme','dark');

    } else {

        html.dataset.theme = "light";
        localStorage.setItem('theme','light');

    }   
}

const theme = localStorage.getItem("theme");

if(theme == 'light' || !theme) {

    html.dataset.theme = "light";

} else {

    html.dataset.theme = "dark";
    document.getElementById('toggle-theme').checked = true;

}




const visasPareizasAtbildes = ["Indonēzija", "Austrālija", "Liepāja"];

for(let i=1; i<=3; i++) {
    const visasAtbildes = document.getElementsByName(i);

    visasAtbildes.forEach(atbilde => {
        atbilde.addEventListener("click", () =>
         checkHandler(visasPareizasAtbildes[i-1], visasAtbildes));
    });
}


/**
 * iekrāso atbildes vienā jautājumā
 * @param {string} pareizaAtbilde - Pareizā atbilde ar vārdiem
 * @param {*} visasAtbildes 
 */
console.log(visasPareizasAtbildes);
function checkHandler(pareizaAtbilde, visasAtbildes) {

    visasAtbildes.forEach(atbilde => {

        if(atbilde.checked == true) {

            if(atbilde.value == pareizaAtbilde) {
                atbilde.parentNode.style.backgroundColor = "green";

            } else {
                atbilde.parentNode.style.backgroundColor = "red";
            }

        } else {
            atbilde.parentNode.style.backgroundColor = "var(--krasa-vietam)";
        }
    });
}




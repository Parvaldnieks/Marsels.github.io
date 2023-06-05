// Funkcijai ir jāveic viens uzdevums, jo tad tā spēs
// uzdevumu paveikt labi.
// 1. Refaktorē kodu - no zemāk redzamā koda izveido 4 funkcijas.
// 2. Tā kā refaktorēšana nedrīkst mainīt rezultātu,
// neaizmirsti izsaukt funkcijas.
// 3. Dokumentē katru no tām, izmantojot JSDoc
// 4. Izveido dokumentāciju!

const pirmaisSkaitlis = 5;
const otraisSkaitlis = 4;




/**
 * Saskaita skaitlus!!!
 * @param {*} pirmaisSkaitlis - pirmais skaitlis, kas ir 5!
 * @param {*} otraisSkaitlis - otrais skaitlis, kas ir 4!
 * atgriez summu!!!
 */
function saskaita(pirmaisSkaitlis, otraisSkaitlis) {
    const summa = pirmaisSkaitlis + otraisSkaitlis;
        console.log(pirmaisSkaitlis + " + " + otraisSkaitlis + " = " + summa);
}



/**
 * Atnem skaitlus!!!
 * @param {*} pirmaisSkaitlis - pirmais skaitlis, kas ir 5!
 * @param {*} otraisSkaitlis - otrais skaitlis, kas ir 4!
 * atgriez summu!!!
 */
function atnem(pirmaisSkaitlis, otraisSkaitlis) {
    const starpiba = pirmaisSkaitlis - otraisSkaitlis;
        console.log(pirmaisSkaitlis + " - " + otraisSkaitlis + " = " + starpiba);
}



/**
 * Sarezina skaitlus!!!
 * @param {*} pirmaisSkaitlis - pirmais skaitlis, kas ir 5!
 * @param {*} otraisSkaitlis - otrais skaitlis, kas ir 4!
 * atgriez summu!!!
 */
function rezina(pirmaisSkaitlis, otraisSkaitlis) {
    const reizinajums = pirmaisSkaitlis * otraisSkaitlis;
        console.log(pirmaisSkaitlis + " * " + otraisSkaitlis + " = " + reizinajums);
}



/**
 * Izdala skaitlus!!!
 * @param {*} pirmaisSkaitlis - pirmais skaitlis, kas ir 5!
 * @param {*} otraisSkaitlis - otrais skaitlis, kas ir 4!
 * atgriez summu!!!
 */
function dala(pirmaisSkaitlis, otraisSkaitlis) {
    const dalijums = pirmaisSkaitlis / otraisSkaitlis;
        console.log(pirmaisSkaitlis + " / " + otraisSkaitlis + " = " + dalijums);
}




saskaita(5, 4);
atnem(5, 4);
rezina(5, 4);
dala(5, 4);
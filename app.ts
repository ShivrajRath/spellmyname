import {
    SPELLINGS
} from 'spellings';

let $inEl = ( < HTMLInputElement > document.getElementById('name'));
let $spelEl = ( < HTMLInputElement > document.getElementById('spelling'));

$inEl.addEventListener('change', () => {
    $spelEl.innerHTML = '';
    $inEl.value.split('').forEach(letter => {
        $spelEl.innerHTML += `<p><span>${letter} : </span> ${SPELLINGS[letter.toUpperCase()]}</span></p>`;
    });
});
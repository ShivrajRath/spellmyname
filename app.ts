import {
    SPELLINGS
} from 'spellings';

let $inEl = ( < HTMLInputElement > document.getElementById('name'));
let $spelEl = ( < HTMLInputElement > document.getElementById('spelling'));

// Displays into the text box
function display(str: string) {
    localStorage.setItem('spell.name', str);
    $spelEl.innerHTML = '';
    // Remove any special character
    (str || '').replace(/\W|[0-9]/gi, '').split('').forEach(letter => {
        $spelEl.innerHTML += `<tr><td>${letter}</td><td>&nbsp;&nbsp;-&nbsp;&nbsp;</td><td>${SPELLINGS[letter.toUpperCase()]}</td></tr>`;
    });
}

// Handles key up to display everytime user types
$inEl.addEventListener('keyup', () => {
    display($inEl.value);
});

// If last feed is in local storage
let lastEnter = localStorage.getItem('spell.name');
display(lastEnter);
$inEl.value = lastEnter;
define("spellings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SPELLINGS = {
        A: 'Alpha',
        B: 'Bravo',
        C: 'Charlie',
        D: 'Delta',
        E: 'Echo',
        F: 'Foxtrot',
        G: 'Golf',
        H: 'Hotel',
        I: 'India',
        J: 'Juliett',
        K: 'Kilo',
        L: 'Lima',
        M: 'Mike',
        N: 'November',
        O: 'Oscar',
        P: 'Papa',
        Q: 'Quebec',
        R: 'Romeo',
        S: 'Sierra',
        T: 'Tango',
        U: 'Uniform',
        V: 'Victor',
        W: 'Whiskey',
        X: 'X-ray',
        Y: 'Yankee',
        Z: 'Zulu'
    };
});
define("app", ["require", "exports", "spellings"], function (require, exports, spellings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $inEl = document.getElementById('name');
    var $spelEl = document.getElementById('spelling');
    function display(str) {
        localStorage.setItem('spell.name', str);
        $spelEl.innerHTML = '';
        (str || '').replace(/\W|[0-9]/gi, '').split('').forEach(function (letter) {
            $spelEl.innerHTML += "<tr><td>" + letter + "</td><td>&nbsp;&nbsp;-&nbsp;&nbsp;</td><td>" + spellings_1.SPELLINGS[letter.toUpperCase()] + "</td></tr>";
        });
    }
    $inEl.addEventListener('keyup', function () {
        display($inEl.value);
    });
    var lastEnter = localStorage.getItem('spell.name');
    display(lastEnter);
    $inEl.value = lastEnter;
});
//# sourceMappingURL=tsc.js.map
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
    $inEl.addEventListener('change', function () {
        $spelEl.innerHTML = '';
        $inEl.value.split('').forEach(function (letter) {
            $spelEl.innerHTML += "<p><span>" + letter + " : </span> " + spellings_1.SPELLINGS[letter] + "</span></p>";
        });
    });
});
//# sourceMappingURL=tsc.js.map
//#Patterns: forin, freeze

var team = ["Mr. Pink", "Mr. White", "Nice Guy Eddie"];
//#Warn: freeze
Array.prototype.each = function () { /* something */
}

//#Warn: forin
for (var person in team) {
    window.alert(team[person] + ": I don't tip.");
}

for (var person in team) {
    if (team.hasOwnProperty(person)) {
        window.alert(team[person] + ": I don't tip.");
    }
}

//this also works to exclude ownproperties, but jshint is not that smart
Object.defineProperty(Array.prototype, "each", {
    value: function () {/*blah*/
    },
    writable: false,
    enumerable: false,
    configurable: false
});


//#Warn: forin
for (var person in team) {
    window.alert(team[person] + ": I don't tip.");
}

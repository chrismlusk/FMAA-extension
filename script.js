var fmaa = [

    { a: "March Madness", b: "Friendship Madness" },
    { a: "NCAA", b: "FMAA" },
    { a: "men's basketball tournament", b: "best friend tournament"},
    { a: "Final Four", b: "Friendly Four" },
    { a: "Bracketology", b: "Friendology" }

];

for (var i = 0; i < fmaa.length; i++) {
    var words = fmaa[i];
    document.body.innerHTML = document.body.innerHTML.replace(new RegExp(words.a, "g"), words.b);
}
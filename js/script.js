/* -- BAD -- */

// var myObj = [

//     { a: "March Madness", b: "Friendship Madness" },
//     { a: "NCAA", b: "FMAA" },
//     { a: "men's basketball tournament", b: "best friend tournament"},
//     { a: "Final Four", b: "Friendly Four" },
//     { a: "Bracketology", b: "Friendology" }

// for (var i = 0; i < myObj.length; i++) {
//     var words = myObj[i];
//     document.body.innerHTML = document.body.innerHTML.replace(new RegExp(words.a, "g"), words.b);
// }


/* -- BETTER -- */
replaceText(document.body);

function replaceText(scope) {
    var nodes;
    var node;
    if (scope.childNodes) {
        nodes = scope.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            node = nodes[i];
            if (node.nodeType === 3) {
                checkTextNode(node);
            }
            if (node.childNodes) {
                replaceText(node);
            }
            node = null;
        }
        nodes = null;
    }
}

function checkTextNode(node) {
    var newText = [
        "Friendship Madness",
        "FMAA",
        "Friendly Four"
    ];
    var oldText = [
        /March Madness/gi,
        /NCAA/g,
        /Final Four/g
    ];
    for (var i = 0; i < oldText.length; i++) {
        var text = node.data;
        node.data = text.replace(oldText[i], newText[i]);
    }
}
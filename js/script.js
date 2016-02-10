/* -- BAD -- */

// var myObj = [

//     { a: "March Madness", b: "Friendship Madness" },
//     { a: "NCAA", b: "FMAA" },
//     { a: "men's basketball tournament", b: "best friend tournament"},
//     { a: "Final Four", b: "Friendly Four" },
//     { a: "Bracketology", b: "Friendology" }

// ];

// for (var i = 0; i < myObj.length; i++) {
//     var words = myObj[i];
//     document.body.innerHTML = document.body.innerHTML.replace(new RegExp(words.a, "g"), words.b);
// }



/* -- BETTER -- */

function replaceText(scope) {
    var nodes;
    var node;
    if (scope.childNodes) {
        nodes = scope.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            node = nodes[i];
            if (node.nodeType === 3) {
                //is a text node
                checkTextNode(node);
            }
            if (node.childNodes) {
                //loop through child nodes if child nodes are found
                replaceText(node);
            }
            node = null;
        }
        nodes = null;
    }
}


function checkTextNode(node) {
    var newText = "Friendship Madness";
    var oldText = /March Madness/g;
    var text = node.data;
    var test = oldText.test(text);

    if (test) {
        //match found, replace node's textual data with specified string
        node.data = text.replace(oldText, newText);
        newText = null;
        text = null;
    }
    test = null;
}

replaceText(document.body);



/* -- BEST -- */

// ??????????


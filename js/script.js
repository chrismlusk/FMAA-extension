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
        "Friendly Four",
        "Friendology"
    ];
    var oldText = [
        /\bMarch Madness\b/gi,
        /\bNCAA\b/g,
        /\bFinal Four\b/g,
        /\bBracketology\b/g
    ];
    for (var i = 0; i < oldText.length; i++) {
        var text = node.data;
        node.data = text.replace(oldText[i], newText[i]);
    }
}

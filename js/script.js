findAndReplace(document.body);

function findAndReplace(scope) {
    var nodes, node, child, next;
    if ( scope.childNodes ) {
        nodes = scope.childNodes;
        for ( var i = 0; i < nodes.length; i++ ) {
            node = nodes[i];
            if ( node.nodeType === 3 ) {
                handleText(node);
            }
            if ( node.childNodes ) {
                findAndReplace(node);
            }
            node = null;
        }
        nodes = null;
    }
}

function handleText(textNode) {
    var newText = [
        "Friendship Madness",
        "FMAA",
        "Friendly Four",
        "Max Calanni",
        "the Calannis",
        "The Calannis",
        "Katie Rutledge",
        "the Rutledges",
        "The Rutledges",
        "Chris Lusk",
        "the Lusks",
        "The Lusks",
        "Jake Lovett",
        "the Lovetts",
        "The Lovetts"
    ];
    var oldText = [
        /\bMarch Madness\b/gi,
        /\bNCAA\b/gi,
        /\bFinal Four\b/gi,
        /\bLon Kruger\b/gi,
        /\bthe Sooners\b/gi,
        /\bThe Sooners\b/gi,
        /\bJay Wright\b/gi,
        /\bthe Wildcats\b/gi,
        /\bThe Wildcats\b/gi,
        /\bRoy Williams\b/gi,
        /\bthe Tar Heels\b/gi,
        /\bThe Tar Heels\b/gi,
        /\bTony Bennett\b/gi,
        /\bthe Cavaliers\b/gi,
        /\bThe Cavaliers\b/gi
    ];
    for (var i = 0; i < oldText.length; i++) {
        var text = textNode.nodeValue;
        textNode.nodeValue = text.replace(oldText[i], newText[i]);
    }
}
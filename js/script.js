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
        "Calannis",
        "the Calannis",
        "The Calannis",
        "Katie Rutledge",
        "Rutledges",
        "the Rutledges",
        "The Rutledges",
        "Chris Lusk",
        "Lusks",
        "the Lusks",
        "The Lusks",
        "Keifer Truett",
        "Syracuse Truetts",
        "the Truetts",
        "The Truetts"
    ];
    var oldText = [
        /\bMarch Madness\b/gi,
        /\bNCAA\b/gi,
        /\bFinal Four\b/gi,
        /\bLon Kruger\b/gi,
        /\bSooners\b/gi,
        /\bthe Sooners\b/gi,
        /\bThe Sooners\b/gi,
        /\bJay Wright\b/gi,
        /\bWildcats\b/gi,
        /\bthe Wildcats\b/gi,
        /\bThe Wildcats\b/gi,
        /\bRoy Williams\b/gi,
        /\bTar Heels\b/gi,
        /\bthe Tar Heels\b/gi,
        /\bThe Tar Heels\b/gi,
        /\bJim Boeheim\b/gi,
        /\bSyracuse Orange\b/gi,
        /\bthe Orange\b/gi,
        /\bThe Orange\b/gi
    ];
    for (var i = 0; i < oldText.length; i++) {
        var text = textNode.nodeValue;
        textNode.nodeValue = text.replace(oldText[i], newText[i]);
    }
}
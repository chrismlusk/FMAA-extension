findAndReplace(document.body);

function findAndReplace(node) 
{
    
    var child, next;
    
    if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
        || node.classList.indexOf('ace_editor') > -1) {
        return;
    }

    switch ( node.nodeType )  
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child ) 
            {
                next = child.nextSibling;
                findAndReplace(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode)
{
    var newText = [
        "Friendship Madness",
        "FMAA",
        "Friendly Four",
        "the Calannis",
        "The Calannis",
        "the Rutledges",
        "The Rutledges",
        "the Lusks",
        "The Lusks",
        "the Lovetts",
        "The Lovetts"
    ];
    var oldText = [
        /\bMarch Madness\b/gi,
        /\bNCAA\b/gi,
        /\bFinal Four\b/gi,
        /\bthe Sooners\b/gi,
        /\bThe Sooners\b/gi,
        /\bthe Wildcats\b/gi,
        /\bThe Wildcats\b/gi,
        /\bthe Tar Heels\b/gi,
        /\bThe Tar Heels\b/gi,
        /\bthe Cavaliers\b/gi,
        /\bThe Cavaliers\b/gi
    ];
    for (var i = 0; i < oldText.length; i++) {
        var text = textNode.nodeValue;
        textNode.nodeValue = text.replace(oldText[i], newText[i]);
    }
}
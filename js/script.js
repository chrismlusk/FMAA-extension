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
    var v = textNode.nodeValue;

    v = v.replace(/\bMarch Madness\b/g, "Friendship Madness");
    v = v.replace(/\bNCAA\b/g, "FMAA");
    v = v.replace(/\bFinal Four\b/g, "Friendly Four");
    v = v.replace(/\bthe Sooners\b/g, "the Calannis");
    v = v.replace(/\bThe Sooners\b/g, "The Calannis");
    v = v.replace(/\bthe Wildcats\b/g, "the Rutledges");
    v = v.replace(/\bThe Wildcats\b/g, "The Rutledges");
    v = v.replace(/\bthe Tar Heels\b/g, "the Lusks");
    v = v.replace(/\bThe Tar Heels\b/g, "The Lusks");
    v = v.replace(/\bthe Cavaliers\b/g, "the Lovetts");
    v = v.replace(/\bThe Cavaliers\b/g, "The Lovetts");
    
    textNode.nodeValue = v;
}
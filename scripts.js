const TEXT_SWAP = [
  [ /\bMarch Madness\b/g, "Friendship Madness" ],
  [ /\bNCAA\b/g, "FMAA" ],
  [ /\bFinal Four\b/g, "Friendly Four" ],
  [ /\bOne Shining Moment\b/g, "One Friendly Moment" ],
  [ /\bSelection Sunday\b/g, "Selection Monday" ],
  [ /\bPresident Mark Emmert\b/g, "Comissioner James Corley" ],
  [ /\bMark Emmert\b/g, "James Corley" ],
  [ /\bEmmert\b/g, "Corley" ],
  [ /\bMen's Basketball Committee\b/g, "Friendship Review Panel" ],
  [ /\bbasketball championships\b/g, "friendship championships" ],
  [ /\bNCAA champion\b/g, "James Corley's best friend" ],

  // [ /\b\b/g, "" ],
];

let elements = document.getElementsByTagName("*");

for (let i = 0; i < elements.length; i++) {
  let element = elements[i];

  for (let j = 0; j < element.childNodes.length; j++) {
    let node = element.childNodes[j];

    if (node.nodeType === 3) {
      for (let k = 0; k < TEXT_SWAP.length; k++) {
        let text = node.nodeValue;
        node.nodeValue = text.replace(TEXT_SWAP[k][0], TEXT_SWAP[k][1]);
      }
    }
  }
}

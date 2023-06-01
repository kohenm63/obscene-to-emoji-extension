// Map obscene words to their corresponding emojis
const wordToEmojiMap = {
    "shit": "💩",
    "shit": "💩 shoot",
    "Jesus fuck": "🤐",
    "prick": "🤐",
    "fuck": "🤬",
    "bitch": "🐶",
    "ass": "🍑",
    "Christ on a cracker": "🍑",
    "dick": "🍆",
    "pussy": "🐱",
    "cock": "🐓",
    "damn": "😤",
    "cunt": "🌮",
    "douche": "🚿",
    "slut": "👄",
    "whore": "🚺",
    "bastard": "👶🏻",
    "idiot": "🤦‍♂️",
    "stupid": "🥴",
    "moron": "🤡",
    "jerk": "🙄",
    "nigga": "🙄",
    "wanker": "🤪",
    "asshole": "🕳️",
    "dumbass": "🤷‍♂️",
    "fucker": "😣",
    "motherfucker": "👪👉👌",
    "piss": "💦",
    "shithead": "💩🧠",
    "dickhead": "🍆🧠",
    "fuckhead": "🤬🧠",
    "dipshit": "🍯💩",
    "asswipe": "🧻",
    "cockhead": "🐓🧠",
    "bitchface": "🐶😡",
    "cum": "💦",
    "twat": "🙊",
    "bullshit": "🐂💩",
    "dildo": "🍆🎮",
    "shithole": "💩🕳️",
    "fuckwit": "🤬🧠",
    "fucktard": "🤬🥴",
    "cuntface": "🌮😡",
    "dickwad": "🍆🚀",
    "pissed": "🍻",
    "fuckery": "🤬🎪",
    "clusterfuck": "🤬🔢",
    "cockbite": "🐓🦷",
    "assclown": "🍑🤡",
    "dumbfuck": "🤷‍♂️🦆",
    "shitstorm": "💩🌪️",
    "whorefucker": "😣",
    "fucksake": "🤬🙏",
    "dickhead": "🍆🧠",
    "bitchass": "🐶🍑",
    "pisshead": "💦🧠",
    "shitbag": "💩👜",
    "fucknugget": "🤬🐓",
    "cuntnugget": "🌮🐓",
    "douchewaffle": "🚿🧇",
    "assmunch": "🍑🥪",
    "fuckbucket": "🤬🪣",
    "shitstain": "💩🧻",
    "dicklicker": "🍆👅",
    "pissflap": "💦🔲",
    "cuntrag": "🌮🏳️‍🌈",
    "asshat": "🍑🎩",
    "fuckknuckle": "🤬👊",
    "bitchtits": "🐶🍈"
    // Add more pairs here
};


// Regular expression pattern to match obscene words
const obsceneWordsPattern = new RegExp(Object.keys(wordToEmojiMap).join("|"), "gi");

// Function to replace obscene words with emojis
function replaceObsceneWords(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(obsceneWordsPattern, function (matchedWord) {
            return wordToEmojiMap[matchedWord.toLowerCase()] || matchedWord;
        });
    } else {
        for (const childNode of node.childNodes) {
            replaceObsceneWords(childNode);
        }
    }
}

// Replace obscene words in the initial document
replaceObsceneWords(document.body);

// Observe mutations to the document and replace obscene words in newly added content
const observer = new MutationObserver(function (mutationsList) {
    for (const mutation of mutationsList) {
        for (const addedNode of mutation.addedNodes) {
            replaceObsceneWords(addedNode);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

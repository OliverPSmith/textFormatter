const textInput = document.getElementById('text-input');
const lowerCaseBtn = document.getElementById('lower-case');
lowerCaseBtn.checked = false;


const getWordCount = () => {
    const wordCount = document.querySelector('.word-count-span');
    if (textInput.value.length > 0) {
        wordCount.innerHTML = textInput.value.trim().split(" ").length;
    }   else {
        wordCount.innerHTML = 0;
    };
};

const getCharacterCount = () => {
    const characterCount = document.querySelector('.character-count-span');
    if (textInput.value.length > 0) {
        characterCount.innerHTML = textInput.value.trim().split("").filter(char => char.trim() != "").length;
    }   else {
        characterCount.innerHTML = 0;
    };
};

const getSentenceCount = () => {
    const sentenceCount = document.querySelector('.sentence-count-span');
    const wordArray = textInput.value.split(/[.!?\n]/);
    if (textInput.value.length > 0) {
        sentenceCount.innerHTML = wordArray.length-1;
    }   else {
        sentenceCount.innerHTML = 0;
    };
};


const titleCase = () => {
    const value = textInput.value.trim().split(" ");
    const converted = value.map(x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()).join(" ");
    textInput.value = converted;
}

const upperCase = () => {
    const value = textInput.value.trim().split(" ");
    const converted = value.map(x => x.toUpperCase()).join(" ");
    textInput.value = converted
}

const lowerCase = () => {
    const value = textInput.value.trim().split(" ");
    const converted = value.map(x => x.toLowerCase()).join(" ");
    textInput.value = converted;
} 



textInput.addEventListener('keyup', () => {
    textInput.onkeyup = e => {
        if (e.code === 'Enter' || e.code === 'Period' || e.code === 'Backspace') {
            getSentenceCount();
        };
        if(e.code === 'Space' || e.code === 'Backspace') {
            getWordCount();
        };
        getCharacterCount();
    };
});

document.getElementById('title-case').addEventListener('click', titleCase);
document.getElementById('upper-case').addEventListener('click', upperCase);
document.getElementById('lower-case').addEventListener('click', lowerCase);
text.addEventListener('input', (event) => {
    let str = text.value;
    let characters = str.length;
    let words = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ')
            words++;
        if (str[i] == '\n')
            characters--;
    }
    if (characters == 0)
        words = 0;
    info.innerHTML = `${words} Words ${characters} Character`;
})
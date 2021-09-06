function demo(input) {
    let text = input[0];
    let space = 0;
    
    for (let i = 0; i<=text.length; i++) {
        switch(text[i]) {
            case " " : space++;break;
        }
    }
    space++;
    
    if (space > 10) {
        console.log(`The message is too long to be send! Has ${space} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }

}
demo(["This message has exactly eleven words. One more as it's allowed!"])
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

let myShoes = Shoes.Adidas;
console.log(myShoes);

enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log("예쓰");
    }

    if (answer === Answer.No) {
        console.log("놉");
    }
}

askQuestion(Answer.Yes);
askQuestion(Answer.No);
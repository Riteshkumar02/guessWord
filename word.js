let wordList = [
    {
    word: "python",
    hint: "programming language"
    },
    {
    word: "guitar",
    hint: "a musical instrument"
    },
    {
    word: "aim",
    hint: "a purpose or intention"
    },
    {
    word: "venus",
    hint: "planet of our solar system"
    },
    {
    word: "gold",
    hint: "a yellow precious metal"
    },
    {
    word: "ebay",
    hint: "online shopping site"
    },
    {
    word: "golang",
    hint: "programming language"
    },
    {
    word: "coding",
    hint: "related to programming"
    },
    {
    
    word: "matrix",
    hint: "science fiction movie"
    },
    {
    word: "bugs",
    hint: "related to programming"
    },
    {
    word: "avatar",
    hint: "epic science fiction film"
    },
    {
    word: "gif",
    hint: "a file format for image"
    }
]

function start(){
    var  random=wordList[Math.floor(Math.random()*wordList.length)].word;
    console.log(random)
}
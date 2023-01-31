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
let chance=8;
var randomHint=wordList[Math.floor(Math.random()*wordList.length)].hint;

function start(){
    var  randomWord=wordList[Math.floor(Math.random()*wordList.length)].word;
    console.log(randomHint)
    console.log(randomWord)
    let text;
    if(chance==0)
    {
      chance=8;
      alert("You Lost");
      clr();
      return;
    }
    chance--;
  document.getElementById("guess").innerHTML=chance;
  document.getElementById("hint").innerHTML=randomHint;
      let y=document.getElementById("guess").value;
      // let history=document.getElementById("fn").value;
      // document.getElementById("his").innerHTML="Enter value is: ${history}";
    
  
//    if(y==x)
//    {
//     chance=8;
//         text = "Guessed";
//         alert("You won");
//         clr();
//         return ;
//     }

}
document.getElementById("hint").innerText=randomHint;
function clr()
{
    var randomHint=wordList[Math.floor(Math.random()*wordList.length)].hint;
  document.getElementById("hint").innerText=randomHint;
  document.getElementById("guess").innerText="8";
  
//   document.getElementById("fn").value="";

}

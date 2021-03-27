let userScore=0;
let compScore=0;
const userScoreSpan=document.getElementById("userScore");
const CompScoreSpan=document.getElementById("compScore");
const scoreboard_div=document.getElementsByClassName("scoreboard");
const result_div=document.getElementById("result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
getCompChoice=()=>{
    const choices=["r","p","s"];
    const randomIndex=Math.floor(Math.random()*3);
    return choices[randomIndex];
};
convertToWord=(letter)=>{
    if(letter=="r"){
        return "Rock";
    }
    else if(letter=="p"){
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
};
const smallUserWord="user".fontsize("3");
const smallCompWord="comp".fontsize("3");
wins=(user,computer)=>
{
  const userChoiceDiv=document.getElementById(user);
  userScore++;
  userScoreSpan.innerHTML=userScore;
  CompScoreSpan.innerHTML=compScore;
  result_div.innerHTML=`${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win.`;
  userChoiceDiv.classList.add("green-glow");
  setTimeout(()=>userChoiceDiv.classList.remove("green-glow"),500);
};
loses=(user,computer)=>{
    const userChoiceDiv=document.getElementById(user);
    compScore++;
    userScoreSpan.innerHTML=userScore;
    CompScoreSpan.innerHTML=compScore;
    result_div.innerHTML=`${convertToWord(computer)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. You lose.`;
    userChoiceDiv.classList.add("red-glow");
    setTimeout(()=>userChoiceDiv.classList.remove("red-glow"),500);
    };
draw=(user,computer)=>{
    const userChoiceDiv=document.getElementById(user);
    result_div.innerHTML=`${convertToWord(computer)}${smallCompWord} equals ${convertToWord(user)}${smallUserWord}. It is a draw.`;
    userChoiceDiv.classList.add("gray-glow");
    setTimeout(()=>
        userChoiceDiv.classList.remove("gray-glow"),500);
    };
game=(userChoice)=>{
    const compChoice=getCompChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loses(userChoice,compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,compChoice);
            break;
    }
}
rock_div.addEventListener("click",()=>game("r"));
paper_div.addEventListener("click",()=>game("p"));
scissors_div.addEventListener("click",()=>  game("s"));
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
const resetb =document.querySelector("#reset");


const reset =() =>

    {
        userscore.innerText="0";
        compscore.innerText="0";
        msg.innerText="Play your move";
        msg.style.backgroundColor ="#081b31";
        userScore=0;
        compScore=0;
    }
const gen = () =>
{
    const options =["rock","paper","scissors"];
    const ran = Math.floor(Math.random() * 3);
    return options[ran];
}

const draw =() =>
{
  
  msg.innerText="Draw. Play again";
  msg.style.backgroundColor ="#081b31";
}


const show = (userWin,userChoice,compChoice) =>
{
    if(userWin){
        userScore++;
        userscore.innerText = userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compscore.innerText = compScore;
        
        msg.innerText=`You Lost.  ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame=(userChoice) => {
  console.log("user choice = ",userChoice);

  //generate comp choice
  const compChoice= gen();
  console.log("comp choice",compChoice);

  //check

  if(userChoice === compChoice){
    //draw
 draw();
  }

  else{
    let userWin = true;
    if(userChoice=== "rock"){
        userWin = compChoice ==="paper" ? false: true;
          //sci,paper
    }
    else if(userChoice=="paper")
    {
        userWin = compChoice ==="scissors" ? false:true;
        //rock,sci
    }

    else{
        //rock,paper

        compChoice === "rock"?false:true;
    }
      show(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) =>  {
    
    choice.addEventListener("click",()=>
    {  
        const userChoice= choice.getAttribute("id");

       playGame(userChoice);
    });
});

resetb.addEventListener("click",reset);

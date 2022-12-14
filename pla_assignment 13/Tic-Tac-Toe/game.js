const mark = document.querySelectorAll(".box")
let player = true;
let turns = 0;

mark.forEach((element) => {
    
    element.addEventListener('click', () => {
        if(element.innerText.length == 0)
        { 
            if(player){
                
                //Check
                console.log(player);
            //Places an x on the grid 
                element.innerText= "X";
                //Tell you it is player 2 turn 
                let playerName = "Player O turn";
                const h1elements = document.getElementsByTagName("h2");
                h1elements[0].innerText = playerName;
                //Changes player to equal false meaning that is switching to "O"
                player = false;
                
                
            }
            else{   
                //Check
                console.log(player);
                //Places an o on the grid 
                element.innerText ="O";
                //Tell you it is player 1 turn 
                let player1 = "Player X turn";
                const h1elements = document.getElementsByTagName("h2")
                h1elements[0].innerText = player1;
                //Changes player to equal true meaning that it is switching to "X"
                player = true;
                
            }
        }
        turns+=1;
        checkForWin()
        console.log(turns)
        
    })
});



function checkForWin(){
    if(turns > 4){
        const boxes = Array.from(document.getElementsByClassName('box') ) 

        //Horizontal
        if(boxes[0].innerText.length > 0 && (boxes[0].innerText == boxes[1].innerText && boxes[0].innerText == boxes[2].innerText))
        {
           
            console.log(boxes[0].innerText)
            let playerwon = "Player " + boxes[0].innerText + " won";
            const won = document.getElementsByTagName("h2");
            won[0].innerText = playerwon;
            document.body.style.backgroundColor = "green"
            
            
        }
        else if(boxes[3].innerText.length > 0 && (boxes[3].innerText == boxes[4] .innerText && boxes[3].innerText == boxes[5].innerText))
        {
            let playerwon = "Player " + boxes[3].innerText + " won";
            const won = document.getElementsByTagName("h2")
            won[0].innerText = playerwon;
            document.body.style.backgroundColor = "green"
            console.log(boxes[3].innerText)
        }
        else if(boxes[6].innerText.length > 0 &&(boxes[6].innerText == boxes[7] .innerText && boxes[6].innerText == boxes[8].innerText))
        {
        
            let playerwon = "Player " + boxes[6].innerText + " won";
            const won = document.getElementsByTagName("h2")
            won[0].innerText = playerwon;
            document.body.style.backgroundColor = "green"
            console.log(boxes[6].innerText)
        }
        //Diagonals 
        else if(boxes[8].innerText.length > 0 && (boxes[0].innerText == boxes[4] .innerText && boxes[0].innerText == boxes[8].innerText))
        {
            let playerwon = "Player " + boxes[8].innerText + " won";
            const won = document.getElementsByTagName("h2")
            won[0].innerText = playerwon;
            document.body.style.backgroundColor = "green"
            console.log(boxes[0].innerText)
        }
        else if(boxes[2].innerText.length > 0 && (boxes[2].innerText == boxes[4] .innerText && boxes[2].innerText == boxes[6].innerText))
        {
            
            let playerwon = "Player " + boxes[2].innerText + " won";
            const won = document.getElementsByTagName("h2")
            won[0].innerText = playerwon;
            document.body.style.backgroundColor = "green"
            console.log(boxes[2].innerText)
        }
        //Vertically
        else if(boxes[0].innerText.length > 0 && (boxes[0].innerText == boxes[3] .innerText && boxes[0].innerText == boxes[6].innerText))
        {
            let playerwon = "Player " + boxes[0].innerText + " won";
            const won = document.getElementsByTagName("h2")
            won[0].innerText = playerwon;
            document.body.style.backgroundColor = "green"
            console.log(boxes[0].innerText)
        }
        else if(boxes[1].innerText.length > 0 && (boxes[1].innerText == boxes[4] .innerText && boxes[1].innerText == boxes[7].innerText))
        {
            let playerwon = "Player " + boxes[1].innerText + " won";
            const won = document.getElementsByTagName("h2")
            won[0].innerText = playerwon;
            document.body.style.backgroundColor = "green"
            console.log(boxes[4].innerText)
        }
        else if(boxes[2].innerText.length > 0 && (boxes[2].innerText == boxes[5] .innerText && boxes[2].innerText == boxes[8].innerText))
        {
            let playerwon = "Player " + boxes[2].innerText + " won";
            const won = document.getElementsByTagName("h2")
            won[0].innerText = playerwon;
            document.body.style.backgroundColor = "green"
            console.log(boxes[2].innerText)
        }
        else if(turns >= 9)
        {
            let playerTie = "Tie";
            const tie = document.getElementsByTagName("h2")
            tie[0].innerText = playerTie;
            document.body.style.backgroundColor = "red"
            console.log("tie")
        }

    }
    /*else if(turns == 9)
    {
        let playerTie = "Tie";
        const tie = document.getElementsByTagName("h2")
        tie[0].innerText = playerTie;
        console.log("tie")
    }*/
}
  
function myButton() {
    location.reload();
}
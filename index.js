console.log("Welcome to Tic Tac Toe")
let turn = "X"
let isGameOver= false;
let info = document.querySelector(".info")
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

const checkWin = ()=>{
let boxsize=document.getElementsByClassName("boxtext")
    let wins = [
      [0, 1, 2, 5, 5, 0],
      [3, 4, 5, 5, 15, 0],
      [6, 7, 8, 5, 25, 0],
      [0, 3, 6, -5, 15, 90],
      [1, 4, 7, 5, 15, 90],
      [2, 5, 8, 15, 15, 90],
      [0, 4, 8, 5, 15, 45],
      [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        if((boxsize[e[0]].innerText===boxsize[e[1]].innerText) && (boxsize[e[1]].innerText)===(boxsize[e[2]].innerText) && (boxsize[e[0]].innerText!=="")){
          
            isGameOver = true;
            info.innerHTML=`${boxsize[e[0]].innerText} Won`
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
         document.querySelector(".line").style.width = "20vw";
        }
    })
}

// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelectorAll(".box")
boxes.forEach((element)=>{
          let boxtext = element.querySelector(".boxtext")
        
             element.addEventListener("click",()=>{
                 if(boxtext.innerText === ''){
               
               boxtext.innerText = turn;
               turn = changeTurn()
               checkWin()
                if(!isGameOver){
                  info.innerHTML=`Turn for ${turn}`
                }
            
           }
            
        })
           

})

let reset=document.querySelector(".reset")


reset.addEventListener("click",()=>{
  let boxtext = document.querySelectorAll(".boxtext")
  Array.from(boxtext).forEach(element=>{
    element.innerText="";

  })
  turn = "X"
  isGameOver = false;
  info.innerHTML=`Turn for ${turn}`
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
  document.querySelector(".line").style.width="0px"
})


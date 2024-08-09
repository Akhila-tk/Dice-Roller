function DiceRoller(){
    const diceRoll=document.getElementById("diceRoll").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
     let values=[];
     let images=[];
    for(let i=0;i<diceRoll;i++){
     const value=Math.floor(Math.random()*6)+1;
     values.push(value);
    //  images.push(`<img width="50px" height="50" src="dice_roller/dice_image/${value}.jpg">`)
     images.push(`<img width="50px" height="50" src="../dice_image/dice${value}.jpg">`)
    }
    diceResult.textContent=`dice:${values.join(', ')}`;
    diceImages.innerHTML=images.join('');
}

sheepImages=["sheep-images/sheep1.png","sheep-images/sheep2.png","sheep-images/sheep3.png","sheep-images/sheep4.png"];
const pi = 3.141

const sheepRotation=setInterval(drawSheeps,30)
const starAmount=200;

let angle=0
function drawSheeps(){
    document.getElementById("sheepGraphics").innerHTML=""

    for(let i=0;i<sheepImages.length;i++){

        let x = 300*Math.sin(i*2*pi/sheepImages.length+angle)+window.innerWidth/2-50
        let y = 300*Math.cos(i*2*pi/sheepImages.length+angle)+400
        document.getElementById("sheepGraphics").innerHTML+="<image src=\""+sheepImages[i]+"\" style=\"width:100px;height:100px;position:absolute;top:"+y+"px;left:"+x+"px;\">";
    };

    angle+=.05
}

function drawStars(){
    for(let i =0;i<starAmount;i++){
        let x=window.outerWidth*Math.random()
        let y=document.documentElement.scrollHeight*Math.random()
        size=15*Math.random()+5
        document.getElementById("stars").innerHTML+="<div id=\"star"+i+"\" style=\"background-color:white;position:absolute;width:"+size+"px;height:"+size+"px;left:"+x+"px;top:"+y+"px;border-radius:50%;\"></div>"
    }
    console.log(document.getElementById("stars").innerHTML)
}

function main(){
    drawStars()
    drawSheeps();
}

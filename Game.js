q = ['In ce an a aparut CS:GO','Cine detine compania Tesla','Ce sport practica Connor Mcgregor'];
a1 = [2012,'Bill Gates','Tennis'];
a2 = [2010,'Elon Musk','Badminton'];
a3 = [2009,'Donald Trump','MMA'];
a = [a1 , a2 , a3];



function myGame () {



for(var i = 0;i< q.length;i++)
    console.log(q[i])
  for( var j = 0;j< a.length;j++)
      console.log(a[j])
      if(a1 = 2012 , a2 = 'Elon Musk' , a3 = 'MMA') {
          console.log('Felicitari')
      } else {
          console.log('Ai gresit')
      }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("OpenDiv").style.visibility='hidden' 
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("OpenDiv1").style.visibility='hidden' 
});

function Game() {
document.getElementById("GameContent").innerHTML = `1. In what year did the game called Cs: Go appear ? 
                                            <br>
                                            <br>
                                            Variants
											<br>
											<br>
											<input type="radio" name="Variants" value="2012">2012</input><br>
                                            <input type="radio" name="Variants" value="2012">2010</input><br>
                                            <input type="radio" name="Variants" value="2012">2009</input><br>
											<br>
											<button type="button" id="Confirm" onclick="Game1()" onclick="check();" class="btn btn-warning">Confirm</button>
                                            <br>
				                            `;
				   
}	

function Game1() {
document.getElementById("GameContent1").innerHTML = `2. Who owns Tesla ? 
                                            <br>
                                            <br>
											Variants
											<br>
											<br>
											<input type="radio" name="Variants" value="Bill Gates">Bill Gates</input><br>
											<input type="radio" name="Variants" value="Elon Musk">Elon Musk</input><br>
											<input type="radio" name="Variants" value="Donald Trump">Donald Trump</input><br>
											<br>
											<button type="button" id="Confirm" onclick="Game2()" onclick="check();" class="btn btn-warning">Confirm</button>
											<br>
				                            `;
				   
}	
function Game2() {
document.getElementById("GameContent2").innerHTML = `3. What sport does Connor Mcgregor practice ? 
                                            <br>
                                            <br>
											Variants
											<br>
											<br>
											<input type="radio" name="Variants" value="Tennis">Tennis<br>
											<input type="radio" name="Variants" value="Badminton">Badminton<br>
											<input type="radio" name="Variants" value="MMA">MMA<br>
											<br>
											<button type="button" id="Confirm" onclick="OpenLevel2();" class="btn btn-warning">Confirm</button>
											<br>
											<br>
				                            `;
				   
}	


function Game3() {
document.getElementById("GameContent3").innerHTML = `4. When did Barack Obama become President of the United States ?
                                            <br>
                                            <br>
                                            Variants
											<br>
											<br>
											<input type="radio" name="Variants" value="2012">14 March 1993<br>
											<input type="radio" name="Variants" value="2012">20 January 2009<br>
											<input type="radio" name="Variants" value="2012">20 January 2001<br>
											<br>
											<button type="button" id="Confirm" onclick="Game4()" onclick="check();" class="btn btn-warning">Confirm</button>
                                            <br>
				                            `;
				   
}	

function Game4() {
document.getElementById("GameContent4").innerHTML = `5. Who starred in the recently released film Joker ?
                                            <br>
                                            <br>
											Variants
											<br>
											<br>
											<input type="radio" name="Variants" value="Bill Gates">Arnold Schwarzenegger<br>
											<input type="radio" name="Variants" value="Elon Musk">Mark Wahlberg<br>
											<input type="radio" name="Variants" value="Donald Trump">Joaquin Phoenix<br>
											<br>
											<button type="button" id="Confirm" onclick="Game5()" onclick="check();" class="btn btn-warning">Confirm</button>
											<br>
				                            `;
				   
}	
function Game5() {
document.getElementById("GameContent5").innerHTML = `6. Ce sport practica Connor Mcgregor ? 
                                            <br>
                                            <br>
											Variants
											<br>
											<br>
											<input type="radio" name="Variants" value="Tennis">Tennis<br>
											<input type="radio" name="Variants" value="Badminton">Badminton<br>
											<input type="radio" name="Variants" value="MMA">MMA<br>
											<br>
											<button type="button" id="Confirm" onclick="OpenLevel2();" class="btn btn-warning">Confirm</button>
											<br>
											<br>
				                            `;
				   
}	

function OpenGame() {
  document.getElementById("OpenDiv").style.visibility='visible' 
        }
		
function OpenGame1() {
  document.getElementById("OpenDiv1").style.visibility='visible' 
        }		

		
$("#input").keyup(function(event){
    if(event.keyCode == 13){
        $("#Raspuns").click();
    }
});
		
function check() {
   
   var Game = document.getElementById.Game.value;
   var Game1 = document.getElementById.Game1.value;
   var Game2 = document.getElementById.Game2.value;
   var correct = 0;
   
       if (Game == "2012") {
		   correct++;
       }
 
       if (Game1 == "Elon Musk") {
		   correct++;
       }
	   	   
       if (Game2 == "MMA") {
		   correct++;
       }
   
   
   document.getElementById("after_submit").style.visibility = "visible";
   document.getElementById("number_correct").innerHTML = "You got " + correct + "correct.";

}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("Level2").style.visibility='hidden' 
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("Game1").style.visibility='hidden' 
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("Game2").style.visibility='hidden' 
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("Game4").style.visibility='hidden' 
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("Game5").style.visibility='hidden' 
});

function OpenLevel2() {
  document.getElementById("Level2").style.visibility='visible' 
        }
		

$(document).on("click", "input[name='Variants']", function(){
    thisRadio = $(this);
    if (thisRadio.hasClass("imChecked")) {
        thisRadio.removeClass("imChecked");
        thisRadio.prop('checked', false);
    } else { 
        thisRadio.prop('checked', true);
        thisRadio.addClass("imChecked");
    };
})













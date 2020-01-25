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
    document.getElementById("OpenDiv0").style.visibility='hidden' 
});

function Game() {
document.getElementById("GameContent").innerHTML = `1. In what year did the game called Cs: Go appear ? 
                                            <br>
                                            <br>
                                            Variants
											<br>
											<br>
											<input type="radio" name="Variants1" onclick="correct001()" value="2012">2012</input><br>
                                            <input type="radio" name="Variants1" onclick="incorrect001()" value="2010">2010</input><br>
                                            <input type="radio" name="Variants1" onclick="incorrect001()" value="2009">2009</input><br>
											<br>
											<button type="button" id="Confirm" onclick="Game1()" class="btn btn-warning">Next Question</button>
                                            <br>
				                            `;
				   
}	

function Game1() {
document.getElementById("GameContent1").innerHTML = `2. Who is the Most Famous Video Game Character of all Time ? 
                                            <br>
                                            <br>
											Variants
											<br>
											<br>
											<input type="radio" name="Variants2" onclick="incorrect002()" value="Link">Link</input><br>
											<input type="radio" name="Variants2" onclick="incorrect002()" value="Sonic">Sonic</input><br>
											<input type="radio" name="Variants2" onclick="correct002()" value="Mario">Mario</input><br>
											<input type="radio" name="Variants2" onclick="incorrect002()" value="Solid Snake">Solid Snake</input><br>
											<input type="radio" name="Variants2" onclick="incorrect002()" value="Donkey Kong">Donkey Kong</input><br>
											<br>
											<button type="button" id="Confirm" onclick="Game2()" onclick="check();" class="btn btn-warning">Next Question</button>
											<br>
				                            `;
				   
}	
function Game2() {
document.getElementById("GameContent2").innerHTML = `3. In what Game Series are Golden Rings used as Life-energy and Money ?
                                            <br>
                                            <br>
											Variants
											<br>
											<br>
											<input type="radio" name="Variants3" onclick="incorrect003()" value="Half-Life">Half-Life<br>
											<input type="radio" name="Variants3" onclick="incorrect003()" value="Soul Reaver">Soul Reaver<br>
											<input type="radio" name="Variants3" onclick="incorrect003()" value="Harvest Moon">Harvest Moon<br>
											<input type="radio" name="Variants3" onclick="incorrect003()" value="Super Mario Bros">Super Mario Bros<br>
											<input type="radio" name="Variants3" onclick="correct003()" value="Sonic the Hedgehog">Sonic the Hedgehog<br>
											<br>
											<button type="button" id="Confirm" onclick="OpenLevel2();" class="btn btn-warning">Next Question</button>
											<br>
											<br>
				                            `;
				   
}	


function Game3() {
document.getElementById("GameContent3").innerHTML = `4. In Uncharted 4, which PlayStation 1 title does Nathan Drake play ? 
                                            <br>
                                            <br>
                                            Variants
											<br>
											<br>
											<input type="radio" name="Variants4" onclick="incorrect004()" value="Mortal Kombat">Mortal Kombat<br>
											<input type="radio" name="Variants4" onclick="incorrect004()" value="Final Fantasy 7">Final Fantasy 7<br>
											<input type="radio" name="Variants4" onclick="incorrect004()" value="Tomb Raider">Tomb Raider<br>
											<input type="radio" name="Variants4" onclick="correct004()" value="Crash Bandicoot">Crash Bandicoot<br>
											<br>
											<button type="button" id="Confirm" onclick="Game4()" onclick="check();" class="btn btn-warning">Next Question</button>
                                            <br>
				                            `;
				   
}	

function Game4() {
document.getElementById("GameContent4").innerHTML = `5. In what year was the first game in the Halo series released ?
                                            <br>
                                            <br>
											Variants
											<br>
											<br>
											<input type="radio" name="Variants5" onclick="incorrect005()" value="2000">2000<br>
											<input type="radio" name="Variants5" onclick="incorrect005()" value="2002">2002<br>
											<input type="radio" name="Variants5" onclick="incorrect005()" value="2003">2003<br>
											<input type="radio" name="Variants5" onclick="correct005()" value="2001">2001<br>
											<br>
											<button type="button" id="Confirm" onclick="Game5()" onclick="check();" class="btn btn-warning">Next Question</button>
											<br>
				                            `;
				   
}	
function Game5() {
document.getElementById("GameContent5").innerHTML = `6. What is the highest selling home console of all time ?
                                            <br>
                                            <br>
											Variants
											<br>
											<br>
											<input type="radio" name="Variants6" onclick="incorrect006()" value="Nintendo Wii<">Nintendo Wii<br>
											<input type="radio" name="Variants6" onclick="incorrect006()" value="Atari 2600">Atari 2600<br>
											<input type="radio" name="Variants6" onclick="incorrect006()" value="Xbox 360">Xbox 360<br>
											<input type="radio" name="Variants6" onclick="correct006()" value="PlayStation 2">PlayStation 2<br>
											<br>
											<button type="button" id="Confirm" onclick="Result();" onclick="result001();" class="btn btn-warning">Finish the Test ?</button>
											<br>
											<br>
											<button type="button" id="Confirm" onclick="Result();" class="btn btn-warning">test</button>
											<br>
				                            `;
				   
}	



function OpenGame() {
  document.getElementById("OpenDiv").style.visibility='visible' 
        }
		
function OpenGame1() {
  document.getElementById("OpenDiv0").style.visibility='visible' 
        }		

		
$("#input").keyup(function(event){
    if(event.keyCode == 13){
        $("#Raspuns").click();
    }
});
	
  var a;
  var b;
  var c;
  var d;
  var e;
  var f;
  var z;

	
function correct001() {
   
 a = 1;
 
}

function incorrect001() {
	
 a = 0;
        
}

function correct002() {
   
 b = 1;
 
}

function incorrect002() {
	
 b = 0;
        
}	

function correct003() {
   
 c = 1;
 
}

function incorrect003() {
	
 c = 0;
        
}

function correct004() {
   
 d = 1;
 
}

function incorrect004() {
	
 d = 0;
        
}		

function correct005() {
   
 e = 1;
 
}

function incorrect005() {
	
 e = 0;
        
}		


function correct006() {
   
 f = 1;
 
}

function incorrect006() {
	
 f = 0;
        
}		



					

function result001() {
	z = a + b + c + d + e + f;
	message001.innerHTML = "End of Quiz";
    options001.innerHTML = "";
    comment001.innerHTML = "Your score is: " + z;
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

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("Final").style.visibility='hidden' 
});


function Result() {
	
	document.getElementById("OpenDiv").style.visibility='hidden'
	document.getElementById("OpenDiv0").style.visibility='hidden'
	document.getElementById("Level2").style.visibility='hidden'
	document.getElementById("Raspuns").style.visibility='hidden'
	document.getElementById("OpenDiv3").style.visibility='visible'
	result001()
}   

function Result0() {
	
	document.getElementById("OpenDiv0").style.visibility='hidden'
	
}



function OpenLevel2() {
  document.getElementById("Level2").style.visibility='visible' 
        }


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













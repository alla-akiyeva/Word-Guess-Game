// list of words and pick a random word from the list

var wordList= ["cat", "dog","rabbit","hedgehog","dolphin"];
var randomWordFunction = function(){
    var i= Math.floor((Math.random() * wordList.length));
            return wordList[i];
}
var randomWord = randomWordFunction();
console.log ("The word is "+randomWord);
// console.log(words.countWord());


var dashArray=[];
var dashChar="_";
var getDiv= document.getElementById("dashes");

for(let j=0; j<randomWord.length; j++){
        dashArray[j]= dashChar;
    //adds "_" to array depending on number of characters for word
    }
console.log(dashArray);

 
// creates string from array separated by \" \" space
var joinedDashArray = dashArray.join(" ");
// console.log(joinedDashArray);
// console.log(joinedDashArray.length);

// displays the above string from joinedDashArray into div
getDiv.textContent= joinedDashArray;

// takes the random word and splits each letter into an array
var letterArray = randomWord.split("");
console.log(letterArray);


var getdiscarddiv=document.getElementById("discardLetters");
var getremainingdiv=document.getElementById("remaining-guesses");

var wrongGuess=[];
var joinedWrongGuess=[];

var remainCount=12;
getremainingdiv.textContent=remainCount;

function compare(letterArray,event){
    var keyPressed= event.key;
    
// compare each letter in letter Array to the key pressed, if there is a match then replace that position in Dash Array with key value
    for(let k=0; k<letterArray.length; k++){

        if (letterArray[k]==keyPressed){

             dashArray.splice(k,1,letterArray[k]);
            // console.log(dashArray);
             joinedDashArray = dashArray.join(" ");
             getDiv.textContent=joinedDashArray;
        }    
    }
    
// if wrong guess doesn't have the key and dash array doesn't have that key then push key to wrong guess array, and subtract remainCount
    if (wrongGuess.includes(keyPressed)===false && dashArray.includes(keyPressed)===false){
            
        wrongGuess.push(keyPressed);
        remainCount --;
        // console.log(wrongGuess);
        joinedWrongGuess = wrongGuess.join(" ");
        getdiscarddiv.textContent=joinedWrongGuess; 
        getremainingdiv.textContent=remainCount;
    }
};

var getwindiv = document.getElementById("number-win");
getwindiv.textContent=sessionStorage.getItem("winkey");
var test=[];

var getimageid= document.getElementById("image-id");
var srcvar= sessionStorage.getItem("srckey");
var linkvar= sessionStorage.getItem("linkkey");
getimageid.setAttribute(srcvar,linkvar);

var arrayTest = function (letterArray, dashArray){

    for(let l=0;l<letterArray.length;l++){
        
        if(letterArray[l]===dashArray[l]){
            test[l]=1;
        }
        else{
            test[l]=0;
        }
      
    }
    return test;
}




function checkTrue(test) {
  return test == 1;
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}


// var win = localStorage.setItem;
// getwindiv.textContent ="0";

document.onkeyup = function(event){

    compare(letterArray,event);

    arrayTest(letterArray,dashArray);
    console.log(arrayTest(letterArray,dashArray));

var win;
console.log( "here", sessionStorage.getItem("a"));

if(sessionStorage.getItem("winkey")===null){
    console.log("is null");
            
            getwindiv.textContent =0;
            sessionStorage.setItem("winkey","0");
            console.log(sessionStorage.getItem("winkey"));
            console.log(test.every(checkTrue));
           
        
}
else if(test.every(checkTrue)==true && remainCount>0){
                
    
     console.log("is not null");
     
     getwindiv.textContent= parseInt(sessionStorage.getItem("winkey"))+1;

     var winchange = parseInt(sessionStorage.getItem("winkey"))+1;
     console.log (winchange);
     sessionStorage.setItem("winkey",winchange);
     location.reload();

    if (letterArray.join("")=="cat"){
         sessionStorage.setItem("srckey","src");
         sessionStorage.setItem("linkkey","assets/images/cat picture.jpg");
    }
    else if (letterArray.join("")=="dog"){
        sessionStorage.setItem("srckey","src");
        sessionStorage.setItem("linkkey","assets/images/dog.jpg");
   }
   else if (letterArray.join("")=="rabbit"){
        sessionStorage.setItem("srckey","src");
        sessionStorage.setItem("linkkey","assets/images/rabbit.jpg");
    }
    else if (letterArray.join("")=="hedgehog"){
        sessionStorage.setItem("srckey","src");
        sessionStorage.setItem("linkkey","assets/images/hedgehog.jpg");
    }
    else if (letterArray.join("")=="dolphin"){
        sessionStorage.setItem("srckey","src");
        sessionStorage.setItem("linkkey","assets/images/dolphin.jpg");
    }
    
}
else if(test.every(checkTrue)==false && remainCount==0){
    location.reload();
}

};
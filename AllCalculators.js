window.onload=main;

//baseConversionVariables
let typeHistory=new Array();
let inputHistory=new Array();
let answerHistory=new Array();

//4functionGlobalVariables
let numArray=new Array(); //holds all symbols for calculation
let historyArray= new Array(); //holds print history



function main(){
//baseConversionCalculator

    //convert button links to displayValue function
    let convertButton=document.getElementById("convertBtn");
    convertButton.onclick=displayValue; 

    //history button links to displayHistory function
    let historyButton=document.getElementById("historyBtn");
    historyButton.onclick=displayHistory;

    //reset button links to reset function
    let resetButton=document.getElementById("resetBtn");
    resetButton.onclick=reset;

    ShowHideDiv();
//4functionCalculator

    //all link to getOperation function
    document.getElementById("equalsBtn").onclick=equals;
    document.getElementById("plusBtn").onclick=addition;
    document.getElementById("minusBtn").onclick=subtraction;
    document.getElementById("multiplyBtn").onclick=multiplication;
    document.getElementById("divideBtn").onclick=division;

    //all link to getNumber function
    document.getElementById("1Btn").onclick=get1;
    document.getElementById("2Btn").onclick=get2;
    document.getElementById("3Btn").onclick=get3;
    document.getElementById("4Btn").onclick=get4;
    document.getElementById("5Btn").onclick=get5;
    document.getElementById("6Btn").onclick=get6;
    document.getElementById("7Btn").onclick=get7;
    document.getElementById("8Btn").onclick=get8;
    document.getElementById("9Btn").onclick=get9;
    document.getElementById("0Btn").onclick=get0;
    document.getElementById(".Btn").onclick=getPeriod;

    //link to individual functions
    document.getElementById("HBtn").onclick=fourFunctionHistory;
    document.getElementById("CBtn").onclick=clear;
    document.getElementById("CEBtn").onclick=clearEverything;
}









/*!!!!!!!!!!!!!!!!!!!!! BASE CONVERSION CALCULATOR !!!!!!!!!!!!!!!!!!!!!*/

/*------BUTTON FUNCTIONS------*/
function displayValue(){ //MAIN CONVERSION FUNCTION: TAKES IN INTEGER, IF VALID CHOOSES TYPE OF BASE CONVERSION, CALCULATES, AND WRITES, ALSO ADDS EACH CONVERSION TO ARRAY HISTORY
    document.getElementById("history").innerHTML="";
    var number=document.getElementById("inputText").value;
    var baseChecker=document.getElementById("otherBaseText").value;
    var base, output;
    if(number<0||isNaN(number)==true){ //if input is not valid, output="Invalid"
        output="Input Invalid";
    }
    else if(document.getElementById("otherRadio").checked&&(baseChecker<0||baseChecker>35||isNaN(baseChecker))){
        output="Base Invalid";
    }
    else{ //if input is valid:
        switch(true){
            case document.getElementById("binaryRadio").checked: //assigns base 2 and adds type to typeHistory array
                base=Number(2);
                typeHistory.push("Binary: ");
                break;
            case document.getElementById("octalRadio").checked: //assigns base 8 and adds type to typeHistory array
                base=Number(8);
                typeHistory.push("Octal: ");
                break;
            case document.getElementById("hexaRadio").checked: //assigns base 16 and adds type to typeHistory array
                base=Number(16);
                typeHistory.push("Hexadecimal: ");
                break;
            case document.getElementById("otherRadio").checked:
                base=Number(document.getElementById("otherBaseText").value);                    
                typeHistory.push("Base "+base+": ");
        }
        //calculate new number given valid input and base value
        output=baseConversion(number,base);
        //record input and output in respective arrays given valid input
        inputHistory.push(number);
        answerHistory.push(output);
    }
    //sets answer text field to output, either converted number or "Invalid"
    document.getElementById("outputText").value=output;
}

function displayHistory(){ //WRITES TO WEBPAGE typeHistory, inputHistory, AND outputHistory
    for(let i=0; i<typeHistory.length; i++){
        document.getElementById("history").innerHTML+=typeHistory[i]+inputHistory[i]+"------->"+answerHistory[i]+"<br></br>";
    }
}

function reset(){ //RESETS FORM VALUES
    document.getElementById("binaryRadio").checked="checked"; //radio button-->binary
    document.getElementById("inputText").value="Input Here"; //input text box-->"Input Here"
    document.getElementById("outputText").value="Output Here"; //output text box-->"Output Here"
    document.getElementById("inputTextAreaDiv").value="Other Base Here"; //output text box-->"Output Here"
}


/*------SUPPORTING FUNCTIONS------*/
function baseConversion(number,newBase){ //CONVERTS TO NEW BASE USING number AND newBase (number 2,8,or 16)
    var dividend=number;  //for new number after division
    var remainStr=""; //for keeping new number string
    var remainder; //for remainder
    do{ //repeats division until number is less than 1
        remainder=dividend%newBase; //gets remainder when divided by base #
        remainStr+=hexadecimalNum(remainder);
        dividend=Math.floor(dividend/newBase); //updates variable to new dividend for next iteration
    }while(dividend>=1); 
    return reverse(remainStr); //reverses string and returns final converted number
}

function hexadecimalNum(number){ //CHOOSES WHAT CHAR TO ADD IN BASE 16 (A-F for 10-15), USED IN baseConversion

    if(number<=9){
        return number
    }
    else if(number==10){
        return "A"
    }
    else if(number==11){
        return "B"
    }
    else if(number==12){
        return "C"
    }
    else if(number==13){
        return "D"
    }
    else if(number==14){
        return "E"
    }
    else if(number==15){
        return "F"
    }
    else if(number==16){
        return "G"
    }
    else if(number==17){
        return "H"
    }
    else if(number==18){
        return "I"
    }
    else if(number==19){
        return "J"
    }
    else if(number==20){
        return "K"
    }
    else if(number==21){
        return "L"
    }
    else if(number==22){
        return "M"
    }
    else if(number==23){
        return "N"
    }
    else if(number==24){
        return "O"
    }
    else if(number==25){
        return "P"
    }
    else if(number==26){
        return "Q"
    }
    else if(number==27){
        return "R"
    }
    else if(number==28){
        return "S"
    }
    else if(number==29){
        return "T"
    }
    else if(number==230){
        return "U"
    }
    else if(number==31){
        return "V"
    }
    else if(number==32){
        return "W"
    }
    else if(number==33){
        return "X"
    }
    else if(number==34){
        return "Y"
    }
    else if(number==35){
        return "Z"
    }

}

function reverse(myStr){ //REVERSES ORDER OF CHARS IN STRING, USED IN baseConversion
    let reverseStr="";
    for(outLoop=myStr.length;outLoop>=0;outLoop--){ //loops however long the string is, going from n(final) to n(0)
        reverseStr=reverseStr + myStr.charAt(outLoop); //adds the character to reverseStr starting at end letter and going back
    }
    return reverseStr; //returns final reversed string to web page
}


/*------TECHNICAL FUNCTIONS------*/
function ShowHideDiv() {
    var otherRadio = document.getElementById("otherRadio");
    var otherTextField = document.getElementById("inputTextAreaDiv");
    otherTextField.style.display = otherRadio.checked ? "block" : "none";
}

function clearText(textBox){
    if(textBox==1){
        document.getElementById("inputText").value=" ";
    }
    else if(textBox==2){
        document.getElementById("otherBaseText").value=" ";
    }
}



/*!!!!!!!!!!!!!!!!!!!!! 4 FUNCTION CALCULATOR !!!!!!!!!!!!!!!!!!!!!*/

//adds button number to display & saves number in historyArray
function getNumber(number){
    let priorText=document.getElementById("inputText2");
    let myHistoryArray=historyArray;
    if(isNaN(priorText.value)==false){
        priorText.value+=number;
    }
    else if(isNaN(priorText.value)){
        priorText.value=number;
    }
    myHistoryArray.push(number);
}
function get1(){
    getNumber("1");
}
function get2(){
    getNumber("2");
}
function get3(){
    getNumber("3");
}
function get4(){
    getNumber("4");
}
function get5(){
    getNumber("5");
}
function get6(){
    getNumber("6");
}
function get7(){
    getNumber("7");
}
function get8(){
    getNumber("8");
}
function get9(){
    getNumber("9");
}
function get0(){
    getNumber("0");
}
function getPeriod(){
    getNumber(".");
}

//saves number in display and subsequent operation to numArray, saves operation to historyArray
function getOperation(operation){
    let newArray=numArray;
    let myHistoryArray=historyArray;
    newArray.push(Number(document.getElementById("inputText2").value));
    newArray.push(operation);
    document.getElementById("inputText2").value=operation;
    myHistoryArray.push(operation);
}
function addition(){
    getOperation("+");
}
function subtraction(){
    getOperation("-");
}
function multiplication(){
    getOperation("*");
}
function division(){
    getOperation("/");
}

//when equal button is pressed, displays answer
function equals(){
    let result;    
    let myArray=numArray;
    let myHistoryArray=historyArray;
    myArray.push(Number(document.getElementById("inputText2").value)); //saves final number inputted to numArray
    myHistoryArray.push("="); //saves = to historyArray

    for(i=0;i<myArray.length;i++){ //checks entire numArray value, triggers calculation whenever it hits an operation, saves answer in array so it is used in subsequent operations unless cleared
        if(myArray[i]=="+"){
            result=Number(myArray[i-1])+Number(myArray[i+1]); //takes number before and after operation, adds them
            myArray.splice(i+2,0,result); //takes answer and saves it so that it is used as the first value in the next operation
        }
        else if(myArray[i]=="-"){
            result=Number(myArray[i-1])-Number(myArray[i+1]);
            myArray.splice(i+2,0,result);
        }
        else if(myArray[i]=="*"){
            result=Number(myArray[i-1])*Number(myArray[i+1]);
            myArray.splice(i+2,0,result);
        }
        else if(myArray[i]=="/"){
            result=Number(myArray[i-1])/Number(myArray[i+1]);
            myArray.splice(i+2,0,result);
        }
    }
    myHistoryArray.push(result); //saves answer to history
    document.getElementById("inputText2").value=result; //displays answer
}

//displays calculation history
function fourFunctionHistory(){
    let myHistoryArray=historyArray;
    let textArea=document.getElementById("fourFunctionHistory");

    document.getElementById("fourFunctionHistory").innerHTML=""; //resets history section
   
    for(i=0;i<myHistoryArray.length;i++){//loops length of historyArray, printing every value
        if(myHistoryArray[i]!=="C"){
            textArea.innerHTML+=myHistoryArray[i];
        }
        else{ //if user pressed "clear" button ("C" in array), start new line
            textArea.innerHTML+="<br>";
        }
    }
}

//clears the numArray so new calculations can be done
function clear(){
    let myArray=numArray;
    let myHistoryArray=historyArray;

    emptyArray(myArray); //clears numArray
    myHistoryArray.push("C"); //adds a marker in history for when to break the line

    document.getElementById("inputText2").value=""; //clears textbox
}

//clears history and current calculation
function clearEverything(){
    let myArray=numArray;
    let myHistoryArray=historyArray;
    
    //empty arrays
    emptyArray(myArray); 
    emptyArray(myHistoryArray);

    //clear textbox and history
    document.getElementById("fourFunctionHistory").innerHTML="";
    document.getElementById("inputText2").value="";
}

//empties arrays
function emptyArray(array){ 
    for(i=array.length-1;i>=0;i--){
        array.pop();
    }
}
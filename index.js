const btnEL = document.getElementById("btn")
const bmiinputEL = document.getElementById("bmi-result")
const weightconditionEL = document.getElementById("weight-condition")


function calculateBMI(){
    const heightvalue= document.getElementById("height").value / 100
    const weighttvalue= document.getElementById("weight").value
    console.log(heightvalue , weighttvalue); 
    const bmivalue = weighttvalue / (heightvalue * heightvalue)
    bmiinputEL.value = bmivalue;
    if(bmivalue < 18.5 ){
        weightconditionEL.innerText = "under weight"
    }else if (bmivalue >= 19 && bmivalue <= 25){
        weightconditionEL.innerText = "normal weight"
    }else if (bmivalue >= 25 && bmivalue <= 30){
        weightconditionEL.innerText = "over weight"
    }else if (bmivalue >= 31 ){
        weightconditionEL.innerText = "obseity "
    }
}

btnEL.addEventListener("click", calculateBMI)
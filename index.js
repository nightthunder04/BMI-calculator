const btnEl = document.getElementById("btn")
const bmiInput = document.getElementById("bmi-result")
const weightConditionEl = document.getElementById("weight-condition")

function calculateBMI() {
    const heightValue = document.getElementById("height").value/100;
    const weightValue = document.getElementById("weight").value;
    


    const bmiValue = weightValue / (heightValue * heightValue)

     bmiInput.value = bmiValue

     if (bmiValue < 18.5){
        weightConditionEl.innerText = "Underweight";
     } else if (bmiValue >= 18.5 && bmiValue <= 24.9)
     {
        weightConditionEl.innerText = "Normal weight";
     }else if (bmiValue >= 25 && bmiValue <= 29.9)
     {
      weightConditionEl.innerText = "Over weight";
     }else{
      weightConditionEl.innerText = "Obesity";
     }
     
}


btnEl.addEventListener("click",calculateBMI)
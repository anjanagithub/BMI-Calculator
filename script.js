

//selecting the whole form
const form=document.querySelector(".mainDiv")
form.addEventListener('submit',function(event){
    event.preventDefault();

    //selection height and weight
    const height=document.querySelector("#h").value
    const weight=document.querySelector("#w").value
    const results=document.querySelector("#result")

    //Some checks regarding the input values height and weight
    if(height==="" || height<0 || isNaN(height)){
        results.innerHTML="Please enter a vaild height"
    } 
    else if(weight==="" || weight<0 || isNaN(weight)){
        results.innerHTML="Please enter a vaild weight"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`
        if(bmi>24.9){
           results.innerHTML=results.innerHTML+"<br> <span>Your BMI index shows your are Overweight<span>"
        }
        else if(bmi<18.6){
            results.innerHTML=results.innerHTML+"<br> <span>Your BMI index shows your are Underweight<span>"
        }
        else{
            results.innerHTML=results.innerHTML+"<br> <span>Your BMI index shows your are in Healthy weight range<span>"
        }
        }
    }
)
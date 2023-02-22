function calculateBmi() {
    var weight = document.BMI.weight.value
    var height = document.BMI.height.value

    if( weight > 0 && height > 0 ) {	
        var finalBmi = weight/(height*height)
        document.BMI.bmi.value = finalBmi.toFixed(3);

        if( finalBmi <= 18.5 ) {
            document.BMI.meaning.value = "You are unhealthy, too thin."
        }
        if( (finalBmi >= 18.5) && (finalBmi <= 24.9) ) {
            document.BMI.meaning.value = "You are healthy enough."
        }
        if( (finalBmi >= 24.9) &&  (finalBmi <=29.9) ) {
            document.BMI.meaning.value = "You have overweight."
        }
        if( finalBmi >= 30 ) {
            document.BMI.meaning.value = "Your condition is serious."
        }
    }
    else {
        alert("Data you've entered might be incorrect. Please check and try again.")
    }
}
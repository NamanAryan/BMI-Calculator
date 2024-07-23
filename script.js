    let btn = document.querySelector("button")
    btn.addEventListener("click", async(evt) =>{
        evt.preventDefault();
        let weight = document.querySelector(".weight input").value;
        let heightcm = document.querySelector(".height input").value;
        let height = heightcm / 100;
        let BMI = weight / (height * height);
        let bmi = BMI.toFixed(2);
        document.querySelector(".showBmi").innerText = bmi;
        if(bmi < 18){
            console.log("You are underweight.");
            document.querySelector(".showMsg").innerText = "You are underweight. EAT MORE 😖";
        }
        else if(bmi > 18 && bmi < 24.9){
            console.log("You are in healthy range");
            document.querySelector(".showMsg").innerText = "You are in healthy range 😊";
        }
        else if(bmi > 24.9 && bmi < 30){
            console.log("You are overweight");
            document.querySelector(".showMsg").innerText = "You are overweight 😶";
        }
        else{
            console.log("You are Obese!");
            document.querySelector(".showMsg").innerText = "You are Obese! GO OUTSIDE 😵";
        }
        let unhide = document.querySelector(".hide")
        unhide.classList.remove("hide");
    });
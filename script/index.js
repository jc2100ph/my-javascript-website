"use strict";
// navbar
const navContainer = document.querySelector(".nav_container")
const navButtonContainer = document.querySelector(".nav_button_container")
// burgermenu
const burgerMenu = document.querySelector(".burger_menu")
const dropDownMenu = document.querySelector(".drop_down_menu")
const dropDownMenuButtons = document.querySelectorAll(".drop_down_menu button")
// Feature 1
const programmingLevelExampleButton = document.querySelectorAll(".programming_level_example > :first-child > button")
const programmingLevelExampleImg = document.querySelector(".programming_level_example > :nth-child(2)")
const programmingLevelExampleCodes = document.querySelectorAll(".programming_level_example_codes > div")

window.addEventListener("resize", function(){
    const NavSectionDiv = navContainer.querySelectorAll("section div")
    const NavSectionDivJavascript = navContainer.querySelector(".nav_container > section > :nth-child(2)")
    if(this.matchMedia("(max-width: 660px)").matches) {
        NavSectionDiv.forEach(function(event){
            event.classList.remove("display_none")
            NavSectionDivJavascript.classList.add("display_none")
            navButtonContainer.classList.add("display_none")
        })
        
    }else{
        NavSectionDiv.forEach(function(event){
            event.classList.add("display_none")
            NavSectionDivJavascript.classList.remove("display_none")
            navButtonContainer.classList.remove("display_none")
        })
        dropDownMenuButtons.forEach(function(event){
            event.classList.add("display_none")
        })
        dropDownMenu.classList.remove("drop_down_Animation")
    }
});

burgerMenu.addEventListener("click",function(){
    dropDownMenuButtons.forEach(function(event){
        event.classList.toggle("display_none")
    })
    dropDownMenu.classList.toggle("drop_down_Animation")
})

programmingLevelExampleButton.forEach(function(event){
    event.addEventListener("click",function(){
        programmingLevelExampleButton.forEach(function(buttons){
            buttons.classList.remove("programming_level_example_active")
        })
        programmingLevelExampleCodes.forEach(function(text){
            text.classList.add("display_none")
        })
        event.classList.add("programming_level_example_active")

        if(event.classList.contains("programming_level_example_active") && (event.textContent.includes("HIGH - LEVEL"))){
            programmingLevelExampleImg.innerHTML = `<img src="./images/mr-incredible-meme/mr-incredible-phase-1.webp" alt="mr incrediable phases">`
            programmingLevelExampleCodes[0].classList.remove("display_none")
        }else if(event.classList.contains("programming_level_example_active") && (event.textContent.includes("MID - LEVEL"))){
            programmingLevelExampleImg.innerHTML = `<img src="./images/mr-incredible-meme/mr-incredible-phase-2.webp" alt="mr incrediable phases">`
            programmingLevelExampleCodes[1].classList.remove("display_none")
        }else if(event.classList.contains("programming_level_example_active") && (event.textContent.includes("LOW - LEVEL"))){
            programmingLevelExampleImg.innerHTML = `<img src="./images/mr-incredible-meme/mr-incredible-phase-3.webp" alt="mr incrediable phases">`
            programmingLevelExampleCodes[2].classList.remove("display_none")
        }else if(event.classList.contains("programming_level_example_active") && (event.textContent.includes("MACHINE CODE"))){
            programmingLevelExampleImg.innerHTML = `<img src="./images/mr-incredible-meme/mr-incredible-phase-4.webp" alt="mr incrediable phases">`
            programmingLevelExampleCodes[3].classList.remove("display_none")
        }
    })
})

const multiParadigmButtons = document.querySelectorAll(".multi_paradigm_scripting_language > :nth-child(4) > :first-child > button")
const multiParadigmCodeExample = document.querySelectorAll(".multi_paradigm_code_example div")

multiParadigmButtons.forEach(function(event){
    event.addEventListener("click",function(){
        multiParadigmButtons.forEach(function(button){
            button.classList.remove("multi_paradigm_active")
        })
        event.classList.add("multi_paradigm_active")

        if(event.classList.contains("multi_paradigm_active") && event.textContent.includes("Object - Oriented Programming")){
            multiParadigmCodeExample[1].classList.toggle("display_none")
            multiParadigmCodeExample[0].classList.toggle("display_none")
        }else if(event.classList.contains("multi_paradigm_active") && event.textContent.includes("Functional Programming")){
            multiParadigmCodeExample[0].classList.toggle("display_none")
            multiParadigmCodeExample[1].classList.toggle("display_none")
        }
    })
})


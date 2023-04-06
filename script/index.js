"use strict";
// navbar
const navContainer = document.querySelector(".nav_container")
const navButtonContainer = document.querySelector(".nav_button_container")
const navButtonContainerButton = document.querySelectorAll(".nav_button_container button")
const bodyArticle = document.querySelectorAll("body article")
// burgermenu
const burgerMenu = document.querySelector(".burger_menu")
const dropDownMenu = document.querySelector(".drop_down_menu")
const dropDownMenuButtons = document.querySelectorAll(".drop_down_menu button")
// Feature 1
const programmingLevelExampleButton = document.querySelectorAll(".programming_level_example > :first-child > button")
const programmingLevelExampleImg = document.querySelector(".programming_level_example > :nth-child(2)")
const programmingLevelExampleCodes = document.querySelectorAll(".programming_level_example_codes > div")
// multi paradigm
const multiParadigmButtons = document.querySelectorAll(".multi_paradigm_scripting_language > :nth-child(4) > :first-child > button")
const multiParadigmCodeExample = document.querySelectorAll(".multi_paradigm_code_example div")

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

navButtonContainerButton.forEach(function(event){
    event.addEventListener("click",function(){
        navButtonContainerButton.forEach(function(button){
            button.classList.remove("nav_button_container_active")
            event.classList.add("nav_button_container_active")
        })
        if(event.classList.contains("nav_button_container_active") && event.textContent.includes("Features")) {
            bodyArticle.forEach(function(button){
                button.classList.add("display_none")
            })
            bodyArticle[0].classList.remove("display_none")
        }else if(event.classList.contains("nav_button_container_active") && event.textContent.includes("History")) {
            bodyArticle.forEach(function(button){
                button.classList.add("display_none")
            })
            bodyArticle[1].classList.remove("display_none")
        }else if(event.classList.contains("nav_button_container_active") && event.textContent.includes("Tutorials")) {
            bodyArticle.forEach(function(button){
                button.classList.add("display_none")
            })
            bodyArticle[2].classList.remove("display_none")
        }else if(event.classList.contains("nav_button_container_active") && event.textContent.includes("About")) {
            bodyArticle.forEach(function(button){
                button.classList.add("display_none")
            })
            bodyArticle[3].classList.remove("display_none")
        }
    })
})

const dropDownMenuButton = document.querySelectorAll(".drop_down_menu button")

dropDownMenuButton.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.textContent.includes("Features")){
            bodyArticle.forEach(function(pages){
                pages.classList.add("display_none")
            })
            bodyArticle[0].classList.remove("display_none")
            dropDownMenuButtons.forEach(function(event){
                event.classList.toggle("display_none")
            })
            dropDownMenu.classList.toggle("drop_down_Animation")

        }else if(button.textContent.includes("History")){
            bodyArticle.forEach(function(pages){
                pages.classList.add("display_none")
            })
            bodyArticle[1].classList.remove("display_none")
            dropDownMenuButtons.forEach(function(event){
                event.classList.toggle("display_none")
            })
            dropDownMenu.classList.toggle("drop_down_Animation")
        }else if(button.textContent.includes("Tutorials")){
            bodyArticle.forEach(function(pages){
                pages.classList.add("display_none")
            })
            dropDownMenuButtons.forEach(function(event){
                event.classList.toggle("display_none")
            })
            dropDownMenu.classList.toggle("drop_down_Animation")
            bodyArticle[2].classList.remove("display_none")
        }else if(button.textContent.includes("About")){
            bodyArticle.forEach(function(pages){
                pages.classList.add("display_none")
            })
            bodyArticle[3].classList.remove("display_none")
            dropDownMenuButtons.forEach(function(event){
                event.classList.toggle("display_none")
            })
            dropDownMenu.classList.toggle("drop_down_Animation")
        }
    })
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

const lazyLoad = document.querySelectorAll(".lazy_load")

lazyLoad.forEach(function(event){
    event.addEventListener("click",function(){
        if(event.classList.contains("js_fcc")) {
            document.querySelector(".js_fcc").innerHTML = `<iframe width="100%" height="380px" src="https://www.youtube.com/embed/jS4aFq5-91M" title="JavaScript Programming - Full Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        }else if(event.classList.contains("node_fcc")) {
            document.querySelector(".node_fcc").innerHTML = `<iframe width="100%" height="380px" src="https://www.youtube.com/embed/Oe421EPjeBE" title="Node.js and Express.js - Full Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        }else if(event.classList.contains("js_udemy")) {
            document.querySelector(".js_udemy").innerHTML = `<iframe width="100%" height="380px" src="https://www.youtube.com/embed/vDQ9GZsJkms" title="I&#39;m updating my JavaScript course! Here is a preview!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        }else if(event.classList.contains("node_udemy")) {
            document.querySelector(".node_udemy").innerHTML = `<iframe width="100%" height="380px" src="https://www.youtube.com/embed/3unYpFZO4EE" title="Node.js, Express, MongoDB &amp; More: The Complete Bootcamp - Promo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        }else if(event.classList.contains("other_hater")) {
            document.querySelector(".other_hater").innerHTML = `<iframe width="100%" height="380px" src="https://www.youtube.com/embed/aXOChLn5ZdQ" title="JavaScript for the Haters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        }else if(event.classList.contains("other_game")) {
            document.querySelector(".other_game").innerHTML = `<iframe width="100%" height="380px" src="https://www.youtube.com/embed/ec8vSKJuZTk" title="Learn JavaScript by Building 7 Games - Full Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        }
    })
})



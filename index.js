const numberOfDrumButtons = document.querySelectorAll(".drum").length

for (let i = 0; i < numberOfDrumButtons; i ++) {
    let eachButton = document.querySelectorAll(".drum")[i]
    eachButton.addEventListener("click", function() {

        let buttonInnerHTML = this.InnerHTML

        switch (buttonInnerHTML) {
            case "w":
                const tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play()
                break;
            
            case "a":
                const tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;

            case "s":
                const tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play()
                break;

            case "d":
                const tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play()
                break;

            default: console.log(InnerHTML)
        }
    })
}
var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrumButtons; i ++) {
    var eachButton = document.querySelectorAll(".drum")[i]
    eachButton.addEventListener("click", function() {

        var buttonInnerHTML = this.InnerHTML

        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play()
                break;
            
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play()
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play()
                break;

            default: console.log(InnerHTML)
        }
    })
}
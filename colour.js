window.addEventListener('DOMContentLoaded', function() {
    console.log("loaded")
      window.addEventListener("scroll", function () {
        console.log("event start")

        const pixels = window.scrollY
        const end = window.documentElement.scrollHeight
        const remaining = end - window.innerHeight

        const percentage = (pixels / remaining) * 100

        console.log(percentage)

        if (percentage < 20) {
          signature.style.fill = "yellow"
        }

        if (percentage >= 20 && percentage <= 40) {
          signature.style.fill = "green"
        }

        if (percentage >= 40 && percentage <= 60) {
          signature.style.fill = "pink"
        }

        if (percentage >= 60 && percentage <= 80) {
          signature.style.fill = "blue"
        }

        if (percentage >= 80 && percentage <= 100) {
          signature.style.fill = "red"
        }
    }) 
  });

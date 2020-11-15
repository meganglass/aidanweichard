console.log("script start")

const selectionItems = document.querySelectorAll(".selection_item")

window.addEventListener('DOMContentLoaded', function() {
  
  console.log("loaded")

  window.addEventListener("scroll", function () {
    console.log("event start")

    const pixels = window.scrollY

    selectionItems.forEach((item, index) => {
      let movement = (pixels * index) / 50

      if (index % 2 == 1) {
        movement = movement * -1
      }

      item.style.transform = `translateX(${-1 * movement}px)`
    })

  })
  
});

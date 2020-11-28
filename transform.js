$(function() {
  // Scroll Magic
  // https://scrollmagic.io/docs/index.html

  // init controller
  var controller = new ScrollMagic.Controller({
    vertical: false
  });

  // generating dynamic ids for collection items
  const selectionItems = document.querySelectorAll('.selection_item-wrapper')

  selectionItems.forEach((item, i) => {
    //get parent elem
    const parent = item.parentNode

    //set elem id to index for tween selection
    item.id = i

    //determine transform amount + direction by index
    let amount = i + 60

    if (i % 2 == 0) {
      amount = amount * -1
    } else if (i % 3 == 0 ) {
      amount = amount * 2
    }

    // create variable as tween reference blockTween
    // create TweenMax.to object to define tween
    // selector (#block), duration (1.5), tween to styles (bgc) 
    const slideTween1 = new TweenMax.to(`#${i}`, 1, {
      backgroundColor: 'red',
      transform: `translateX(${amount}px)`
    });

    const containerScene1 = new ScrollMagic.Scene({
      // triggerElement matches a DOM element
      triggerElement: parent,
      duration: 2000,
      triggerHook: 'onEnter'
    })
    // binds tween reference to scene
    .setTween(slideTween1)
    // debugging
    .addIndicators()
    // adding scene to existing controller
    .addTo(controller);

  })

});

//COLOUR
$(function() {
  // Scroll Magic
  // https://scrollmagic.io/docs/index.html
  const colours = ["#C3D9F2", "#E8AAAA", "#E4D3BE", "#DFB44B", "#B4B7A6", "#B14909" ]

  // init controller
  const colourController = new ScrollMagic.Controller({
    vertical: false
  });

  const signature = document.querySelector('.signature_item')
  const section = document.querySelector('section')

  const colourTween = new TimelineMax()
    .to(signature, 1, {
      fill: colours[1],
    })
    .to(signature, 1, {
      fill: colours[2],
    })
    .to(signature, 1, {
      fill: colours[3],
    })
    .to(signature, 1, {
      fill: colours[4],
    })
    .to(signature, 1, {
      fill: colours[5],
    });

  const containerSceneColour = new ScrollMagic.Scene({
      // triggerElement matches a DOM element
      triggerElement: section,
      triggerHook: "onLeave",
      duration: "100%"
    })
    // .setPin(signature)
    // binds tween reference to scene
    .setTween(colourTween)
    // debugging
    //.addIndicators({
    //  name:"colour"
    //})
    // adding scene to existing controller
    .addTo(colourController);

  //console.log(selectionItems)
});

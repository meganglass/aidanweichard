$(function() {

  if ($( window ).width() >= 720) {

    console.log("colour desktop")

    //palette
    let light = ["#F6E5DF", "#D9DAD2", "#E7D8C5", "#EEF4FB", "#F3E3BA"]
    let heavy = ["#B14909", "#DFB44B", "#B2B6A5", "#EDBFBF", "#C3D9F2"]
    
    // Scroll Magic
    // https://scrollmagic.io/docs/index.html
    // init controller
    const colourController = new ScrollMagic.Controller({
      vertical: false
    });

    const signature = document.querySelector('.signature_item')
    const sections = document.querySelectorAll('.scroll-wrapper section')

    sections.forEach((item, i) => {
      item.id = `section${i+1}`

      const option = item.dataset.colour

      if (option == "heavy") {
        console.log("heavy")

        const colourTween = new TweenMax.to(signature, 1, {
          fill: heavy[0]
        });

        const containerSceneColour = new ScrollMagic.Scene({
          // triggerElement matches a DOM element
          triggerElement: item,
          triggerHook: "onEnter",
          duration: "100%"
        })
        // .setPin(signature)
        // binds tween reference to scene
        .setTween(colourTween)
        /*
        // debugging
        .addIndicators({
          name: item.id
        })
        */
        // adding scene to existing controller
        .addTo(colourController);

        // update colour array
        //console.log(`heavy inside ${heavy}`)
        let first = heavy.shift()
        heavy.push(first)

        return(heavy)

      } else {
        console.log("not heavy")

        const colourTween = new TweenMax.to(signature, 1, {
          fill: light[0]
        });

        const containerSceneColour = new ScrollMagic.Scene({
          // triggerElement matches a DOM element
          triggerElement: item,
          triggerHook: "onEnter",
          duration: "100%"
        })
        // .setPin(signature)
        // binds tween reference to scene
        .setTween(colourTween)
        /*
        // debugging
        .addIndicators({
          name: item.id
        })
        */
        // adding scene to existing controller
        .addTo(colourController);

        // update colour array
        //console.log(`light inside ${light}`)
        let first = light.shift()
        light.push(first)

        return(light)

      }

    })

  } else {

    console.log("colour mobile")

    //palette
    let light = ["#F6E5DF", "#D9DAD2", "#E7D8C5", "#EEF4FB", "#F3E3BA"]
    let heavy = ["#B14909", "#DFB44B", "#B2B6A5", "#EDBFBF", "#C3D9F2"]
    
    // Scroll Magic
    // https://scrollmagic.io/docs/index.html
    // init controller
    const colourController = new ScrollMagic.Controller();

    const signature = document.querySelector('.signature_item')
    const sections = document.querySelectorAll('.scroll-wrapper section')

    sections.forEach((item, i) => {
      item.id = `section${i+1}`

      const option = item.dataset.colour

      if (option == "heavy") {
        console.log("heavy")

        const colourTween = new TweenMax.to(signature, 1, {
          fill: heavy[0]
        });

        const containerSceneColour = new ScrollMagic.Scene({
          // triggerElement matches a DOM element
          triggerElement: item,
          triggerHook: "onEnter",
          duration: "100%"
        })
        // .setPin(signature)
        // binds tween reference to scene
        .setTween(colourTween)
        /*
        // debugging
        .addIndicators({
          name: item.id
        })
        */
        // adding scene to existing controller
        .addTo(colourController);

        // update colour array
        //console.log(`heavy inside ${heavy}`)
        let first = heavy.shift()
        heavy.push(first)

        return(heavy)

      } else {
        console.log("not heavy")

        const colourTween = new TweenMax.to(signature, 1, {
          fill: light[0]
        });

        const containerSceneColour = new ScrollMagic.Scene({
          // triggerElement matches a DOM element
          triggerElement: item,
          triggerHook: "onEnter",
          duration: "100%"
        })
        // .setPin(signature)
        // binds tween reference to scene
        .setTween(colourTween)
        /*
        // debugging
        .addIndicators({
          name: item.id
        })
        */
        // adding scene to existing controller
        .addTo(colourController);

        // update colour array
        //console.log(`light inside ${light}`)
        let first = light.shift()
        light.push(first)

        return(light)

      }

    })

  }
  
});
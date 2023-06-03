console.log(
  "%c" + "W E L C O M E   T O   C V . C A T H T M L C S S . N E T",
  "font-family:Montserrat ; font-size:14px; background: #009999; border-radius: 2px; padding: 6px 12px; margin: 5px 10px 7px 0px; color: #ffffff;"
);

document.addEventListener('uikit:init', () => {
    // do something
    console.log("uikit:init")
})

const x = document.querySelector.bind(document);
const xx = document.querySelectorAll.bind(document);

const app = {
    render: function () {
        $("#fullview").fullView({
            //Optional
            navbar: "#menu",
            dots:  true,
            dotsTooltips: true,
            dotsPosition:  'left',
            easing: 'swing',
            keyboardScrolling: true,
            mouseScrolling: true,
            touchScrolling: true,
            // ...
            // Read Docs for more options details

            // Callbacks
            onScrollStart:  function (currentView, destinationView, direction) {
                //  Do Something Usefull
            },
            onScrollEnd:  function (currentView, previousView, direction) {
                //  Do Something Usefull
            }
        })

        UIkit.util.on('.uk-modal', 'beforeshow', function () {
            // do something
            console.log('modal shown')
            // $("#fullview").fullView({
            //     navbar: "#menu",
            //     dots:  true,
            //     dotsTooltips: true,
            //     dotsPosition:  'left',
            //     easing: 'swing',
            //     keyboardScrolling: false,
            //     mouseScrolling: false,
            //     touchScrolling: false,
            // });
        });

        UIkit.util.on('.uk-modal', 'beforehide', function () {
            // do something
            console.log('modal hidden')
            // $("#fullview").fullView({
            //     navbar: "#menu",
            //     dots:  true,
            //     dotsTooltips: true,
            //     dotsPosition:  'left',
            //     easing: 'swing',
            //     keyboardScrolling: true,
            //     mouseScrolling: true,
            //     touchScrolling: true,
            // });
        });



        // imageData expected a JSON
        let imageData = [{
            name:'image1',
            url:'https://genesis-escape.vn/img/1.png'
        }, {
            name:'image2',
            url:'https://genesis-escape.vn/images/room/bg/back_gone-min.png'
        }, {
            name:'image3',
            url:'https://genesis-escape.vn/img/how_1.png'
        }, {
            name:'image4',
            url:'https://genesis-escape.vn/img/footer.png'
        }];

        const options = {
            resources: imageData, //imageData expected a JSON or Array
            onStart: function(total) {
                console.log('onStart:' + total)
            },
            onProgress: function(currentIndex, total) {
                console.log('onProgress:' + currentIndex + '/' + total)
            },
            onComplete: function(total,result) {
                console.log('onComplete:' + total)
                console.log(result)
            }
        }

        resloader(options);
    },
    start: function () {
        this.render();
    }
}

window.addEventListener("load", ()=>{
    console.log("page is fully loaded");
    app.start();
})
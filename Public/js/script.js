function func1() {
    $("#img1").fadeToggle();
}

// SELECTORS IN JQURY
function func2 () {
    // $("div").css('background-color','blue')
    // $("#div1").css('background-color','blue')
    $("#p1").css('font-style','italic')
    $("#div1, #div2").css('background-color','blue')
    $(".divv").css('background-color','blue')
    $("#div2, li").css('background-color','blue')
    // $("div  p").fadeToggle()
    // TO SELECT first PERTICULAR TAGS
        // $("p:first").fadeToggle()
        // $("li:odd").fadeToggle()
        $("li:even").fadeToggle()


}

// events

// function func3 () {
//     document.getElementById("img2").style.width = '600px'
// }

// $("button").click(func3)
// function func3(){
//     $("#img2").css('width','300px')
// }

// or

// $("button").click(function(){
//     $("#img2").css('width','300px')
// })

// or document select all html page

$("document").ready(function(){

    
        $("#button1").dblclick(function(){
            $("#img2").css('width','300px')
        })

        /* mouse hover*/
        // .mouseenter - when the mouse pointer is over an element in a set of elements
        
        
        $("#img2").mouseenter(function(){
            $("#img2").css('width','200px')
        })

        $("#img2").mouseleave(function(){
            $("#img2").css("width",'100px');
        })


});

// EFFECTS IN jQuery
$("document").ready(function(){
    
    // hide
    $("#btn1").click(function(){
        $("#img3").hide()
    })

    // show
    // wee need after some times aa show(time)
    $("#btn2").click(function(){
        $("#img3").show()
    })

    // show and hide in singlr button
    $("#btn3").click(function(){
        $("#img3").toggle(1000)
    })

    // fade-in
    $("#btn4").click(function(){
        $("#img3").fadeIn(2000)
    })

     // fade-out
     $("#btn5").click(function(){
        $("#img3").fadeOut(2000)
    })

     // fade-toggle
     $("#btn6").click(function(){
        $("#img3").fadeToggle()
    })

    // SLIDE-DOWN
    $("#btn7").click(function(){
        $("#img3").slideDown(2000)
    })

    // SLIDE-DOWN
    $("#btn8").click(function(){
        $("#img3").slideUp(2000)
    })

     // SLIDE-DOWN
     $("#btn9").click(function(){
        $("#img3").slideToggle(2000)
    })

     // STOP
     $("#btn10").click(function(){
        $("#img3").stop(2000)
    })

    
})
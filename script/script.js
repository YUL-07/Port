$(function() {
    $("#memu").click(function() {
        $("#modal").css({
            "display": "block"
        });
    })
    $("#cls").click(function() {
        $("#modal").css({
            "display": "none"
        });
    })
   });
   
$(function(){
    $(".memuA").click(function(){
      $(this).attr("data-Link");
    });
})

$(function() {
    $("div#memu").mouseover(function() {
        $("i#memuOff").css({ "display": "none" }),
            $("i#memuOn").css({
                "display": "inline-block",
                "font-size": "50px"
            })
    });
    $("div#memu").mouseout(function() {
        $("i#memuOff").css({ "display": "inline-block" }),
            $("i#memuOn").css({
                "display": "none"
            })
    });
});
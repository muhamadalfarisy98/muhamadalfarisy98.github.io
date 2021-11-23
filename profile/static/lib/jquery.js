// wait for html rendered
$(function() {
    // $("li.list-group-item:nth-child(n + 1)").click(function (e) { 
    //     e.preventDefault(); // prevent event object happens
    //     // $("li.nav-item").toggleClass("red_color");
    //     alert('Under construction, please wait :)');
    // });
    $(".ongoing").click(function (e) { 
        e.preventDefault(); // prevent event object happens
        // $("li.nav-item").toggleClass("red_color");
        alert('Under construction, please wait :)');
    });
    // $("li.nav-item").click(function (e) { 
    //     e.preventDefault();
    //     // $("li.nav-item>nav-link").attr("href", "https://muhamadalfarisy98.github.io/myprofile");
    //     // alert('Under construction, please hehe :)');
    // });

    $("input#submit").on("click", function () {
        var name = $("input#name").val();
        alert(`Thankyou ${name} ! But, sorry i am still managing the Backend side :D `);
    });
})
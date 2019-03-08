/*
	Add to cart fly effect with jQuery. - May 05, 2013
	(c) 2013 @ElmahdiMahmoud - fikra-masri.by
	license: https://www.opensource.org/licenses/mit-license.php
*/
$('.add-to-cart').on('click', function () {
    var recom_items = document.getElementById("recom_items");
    recom_items.style.display = "block";
    // var itemname = $(this).closest("div").find("h2").text();
    itemname = 2005018
    document.getElementById("test").innerHTML = "Recommendations for " + itemname;

    // get api here
    var settings = {
        "async": false,
        "crossDomain": false,
        "url": "https://recom2019eaed3zqlm6qu4ws.azurewebsites.net/api/models/0f7e0c22-8c57-4bc6-ac67-4cdcef8ed532/recommend?itemId=" + itemname,
        "method": "GET",
        "headers": {
            "x-api-key": "67890",
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            "Postman-Token": "8d075ce9-ebae-46eb-84ca-10a95089b4b5",
            "Access-Control-Allow-Origin": "*"
        },
        "processData": false,
        "data": ""
    }
    // var temp = "https://recom2019eaed3zqlm6qu4ws.azurewebsites.net/api/models/0f7e0c22-8c57-4bc6-ac67-4cdcef8ed532/recommend?itemId=" + itemname;
    // $.ajax({
    //     temp,
    //     settings,
    //     function(response,status,xhr){
    //     console.log(response);
    //     console.log(status);
    //     }
    //   });
    var responses = $.ajax(settings).done(function (response) {
        console.log(response);
        return response;
    });




    // change the item name and pics

    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }

});
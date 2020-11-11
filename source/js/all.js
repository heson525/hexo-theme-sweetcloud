jQuery(document).ready(function($) {
    //图片预览
      $('.imageImg').hover(function(){
                    $(".imageContent", this).stop().animate({top:'0px'},{queue:false,duration:300});
            }, function() {
                    $(".imageContent", this).stop().animate({top:'180px'},{queue:false,duration:300});
            });
            
    //end
    
  
        $(function() {
            $('img').hover(function() {
                $(this).fadeTo("fast", 0.5);
            },
            function() {
                $(this).fadeTo("fast", 1);
            });
        });
        function scrollBox() {
            var first = $('#scrollbox ul li:first');
            var width = -(first.outerWidth(true)) + 'px';
            $('#scrollbox ul').animate({
                left: width
            },
            {
                duration: 600,
                complete: function() {
                    $('#scrollbox ul').append(first).css("left", "0");
                }
            });
        }
        $(document).ready(function() {
            myScroll = setInterval(scrollBox, 1500);
            $('#scrollbox').hover(function() {
                clearInterval(myScroll);
            },
            function() {
                myScroll = setInterval(scrollBox, 1500);
            });
        });

 
        var tooltips_h1,
        tooltips_h2,
        tooltips_top,
        tooltips_w1,
        tooltips_w2,
        tooltips_left;
        function calc_pos(e) {
            if ($('#tooltip').length > 0) {
                tooltips_h1 = parseInt(document.documentElement.clientHeight + document.documentElement.scrollTop);
                tooltips_h2 = parseInt($('#tooltip').get(0).offsetHeight + parseInt(e.pageY + 20));
                tooltips_top = (tooltips_h1 < tooltips_h2) ? parseInt(parseInt(e.pageY + 20) - ($('#tooltip').get(0).offsetHeight + 10)) : parseInt(e.pageY + 20);
                tooltips_w1 = parseInt(document.documentElement.clientWidth + document.documentElement.scrollLeft);
                tooltips_w2 = parseInt($('#tooltip').get(0).offsetWidth + parseInt(e.pageX + 10));
                tooltips_left = (tooltips_w1 < tooltips_w2) ? parseInt(parseInt(e.pageX + 10) - ($('#tooltip').get(0).offsetWidth + 10)) : parseInt(e.pageX + 10)
            }
        }
        
        $("li.comment").mouseover(function() {
            $(this).children(".reply").show();
        }); $("li.comment").mouseout(function() {
            $(this).children(".reply").hide();
        }); $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');

            
            
    });
    function togglecebian(n) {
        if (n === 0) {
            $('#cebian').hide('slow');
            $('#cebian2').show('slow');
        } else {
            $('#cebian').show('slow');
            $('#cebian2').hide('slow');
        }
    }
    var scrollSpeed = 70;
    var current = 0;
    var ht = 0;
    var direction = 'h';
    function bgscroll() {
        current += 1;
        ht += 1;
        $('.clouds').css("backgroundPosition", (direction === 'h') ? current + "px " + ht + "px": ht + "px " + current + "px");
    }
    setInterval("bgscroll()", scrollSpeed);
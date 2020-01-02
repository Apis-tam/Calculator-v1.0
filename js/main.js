"use strict";

(function($) {
  $(document).ready(function() {
    // Code

    $(".num").click(function() {
      if ($(this).attr("data-name") != "operator" || $("#input").val() != "") {
        let num = $(this).html();
        $("#input").val(function(i, val) {
          return val + num;
        });
      }
    });

    $(".result").click(function() {
      let result = $("#input").val(function(i, result) {
        return eval(result);
      });
    });
    $(".clear").click(function() {
      $("#input").val("");
    });
  });
})(jQuery);

// let num,
// num1,
// num2;
//  if($(this).attr("data-name") !="operator"){
//    num=$(this).html();
//    $("#input").val(function(i,val){
//      return val+ num;
//    });
//    num1=$("input").val();
//   }else if( num1!=""){
//     $("div[data-name='operator']","div[data-name='operator-minus']").click(function(){
//       num1=num1+$(this).html();
//       $("#input").val()="";

//     });
//   };
//     num2=$(this).html();
//     $("#input").val(function(i,val){
//       return val+ num2;
//   } );
//  $(".result").click(function(){
//    let result = +num1+
// +num2 });
// $("#input").val(result);

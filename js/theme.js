jQuery(document).ready(function($){
  $("a[href^='http:']").not("[href*='localhost']").attr('target','_blank');
  var difference = (new Date("04/22/2010") - new Date()) / 1000;
  $("#days_remain").html(Math.floor(( difference < 0 ? 0 : difference ) / (60 * 60 * 24)) + ' Dias');
});

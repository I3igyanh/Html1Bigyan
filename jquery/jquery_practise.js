$(document).ready(function(){
    $("button").click(function(){
      $(".paraClass").hide();
      $.get("https://reqres.in/api/users?page=1",function(response, status){
        console.log(status);
        if(status =="success"){
          console.log(response['page']); 
        }else{
          $("#apifailure").text('error loading');
        }
      });
    });
  });
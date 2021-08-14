var user_date = document.getElementById("myDate")
var num = document.getElementById("num")

var btn = document.getElementById("mybtn")

var output = document.querySelector(".output")

btn.addEventListener("click", luckyornot)

function luckyornot(){
  var x=user_date.value
  var year = x.substring(0, 4)
  var month = x.substring(5, 7)
  var day = x.substring(8, 10)

  var total = year+month+day
  var final=0
  for (var i=0; i<total.length; i++){
    final += Number(total[i])
  }


  var lucky = final%Number(num.value)

  if(lucky==0){
     output.innerText = "Lucky !!!"
  }else{
    output.innerText = "UnLucky !!!"
  }

  output.classList.remove("hide");


}

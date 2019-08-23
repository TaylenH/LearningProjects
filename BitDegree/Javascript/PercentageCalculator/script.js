var numFeild1 = document.getElementById('numFeild1');
var numFeild2 = document.getElementById('numFeild2');
var result = document.getElementById("result");
var form = document.getElementById("form");


form.addEventListener("submit", function(event){
  if(numFeild1.value && numFeild2.value){
    if(Number(numFeild1.value) && Number(numFeild2.value)){
      var x = Number(numFeild1.value);
      var y = Number(numFeild2.value);

      var resultNum = x/y;
      var percent = resultNum * 100;

      result.innerText = `Answer: ${percent}%`;
      event.preventDefault();
      return true;
    }else{
      alert("Please make sure you enter numbers.");
      return false;
    }
  }else{
    alert("Please enter values");
    return false;
  }
});

function tester()
{
  var temp1 = document.getElementById("p1");
  var temp2 = document.getElementById("p2");
  if(temp1.value.length<8)
  {
    alert("Your Password is too short!");
  }
  else if(temp1.value==temp2.value)
  {
    alert("Your Passwords are correct!");
  }
  else
  {
    alert("Your Passwords do not match!");
  }
}

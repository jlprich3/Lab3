let arr = ["Cat1.jpg", "Cat2.jpg", "Cat3.jpg", "Cat4.jpg", "Cat5.jpg"];
let index = 0;
function previousF()
{
  if(index==0)
  {
    index=4; //change later
  }
  else
  {
  index--;
  }
  document.getElementById("image").src=arr[index];
}

function nextF()
{
  if(index==4)
  {
    index=0; //change later
  }
  else
  {
  index++;
  }
  document.getElementById("image").src=arr[index];
}

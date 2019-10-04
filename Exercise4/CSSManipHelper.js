function changeColor()
{
  let width = document.getElementById("BorWidth");
  let redBorder = document.getElementById("BorRed");
  let blueBorder = document.getElementById("BorBlue");
  let greenBorder = document.getElementById("BorGreen");
  let redBackground = document.getElementById("BackRed");
  let blueBackground = document.getElementById("BackBlue");
  let greenBackground = document.getElementById("BackGreen");

  let borderColor = "rgb("+redBorder.value+","+greenBorder.value+","+blueBorder.value+")";
  let backgroundColor = "rgb("+redBackground.value+","+greenBackground.value+","+blueBackground.value+")";
  let borderWidth = width.value+"px";
  document.getElementById("outline").style.border = "solid";
  document.getElementById("outline").style.borderColor = borderColor;
  document.getElementById("outline").style.backgroundColor = backgroundColor;
  document.getElementById("outline").style.borderWidth = borderWidth;
}

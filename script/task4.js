document.write("<br>")

for(let counter = 0; counter < 14; counter++){
  for(let y = (0 + 1 + counter); y > 0; y--){
    document.write("*")
  }
  for(let i = (0 + 1 + counter); i < 14; i++){
    document.write("&nbsp;");
  }
  document.write("<br>")
}

document.write("<br>")

for(let counter = 0; counter < 14; counter++){
  for(let i = (0 + 1 + counter); i < 14; i++){
    document.write("&nbsp;");
  }
  for(let y = (0 + 1 + counter); y > 0; y--){
    document.write("*")
  }
  document.write("<br>")
}

document.write("<br>")

for(let counter = 0; counter < 10; counter++){
  for(let i = (0 + 1 + counter); i < 10; i++){
    document.write("&nbsp;");
  }
  for(let y = (0 + 1 + counter); y > 0; y--){
    document.write("*")
  }
  document.write("<br>")
}

for(let counter = 0; counter < 10; counter++){
  for(let y = (0 + 1 + counter); y > 0; y--){
    document.write("&nbsp;")
  }
  for(let i = (0 + 1 + counter); i < 10; i++){
    document.write("*");
  }
  document.write("<br>")
}
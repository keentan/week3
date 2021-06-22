var lines = 9

for (var j = 0; j < lines; j++) {
for (var i=0; i < lines; i++) {
  if ((i % 2 == 0 && j % 2 == 0)) || (i % 2 == 1 && j % 2 == 1)) {
    document.write("#");
  }
  else {
    document.write("0");
  }
}
  document.write("<br/>");
}

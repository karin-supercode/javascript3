// Aufgabe 1_1

function intro() {
  var a = 1 + 3;
  console.log("Hello World");
  console.log("1+3 = " + a);
}
intro();


// Aufgabe 1_2

function intro2(paramName) {
  varName = "supercode"
  console.log("Hi, " + varName + ". Mein Name ist " + paramName + " .");
}
intro2("karin")

// Aufgabe 1_3

function intro3(name, stadt, alter) {
  console.log("Hallo mein Name ist" + name + ". Ich bin " + stadt + " Jahre alt. Ich komme aus " + alter + ".");
}
intro3("Karin", 49, "München")

// Aufgabe 1_5 Multiplation und Division

function mathe(a, b) {
  // console.log(a * b);
  console.log(a / b);
}
mathe(1, 1000);
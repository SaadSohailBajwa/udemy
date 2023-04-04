function checkTriangleType() {
  const a = parseInt(document.getElementById("side-a").value);
  const b = parseInt(document.getElementById("side-b").value);
  const c = parseInt(document.getElementById("side-c").value);

  if (a === "" || b === "" || c === "") {
    document.getElementById("result").innerHTML = "An Input cannot be empty";
  }
  else if (a === 0 || b === 0 || c === 0) {
    document.getElementById("result").innerHTML = "An Input cannot be 0";
  }
  else if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c) {
      document.getElementById("result").innerHTML = "This is an equilateral triangle";
    } else if (a === b || b === c || c === a) {
      document.getElementById("result").innerHTML = "This is an isosceles triangle";
    } else {
      document.getElementById("result").innerHTML = "This is a scalene triangle";
    }
  } else {
    document.getElementById("result").innerHTML = "This is not a valid triangle";
  }
}

document.getElementById("submit-btn").onclick = function() {
  const a = document.getElementById("side-a").value;
  const b = document.getElementById("side-b").value;
  const c = document.getElementById("side-c").value;

  if (a === "" && b === "" && c === "") {
    document.getElementById("result").innerHTML = "Please enter at least one value";
  }
   else if (a === "" || b === "" || c === "") {
    document.getElementById("result").innerHTML = "An Input cannot be empty";
   }
  else {
    checkTriangleType();
  }
};


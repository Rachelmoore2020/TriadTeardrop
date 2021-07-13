/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

    
  function color(z) {
      var a = getComputedStyle(z);
      var b = a.backgroundColor;
      document.getElementById('getImage').style.backgroundColor=b;
  }


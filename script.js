document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        document.getElementById("nav-toggle").checked = false;
      });
    });
  });
// Your code goes here

// onload: 
window.addEventListener("load", function () {
  this.alert("The page has loaded.");
})

// mouseover: image blur, unblur
let img = document.querySelectorAll("img");
img.forEach(x =>
  x.addEventListener("mouseover", function () {
    this.style.filter = "blur(4px)";
  })
);
img.forEach(x =>
  x.addEventListener("mouseleave", function () {
    this.style.filter = "blur(0px)";
  })
);

// dblclick: change header to sans serif
let h2 = document.querySelectorAll("h2");
h2.forEach(x =>
  x.addEventListener("dblclick", function () {
    if (this.style.fontFamily != "sans-serif") {
      this.style.fontFamily = "sans-serif";
    } else {
      this.style.fontFamily = "Indie Flower";
    }
  })
)

// focus: change nav color to pink when clicked
let a = document.querySelectorAll("a");
a.forEach(x =>
  x.addEventListener("focus", function () {
    if (this.style.color != "pink") {
      this.style.color = "pink";
    } else {
      this.style.color = "#212529";
    }
  })
);

// focusin: change background color
a.forEach(x =>
  x.addEventListener("focusin", function () {
    this.style.backgroundColor = "lavender";
  })
);

//  focusout: change background color back
a.forEach(x =>
  x.addEventListener("focusout", function () {
    this.style.backgroundColor = "white";
  })
);

// copy: alert when someone copies something
let p = document.querySelectorAll("p");
p.forEach(x =>
  x.addEventListener("copy", function () {
    alert("HEY! You copied something!");
  })
);

// mouseenter: grey out p text
p.forEach(x =>
  x.addEventListener("mouseenter", function () {
    this.style.color = "darkgrey";
  })
);

// mouseleave: reset p color
p.forEach(x =>
  x.addEventListener("mouseleave", function () {
    this.style.color = "#212529";
  })
);

// resize: blur images even more when window is resized
window.addEventListener("resize", function () {
  img.forEach(x => (x.style.filter = "blur(20px)"));
});

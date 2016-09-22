var allFilters = document.querySelectorAll('header section > ul > li'),
    filterChild = document.querySelectorAll('header section > ul > li > ul'),
    likes = document.querySelectorAll(".like"),
    orientation = document.querySelectorAll(".orientation button"),
    login = document.querySelectorAll(".login form button"),
    main = document.querySelector("main"),
    x;

if (allFilters[0]) {
  for (var i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", function(){
      this.classList.toggle("open");
    }, false);
  }

  for (var i = 0; i < filterChild.length; i++) {
    filterChild[i].addEventListener("click", function(event){
      event.stopPropagation();
    }, true);
  }
}

if (document.querySelectorAll("header section")[0]) {
  document.querySelectorAll("header section > button")[0].addEventListener("click", function(){
    this.classList.toggle("open");
    this.parentNode.querySelector('ul').classList.toggle("open");
  });
}


if (likes[0]) {
  for (var i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", function() {
      var that = this,
          span = that.querySelector("span"),
          num = parseInt(span.innerHTML);

          num += 1;
          span.innerHTML = num;
      that.querySelector("svg").classList.add("big");
      setTimeout(function(){
        that.querySelector("svg").classList.remove("big");
      }, 300);
    });
  }
}

if (orientation[0]) {
  for (var i = 0; i < orientation.length; i++) {
    orientation[i].addEventListener("click", function(){
      if(!this.classList.contains("active")){
        orientation[0].classList.toggle("active");
        orientation[1].classList.toggle("active");
        main.classList.toggle("full");
        x = !main.classList.contains("full") ? articleHeight(main) : "";
      }
    });
  }
}

if (document.querySelector("main.login")) {
  for (var i = 0; i < login.length; i++) {
    login[i].addEventListener("click", function(event){
      event.preventDefault();
      var form = this.parentNode.parentNode,
      allForm = document.querySelectorAll(".login form"),
      index = Array.prototype.indexOf.call(form.parentNode.childNodes, form);
      form.style.display = "none";
      x = index == 1 ? allForm[1].style.display = "block" : allForm[0].style.display = "block";
    });
  }
}

if (window.innerWidth >= 800 && !main.classList.contains("full") && !main.classList.contains("login")) {
  articleHeight(main);
}

function articleHeight(container) {
  var children = container.children,
      max = 0;
  for (var i = 0; i < children.length; i++) {
    max = Math.max(children[i].clientHeight, max);
  }

  for (var i = 0; i < children.length; i++) {
    children[i].style.height = max + "px";
  }
}

// window.addEventListener("resize", function(){
//   if (window.innerWidth >= 800 && !main.classList.contains("full") && !main.classList.contains("login")) {
//     articleHeight(main);
//     console.log("run");
//   }
// });

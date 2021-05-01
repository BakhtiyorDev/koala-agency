// progress start

let progress = "#progress";
let show = true;
let design = document.querySelector(".des");
let development = document.querySelector(".dev");
let marketing = document.querySelector(".mar");

$(window).on("scroll load resize", function () {
  if (!show) return false;

  var w_top = $(window).scrollTop();
  var e_top = $(progress).offset().top;

  var w_height = $(window).height();
  var d_height = $(document).height();

  var e_height = $(progress).outerHeight();

  if (
    w_top + 500 >= e_top ||
    w_height + w_top == d_height ||
    e_height + e_top < w_height
  ) {
    design.classList.add("design");
    development.classList.add("development");
    marketing.classList.add("marketing");
    show = false;
  }
});

// progress end

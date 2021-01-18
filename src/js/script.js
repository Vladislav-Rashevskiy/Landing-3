// $(document).ready(function () {
//   $(".all").click(function () {
//     $(".projects-items__images").show();
//   });
//   $(".design").click(function () {
//     $(".projects-items__images").hide();
//     $(".web").show();
//   });
//   $(".mobile").click(function () {
//     $(".projects-items__images").hide();
//     $(".app").show();
//   });
//   $(".illus").click(function () {
//     $(".projects-items__images").hide();
//     $(".illustration").show();
//   });
//   $(".camera").click(function () {
//     $(".projects-items__images").hide();
//     $(".photo").show();
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  let all = document.querySelector(".all");
  all.addEventListener("click", () => {
    let images = document.querySelectorAll(".projects-items__images");
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "block";
    }
  });
  function test(btnClass,filteredImageClass,commonClass=".projects-items__images"){
    console.log(btnClass)
    let btn = document.querySelector(btnClass);
    btn.addEventListener("click", () => {
      let filteredImages = document.querySelectorAll(filteredImageClass);
      let images = document.querySelectorAll(commonClass);//Общий класс. Но можно передать параметром.
      for (let i = 0; i < images.length; i++) {
          images[i].style.display = "none";
      };
      for (let i = 0; i < filteredImages.length; i++) {
        filteredImages[i].style.display = "block";
      };
    });
  }

  test(".design",".web")
  test(".mobile",".app")
  test(".illus",".illustration")
  test(".camera",".photo")
});

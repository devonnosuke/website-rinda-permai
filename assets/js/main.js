/**
 * Template Name: EstateAgency - v4.9.1
 * Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Toggle .navbar-reduce
   */
  let selectHNavbar = select(".navbar-default");
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 100) {
        selectHNavbar.classList.add("navbar-reduce");
        selectHNavbar.classList.remove("navbar-trans");
      } else {
        selectHNavbar.classList.remove("navbar-reduce");
        selectHNavbar.classList.add("navbar-trans");
      }
    });
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Search window open/close
   */
  let body = select("body");
  on("click", ".navbar-toggle-box", function (e) {
    e.preventDefault();
    body.classList.add("box-collapse-open");
    body.classList.remove("box-collapse-closed");
  });

  on("click", ".close-box-collapse", function (e) {
    e.preventDefault();
    body.classList.remove("box-collapse-open");
    body.classList.add("box-collapse-closed");
  });

  /**
   * Intro Carousel
   */
  new Swiper(".intro-carousel", {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Property carousel
   */
  new Swiper("#property-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".propery-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * News carousel
   */
  new Swiper("#news-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".news-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Testimonial carousel
   */
  new Swiper("#testimonial-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".testimonial-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Property Single carousel
   */
  new Swiper("#property-single-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".property-single-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  lightGallery(document.getElementById("lightgallery"), {
    download: false,
  });

  lightGallery(document.getElementById("maplokasi"));
  lightGallery(document.getElementById("anim"));

  lightGallery(document.getElementById("property-single-slider"), {
    download: false,
    selector: ".carousel-item-b",
  });

  lightGallery(document.getElementById("facility-1"), {
    download: false,
    selector: ".link-c",
  });
  lightGallery(document.getElementById("facility-2"), {
    download: false,
    selector: ".link-c",
  });
  lightGallery(document.getElementById("facility-3"), {
    download: false,
    selector: ".link-c",
  });
  lightGallery(document.getElementById("facility-4"), {
    download: false,
    selector: ".link-c",
  });
  lightGallery(document.getElementById("facility-5"), {
    download: false,
    selector: ".link-c",
  });

  let waktuSekarang = new Date().getTime() + 604801111;
  // console.log("waktu UNIX: ", waktuSekarang);

  let waktuCookie = new Date();
  waktuCookie.setTime(waktuCookie.getTime() + 604801111);
  // console.log("waktu Cookie: ", waktuCookie.toUTCString());

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  document.cookie = "username=John Doe";

  // console.log(getCookie("username"));
  let cek = getCookie("waktutest");
  if (cek != "") {
    // alert("Cookie udah dibuat: " + cek);
    // document.cookie =
    //   "waktutest=" +
    //   waktuSekarang +
    //   "; expires=" +
    //   waktuCookie.toUTCString() +
    //   "; path=/";
  } else {
    // setCookie("cek", cek, 365);
    // alert("Cookie belum dibuat: " + cek);
    document.cookie =
      "waktutest=" +
      waktuSekarang +
      "; expires=" +
      waktuCookie.toUTCString() +
      "; path=/";
  }

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = cek - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countDown").innerHTML =
      "Waktu Tersisa: " +
      days +
      " Hari " +
      hours +
      " Jam " +
      minutes +
      " Menit " +
      seconds +
      " Detik";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.cookie =
        "waktutest=" +
        waktuSekarang +
        "; expires=" +
        waktuCookie.toUTCString() +
        "; path=/";
      document.getElementById("countDown").innerHTML =
        "Waktu Tersisa: " +
        days +
        " Hari " +
        hours +
        " Jam " +
        minutes +
        " Menit " +
        seconds +
        " Detik";
    }
  }, 1000);
})();

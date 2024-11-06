const scrollToTopBtn = document.getElementById("scrollToTopBtn");

      window.onscroll = function () {
        if (
          document.body.scrollTop > 400 ||
          document.documentElement.scrollTop > 400
        ) {
          scrollToTopBtn.style.display = "block";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      };

      scrollToTopBtn.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
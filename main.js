$( document ).ready(function() {

  // funzione per next
  $(".next").click(nextImg);

  function nextImg() {
    var activeItems = $(".images img.active, .carousel_spot span.active");

    activeItems.removeClass("active");

    if (activeItems.hasClass("last")) {
      $("img.first, .carousel_spot span.first").addClass("active");
    } else {
      activeItems.next().addClass("active");
    }
  }


  // funzione per prev
  $(".prev").click(prevImg);

  function prevImg() {
    var activeItems = $(".images img.active, .carousel_spot span.active");

    activeItems.removeClass("active");

    if (activeItems.hasClass("first")) {
      $("img.last, .carousel_spot span.last").addClass("active");
    } else {
      activeItems.prev().addClass("active");
    }
  }

});

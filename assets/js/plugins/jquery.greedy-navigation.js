/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $nav.width() - $btn.outerWidth(true) - 30;

  // Binary mode: Check if there would be ANY overflow
  var wouldOverflow = $vlinks.width() > availableSpace;

  if (wouldOverflow) {
    // Move ALL non-persistent items to the hidden list at once
    var $movableItems = $vlinks.children("*:not(.persist)");
    if ($movableItems.length > 0) {
      // Store widths BEFORE moving (while visible-links CSS is applied)
      var totalMovableWidth = 0;
      $movableItems.each(function() {
        totalMovableWidth += $(this).outerWidth(true);
      });
      breaks = [totalMovableWidth]; // Store total width of movable items

      $movableItems.each(function() {
        $(this).appendTo($hlinks);
      });
      // Show the dropdown btn
      $btn.removeClass("hidden");
    }
  } else {
    // Check if there are any hidden items
    if ($hlinks.children().length > 0) {
      // Use stored width from when items were visible
      var totalMovableWidth = breaks.length > 0 ? breaks[0] : 0;
      var persistentWidth = $vlinks.width();
      var tempWidth = persistentWidth + totalMovableWidth;

      if (tempWidth <= availableSpace) {
        // Move ALL items back to visible list
        while ($hlinks.children().length > 0) {
          if ($vlinks_persist_tail.children().length > 0) {
            $hlinks.children().first().insertBefore($vlinks_persist_tail);
          } else {
            $hlinks.children().first().appendTo($vlinks);
          }
        }
        breaks = [];
      }
    }

    // Always hide button if there are no hidden items
    if ($hlinks.children().length === 0) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", $hlinks.children().length);

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
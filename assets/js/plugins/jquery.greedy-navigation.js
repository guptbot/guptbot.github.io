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

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // Binary mode: Check if there would be ANY overflow
  var wouldOverflow = $vlinks.width() > availableSpace;

  if (wouldOverflow) {
    // Move ALL non-persistent items to the hidden list at once
    var $movableItems = $vlinks.children("*:not(.persist)");
    if ($movableItems.length > 0) {
      breaks = [$vlinks.width()]; // Store only one breakpoint
      $movableItems.each(function() {
        $(this).prependTo($hlinks);
      });
      // Show the dropdown btn
      $btn.removeClass("hidden");
    }
  } else {
    // Check if ALL hidden items can fit without overflow
    var tempWidth = $vlinks.width();

    // Calculate total width if all items were visible
    $hlinks.children().each(function() {
      // Approximate width - in reality items might have different widths
      tempWidth += $(this).outerWidth(true);
    });

    if (tempWidth <= availableSpace && $hlinks.children().length > 0) {
      // Move ALL items back to visible list
      while ($hlinks.children().length > 0) {
        if ($vlinks_persist_tail.children().length > 0) {
          $hlinks.children().first().insertBefore($vlinks_persist_tail);
        } else {
          $hlinks.children().first().appendTo($vlinks);
        }
      }
      breaks = [];
      // Hide the dropdown btn
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
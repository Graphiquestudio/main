$(document).ready(function () {
      "use strict";
    
      if ($('.menu-filter-items').length) {
          var $galleryFilter = $('.menu-filter-items').isotope({
              itemSelector: '.menu-item',
                     masonry: {
                  columnWidth: '.menu-item'
              }
          });
          $('.menu-filter-list').on('click', 'li', function () {
              var filterValue = $(this).attr('data-filter');
              $('.menu-filter-list').find('.is-checked').removeClass('is-checked');
              $(this).addClass('is-checked');
                     $galleryFilter.isotope({filter: filterValue});
          });

          $galleryFilter.imagesLoaded().progress(function () {
              $galleryFilter.isotope('layout');
          });
      }
});
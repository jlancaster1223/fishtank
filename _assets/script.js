// On hover of the li with class has-submenu, apply active to the sub menu
    $('li.has-submenu').hover(function() {
        $(this).find('.submenu').show();
    }, function() {
        $(this).find('.submenu').hide();
    });

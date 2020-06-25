var map;
jQuery(function($) {
    $(document).ready(function() {
        var latlng = new google.maps.LatLng(52.493403, 13.492351);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        // init Height
        $('#map_canvas').height($( window ).height());
    });
    // On Resize
    $(window).resize(function(){
        $('#map_canvas').height($( window ).height());
    });
});
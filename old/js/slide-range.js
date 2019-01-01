$( function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 35000,
        values: [0, 35000],
        slide: function(event, ui) {
            $("#min-price").val(ui.values[0]);
            $("#max-price").val(ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
} );
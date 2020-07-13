$(document).ready(function () {
    $('#chart-image').click(function (e) {
		var chartImg = $(this);
        var chartSize = chartImg.attr("src") + " = " +
            Math.floor(chartImg.width()) + " x " + Math.floor(chartImg.height()) +
            " px\nУстановите данный размер в MQL4/Files/PriceAction/Settings.txt" +
            "\nЧтобы размеры скриншотов соотвотствовали разрешению вашего экрана " +
            "(картинка будет более четкой).";
        alert(chartSize);
        return false;
    });
    /*
    $('.table-responsive table tbody tr').click(function (e) {
        var idItem = $(this).find('span.idItem').html();
        $('tr').removeClass("current-item");
        $(this).addClass("current-item");
    });
    */
});

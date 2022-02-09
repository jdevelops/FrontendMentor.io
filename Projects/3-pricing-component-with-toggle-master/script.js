function swicthCheck() {
    var basicAnnually = 199.99;
    var basciMonthly = 19.99;
    var proAnnually = 249.99;
    var proMonthly = 24.99;
    var masterAnnually = 399.99;
    var MasterMonthly = 39.99;

    if (document.getElementById('togglebox').checked == true) {
        SetPricesMonthly();
    } else {
        SetPricesAnnually();
    }
    // JQuery Part //
    function SetPricesMonthly() {
        $('#Basic__price').html(
            '<span class="panel__dolar">&dollar;</span>' + basciMonthly
        );
        $('#Pro__price').html(
            '<span class="panel__dolar">&dollar;</span>' + proMonthly
        );
        $('#Master__price').html(
            '<span class="panel__dolar">&dollar;</span>' + MasterMonthly
        );
    }
    function SetPricesAnnually() {
        $('#Basic__price').html(
            '<span class="panel__dolar">&dollar;</span>' + basicAnnually
        );
        $('#Pro__price').html(
            '<span class="panel__dolar">&dollar;</span>' + proAnnually
        );
        $('#Master__price').html(
            '<span class="panel__dolar">&dollar;</span>' + masterAnnually
        );
    }
}

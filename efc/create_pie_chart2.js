var page = require('webpage').create();
var cookie = phantom.addCookie({
  name : "PHPSESSID",
  value : "rluvlfut49h50qcl01nut2bn07",
  domain : "loganswalk.com"
});
page.open('http://loganswalk.com/efc/efc/piechart2.php', function () {
    page.render('piechart_efc_lowered.png');
    phantom.exit();
});
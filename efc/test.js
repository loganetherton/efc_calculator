var page = require('webpage').create();
phantom.clearCookies();
var cookie = phantom.addCookie({
  name : "PHPSESSID",
  value : sessid,
  domain : "loganswalk.com"
});
page.open('http://loganswalk.com/efc/efc/piechart.php', function () {
    page.render('efc_test.png');
    phantom.exit();
});
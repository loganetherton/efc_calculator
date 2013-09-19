var page = require('webpage').create();
var cookie = phantom.addCookie({
  name : "PHPSESSID",
  value : "nroe2g7prb3qksbh47n1pd7cp3",
  domain : "loganswalk.com"
});
page.open('http://loganswalk.com/efc/efc/piechart.php', function () {
    page.render('efc_test.png');
    phantom.exit();
});
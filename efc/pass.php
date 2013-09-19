<?php
session_start();
$decode = json_decode($_POST['pass_to_post'], true);
foreach($decode as $k=>$v){
   $_SESSION[$k] = $v;
}
$session_id = session_id();
$js_contents = <<<EOD
var page = require('webpage').create();
var cookie = phantom.addCookie({
  name : "PHPSESSID",
  value : "$session_id",
  domain : "loganswalk.com"
});
page.open('http://loganswalk.com/efc/efc/piechart.php', function () {
    page.render('piechart.png');
    phantom.exit();
});
EOD;

$js_contents2 = <<<EOD
var page = require('webpage').create();
var cookie = phantom.addCookie({
  name : "PHPSESSID",
  value : "$session_id",
  domain : "loganswalk.com"
});
page.open('http://loganswalk.com/efc/efc/piechart2.php', function () {
    page.render('piechart_efc_lowered.png');
    phantom.exit();
});
EOD;

file_put_contents('create_pie_chart.js', $js_contents);
file_put_contents('create_pie_chart2.js', $js_contents2);
session_write_close();
$cmd = "phantomjs create_pie_chart.js";
$crop1 = "convert piechart.png -crop 550x350+150+50 piechart.png";
exec($cmd);
$cmd = "phantomjs create_pie_chart2.js";
$crop2 = "convert piechart_efc_lowered.png -crop 550x350+150+50 piechart_efc_lowered.png";
exec($cmd);
exec($crop1);
exec($crop2);
header("Location: ../assets/tcpdf/pdf_output2.php");
//header('Location: piechart.php');
?>
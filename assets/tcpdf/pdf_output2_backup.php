<?php
session_start();

// Include the main TCPDF library
require_once('tcpdf.php');

// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Logan Etherton');
$pdf->SetTitle('Expected Family Contribution');
$pdf->SetSubject('Expected Family Contribution');
$pdf->SetKeywords('EFC, Expected, Family, Contribution');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE, PDF_HEADER_STRING);

// set header and footer fonts
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
	require_once(dirname(__FILE__).'/lang/eng.php');
	$pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

// set font
$pdf->SetFont('dejavusans', '', 10);
$pdf->AddPage();

$output = '';

/*******************************************************************
 * CONTENTS TO BE OUTPUT
 ******************************************************************/

ob_start();
//var_dump($_SESSION);

if($_SESSION['worksheet_type'] == 'simplified_a' || $_SESSION['worksheet_type'] == 'simplified_b' || $_SESSION['worksheet_type'] == 'simplified_c'){
	$simplified = true;
}else{
	$simplified = false;
}
?>
<br>
<h1 style="text-align: center">Expected Family Contribution Report</h1>

<p style="font-size: 1.25em; text-align: center"><i>Your personal start to the undergraduate financial aid process.</i></p>

<?php
// If name listed:
    if(isset($_SESSION['student_last_name'])){
        echo '<p style="text-align: center">Prepared for: ' . $_SESSION['student_first_name'] . " " . $_SESSION['student_last_name'] . "</p>";
    }
?>
<p style="text-align: center; text-decoration: underline"><?php echo date("F j, Y");?></p>

<br pagebreak="true">
<?php
$pdf->SetPrintHeader(false);
?>
<?php
$proviso = <<<EOD
This document is an overview of the standard financial aid process system customized to the student and family based on the information provided.  This document holds no authoritative weight, is not an approval or application for financial aid but is designed to best explain a rather easy system made complex.
The Expected Family Contribution formula is line for line the same as the FAFSA formulas and is the most up to date and accurate calculator available.
The actual financial aid package that the student receives may vary widely from the Expected Family Contribution; the cause of this should be made clear by the reading of this document.  Additionally a small set of schools use the College Board owned CSS Profile which takes into consideration financial elements that the FAFSA does not.  These elements can include but are not limited to the value of a small business, home equity and the like.  As each school may vary the formulas and perceive them as proprietary we do not deal with them here.  A simple Internet search for “Current CSS Profile Schools” will bring up the current list.
This is an informative document and is not intended nor should it be construed as giving financial, financial aid, accounting advice or similar.  It is not designed by, for, or with, an education institution or government body.  Nor is this an application for financial aid.  All of that said, we do believe as current and recent users of the financial aid system that this document is the most accurate, informative and easy to follow guide through the beginning of the financial aid process.
EOD;
?>

<p style="font-size: 1.25em"><b>PROVISO</b></p>
<p style="font-size: 0.75em">
<?php
echo nl2br($proviso);
?>
</p>
<br pagebreak="true">
<?php

// Display EFC for whether attending for nine months or not
if(isset($_SESSION['efc_other_than_nine_months'])){
		$efc = $_SESSION['efc_other_than_nine_months'];
}elseif(isset($_SESSION['efc_nine_months'])){
	if($_SESSION['efc_nine_months'] === 0){
		$efc = 0;
	}else{
		$efc = $_SESSION['efc_nine_months'];
	}
}else{
		$efc = 0;
}

// Formatted EFC
$efc_formatted = '$' . number_format($efc, 2);

// Lowered EFC for zero investment assets for student and parent
if(isset($_SESSION['efc_other_than_nine_months_efc_lowered'])){
		$lowered_efc = $_SESSION['efc_other_than_nine_months_efc_lowered'];
}elseif(isset($_SESSION['efc_nine_months_efc_lowered'])){
	if($_SESSION['efc_nine_months_efc_lowered'] === 0){
		$lowered_efc = 0;
	}else{
		$lowered_efc = $_SESSION['efc_nine_months_efc_lowered'];
	}
}else{
		$lowered_efc = 0;
}
// Formatted lowered EFC
$lowered_efc_formatted = '$' . number_format($lowered_efc, 2);

$parents_assets = '$' . number_format($_SESSION['parent_contribution_from_assets'], 2);
$students_assets = '$' . number_format($_SESSION['student_contribution_from_assets'], 2);
$parents_income = '$' . number_format($_SESSION['parent_total_income'], 2);
$students_income = '$' . number_format($_SESSION['students_total_income'], 2);
$efc_minus_lowered_efc = $efc - $lowered_efc;
$efc_minus_lowered_efc_formatted = '$' . number_format($efc_minus_lowered_efc, 2);
$parent_assets_lowered_efc = "$" . number_format($_SESSION['parent_contribution_from_assets_efc_lowered'],2);
$student_assets_lowered_efc = '$' . number_format($_SESSION['student_contribution_from_assets_efc_lowered']);
?>
<h2><b></b>Financial Overview for the <?php echo $_SESSION['student_last_name'];?> family.</b></h2>
<?php
$financial_overview = <<<EOD
<p><b>1. Where the family is today:</b></p>
<p>Based on the information that you provided your Expected Family Contribution is: {$efc_formatted}.</p>
<p><b>2. Where the family can be:</b></p>
<p>If you make the recommended changes your Expected Family Contribution can be reduced to: {$lowered_efc_formatted}.</p>
<p><b>3. The Net Result:</b></p>
<p>This change will increase student aid eligibility by: <br>{$efc_minus_lowered_efc_formatted}.</p>
<p><b>4. Details:</b></p>
The EFC is predominately based on four elements.  These elements are run through a series of machinations but at the core they consist of:
EOD;

// If using the regular worksheet, display assets. For simplified worksheet, do not display assets.
if(!$simplified){
	$financial_overview2 =<<<EOD
<ul>
<li>Parents Income
<li>Parents Assets
<li>Student' Income
<li>Student's Assets
</ul>
EOD;
}else{
	$financial_overview2 = <<<EOD
<ul>
<li>Parents Income
<li>Parents Assets
<li>Student' Income
<li>Student's Assets
</ul>
EOD;
}
$financial_overview3 = <<<EOD
<p>In the {$_SESSION['student_last_name']} family’s scenario, the current EFC of {$efc_formatted} is determined by:
<hr>
<table width="100%">
<col width="50">
  <col width="250">
<tr>
<td width="30%">
<p></p>
EOD;

if(!$simplified){
	$financial_overview4 = <<<EOD
<b>Parents Income:</b> {$parents_income}
<br><b>Parents Assets:</b> {$parents_assets}
<br><b>Student' Income:</b> {$students_income}
<br><b>Student's Assets:</b> {$students_assets}
EOD;
}else{
	$financial_overview4 = <<<EOD
<b>Parents Income:</b> {$parents_income}
<br><b>Student' Income:</b> {$students_income}
EOD;
}
$financial_overview5 = <<<EOD
</td>
<td width="70%"><img src="../../efc/piechart.png"></td>
</tr>
</table>

<br pagebreak="true">

<h3>When the EFC is lowered, the new EFC of {$lowered_efc_formatted} is determined by:</h3>
<hr>
<table width="100%">
<col width="50">
  <col width="250">
<tr>
<td width="30%">
<p></p>
EOD;

if(!$simplified){
	$financial_overview5 = <<<EOD
<b>Parents Income:</b> {$parents_income}
<br><b>Parents Assets:</b> {$parent_assets_lowered_efc}
<br><b>Student' Income:</b> {$students_income}
<br><b>Student's Assets:</b> {$student_assets_lowered_efc}
EOD;
}else{
	$financial_overview5 = <<<EOD
<b>Parents Income:</b> {$parents_income}
<br><b>Student' Income:</b> {$students_income}
EOD;
}
$financial_overview6 = <<<EOD
</td>
<td width="70%"><img src="../../efc/piechart_efc_lowered.png"></td>
</tr>
</table>
<br pagebreak="true">
<p><b>5. Resolution:</b></p>
<p>As the vast majority of people are not willing to make a change in income, (nor would it be wise), the movement of assets is what has the most effect on the EFC calculation.</p>

<p>By moving:</p>
		<ul>
		<li>100% of the parents assets and / or
		<li>100% of the students assets
		<li>From what the EFC calculation considers liquid assets into not counted asset categories your EFC can be 		lowered by {$efc_minus_lowered_efc_formatted}
		</ul>

<p>You may do this yourself if you would like.  If you would like to contact a trained Student Aid Calculate volunteer you may do so by calling &lt;number>.  Keep in mind that they are volunteers so if no one is available you will be contacted shortly.</p>

<p>Depending on where you are in the process of your child’s migration to college you may desire to see some of our other free sites.  Your login for this site is valid at each of the other sites as well.</p>

<ul>
<li>www.freecollegeplanner.org
<li>www.collegeplannerornot.org
<li>www.cosigningparent.org
<li>www.plusvsprivate.org
</ul>
</p>
EOD;

$financial_overview = $financial_overview . $financial_overview2 . $financial_overview3 . $financial_overview4 . $financial_overview5 . $financial_overview6;
echo $financial_overview;
//echo $financial_overview5;
?>


<?php
//var_dump($_SESSION);
$contents = ob_get_contents();
ob_end_clean();

$output = $contents;

// output the HTML content
$pdf->writeHTML($output, true, false, true, false, '');

$pdf->lastPage();

//ORIGINAL EXAMPLE HTML OUTPUT

//// add a page
//$pdf->AddPage();
//
//// writeHTML($html, $ln=true, $fill=false, $reseth=false, $cell=false, $align='')
//// writeHTMLCell($w, $h, $x, $y, $html='', $border=0, $ln=0, $fill=0, $reseth=true, $align='', $autopadding=true)
//
//// create some HTML content
//$html = '<h1>HTML Example</h1>
//Some special characters: &lt; € &euro; &#8364; &amp; è &egrave; &copy; &gt; \\slash \\\\double-slash \\\\\\triple-slash
//<h2>List</h2>
//List example:
//<ol>
//	<li><img src="images/logo_example.jpg" alt="test alt attribute" width="30" height="30" border="0" /> test image</li>
//	<li><b>bold text</b></li>
//	<li><i>italic text</i></li>
//	<li><u>underlined text</u></li>
//	<li><b>b<i>bi<u>biu</u>bi</i>b</b></li>
//	<li><a href="http://www.tecnick.com" dir="ltr">link to http://www.tecnick.com</a></li>
//	<li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br />Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
//	<li>SUBLIST
//		<ol>
//			<li>row one
//				<ul>
//					<li>sublist</li>
//				</ul>
//			</li>
//			<li>row two</li>
//		</ol>
//	</li>
//	<li><b>T</b>E<i>S</i><u>T</u> <del>line through</del></li>
//	<li><font size="+3">font + 3</font></li>
//	<li><small>small text</small> normal <small>small text</small> normal <sub>subscript</sub> normal <sup>superscript</sup> normal</li>
//</ol>
//<dl>
//	<dt>Coffee</dt>
//	<dd>Black hot drink</dd>
//	<dt>Milk</dt>
//	<dd>White cold drink</dd>
//</dl>
//
//</div>';
//
//// output the HTML content
//$pdf->writeHTML($html, true, false, true, false, '');
//
//
//// output some RTL HTML content
//$html = '<div style="text-align:center">The words &#8220;<span dir="rtl">&#1502;&#1494;&#1500; [mazel] &#1496;&#1493;&#1489; [tov]</span>&#8221; mean &#8220;Congratulations!&#8221;</div>';
//$pdf->writeHTML($html, true, false, true, false, '');
//
//// test some inline CSS
//$html = '<p>This is just an example of html code to demonstrate some supported CSS inline styles.
//<span style="font-weight: bold;">bold text</span>
//<span style="text-decoration: line-through;">line-trough</span>
//<span style="text-decoration: underline line-through;">underline and line-trough</span>
//<span style="color: rgb(0, 128, 64);">color</span>
//<span style="background-color: rgb(255, 0, 0); color: rgb(255, 255, 255);">background color</span>
//<span style="font-weight: bold;">bold</span>
//<span style="font-size: xx-small;">xx-small</span>
//<span style="font-size: x-small;">x-small</span>
//<span style="font-size: small;">small</span>
//<span style="font-size: medium;">medium</span>
//<span style="font-size: large;">large</span>
//<span style="font-size: x-large;">x-large</span>
//<span style="font-size: xx-large;">xx-large</span>
//</p>';
//
//$pdf->writeHTML($html, true, false, true, false, '');
//
//// reset pointer to the last page
//$pdf->lastPage();

// END ORIGINAL EXAMPLE OUTPUT

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Print a table

// add a page
//$pdf->AddPage();
//
//// create some HTML content
//$subtable = '<table border="1" cellspacing="6" cellpadding="4"><tr><td>a</td><td>b</td></tr><tr><td>c</td><td>d</td></tr></table>';
//
//$html = '<h2>HTML TABLE:</h2>
//<table border="1" cellspacing="3" cellpadding="4">
//	<tr>
//		<th>#</th>
//		<th align="right">RIGHT align</th>
//		<th align="left">LEFT align</th>
//		<th>4A</th>
//	</tr>
//	<tr>
//		<td>1</td>
//		<td bgcolor="#cccccc" align="center" colspan="2">A1 ex<i>amp</i>le <a href="http://www.tcpdf.org">link</a> column span. One two tree four five six seven eight nine ten.<br />line after br<br /><small>small text</small> normal <sub>subscript</sub> normal <sup>superscript</sup> normal  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla<ol><li>first<ol><li>sublist</li><li>sublist</li></ol></li><li>second</li></ol><small color="#FF0000" bgcolor="#FFFF00">small small small small small small small small small small small small small small small small small small small small</small></td>
//		<td>4B</td>
//	</tr>
//	<tr>
//		<td>'.$subtable.'</td>
//		<td bgcolor="#0000FF" color="yellow" align="center">A2 € &euro; &#8364; &amp; è &egrave;<br/>A2 € &euro; &#8364; &amp; è &egrave;</td>
//		<td bgcolor="#FFFF00" align="left"><font color="#FF0000">Red</font> Yellow BG</td>
//		<td>4C</td>
//	</tr>
//	<tr>
//		<td>1A</td>
//		<td rowspan="2" colspan="2" bgcolor="#FFFFCC">2AA<br />2AB<br />2AC</td>
//		<td bgcolor="#FF0000">4D</td>
//	</tr>
//	<tr>
//		<td>1B</td>
//		<td>4E</td>
//	</tr>
//	<tr>
//		<td>1C</td>
//		<td>2C</td>
//		<td>3C</td>
//		<td>4F</td>
//	</tr>
//</table>';
//
//// output the HTML content
//$pdf->writeHTML($html, true, false, true, false, '');
//
//// Print some HTML Cells
//
//$html = '<span color="red">red</span> <span color="green">green</span> <span color="blue">blue</span><br /><span color="red">red</span> <span color="green">green</span> <span color="blue">blue</span>';
//
//$pdf->SetFillColor(255,255,0);
//
//$pdf->writeHTMLCell(0, 0, '', '', $html, 'LRTB', 1, 0, true, 'L', true);
//$pdf->writeHTMLCell(0, 0, '', '', $html, 'LRTB', 1, 1, true, 'C', true);
//$pdf->writeHTMLCell(0, 0, '', '', $html, 'LRTB', 1, 0, true, 'R', true);
//
//// reset pointer to the last page
//$pdf->lastPage();
//
//// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//// Print a table
//
//// add a page
//$pdf->AddPage();
//
//// create some HTML content
//$html = '<h1>Image alignments on HTML table</h1>';
//
//// output the HTML content
//$pdf->writeHTML($html, true, false, true, false, '');
//
//// reset pointer to the last page
//$pdf->lastPage();
//
//// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//// Print all HTML colors
//
//// add a page
//$pdf->AddPage();
//
//$textcolors = '<h1>HTML Text Colors</h1>';
//$bgcolors = '<hr /><h1>HTML Background Colors</h1>';
//
//foreach(TCPDF_COLORS::$webcolor as $k => $v) {
//	$textcolors .= '<span color="#'.$v.'">'.$v.'</span> ';
//	$bgcolors .= '<span bgcolor="#'.$v.'" color="#333333">'.$v.'</span> ';
//}
//
//// output the HTML content
//$pdf->writeHTML($textcolors, true, false, true, false, '');
//$pdf->writeHTML($bgcolors, true, false, true, false, '');
//
//// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
//// Test word-wrap
//
//// create some HTML content
//$html = '<hr />
//<h1>Various tests</h1>
//<a href="#2">link to page 2</a><br />
//<font face="courier"><b>thisisaverylongword</b></font> <font face="helvetica"><i>thisisanotherverylongword</i></font> <font face="times"><b>thisisaverylongword</b></font> thisisanotherverylongword <font face="times">thisisaverylongword</font> <font face="courier"><b>thisisaverylongword</b></font> <font face="helvetica"><i>thisisanotherverylongword</i></font> <font face="times"><b>thisisaverylongword</b></font> thisisanotherverylongword <font face="times">thisisaverylongword</font> <font face="courier"><b>thisisaverylongword</b></font> <font face="helvetica"><i>thisisanotherverylongword</i></font> <font face="times"><b>thisisaverylongword</b></font> thisisanotherverylongword <font face="times">thisisaverylongword</font> <font face="courier"><b>thisisaverylongword</b></font> <font face="helvetica"><i>thisisanotherverylongword</i></font> <font face="times"><b>thisisaverylongword</b></font> thisisanotherverylongword <font face="times">thisisaverylongword</font> <font face="courier"><b>thisisaverylongword</b></font> <font face="helvetica"><i>thisisanotherverylongword</i></font> <font face="times"><b>thisisaverylongword</b></font> thisisanotherverylongword <font face="times">thisisaverylongword</font>';
//
//// output the HTML content
//$pdf->writeHTML($html, true, false, true, false, '');
//
//// Test fonts nesting
//$html1 = 'Default <font face="courier">Courier <font face="helvetica">Helvetica <font face="times">Times <font face="dejavusans">dejavusans </font>Times </font>Helvetica </font>Courier </font>Default';
//$html2 = '<small>small text</small> normal <small>small text</small> normal <sub>subscript</sub> normal <sup>superscript</sup> normal';
//$html3 = '<font size="10" color="#ff7f50">The</font> <font size="10" color="#6495ed">quick</font> <font size="14" color="#dc143c">brown</font> <font size="18" color="#008000">fox</font> <font size="22"><a href="http://www.tcpdf.org">jumps</a></font> <font size="22" color="#a0522d">over</font> <font size="18" color="#da70d6">the</font> <font size="14" color="#9400d3">lazy</font> <font size="10" color="#4169el">dog</font>.';
//
//$html = $html1.'<br />'.$html2.'<br />'.$html3.'<br />'.$html3.'<br />'.$html2;
//
//// output the HTML content
//$pdf->writeHTML($html, true, false, true, false, '');
//
//// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//// test pre tag
//
//// add a page
//$pdf->AddPage();
//
//$html = <<<EOF
//<div style="background-color:#880000;color:white;">
//Hello World!<br />
//Hello
//</div>
//<pre style="background-color:#336699;color:white;">
//int main() {
//    printf("HelloWorld");
//    return 0;
//}
//</pre>
//<tt>Monospace font</tt>, normal font, <tt>monospace font</tt>, normal font.
//<br />
//<div style="background-color:#880000;color:white;">DIV LEVEL 1<div style="background-color:#008800;color:white;">DIV LEVEL 2</div>DIV LEVEL 1</div>
//<br />
//<span style="background-color:#880000;color:white;">SPAN LEVEL 1 <span style="background-color:#008800;color:white;">SPAN LEVEL 2</span> SPAN LEVEL 1</span>
//EOF;
//
//// output the HTML content
//$pdf->writeHTML($html, true, false, true, false, '');
//
//// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
////// test custom bullet points for list
////
////// add a page
////$pdf->AddPage();
////
////$html = <<<EOF
////<h1>Test custom bullet image for list items</h1>
////<ul>
////	<li>test custom bullet image</li>
////	<li>test custom bullet image</li>
////	<li>test custom bullet image</li>
////	<li>test custom bullet image</li>
////<ul>
////EOF;
////
////// output the HTML content
////$pdf->writeHTML($html, true, false, true, false, '');
////
////// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
////
////// reset pointer to the last page
////$pdf->lastPage();
//
//// ---------------------------------------------------------

//Close and output PDF document
$pdf->Output('efc_overview.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+

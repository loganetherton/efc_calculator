<!DOCTYPE html>
	<html lang="en">
  <head>
  <meta charset="utf-8">
    
  <title>Expected Family Contribution</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="../bootstrap-3.0.0/assets/css/bootstrap.css" rel="stylesheet">

    <style type="text/css">
      body {
        padding-top: 20px;
        padding-bottom: 40px;
      }
    </style>

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

  </head>

  <body>

<!--  <div class="container-narrow">  -->
		  <div class="container" id="independence_questions">
		    
		    <div class="row">
		      <div class="col-md-8 col-md-offset-2">
		        <a class="btn pull-right btn-danger" id="btn_restart" href="#">Restart</a>
		        <a class="btn btn-default" id="btn_logout" href="logout.php">Logout</a>
						<a class="btn pull-left btn-info" id="btn_back" href="#">Back</a>
		        <h2 class="muted text-center">Expected Family Contribution</h2>
	        </div>
		     </div>
		    
		    <hr>
		    
		<div id="zero_efc_dependent">
			<!--BEGIN EFC ZERO DEPENDENT-->
		    		      
		      <div class="questions">
		        <div class="row">
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="Benefits refer to any designated means-tested Federal benefit program, such as SSI, SNAP, Free and Reduced Price School Lunch Program, TANF, or WIC.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="benefits">Did anyone in your parents' household receive government benefits during 2011-2012, such as SSI, a reduced lunch, etc?</p>
	              </div>
	            </div>
		          
		          <div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="The following are considered equivalent to 1040A/1040EZ: the income tax return required by Puerto Rico, Guam, American Samoa, U.S. Virgin Islands, Marshall Islands, Micronesia, and Palau.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="form1040a1040ez">Were your parents eligible to file a 2012 Form 1040A or 1040EZ for their taxes?</p>
	              </div>
	            </div>
	          </div>
		        
		        <div class="row">
		          <div class="col-md-1 col-md-offset-1">
		            <hr>
	            </div>
		          <div class="col-md-1 col-md-offset-4">
		            <hr>
	            </div>
	          </div>
		        
		        <div class="row" style="margin-top: 1em">
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="If a Form 1040 was filed solely to claim an educational tax credit, you're still eligible for a zero EFC if you meet the other requirements.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="not_required_taxes">Did either of your parents file a 2012 Form 1040 for their taxes, even though they weren't required to do so, or did they not file taxes at all?</p>
	              </div>
	            </div>
		          
		          <div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="A dislocated worker is someone who has been laid off or is about to be laid off, receiving unemployment benefits from being laid off and is unlikely to return to work, is self-employed but with no work due to economic conditions or a natural disaster, or was a homemaker that is now unable to find work.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="dislocated_worker">Are either of your parents dislocated workers?</p>
	              </div>
	            </div>
	          </div>
		        
		        <div class="row">
		          <div class="col-md-1 col-md-offset-1">
		            <hr>
		            </div>
		          <div class="col-md-1 col-md-offset-4">
		            <hr>
		            </div>
	          </div>                 
		        
		        <div class="row" style="margin-top:1em">
		          <div class="col-md-5 col-md-offset-1">
		            <div>
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="income_under_24k">Was the 2012 income of your parents less than $24,000?</p>
	              </div>
	            </div>
		          
		          
	          </div>
	        </div>
		      <!--END EFC ZERO DEPENDENT QUESTIONS-->
	      </div>
		      


		      <div id="zero_efc_independent">
			<!--BEGIN EFC ZERO INDEPENDENT-->
		    		      
		      <div class="questions">
		        <div class="row">
<?php 
session_start();
// If married
if($_SESSION['married']){ 
?>
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="Answer yes if anyone other than your spouse, including children, parents, siblings, etc, is dependent upon you for more than half of their income.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id='dependents_other_than_spouse'>Do you have one or more dependents other than your spouse?</p>
	              </div>
	            </div>
<?php 
// If not married
}else{ 
?>

							<div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="Answer yes if anyone, including children, parents, siblings, etc, is dependent upon you for more than half of their income.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id='dependents_other_than_spouse'>Do you have one or more dependents?</p>
	              </div>
	            </div>
<?php 
} 
?>
		          
		          <div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="Benefits refer to any designated means-tested Federal benefit program, such as SSI, SNAP, Free and Reduced Price School Lunch Program, TANF, or WIC.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="benefits">Did anyone in your parents' household receive government benefits during 2011-2012, such as SSI, a reduced lunch, etc?</p>
	              </div>
	            </div>
	          </div>
		        
		        <div class="row">
		          <div class="col-md-1 col-md-offset-1">
		            <hr>
	            </div>
		          <div class="col-md-1 col-md-offset-4">
		            <hr>
	            </div>
	          </div>
		        
		        <div class="row" style="margin-top: 1em">
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="The following are considered equivalent to 1040A/1040EZ: the income tax return required by Puerto Rico, Guam, American Samoa, U.S. Virgin Islands, Marshall Islands, Micronesia, and Palau.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="form1040a1040ez">Were your parents eligible to file a 2012 Form 1040A or 1040EZ for their taxes?</p>
	              </div>
	            </div>
		          
		          <div class="col-md-5">
		            <div rel="tooltip" data-placement="left" data-original-title="If a Form 1040 was filed solely to claim an educational tax credit, you're still eligible for a zero EFC if you meet the other requirements.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id='not_required_taxes'>Did either of your parents file a 2012 Form 1040 for their taxes, even though they weren't required to do so, or were they not required to file taxes at all?</p>
	              </div>
	            </div>
	          </div>
		        
		        <div class="row">
		          <div class="col-md-1 col-md-offset-1">
		            <hr>
		            </div>
		          <div class="col-md-1 col-md-offset-4">
		            <hr>
		            </div>
	          </div>                 
		        
		        <div class="row" style="margin-top:1em">
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="A dislocated worker is someone who has been laid off or is about to be laid off, receiving unemployment benefits from being laid off and is unlikely to return to work, is self-employed but with no work due to economic conditions or a natural disaster, or was a homemaker that is now unable to find work.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id='dislocated_worker'>Are either of your parents dislocated workers?</p>
	              </div>
	            </div>
		          
		          <div class="col-md-5">
		            <div>
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id='income_under_24k'>Was the 2012 income of your parents less than $24,000?</p>
	              </div>
	            </div>
	          </div>
		        
		        
	          </div>          
	        </div>
		      <!--END EFC ZERO INDEPENDENT-->
	      </div>



				<div id="determine_worksheet_dependent">
				<!--BEGIN WORKSHEET DETERMINATION DEPENDENT-->
		    		      
		      <div class="questions">
		        <div class="row">
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="Benefits refer to any designated means-tested Federal benefit program, such as SSI, SNAP, Free and Reduced Price School Lunch Program, TANF, or WIC.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="benefits">Did anyone in your parents' household receive government benefits during 2011-2012, such as SSI, a reduced lunch, etc?</p>
	              </div>
	            </div>
		          
		          <div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="The following are considered equivalent to 1040A/1040EZ: the income tax return required by Puerto Rico, Guam, American Samoa, U.S. Virgin Islands, Marshall Islands, Micronesia, and Palau.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="form1040a1040ez">Were your parents eligible to file a 2012 Form 1040A or 1040EZ for their taxes?</p>
	              </div>
	            </div>
	          </div>
		        
		        <div class="row">
		          <div class="col-md-1 col-md-offset-1">
		            <hr>
	            </div>
		          <div class="col-md-1 col-md-offset-4">
		            <hr>
	            </div>
	          </div>
		        
		        <div class="row" style="margin-top: 1em">
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="Answer yes even if a Form 1040 was filed solely to claim an educational tax credit.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="not_required_taxes">Did either of your parents file a 2012 Form 1040 for their taxes, even though they weren't required to do so, or were they not required to file taxes at all?</p>
	              </div>
	            </div>
		          
		          <div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="A dislocated worker is someone who has been laid off or is about to be laid off, receiving unemployment benefits from being laid off and is unlikely to return to work, is self-employed but with no work due to economic conditions or a natural disaster, or was a homemaker that is now unable to find work.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="dislocated_worker">Are either of your parents dislocated workers?</p>
	              </div>
	            </div>
	          </div>
		        
		        <div class="row">
		          <div class="col-md-1 col-md-offset-1">
		            <hr>
		            </div>
		          <div class="col-md-1 col-md-offset-4">
		            <hr>
		            </div>
	          </div>                 
		        
		        <div class="row" style="margin-top:1em">
		          <div class="col-md-5 col-md-offset-1">
		            <div>
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="income_under_50k">Was the 2012 income of your parents less than $50,000?</p>
	              </div>
	            </div>
		          
							<div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="Answer yes if you have any dependents, other than a spouse, that receive more than half of their income from you. This can include siblings, parents, non-family, etc.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="dependents">Do you have any dependents other than a spouse?</p>
	              </div>
	            </div>
		          
	          </div>
	        </div>
		      <!--END WORKSHEET DETERMINATION DEPENDENT-->
	      </div>



				<div id="determine_worksheet_independent">
				<!--BEGIN WORKSHEET DETERMINATION INDEPENDENT--> 		      
<?php 
session_start();
// If married
if($_SESSION['married']){ 
?>
					<!--IF MARRIED-->
		      <div class="questions">
		        <div class="row">
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="Benefits refer to any designated means-tested Federal benefit program, such as SSI, SNAP, Free and Reduced Price School Lunch Program, TANF, or WIC.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="benefits">Did anyone in your household receive government benefits during 2011-2012, such as SSI, a reduced lunch, etc?</p>
	              </div>
	            </div>
		          
		          <div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="The following are considered equivalent to 1040A/1040EZ: the income tax return required by Puerto Rico, Guam, American Samoa, U.S. Virgin Islands, Marshall Islands, Micronesia, and Palau.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="form1040a1040ez">Were both you and your spouse eligible to file a 2012 Form 1040A or 1040EZ for their taxes?</p>
	              </div>
	            </div>
	          </div>
		        
		        <div class="row">
		          <div class="col-md-1 col-md-offset-1">
		            <hr>
	            </div>
		          <div class="col-md-1 col-md-offset-4">
		            <hr>
	            </div>
	          </div>
		        
		        <div class="row" style="margin-top: 1em">
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="Answer yes even if a Form 1040 was filed solely to claim an educational tax credit.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="not_required_taxes">Did either you or your spouse file a 2012 Form 1040 for your taxes, even though you weren't required to do so, or were you and your spouse not required to file taxes at all?</p>
	              </div>
	            </div>
		          
		          <div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="A dislocated worker is someone who has been laid off or is about to be laid off, receiving unemployment benefits from being laid off and is unlikely to return to work, is self-employed but with no work due to economic conditions or a natural disaster, or was a homemaker that is now unable to find work.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="dislocated_worker">Are either you or your spouse a dislocated worker?</p>
	              </div>
	            </div>
	          </div>
		        
		        <div class="row">
		          <div class="col-md-1 col-md-offset-1">
		            <hr>
		            </div>
		          <div class="col-md-1 col-md-offset-4">
		            <hr>
		            </div>
	          </div>                 
		        
		        <div class="row" style="margin-top:1em">
		          <div class="col-md-5 col-md-offset-1">
		            <div>
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="income_under_50k">If you filed taxes in 2012, was the adjusted gross income on you and your spouse's tax returns less than $50,000? If you didn't file taxes, was you and your spouse's income shown on your W-2s less than $50,000?</p>
	              </div>
	            </div>

							<div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="Answer yes if you have any dependents, such as children, parents, siblings, etc, other than a spouse, who receive more than half of their support from you.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id='dependents_other_than_spouse'>Do you have one or more dependents other than your spouse?</p>
	              </div>
	            </div>
	          </div>
		          
		          
	          </div>
	        </div>
					<!--END IF MARRIED-->
<?php
}else{
?>
					<!--IF NOT MARRIED-->
					<div class="questions">
		        <div class="row">
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="Benefits refer to any designated means-tested Federal benefit program, such as SSI, SNAP, Free and Reduced Price School Lunch Program, TANF, or WIC.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="benefits">Did anyone in your household receive government benefits during 2011-2012, such as SSI, a reduced lunch, etc?</p>
	              </div>
	            </div>
		          
		          <div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="The following are considered equivalent to 1040A/1040EZ: the income tax return required by Puerto Rico, Guam, American Samoa, U.S. Virgin Islands, Marshall Islands, Micronesia, and Palau.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="form1040a1040ez">Were you eligible to file a 2012 Form 1040A or 1040EZ for your taxes?</p>
	              </div>
	            </div>
	          </div>
		        
		        <div class="row">
		          <div class="col-md-1 col-md-offset-1">
		            <hr>
	            </div>
		          <div class="col-md-1 col-md-offset-4">
		            <hr>
	            </div>
	          </div>
		        
		        <div class="row" style="margin-top: 1em">
		          <div class="col-md-5 col-md-offset-1">
		            <div rel="tooltip" data-placement="left" data-original-title="Answer yes even if a Form 1040 was filed solely to claim an educational tax credit.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="not_required_taxes">Did you file a 2012 Form 1040 for your taxes, even though you weren't required to do so, or were you not required to file taxes at all?</p>
	              </div>
	            </div>
		          
		          <div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="A dislocated worker is someone who has been laid off or is about to be laid off, receiving unemployment benefits from being laid off and is unlikely to return to work, is self-employed but with no work due to economic conditions or a natural disaster, or was a homemaker that is now unable to find work.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="dislocated_worker">Are you a dislocated workers?</p>
	              </div>
	            </div>
	          </div>
		        
		        <div class="row">
		          <div class="col-md-1 col-md-offset-1">
		            <hr>
		            </div>
		          <div class="col-md-1 col-md-offset-4">
		            <hr>
		            </div>
	          </div>                 
		        
		        <div class="row" style="margin-top:1em">
		          <div class="col-md-5 col-md-offset-1">
		            <div>
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id="income_under_50k">If you filed taxes in 2012, was the adjusted gross income on your tax return less than $50,000? If you didn't file taxes, was your income shown on your W-2s less than $50,000?</p>
	              </div>
	            </div>

							<div class="col-md-5">
		            <div rel="tooltip" data-placement="right" data-original-title="Answer yes if you have any dependents, such as children, parents, siblings, etc, other than a spouse, who receive more than half of their support from you.">
		              <a class="btn btn-info" id="btn_yes" href="#" style="float:right">Yes</a>
		              <a class="btn btn-default" id="btn_no" href="#" style="float:right">No</a>
		              <p id='dependents_other_than_spouse'>Do you have one or more dependents other than your spouse?</p>
	              </div>
	            </div>
	          </div>
		          
		          
	          </div>
	        </div>
					<!--END IF NOT MARRIED-->
<?php
}
?>
		    <!--END WORKSHEET DETERMINATION INDEPENDENT MARRIED-->
	      </div>



<!-----------------------------------------
SIMPLIFIED WORKSHEET FORMULA A
------------------------------------------->

				<div id="simplified_a">
			<!--BEGIN SIMPLIFIED WORKSHEET FORMULA A-->

		      <div class="questions">
						
						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">1. Enter your parents' adjusted gross income.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #83">
                  <input name="parent_adjusted_gross_income" class="form-control" id="parent_adjusted_gross_income" placeholder="0">
                </div>
                <label class="col-sm-2 control-label">2A. Enter your father/stepfather's income from work.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #86">
                  <input name="fathers_income" class="form-control" id="fathers_income" placeholder="0">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">2B. Enter your mother/stepmother's income from work.</label>
                <div class="col-sm-4">
                  <input name="mothers_income" class="form-control" id="mothers_income" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #87">
                </div>
                <label class="col-sm-2 control-label">4. Enter your parents' total untaxed income and benefits.</label>
                <div class="col-sm-4">
                  <input name="parent_untaxed_income" class="form-control" id="parent_untaxed_income" placeholder="0" rel="tooltip" data-placement="right" data-original-title="Sum total of FAFSA/SAR #92a through 92i">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">6. Enter your parents' total additional financial information.</label>
                <div class="col-sm-4">
                  <input name="total_additional_financial_information" class="form-control" id="total_additional_financial_information" placeholder="0" rel="tooltip" data-placement="left" data-original-title="Sum total of FAFSA/SAR #91a through 91f">
                </div>
                <label class="col-sm-2 control-label">8. Enter your parents' 2012 income tax paid.</label>
                <div class="col-sm-4">
                  <input name="parent_income_tax_paid_2012" class="form-control" id="parent_income_tax_paid_2012" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #84">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                	<label class="col-sm-2 control-label">How many months are you enrolled to attend school in 2013-2014?</label>
                <div class="col-sm-4">
                  <input name="months_enrolled" class="form-control" id="months_enrolled" value="9">
                </div>
                	<label class="col-sm-2 control-label">29. Enter your adjusted gross income.</label>
                <div class="col-sm-4">
                  <input name="student_adjusted_gross_income" class="form-control" id="student_adjusted_gross_income" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #35">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">30. Enter your income from work.</label>
                <div class="col-sm-4">
                  <input name="student_income" class="form-control" id="student_income" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #38">
                </div>
                <label class="col-sm-2 control-label">32. Enter your total untaxed income and benefits.</label>
                <div class="col-sm-4">
                  <input name="student_untaxed_income_benefits" class="form-control" id="student_untaxed_income_benefits" placeholder="0" rel="tooltip" data-placement="right" data-original-title="Sum total of FAFSA/SAR #44a through 44j">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">34. Enter your total additional financial information.</label>
                <div class="col-sm-4">
                  <input name="student_additional_financial_information" class="form-control" id="student_additional_financial_information" placeholder="0" rel="tooltip" data-placement="left" data-original-title="Sum total of FAFSA/SAR #43a through 43f">
                </div>
                <label class="col-sm-2 control-label">36. If you were required to file taxes, enter your 2012 income tax paid.</label>
                <div class="col-sm-4">
                  <input name="student_income_tax_paid_2012" class="form-control" id="student_income_tax_paid_2012" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #36">
                </div>
              </div>
						</div>

						<div class="row efc_nine_months">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution.</label>
                <div class="col-sm-4">
                  <input name="efc_nine_months" class="form-control" id="efc_nine_months" placeholder="0" disabled	>
                </div>
              </div>
						</div>

		        
	        </div>

					<!--IF ATTENDING FOR OTHER THAN NINE MONTHS-->
					<div id='not_nine_months_questions' class='hidden'>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution for other than nine months.</label>
                <div class="col-sm-4">
                  <input name="expected_family_contribution_other_than_nine_months" class="form-control" id="expected_family_contribution_other_than_nine_months" placeholder="0" disabled>
                </div>
              </div>
						</div>

					<!--END ATTENDING FOR OTHER THAN NINE MONTHS-->
					</div>

					<form action="pass.php" method="post">
					<input type="text" id="pass_to_post" name="pass_to_post" style="display:none">
					<button type="submit" id="submit_test" class="btn btn-default">Submit</button>
					
				</form>
			  <!--END SIMPLIFIED WORKSHEET FORMULA A-->	
	      </div>


<!-----------------------------------------
REGULAR WORKSHEET FORMULA A
------------------------------------------->

				<div id="regular_a">
			<!--BEGIN REGULAR WORKSHEET FORMULA A-->  

		      <div class="questions">
						
						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">1. Enter your parents' adjusted gross income.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #83">
                  <input name="parent_adjusted_gross_income" class="form-control" id="parent_adjusted_gross_income" placeholder="0">
                </div>
                <label class="col-sm-2 control-label">2A. Enter your father/stepfather's income from work.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #86">
                  <input name="fathers_income" class="form-control" id="fathers_income" placeholder="0">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">2B. Enter your mother/stepmother's income from work.</label>
                <div class="col-sm-4">
                  <input name="mothers_income" class="form-control" id="mothers_income" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #87">
                </div>
                <label class="col-sm-2 control-label">4. Enter your total untaxed income and benefits.</label>
                <div class="col-sm-4">
                  <input name="parent_untaxed_income" class="form-control" id="parent_untaxed_income" placeholder="0" rel="tooltip" data-placement="right" data-original-title="Sum total of FAFSA/SAR #92a through 92i">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">6. Enter your total additional financial information.</label>
                <div class="col-sm-4">
                  <input name="parent_total_additional_financial_information" class="form-control" id="parent_total_additional_financial_information" placeholder="0" rel="tooltip" data-placement="left" data-original-title="Sum total of FAFSA/SAR #91a through 91f">
                </div>
                <label class="col-sm-2 control-label">8. Enter your 2012 income tax paid.</label>
                <div class="col-sm-4">
                  <input name="parent_income_tax_paid_2012" class="form-control" id="parent_income_tax_paid_2012" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #84">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">16. Enter your parents' cash, savings, and checking.</label>
                <div class="col-sm-4">
                  <input name="parents_cash_savings_checking" class="form-control" id="parents_cash_savings_checking" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #88">
                </div>
                <label class="col-sm-2 control-label">17. Enter your parents' net worth of investments.</label>
                <div class="col-sm-4">
                  <input name="parents_net_worth_investments" class="form-control" id="parents_net_worth_investments" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #89; Do not include the value of your home">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">18. Enter the net worth of your parents' business and/or investment farm.</label>
                <div class="col-sm-4">
                  <input name="parents_net_worth_business_farm" class="form-control" id="parents_net_worth_business_farm" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #90">
                </div>
								<label class="col-sm-2 control-label">29. Enter your adjusted gross income.</label>
                <div class="col-sm-4">
                  <input name="student_adjusted_gross_income" class="form-control" id="student_adjusted_gross_income" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #35">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">30. Enter your income from work.</label>
                <div class="col-sm-4">
                  <input name="students_income" class="form-control" id="students_income" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #38">
                </div>
                <label class="col-sm-2 control-label">32. Enter your total untaxed income and benefits.</label>
                <div class="col-sm-4">
                  <input name="students_untaxed_income_benefits" class="form-control" id="students_untaxed_income_benefits" placeholder="0" rel="tooltip" data-placement="right" data-original-title="Sum total of FAFSA/SAR #44a through 44j">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">34. Enter your total additional financial information.</label>
                <div class="col-sm-4">
                  <input name="students_additional_financial_information" class="form-control" id="students_additional_financial_information" placeholder="0" rel="tooltip" data-placement="left" data-original-title="Sum total of FAFSA/SAR #43a through 43f">
                </div>
                <label class="col-sm-2 control-label">36. If you were required to file taxes, enter your 2012 income tax paid.</label>
                <div class="col-sm-4">
                  <input name="students_income_tax_paid_2012" class="form-control" id="students_income_tax_paid_2012" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #36, if negative, enter 0">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">How many months are you enrolled to attend school in 2013-2014?</label>
                <div class="col-sm-4">
                  	<input name="months_enrolled" class="form-control" id="months_enrolled" value="9">
                </div>
                <label class="col-sm-2 control-label">45. Enter the amount of your cash, savings, and checking.</label>
                <div class="col-sm-4">
                  <input name="student_cash_savings_checking" class="form-control" id="student_cash_savings_checking" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #40">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">46. Enter the net worth of your investments.</label>
                <div class="col-sm-4">
                  <input name="student_net_worth_investments" class="form-control" id="student_net_worth_investments" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #41">
                </div>
                <label class="col-sm-2 control-label">47. Enter the net worth of your business and/or investment farm.</label>
                <div class="col-sm-4">
                  <input name="student_net_worth_business_farm" class="form-control" id="student_net_worth_business_farm" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #42">
                </div>
              </div>
						</div>

						<div class="row efc_nine_months">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution.</label>
                <div class="col-sm-4">
                  <input name="efc_nine_months" class="form-control" id="efc_nine_months" placeholder="0" disabled	>
                </div>
								<label class="col-sm-2 control-label">Lowered EFC.</label>
                <div class="col-sm-4">
                  <input name="efc_lowered" class="form-control" id="efc_lowered" placeholder="0" disabled	>
                </div>
              </div>
						</div>

		        
	        </div>

					<!--IF ATTENDING FOR OTHER THAN NINE MONTHS-->
					<div id='not_nine_months_questions' class='hidden'>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution for other than nine months.</label>
                <div class="col-sm-4">
                  <input name="expected_family_contribution_other_than_nine_months" class="form-control" id="expected_family_contribution_other_than_nine_months" placeholder="0" disabled>
                </div>
							<label class="col-sm-2 control-label">Lowered EFC.</label>
                <div class="col-sm-4">
                  <input name="efc_lowered_other_than_nine_months" class="form-control" id="efc_lowered_other_than_nine_months" placeholder="0" disabled	>
                </div>
              </div>
						</div>

					<!--END ATTENDING FOR OTHER THAN NINE MONTHS-->
					</div>

					<form action="pass.php" method="post">
					<input type="text" id="pass_to_post" name="pass_to_post" style="display:none">
					<button type="submit" id="submit_test" class="btn btn-default">Submit</button>
					
				</form>
			  <!--END REGULAR WORKSHEET FORMULA A-->	
	      </div>


<!-----------------------------------------
REGULAR WORKSHEET FORMULA B
------------------------------------------->

				<div id="regular_b">
			<!--BEGIN REGULAR WORKSHEET FORMULA B-->  

<!--IF MARRIED-->
<?php
if($_SESSION['married']){ 
?>
<div id="married">
		      <div class="questions">
						
						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">1. Enter you and your spouse's adjusted gross income.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #35. If negative, enter 0.">
                  <input name="adjusted_gross_income" class="form-control" id="adjusted_gross_income" placeholder="0">
                </div>
                <label class="col-sm-2 control-label">2A. Enter your income from work.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #38">
                  <input name="student_income" class="form-control" id="student_income" placeholder="0">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">2B. Enter your spouse's income from work.</label>
                <div class="col-sm-4">
                  <input name="spouse_income" class="form-control" id="spouse_income" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #39">
                </div>
                <label class="col-sm-2 control-label">4. Enter your total untaxed income and benefits.</label>
                <div class="col-sm-4">
                  <input name="untaxed_income_benefits" class="form-control" id="untaxed_income_benefits" placeholder="0" rel="tooltip" data-placement="right" data-original-title="Sum total of FAFSA/SAR #44a through 44j">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">6. Enter your total additional financial information.</label>
                <div class="col-sm-4">
                  <input name="total_additional_financial_information" class="form-control" id="total_additional_financial_information" placeholder="0" rel="tooltip" data-placement="left" data-original-title="Sum total of FAFSA/SAR #43a through 43f">
                </div>
                <label class="col-sm-2 control-label">8. Enter your 2012 income tax paid.</label>
                <div class="col-sm-4">
                  <input name="income_tax_paid" class="form-control" id="income_tax_paid" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #36. If negative, enter 0.">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <div class="dropdown col-md-6">
                  <a data-toggle="dropdown" href="#">Is your spouse enrolled at least 1/2 time in school?</a>
                  <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                    <a href="#" id="spouse_in_school_drop_down_yes">Yes</a><br>
                    <a href="#" id="spouse_in_school_drop_down_no">No</a>
                  </ul>
                </div>
                <div class="dropdown col-md-6">
                  <a data-toggle="dropdown" href="#">Is your spouse working?</a>
                  <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                    <a href="#" id="spouse_working_drop_down_yes">Yes</a><br>
                    <a href="#" id="spouse_working_drop_down_no">No</a>
                  </ul>
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">18. Enter your cash, savings, and checking.</label>
                <div class="col-sm-4">
                  <input name="cash_savings_checking" class="form-control" id="cash_savings_checking" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #40">
                </div>
                <label class="col-sm-2 control-label">19. Enter your net worth of investments.</label>
                <div class="col-sm-4">
                  <input name="net_worth_investments" class="form-control" id="net_worth_investments" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #41">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">20. Enter the net worth of your business and/or investment farm.</label>
                <div class="col-sm-4">
                  <input name="net_worth_business_farm" class="form-control" id="net_worth_business_farm" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #42">
                </div>
								<label class="col-sm-2 control-label">How many months are you enrolled to attend school in 2013-2014?</label>
                <div class="col-sm-4">
                  <input name="months_enrolled" class="form-control" id="months_enrolled" value="9">
                </div>
              </div>
						</div>

						<div class="row efc_nine_months">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution.</label>
                <div class="col-sm-4">
                  <input name="efc_nine_months" class="form-control" id="efc_nine_months" placeholder="0" disabled	>
                </div>
              </div>
						</div>

		        
	        </div>

					<!--IF ATTENDING FOR OTHER THAN NINE MONTHS-->
					<div id='not_nine_months_questions' class='hidden'>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution for other than nine months.</label>
                <div class="col-sm-4">
                  <input name="expected_family_contribution_other_than_nine_months" class="form-control" id="expected_family_contribution_other_than_nine_months" placeholder="0" disabled>
                </div>
              </div>
						</div>

					<!--END ATTENDING FOR OTHER THAN NINE MONTHS-->
					</div>

					<form action="pass.php" method="post">
					<input type="text" id="pass_to_post" name="pass_to_post" style="display:none">
					<button type="submit" id="submit_test" class="btn btn-default">Submit</button>
					
				</form>
</div>


<!--IF NOT MARRIED-->
<?php
}else{
?>
<div id="not_married">
		      <div class="questions">
						
						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">1. Enter your adjusted gross income.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #35. If negative, enter 0.">
                  <input name="adjusted_gross_income" class="form-control" id="adjusted_gross_income" placeholder="0">
                </div>
                <label class="col-sm-2 control-label">2A. Enter your income from work.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #38">
                  <input name="student_income" class="form-control" id="student_income" placeholder="0">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">4. Enter your total untaxed income and benefits.</label>
                <div class="col-sm-4">
                  <input name="untaxed_income_benefits" class="form-control" id="untaxed_income_benefits" placeholder="0" rel="tooltip" data-placement="right" data-original-title="Sum total of FAFSA/SAR #44a through 44j">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">6. Enter your total additional financial information.</label>
                <div class="col-sm-4">
                  <input name="total_additional_financial_information" class="form-control" id="total_additional_financial_information" placeholder="0" rel="tooltip" data-placement="left" data-original-title="Sum total of FAFSA/SAR #43a through 43f">
                </div>
                <label class="col-sm-2 control-label">8. Enter your 2012 income tax paid.</label>
                <div class="col-sm-4">
                  <input name="income_tax_paid" class="form-control" id="income_tax_paid" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #36. If negative, enter 0.">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">18. Enter your cash, savings, and checking.</label>
                <div class="col-sm-4">
                  <input name="cash_savings_checking" class="form-control" id="cash_savings_checking" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #40">
                </div>
                <label class="col-sm-2 control-label">19. Enter your net worth of investments.</label>
                <div class="col-sm-4">
                  <input name="net_worth_investments" class="form-control" id="net_worth_investments" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #41">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">20. Enter the net worth of your business and/or investment farm.</label>
                <div class="col-sm-4">
                  <input name="net_worth_business_farm" class="form-control" id="net_worth_business_farm" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #42">
                </div>
								<label class="col-sm-2 control-label">How many months are you enrolled to attend school in 2013-2014?</label>
                <div class="col-sm-4">
                  <input name="months_enrolled" class="form-control" id="months_enrolled" value="9">
                </div>
              </div>
						</div>

						<div class="row efc_nine_months">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution.</label>
                <div class="col-sm-4">
                  <input name="efc_nine_months" class="form-control" id="efc_nine_months" placeholder="0" disabled	>
                </div>
              </div>
						</div>

		        
	        </div>

					<!--IF ATTENDING FOR OTHER THAN NINE MONTHS-->
					<div id='not_nine_months_questions' class='hidden'>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution for other than nine months.</label>
                <div class="col-sm-4">
                  <input name="expected_family_contribution_other_than_nine_months" class="form-control" id="expected_family_contribution_other_than_nine_months" placeholder="0" disabled>
                </div>
              </div>
						</div>

					<!--END ATTENDING FOR OTHER THAN NINE MONTHS-->
					</div>

					<form action="pass.php" method="post">
					<input type="text" id="pass_to_post" name="pass_to_post" style="display:none">
					<button type="submit" id="submit_test" class="btn btn-default">Submit</button>
					
				</form>
</div>
<!--END IF NOT MARRIED-->
<?php
}
?>
			  <!--END REGULAR WORKSHEET FORMULA B-->	
	      </div>

<!-----------------------------------------
SIMPLIFIED WORKSHEET FORMULA B
------------------------------------------->

				<div id="simplified_b">

<!--IF MARRIED-->
<?php
if($_SESSION['married']){ 
?>
<div id="married">
		      <div class="questions">
						
						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">1. Enter you and your spouse's adjusted gross income.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #35. If negative, enter 0.">
                  <input name="adjusted_gross_income" class="form-control" id="adjusted_gross_income" placeholder="0">
                </div>
                <label class="col-sm-2 control-label">2A. Enter your income from work.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #38">
                  <input name="student_income" class="form-control" id="student_income" placeholder="0">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">2B. Enter your spouse's income from work.</label>
                <div class="col-sm-4">
                  <input name="spouse_income" class="form-control" id="spouse_income" placeholder="0" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #39">
                </div>
                <label class="col-sm-2 control-label">4. Enter your total untaxed income and benefits.</label>
                <div class="col-sm-4">
                  <input name="untaxed_income_benefits" class="form-control" id="untaxed_income_benefits" placeholder="0" rel="tooltip" data-placement="right" data-original-title="Sum total of FAFSA/SAR #44a through 44j">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">6. Enter your total additional financial information.</label>
                <div class="col-sm-4">
                  <input name="total_additional_financial_information" class="form-control" id="total_additional_financial_information" placeholder="0" rel="tooltip" data-placement="left" data-original-title="Sum total of FAFSA/SAR #43a through 43f">
                </div>
                <label class="col-sm-2 control-label">8. Enter your 2012 income tax paid.</label>
                <div class="col-sm-4">
                  <input name="income_tax_paid" class="form-control" id="income_tax_paid" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #36. If negative, enter 0.">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <div class="dropdown col-md-6">
                  <a data-toggle="dropdown" href="#">Is your spouse enrolled at least 1/2 time in school?</a>
                  <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                    <a href="#" id="spouse_in_school_drop_down_yes">Yes</a><br>
                    <a href="#" id="spouse_in_school_drop_down_no">No</a>
                  </ul>
                </div>
                <div class="dropdown col-md-6">
                  <a data-toggle="dropdown" href="#">Is your spouse working?</a>
                  <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                    <a href="#" id="spouse_working_drop_down_yes">Yes</a><br>
                    <a href="#" id="spouse_working_drop_down_no">No</a>
                  </ul>
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
								<label class="col-sm-2 control-label">How many months are you enrolled to attend school in 2013-2014?</label>
                <div class="col-sm-4">
                  <input name="months_enrolled" class="form-control" id="months_enrolled" value="9">
                </div>
              </div>
						</div>

						<div class="row efc_nine_months">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution.</label>
                <div class="col-sm-4">
                  <input name="efc_nine_months" class="form-control" id="efc_nine_months" placeholder="0" disabled	>
                </div>
              </div>
						</div>

		        
	        </div>

					<!--IF ATTENDING FOR OTHER THAN NINE MONTHS-->
					<div id='not_nine_months_questions' class='hidden'>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution for other than nine months.</label>
                <div class="col-sm-4">
                  <input name="expected_family_contribution_other_than_nine_months" class="form-control" id="expected_family_contribution_other_than_nine_months" placeholder="0" disabled>
                </div>
              </div>
						</div>

					<!--END ATTENDING FOR OTHER THAN NINE MONTHS-->
					</div>

					<form action="pass.php" method="post">
					<input type="text" id="pass_to_post" name="pass_to_post" style="display:none">
					<button type="submit" id="submit_test" class="btn btn-default">Submit</button>
					
				</form>
</div>


<!--IF NOT MARRIED-->
<?php
}else{
?>
<div id="not_married">
		      <div class="questions">
						
						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">1. Enter your adjusted gross income.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="left" data-original-title="FAFSA/SAR #35. If negative, enter 0.">
                  <input name="adjusted_gross_income" class="form-control" id="adjusted_gross_income" placeholder="0">
                </div>
                <label class="col-sm-2 control-label">2A. Enter your income from work.</label>
                <div class="col-sm-4" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #38">
                  <input name="student_income" class="form-control" id="student_income" placeholder="0">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">4. Enter your total untaxed income and benefits.</label>
                <div class="col-sm-4">
                  <input name="untaxed_income_benefits" class="form-control" id="untaxed_income_benefits" placeholder="0" rel="tooltip" data-placement="right" data-original-title="Sum total of FAFSA/SAR #44a through 44j">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">6. Enter your total additional financial information.</label>
                <div class="col-sm-4">
                  <input name="total_additional_financial_information" class="form-control" id="total_additional_financial_information" placeholder="0" rel="tooltip" data-placement="left" data-original-title="Sum total of FAFSA/SAR #43a through 43f">
                </div>
                <label class="col-sm-2 control-label">8. Enter your 2012 income tax paid.</label>
                <div class="col-sm-4">
                  <input name="income_tax_paid" class="form-control" id="income_tax_paid" placeholder="0" rel="tooltip" data-placement="right" data-original-title="FAFSA/SAR #36. If negative, enter 0.">
                </div>
              </div>
						</div>

						<div class="row">
              <div class="form-group">
								<label class="col-sm-2 control-label">How many months are you enrolled to attend school in 2013-2014?</label>
                <div class="col-sm-4">
                  <input name="months_enrolled" class="form-control" id="months_enrolled" value="9">
                </div>
              </div>
						</div>

						<div class="row efc_nine_months">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution.</label>
                <div class="col-sm-4">
                  <input name="efc_nine_months" class="form-control" id="efc_nine_months" placeholder="0" disabled	>
                </div>
              </div>
						</div>

		        
	        </div>

					<!--IF ATTENDING FOR OTHER THAN NINE MONTHS-->
					<div id='not_nine_months_questions' class='hidden'>

						<div class="row">
              <div class="form-group">
                <label class="col-sm-2 control-label">Your expected family contribution for other than nine months.</label>
                <div class="col-sm-4">
                  <input name="expected_family_contribution_other_than_nine_months" class="form-control" id="expected_family_contribution_other_than_nine_months" placeholder="0" disabled>
                </div>
              </div>
						</div>

					<!--END ATTENDING FOR OTHER THAN NINE MONTHS-->
					</div>

					<form action="pass.php" method="post">
					<input type="text" id="pass_to_post" name="pass_to_post" style="display:none">
					<button type="submit" id="submit_test" class="btn btn-default">Submit</button>
					
				</form>
</div>
<!--END IF NOT MARRIED-->
<?php
}
?>
			  <!--END SIMPLIFIED WORKSHEET FORMULA B-->	
	      </div>
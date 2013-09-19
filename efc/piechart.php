<?php
session_start();
?>
<html>
  <head>
  </head>
  <body>
   <?php
   //var_dump($_SESSION);
   
   // Line 15 - Can't be lowered
   if(isset($_SESSION['parent_available_income'])){
	  $total_income = $_SESSION['parent_available_income'];
	  if($total_income < 0){
		 $total_income = 0;
	  }
   }else{
	  $total_income = 0;
   }
   
   // Line 24 - Can be lowered
   if(isset($_SESSION['parent_contribution_from_assets'])){
	  $parents_total_assets = $_SESSION['parent_contribution_from_assets'];
	  if($parents_total_assets < 0){
		 $parents_total_assets = 0;
	  }
   }else{
	  $parents_total_assets = 0;
   }

   // Line 44 - Can't be lowered
   if(isset($_SESSION['student_contribution_from_ai'])){
	  $students_total_income = $_SESSION['student_contribution_from_ai'];
	  if($students_total_income < 0){
		 $students_total_income = 0;
	  }
   }else{
	  $students_total_income = 0;
   }
   
   // Line 50 - Can be lowered
   if(isset($_SESSION['student_contribution_from_assets'])){
	  $students_total_assets = $_SESSION['student_contribution_from_assets'];
	  if($students_total_assets < 0){
		 $students_total_assets = 0;
	  }
   }else{
	  $students_total_assets = 0;
   }
   //echo "<br>" . $total_income . "<br>";
   //echo $parents_total_assets . "<br>";
   //echo $students_total_assets . "<br>";
   //echo $students_total_income . "<br>";
   if($total_income !== 0 ||
	  $parents_total_assets !== 0 ||
	  $students_total_income !== 0 ||
	  $students_total_assets !== 0){
		 ?>
		 <div id="piechart_3d" style="width: 900px; height: 500px;"></div>
		 <script type="text/javascript" src="https://www.google.com/jsapi"></script>
		 <script type="text/javascript">
		   google.load("visualization", "1", {packages:["corechart"]});
		   google.setOnLoadCallback(drawChart);
		   function drawChart() {
			 var data = google.visualization.arrayToDataTable([
			   ['EFC_value', 'Amount'],
			   ['Parents\' Income',      <?php echo $total_income;?>],
			   ['Parents\' Assets',  <?php echo $parents_total_assets;?>],
			   ['Students\' Income', <?php echo $students_total_income;?>],
			   ['Students\' Assets',    <?php echo $students_total_assets;?>]
			 ]);
	 
			 var options = {
			   title: 'Financial Picture',
			   is3D: true,
			 };
	 
			 var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
			 chart.draw(data, options);
		   }
		 </script>
	  <?php
	  }
	  ?>
  </body>
</html>
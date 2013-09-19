<html>
  <head>
  </head>
  <body>
   <?php
   $decode = json_decode($_POST['pass_to_post'], true);
   foreach($decode as $k=>$v){
	  echo "$k: $v<br>";
   }
   ?>
	  And here's some other stuff
    <div id="piechart_3d" style="width: 900px; height: 500px;"></div>
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['X Value', 'Y Value'],
          ['EFC other than nine months',     <?php echo $decode['efc_other_than_nine_months'];?>],
          ['Parents\' Income', <?php echo $decode['parents_total_income'];?>],
          ['Parents\' Assets',  2],
          ['Student\'s Income', 2],
          ['Stuent\'s Assets',    7]
        ]);

        var options = {
          title: 'Expected Family Contribution',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
    </script>
  </body>
</html>
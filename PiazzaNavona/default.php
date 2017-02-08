<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<html>
<head>

<meta name="description" content="">	
<meta name="keywords" content="">
<meta name="revisit" content="10 days">
<meta name="robot" content="index all">

<title>Piazza Novona Gallery</title>

<style>
body, p, td, a { font-family:arial; font-size:10pt; color:#ffffff }
A:hover { text-decoration:none;	color:red; }
A:active { color:silver; } /* when link is clicked */
</style>

<link type="text/css" rel="stylesheet" href="floatbox/floatbox.css" />
<script type="text/javascript" src="floatbox/floatbox.js"></script>

<link rel="stylesheet" type="text/css" href="gallerystyle.css" />
      
<!-- Do not edit IE conditional style below -->
<!--[if gte IE 5.5]>
<style type="text/css">
#motioncontainer {
width:expression(Math.min(this.offsetWidth, maxwidth)+'px');
}
</style>
<![endif]-->
<!-- End Conditional Style -->

<script type="text/javascript" src="motiongallery.js">

/***********************************************
* CMotion Image Gallery- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* Visit http://www.dynamicDrive.com for hundreds of DHTML scripts
* This notice must stay intact for legal use
* Modified by Jscheuer1 for autowidth and optional starting positions
***********************************************/

</script>

</head>

<body bgcolor="#343434" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0" { color: #ffffff }>
<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
<tr>

<td height="10%" bgcolor="#008d49" align="right" width="50%">
<img border="0" src="piazzaheaderl.jpg">
</td>
<td height="10%" bgcolor="#d3252d" align="left" width="50%">
<img border="0" src="piazzaheaderr.jpg">
</td>

</tr>
<tr>
<td height="75%" bgcolor="#000000" valign="middle" align="center" colspan="2">

<div id="motioncontainer" style="position:relative;overflow:hidden;">
<div id="motiongallery" style="position:absolute;left:0;top:0;white-space: nowrap;">

<nobr id="trueContainer">

<?php

$path = "webimages";

    $dir_handle = @opendir($path) or die("Unable to open $path");

    

    while ($file = readdir($dir_handle)) {

        if (substr($file, -3) == 'jpg') {

        echo "<a href=webimages/$file rel=floatboxGroup><img src=webimages/thumbs/$file border=0></a>&nbsp;";
	      

    }}

    closedir($dir_handle);


?>

</nobr>
</div>
</div>

</td>
</tr>
<tr>
<td height="15%" bgcolor="#000000" align="left" valign="middle">
&nbsp;&nbsp;<a href="mailto: info@piazzanavonagallery.com">info@piazzanavonagallery.com</a>&nbsp;&nbsp; | &nbsp;&nbsp;719.685.1077&nbsp;&nbsp; | &nbsp;&nbsp;<a href="https://maps.google.com/maps?q=12+ruxton+ave,+manitou+springs,+co&oe=utf-8&client=firefox-a&channel=sb&ie=UTF-8&ei=I441U7H9B8SRqQGJy4CQAQ&ved=0CAgQ_AUoAQ" target="_blank">Map</a>
</td>

<td height="15%" bgcolor="#000000" align="right" valign="middle">
<span style="font-size:10pt;">&copy; <?php print(Date("Y")); ?> Piazza Navona Gallery</span>&nbsp;&nbsp; | &nbsp;&nbsp;Web services by <a href="mailto:diamondsoftware222@gmail.com">Diamond Software</a>&nbsp;&nbsp;<a href="login.php"><img border="0" src="smiley.png"></a>
</td>
</tr>
</table>
</body>
</html>

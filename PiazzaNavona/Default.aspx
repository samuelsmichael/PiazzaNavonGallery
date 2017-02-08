﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="PiazzaNavona.Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="revisit" content="10 days">
    <meta name="robot" content="index all">
    <title>Piazza Novona Gallery</title>
    <style>
        body, p, td, a
        {
            font-family: arial;
            font-size: 10pt;
            color: #ffffff;
        }
        A:hover
        {
            text-decoration: none;
            color: red;
        }
        A:active
        {
            color: silver;
        }
        /* when link is clicked */
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
<body id="main" bgcolor="#343434" style="height: 100%; width: 100%; margin: 0; color: #ffffff;">
    <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td height="10%" bgcolor="#1b924e" align="right" width="50%">
                <img border="0" src="piazzaheaderl.jpg">
            </td>
            <td height="10%" bgcolor="#d3252d" align="left" width="50%">
                <img border="0" src="piazzaheaderr.jpg">
            </td>
        </tr>
        <tr>
            <td height="75%" bgcolor="#000000" valign="middle" align="center" colspan="2">
                <div id="motioncontainer" style="position: relative; overflow: hidden;">
                    <div id="motiongallery" style="position: absolute; left: 0; top: 0; white-space: nowrap;">
                        <nobr id="trueContainer">
<asp:Panel ID="Panel1" runat="server">
<!--<a href=webimages/5969.jpg rel=floatboxGroup><img src=webimages/thumbs/5969.jpg border=0></a>&nbsp;<a href=webimages/5974.jpg rel=floatboxGroup><img src=webimages/thumbs/5974.jpg border=0></a>&nbsp;<a href=webimages/5975.jpg rel=floatboxGroup><img src=webimages/thumbs/5975.jpg border=0></a>&nbsp;<a href=webimages/5977.jpg rel=floatboxGroup><img src=webimages/thumbs/5977.jpg border=0></a>&nbsp;<a href=webimages/5978.jpg rel=floatboxGroup><img src=webimages/thumbs/5978.jpg border=0></a>&nbsp;-->
</asp:Panel>
</nobr>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td height="15%" bgcolor="#000000" align="left" valign="middle">
                &nbsp;&nbsp;<a href="mailto: info@piazzanavonagallery.com">info@piazzanavonagallery.com</a>&nbsp;&nbsp;
                | &nbsp;&nbsp;719.685.1077&nbsp;&nbsp; | &nbsp;&nbsp;<a href="https://maps.google.com/maps?q=12+ruxton+ave,+manitou+springs,+co&oe=utf-8&client=firefox-a&channel=sb&ie=UTF-8&ei=I441U7H9B8SRqQGJy4CQAQ&ved=0CAgQ_AUoAQ"
                    target="_blank">Map</a>
            </td>
            <td height="15%" bgcolor="#000000" align="right" valign="middle">
                <span style="font-size: 10pt;">&copy; 2016 Piazza Navona Gallery</span>&nbsp;&nbsp;
                | &nbsp;&nbsp;Web services by <a href="mailto: diamondsoftware222@gmail.com" target="_blank">
                    Diamond Software</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="login.php"><img border="0" src="smiley.png"></a>
            </td>
        </tr>
    </table>
</body>
<script language="javascript">
    function autoResizeDiv() {
        document.getElementById('main').style.height = window.innerHeight + 'px';
    }
    window.onresize = autoResizeDiv;
    autoResizeDiv();
</script>
</html>

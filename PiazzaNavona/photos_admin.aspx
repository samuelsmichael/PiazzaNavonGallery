﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="photos_admin.aspx.cs" Inherits="PiazzaNavona.photos_admin" %>

<%@ Register src="PhotoManager.ascx" tagname="PhotoManager" tagprefix="uc1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div>
        <uc1:PhotoManager ID="PhotoManager2" ImageDirectory="webimages" runat="server" />
    </div>
    </form>
</body>
</html>

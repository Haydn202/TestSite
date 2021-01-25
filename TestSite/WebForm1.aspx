<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="TestSite.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Name</div>
        <asp:TextBox ID="nametextbx" runat="server"></asp:TextBox>
        <br />
        Role<br />
        <asp:TextBox ID="roletextbx" runat="server"></asp:TextBox>
        <br />
        <asp:Button ID="subbtn" runat="server" OnClick="subbtn_Click" Text="Submit" />
        <br />
        <asp:Label ID="notelable" runat="server" Text="Label"></asp:Label>
        <br />
        <br />
        <asp:Button ID="Showallbtn" runat="server" OnClick="Showallbtn_Click" Text="Show all" />
        <br />
        <asp:ListBox ID="ListBox1" runat="server" Width="233px"></asp:ListBox>
    </form>
</body>
</html>

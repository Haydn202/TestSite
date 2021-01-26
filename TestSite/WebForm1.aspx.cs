using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

namespace TestSite
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack==true)
            {
                notelable.Text = "data inserted.";
            }
        }

        protected void subbtn_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection("Server=tcp:swenserver.database.windows.net,1433;Initial Catalog=Swendb;Persist Security Info=False;User ID=haydn;Password=SwenPass314;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            
            {
                SqlCommand insert = new SqlCommand("EXEC dbo.InsertMember @Name, @Role", con);
                insert.Parameters.AddWithValue("@Name", nametextbx.Text);
                insert.Parameters.AddWithValue("@Role", roletextbx.Text);

                con.Open();
                insert.ExecuteNonQuery();
                con.Close();

                if (IsPostBack)
                {
                    nametextbx.Text = "";
                    roletextbx.Text = "";
                }
            }
        }

        protected void Showallbtn_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection("Server=tcp:swenserver.database.windows.net,1433;Initial Catalog=Swendb;Persist Security Info=False;User ID=haydn;Password=SwenPass314;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            ListBox1.Items.Clear();
            {
                con.Open();

                SqlCommand command = new SqlCommand("SELECT * FROM Members", con);
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    ListBox1.Items.Add(reader.GetString(0).Trim() + ": " + reader.GetString(1));
                }       
            }
        }

        protected void search_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection("Server=tcp:swenserver.database.windows.net,1433;Initial Catalog=Swendb;Persist Security Info=False;User ID=haydn;Password=SwenPass314;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            ListBox1.Items.Clear();
            {
                con.Open();

                SqlCommand search = new SqlCommand("SELECT * FROM Members WHERE Name = @SearchName", con);
                search.Parameters.AddWithValue("@SearchName", Searchname.Text);
                SqlDataReader reader = search.ExecuteReader();
                while (reader.Read())
                {
                    ListBox1.Items.Add(reader.GetString(0).Trim() + ": " + reader.GetString(1));
                }
            }
        }
    }
}
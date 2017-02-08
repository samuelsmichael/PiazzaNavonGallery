using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.IO;

namespace PiazzaNavona {
    public partial class Default : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            if (!IsPostBack) {
                string dir=Request.MapPath("~/webimages");
                var files = Directory.GetFiles(dir, "*.*");
                foreach (string filespec in files) {
                    if (filespec.EndsWith(".png") || filespec.EndsWith(".jpg") || filespec.EndsWith(".gif")) {
                        HtmlAnchor anchor1 = new HtmlAnchor();
                        anchor1.HRef = "webimages/" + Path.GetFileName(filespec);
                        anchor1.Attributes.Add("rel", "floatboxGroup");
                        anchor1.Style.Add("margin-right", "1em");
                        HtmlImage img1 = new HtmlImage();
                        img1.Src = "webimages/thumbs/" + Path.GetFileName(filespec);
                        img1.Border = 0;
                        anchor1.Controls.Add(img1);
                        Panel1.Controls.Add(anchor1);
                    }
                }
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using Common;
using System.Drawing;

namespace PiazzaNavona {
    public partial class PhotoManager : System.Web.UI.UserControl {
        private string fileUri {
            get {
                return  Utils.ObjectToString(Session[ImageDirectory+"fileUri"]);
            }
            set {
                Session[ImageDirectory+"fileUri"] = value;
            }
        }
        public string ImageDirectory {get;set;}
        private string localDirectory {
            get {
                return Utils.ObjectToString(Session[ImageDirectory]);
            }
            set {
                Session[ImageDirectory] = value;
            }
        }

        protected void cbDeleteClicked(Object sender, EventArgs e) {
            string filespec=localDirectory+"\\"+Path.GetFileName(((CheckBox)sender).CssClass.Replace("~", ""));
            File.Delete(filespec);
            filespec = localDirectory + "\\thumbs\\" + Path.GetFileName(((CheckBox)sender).CssClass.Replace("~", ""));
            File.Delete(filespec);
            int x = 3;
        }

        protected void Page_PreRender(object sender, EventArgs e) {
            lblPhotoManagerDirectory.Text = ImageDirectory;
            RepeaterImages.DataSource = new List<string>();
            RepeaterImages.DataBind();
            string scriptText = "javascript:" + StatusLabel.ClientID + ".innerHTML='';if (this.value != '') {" + btnSave.ClientID + ".click();}";
            FileUploadControl.Attributes["onchange"] = scriptText;
            string scriptText2 = FileUploadControl.ClientID + ".click();";
            //            btnChooseAFile.Attributes["onclick"] = scriptText2;
            fileUri = ImageDirectory;
            localDirectory = Server.MapPath(fileUri);
            if (Directory.Exists(localDirectory)) {

                var files = Directory.GetFiles(localDirectory, "*.*");
                List<String> images = new List<string>(files.Count());
                foreach (string item in files) {
                    if (item.EndsWith(".png") || item.EndsWith(".jpg") || item.EndsWith(".gif")) {
                        images.Add(String.Format(fileUri + "/{0}", System.IO.Path.GetFileName(item)));
                    }
                }
                RepeaterImages.DataSource = images;
                RepeaterImages.DataBind();
            }
        }
        protected void Page_Load(object sender, EventArgs e) {
            Page.Form.Attributes.Add("enctype", "multipart/form-data"); 
        }

        protected void UploadButton_Click(object sender, EventArgs e) {
            if (FileUploadControl.HasFile) {
                if (!Directory.Exists(localDirectory)) {
                    Directory.CreateDirectory(localDirectory);
                }
                try {
                    if (FileUploadControl.PostedFile.ContentType == "image/jpeg" || FileUploadControl.PostedFile.ContentType == "image/gif" || FileUploadControl.PostedFile.ContentType == "image/png") {
                        string filename = Path.GetFileName(FileUploadControl.FileName);
                        FileUploadControl.SaveAs(localDirectory + @"\"+ filename);
                        System.Drawing.Image image = FromFile(localDirectory + @"\" + filename);
                        int width = image.Width;
                        int height = image.Height;
                        double ratio = ((double)(double)height / (double)width);
                        double newHeight = 500;
                        double newWidth = newHeight / ratio;
                        System.Drawing.Image yourImage = resizeImage(image, new Size((int)newWidth, (int)newHeight));
                        yourImage.Save(localDirectory + "\\thumbs" + @"\" + filename);
                        yourImage.Dispose();
                        image.Dispose();
                        
                        StatusLabel.Text = "Upload status: File uploaded!";
                    } else
                        StatusLabel.Text = "Upload status: Only JPG, PNG, and GIF files are accepted!";
                } catch (Exception ex) {
                    StatusLabel.Text = "Upload status: The file could not be uploaded. The following error occured: " + ex.Message;
                }
            }
        }

        private System.Drawing.Image FromFile(string path) {
            var bytes = File.ReadAllBytes(path);
            var ms = new MemoryStream(bytes);
            var img = System.Drawing.Image.FromStream(ms);
            return img;
        }

        void database_UnlockCheckboxChecked(bool isUnlocked) {
            if (isUnlocked) {
                pnlControl.Visible = true;
            } else {
                pnlControl.Visible = false;
            }
        }
/*
        /// <summary>
        /// Resize the image to the specified width and height.
        /// </summary>
        /// <param name="image">The image to resize.</param>
        /// <param name="width">The width to resize to.</param>
        /// <param name="height">The height to resize to.</param>
        /// <returns>The resized image.</returns>
        public static Bitmap ResizeImage(System.Drawing.Image image, int width, int height) {
            var destRect = new Rectangle(0, 0, width, height);
            var destImage = new Bitmap(width, height);

            destImage.SetResolution(image.HorizontalResolution, image.VerticalResolution);

            using (var graphics = Graphics.FromImage(destImage)) {
                graphics.CompositingMode = CompositingMode.SourceCopy;
                graphics.CompositingQuality = CompositingQuality.HighQuality;
                graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
                graphics.SmoothingMode = SmoothingMode.HighQuality;
                graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;

                using (var wrapMode = new ImageAttributes()) {
                    wrapMode.SetWrapMode(WrapMode.TileFlipXY);
                    graphics.DrawImage(image, destRect, 0, 0, image.Width, image.Height, GraphicsUnit.Pixel, wrapMode);
                }
            }

            return destImage;
        }
 */
        public static System.Drawing.Image resizeImage(System.Drawing.Image imgToResize, Size size)
        {
            return (System.Drawing.Image)(new Bitmap(imgToResize, size));
        }

    }
}
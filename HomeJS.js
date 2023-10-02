<script language="javascript">
function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "/MainImage.jfif") 
    {
        document.getElementById("imgClickAndChange").src = "/MainImage.jfif";

    }
    else if (document.getElementById("imgClickAndChange").src == "/MainImage.jfif")
    {
        document.getElementById("imgClickAndChange").src = "assets/img3.png";

    }
    else if(document.getElementById("imgClickAndChange").src == "assets/img3.png"){
    document.getElementById("imgClickAndChange").src = "assets/img1.png"

    }
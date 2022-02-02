document.cookie= "projectClicked = False";
function projectClick(){
    console.log("ede9idihdehduehieiehide")
    if (document.cookie == "projectClicked = False"){
        document.getElementById("project-view").innerHTML = "lol";
        document.cookie= "projectClicked = True";
    }
    else if(document.cookie == "projectClicked = True"){
        document.getElementById("project-view").innerHTML = "lolity";
        document.cookie= "projectClicked=True";
    }

}




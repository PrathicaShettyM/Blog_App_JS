      function Publish(){
    // to  display content on the blog page
    var Title = document.getElementById("title").value;
    var h1 = document.getElementById("h1");
    h1.textContent = Title

    var Author = document.getElementById("author").value;
    var h2 = document.getElementById("auth-name");
    h2.textContent = "- by " + Author;

    var blogContent = document.getElementById("blog").value;
    var p = document.getElementById("p");
    p.textContent = blogContent;
    
    var ImgURL = document.getElementById("image").value;
    var img = document.createElement("img")
    img.src = ImgURL;
    document.getElementById("img").appendChild(img) 
 
    }
    var button = document.getElementById("btn");
    button.addEventListener("click", Publish)
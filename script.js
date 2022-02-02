let btn = document.getElementById("btn");
document.getElementById("error").innerText = "";
btn.addEventListener("click", function () {
    let imageBox=["img/customer-0.jpg","img/customer-1.jpg","img/customer-2.jpg","img/customer-3.jpg","img/customer-4.jpg"];
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let author = document.getElementById("author").value;

    if (name == "" || course == "" || author == "") {
        document.getElementById("error").innerText = "Enter the valid values";
    }
    else {
        document.getElementById("error").innerText = "";

        let box=document.getElementById("box");
        box.style.display="flex";
        box.style.flexWrap="wrap";
        

        let s=document.createElement("div");
        s.className="newSlide";
        s.style.width="250px";
        s.style.height="300px";
        s.style.border="1px solid black";
        s.style.margin="10px";
        box.appendChild(s);

        let i=document.createElement("img");
        i.className="newImage";
        i.src=`${imageBox[Math.floor(Math.random()*5)]}`;
        i.style.width="100%";
        i.style.height="60%";
        s.appendChild(i);

        let n=document.createElement("div");
        n.className="newName";
        n.innerText=`Name:${name}`;
        s.appendChild(n);

        let c=document.createElement("div");
        c.className="newCourse";
        c.innerText=`Course:${course}`;
        s.appendChild(c);

        let a=document.createElement("span");
        a.className="newAuthor";
        a.innerText=`Author:${author}`;
        s.appendChild(a);

        console.log(box);

    }

    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("author").value = "";
})
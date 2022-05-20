if(screen.availWidth<screen.availHeight){
    document.getElementsByClassName("navbar-brand").style.fontWeight=500;
}

function cl(){
    console.log("clicked");
}

    console.log("hi");
    var mydata = [
        {"name":"Java","logo":"fa-brands fa-java"},
        {"name":"Python","logo":"fa-brands fa-python"},
        {"name":"HTML","logo":"fa-brands fa-html5"},
        {"name":"Vanilla CSS","logo":"fa-brands fa-css3-alt"},
        {"name":"Vanilla JS","logo":"fa-brands fa-js"},
        {"name":"Bootstrap","logo":"fa-brands fa-bootstrap"}
    ]
    console.log(mydata);
    var main_div = document.getElementById("things");
    console.log(main_div);
    var items = mydata;
    for(var i = 0; i < items.length; i++) {
        const item = document.createElement("div");
        item.className="sitem";
        item.innerHTML=mydata[i].name;
        main_div.appendChild(item)
    }

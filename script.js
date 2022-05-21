if(screen.availWidth<screen.availHeight){
    document.getElementsByClassName("navbar-brand").style.fontWeight=500;
}

function cl(){
    console.log("clicked");
}

    console.log("hi");
    
    console.log(mydata);
    var main_div = document.getElementById("things");
    console.log(main_div);
    var items = mydata;
    for(var i = 0; i < items.length; i++) {
        const item = document.createElement("div");
        item.className="sitem";
        const nam_item = document.createElement("p");
        nam_item.className="stack";
        nam_item.innerHTML=mydata[i].name;
        const img_item = document.createElement("i");
        img_item.id="stack_logo";
        img_item.className=mydata[i].logo+" fa-3x";
        console.log(img_item);
        item.appendChild(nam_item);
        item.appendChild(img_item);
        main_div.appendChild(item);
    }

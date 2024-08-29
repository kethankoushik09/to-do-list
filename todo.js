var DoList={};
var list_count =0;
var curr_moood = "all"
const add_icon = document.getElementById("add-icon");
const input = document.getElementById("input");
const un_list = document.querySelector(".un-list");
const tra = document.querySelector(".tra");
const com = document.getElementById("com");
const incom = document.getElementById("incom");
const del = document.getElementById("del");
//-----------------------------------declaration part
add_icon.addEventListener("click",function(e){
    var val = input.value;
    if(val){
        DoList[list_count]={
            name:`${val}`,
            status:"incom"
        }
        add_li(list_count);
        list_count+=1;
    }
    else{
        alert("Enter Event To Add..!")
    }
    input.value="";
})

function display(type_li){
    if(type_li){
        for(let i in DoList){
            if(DoList[i].status == type_li){
                add_li(i);
            }
        }
    }
    else{
        for(let i in DoList){
            add_li(i);
        }
    }
}

function add_li(no){
    const li = document.createElement("li");
    const obj = DoList[no];
    if(obj.status == "com"){
        li.setAttribute("class","checked");
    }
    const icon = document.createElement("i");
    icon.setAttribute("class","fa-solid fa-xmark");
    icon.classList.add("tra");
    icon.setAttribute("id",no);
    li.innerHTML = obj.name;
    icon.addEventListener("click",function(e){
        e.stopPropagation();
        delete DoList[e.target.id];
        un_list.innerHTML="";
        if(curr_moood === "all"){
            display("");
        }
        else{
            display(curr_moood);
        }
        
    })
    li.appendChild(icon);
    li.setAttribute("id",no);
    li.addEventListener("click",function(e){
        e.stopPropagation();
        console.log("hiiii");
        
        const id_no = e.target.id;
        if(DoList[id_no].status == "incom"){
            li.classList.add("checked");
            DoList[id_no].status = "com";
        }
        else{
            li.classList.remove("checked");
            DoList[id_no].status = "incom";
        }

    })
    un_list.appendChild(li);
}
com.addEventListener("dblclick",function(e){
    un_list.innerHTML = "";
    display("com");
    curr_moood = "com";
    input.disabled = true;
})
com.addEventListener("click",function(e){
    un_list.innerHTML = "";
    display("");
    curr_moood = "all";
    input.disabled = false;
})
incom.addEventListener("dblclick",function(e){
    un_list.innerHTML = "";
    display("incom");
    curr_moood = "incom"
    input.disabled = true;
})
incom.addEventListener("click",function(e){
    un_list.innerHTML = "";
    display("");
    curr_moood = "all";
    input.disabled = false;
})
del.addEventListener("click",function(e){
    DoList = {};
    list_count=0;
    un_list.innerHTML="";
    display("");
})
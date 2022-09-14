var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","country");
    input.style.marginLeft="700px";
    console.log(input)
    document.body.append(input);


var button=document.createElement("button");
    button.setAttribute("type","button");
    button.classList.add("btn","btn-primary");
    button.innerHTML="search";
    button.addEventListener("click",foo)
    console.log(button);
    document.body.append(button)

var active=document.createElement("div");
    active.setAttribute("id","active");
    active.style.marginLeft="700px";


    
    document.body.append(active)

    async function foo(){
            var countryname=document.getElementById("country").value
                // console.log(countryname)

            let url=`https://api.covid19api.com/dayone/country/${countryname}`;
                // console.log(url)

            let res=await fetch(url);
                // console.log(res)

            let res1=await res.json();
                console.log(res1)

            let index=res1.length-1;
                // console.log(index);

            
                console.log(res1[index].Active)

            active.innerHTML=`Total active cases:${(res1[index].Active)}`; 
    // document.body.append(out)


    }
   
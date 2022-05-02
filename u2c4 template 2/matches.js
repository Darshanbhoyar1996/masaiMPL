// write js code here corresponding to matches.html
var matchArr = JSON.parse(localStorage.getItem("schedule"));
showmatch(matchArr)

function showmatch(data){
    document.querySelector("tbody").innerHTML="";

    data.forEach(function(e)
    {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");

        td1.innerText = e.matchNum;
        td2.innerText = e.teamA;
        td3.innerText = e.teamB;
        td4.innerText = e.date;
        td5.innerText = e.venue;
        td6.innerText = "Favourites";
        td6.style.color = "green";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function()
        {
            fav(e)
        })
        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);

    })
}

var favourite = JSON.parse(localStorage.getItem("favourites")) || [];


function fav(ele)
{
    console.log(ele)
    favourite.push(ele);
    localStorage.setItem("favourites", JSON.stringify(favourite))
}
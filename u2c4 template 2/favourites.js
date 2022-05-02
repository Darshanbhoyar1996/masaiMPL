// write js code here corresponding to favourites.html
var favArr = JSON.parse(localStorage.getItem("favourites"));
showfav(favArr)

function showfav(data){
    document.querySelector("tbody").innerHTML="";

    data.forEach(function(e, index)
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
        td6.innerText = "Delete";
        td6.style.color = "red";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function()
        {
            del(e, index)
        })
        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);

    })
}
function del(e, index){
    favArr.splice(index, 1)
        localStorage.setItem("favourites", JSON.stringify(favArr));
        window.location.reload()
}
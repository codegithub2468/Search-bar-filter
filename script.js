function filter(){
    let searchValue = document.querySelector("#input-box").value.toUpperCase();

    let Table = document.querySelector("#my-table");

    let tr = Table.querySelectorAll("tr");

    for(i=0; i<tr.length; i++) {
        let td = tr[i].querySelector("td")

        if (td) {
            let cellText = td.textContent || td.innerHTML;
            
            if(cellText.toUpperCase().indexOf(searchValue) >-1){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
    }

}

//yaha par ham .indexOf()function ka use isliye kr rahe ha kyuki jisse ham cellText string me index dhundne ke liye krte ha
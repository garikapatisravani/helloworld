function myfunction(el){
	 var e = document.getElementById(el);
    var strSel = e.options[e.selectedIndex].text;
	 table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.indexOf(strSel) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
   
}

function myfunction1(el){
	 var e = document.getElementById(el);
    var strSel = e.options[e.selectedIndex].text;
	 table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.indexOf(strSel) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
   
}

function myfunction2(el){
	 var e = document.getElementById(el);
    var strSel = e.options[e.selectedIndex].text;
	 table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.indexOf(strSel) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
   
}


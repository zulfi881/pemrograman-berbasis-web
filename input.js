function terimainput(){
       var x=document.forms['biodata']['NPM'].value;
       var y=document.forms['biodata']['Nama'].value;
       var z=document.forms['biodata']['Tgl Lahir'].value;
               
                                               
       var tabel = document.getElementById("tabelinput");
       var row = tabel.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
               
       cell1.innerHTML = x;
       cell2.innerHTML = y;
       cell3.innerHTML = z;

       var ul = document.getElementById("unorder");	   
	   var Nm = document.getElementById("Nm");
	   var li = document.createElement("li");
	   li.setAttribute('id',Nm.value);
  li.appendChild(document.createTextNode(Nm.value));
  ul.appendChild(li);
	  
	  var ol = document.getElementById("order");	   
	  var Nm = document.getElementById("Nm");
	  var li = document.createElement("li");
	  li.setAttribute('id',Nm.value);
  li.appendChild(document.createTextNode(Nm.value));
  ol.appendChild(li);
}

	
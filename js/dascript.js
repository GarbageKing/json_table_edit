$(document).ready(function(){
    
    $('#totable').click(function(){
        //[{"name":"name1", "value":"value1"},{"name":"name2", "value":"value2"}]
       var upStuff = JSON.parse($('#jason').val());
           
        var tr;
        for (var i = 0; i < upStuff.length; i++) {
            tr = $('<tr/>');
	    tr.append("<td><input type='checkbox' class='placecheck'></td>");
            tr.append("<td><input type='text' class='namebox' value='"+ upStuff[i].name +"'>" + "</td>");
            tr.append("<td><input type='text' class='valuebox' value='"+ upStuff[i].value +"'>"+"</td>");          
	    tr.append("<td><button class='btn btn-danger delbtn'>X</button></td>");  
            $('table').append(tr);
        }
    
        
    });  
    
    $('#tojason').click(function(){        

	
 	var namearr = [];
	var valuarr = [];

	$('.namebox').each(function(){

	namearr.push($(this).val());

});

$('.valuebox').each(function(){

	valuarr.push($(this).val());

});

var jsonstr = '[';

for(var i = 0; i < namearr.length; i++)
{
jsonstr += '{"name":"'+namearr[i]+'","value":"'+valuarr[i]+'"},';
}

jsonstr = jsonstr.substring(0, jsonstr.length-1) + ']';
$('#jason').val(jsonstr);
    });
    

	$('#addrow').click(function(){

	$('table').append("<tr><td><input type='checkbox' class='placecheck'></td><td><input type='text' class='namebox' value=''></td><td><input type='text' class='valuebox' value=''></td><td><button class='btn btn-danger delbtn'>X</button></td></tr>");

});

$(document).on('click', '.delbtn', function(){

$(this).parent().parent().remove();

});

	$(document).on('click', '.placecheck', function(){

	if ($("table input:checkbox:checked").length > 1)
{
    $(this).parent().parent().detach().insertAfter('.orient');
    $('tr').removeClass('orient');
    $("table input:checkbox").prop('checked', false);
}
else
{
   $('tr').removeClass('orient');
   $(this).parent().parent().addClass('orient');
}

});

$("#myFile").change(function() {
       var file = document.getElementById("myFile").files[0];
	
if(file != null){
var reader = new FileReader();
reader.onload = function (e) {
    var textArea = document.getElementById("jason");
    textArea.value = e.target.result;	
};
reader.readAsText(file);
}
    });


     
});




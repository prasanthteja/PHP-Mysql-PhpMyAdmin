function checkTheBox(method)
{
    var checkboxes = document.getElementsByName("registrants[]");
    for(i=0; i < checkboxes.length; i++)
    {
        checkboxes[i].checked = method;
    }
}

function changeSeats() {

	var seatsReq = document.getElementsByName("seatsReq[]");

	if(seatsReq[0].checked == true)
		document.workshop.seats.disabled=false;
	else
		document.workshop.seats.disabled=true;
}

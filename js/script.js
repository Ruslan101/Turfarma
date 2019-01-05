var simophore = true;

document.querySelector(".more").onclick = function () 
{
	if (simophore)
	{	
		document.querySelector('.news_group_3').style.animationName = 'News';
		document.querySelector('#xerffvw').style.transform = 'rotateX(190deg)';
	}
	else
	{
		document.querySelector('.news_group_3').style.animationName = 'Back';
		document.querySelector('#xerffvw').style.transform = 'rotateX(0deg)';
	}
	simophore ? simophore = false : simophore = true;
}
///// Google map /////
function initMap() {
        var myLatLng = {lat: 55.830433, lng: 49.066082}; // Координаты

        // Create a map object and specify the DOM element
        // for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          scrollwheel: true,
          zoom: 10
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng
        });
      }

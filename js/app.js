//global variable
var demographicOption;
var genderOption;
var ageOption;
var userEntry = $('.user-entry').val();

//Census API and Key
function getRequest(){
	var request = {
		key: '6639b468c5267a2ea2453bd45b6247b490ad81ee',

	};
	url = 'http://api.census.gov/data/timeseries/healthins/sahie';
	$.getJSON(url, params, function(data){
			showResults(data.items);
	});
}

$(document).ready(function(){
	$('.demographic li').click(function(){
		demographicOption = $(this).html();
		$('#demographic-button').text(demographicOption);
	})
	$('.gender li').click(function(){
		genderOption = $(this).html();
		$('#gender-button').text(genderOption);
	})
	$('.age li').click(function(){
		ageOption = $(this).html();
		$('#age-button').text(ageOption);
	})
})
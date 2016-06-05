//global variable
var demographicOption;
var genderOption;
var ageOption;
var userEntry = $('.user-entry').val();

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
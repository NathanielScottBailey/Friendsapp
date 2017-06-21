	var $friends= $('#friends');
	var $name = $('#name');
	var $age = $('#age');


//this is a great teaching moment for the button id={{id}}
// Mustache is a template language
//this teaches how to identify the entry and eventually call
//it to delete it

var friendTemplate = "" +
"<div class='table-striped'>" +
"<table class='table'>"+
"<thead>"	+
"<tr>" +
"<td> <p><strong></strong>  {{name}}</p></td>"  +
"<td> <p><strong></strong>  {{age}}</p></td>"	+
"</tr>" +
"<thead>"	+
"</table>"	+
"<button id='{{id}}' class='remove' style='background-color: #b2b2ff; border-radius: 10%;'>Remove</button>"	+
"</div>";

//This is the mustache templete, data after post is friendTemplate
function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));   // .render, we need to have a template, objects we are going to put in a template
	//append adds whats after it to whats infront of it, like adding a <p> to a div
}; //append puts this on the dom, whatever is after it 

$(document).ready(function(){
	
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/friends',
		success: function(friends){
		(friends, function(i, friend){
			addFriend(friend);
		});
		
	},

		error: function(){
			alert('error loading friends');
		}
	});

$('#add-friend').on('click', function(){

	var friend={
		name: $name.val(),
		age: $age.val()
	};
	$.ajax({
		type: 'POST',
		url: 'http://rest.learncode.academy/api/learncode/friends',
		data: friend,   //This is the data your trying to send
		success: function(newFriend){  //This is me recieving the data back and using it in the function
			addFriend(newFriend)
		},
		error: function(){
			alert('error saving order')
		}
	});
});
//.delegate allows you to remove items that were loaded by other students
	$friends.delegate('.remove', 'click', function(){

		var $li = $(this).closest('div');
		//AJAX DELETE Function - click the .remove class button and the id identifies what to delete
		$.ajax({
			type: 'DELETE',
			url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
			success: function(){
				$li.fadeOut(300,function(){
					$(this).remove();
				});
			}
		});
	});

});






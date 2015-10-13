//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Angular.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var mailApp = angular.module('mailApp', []);

mailApp.controller('MessagesController', ['$scope', function( $scope ) {
	this.inbox = [
		{
			'id': '00001',
			'from': 'Josiah Brower',
			'message': 'Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message.',
			'date': 'Fri Oct 09 2015 23:13:03 GMT-0600 (MDT)'
		},
		{
			'id': '00002',
			'from': 'Some Company',
			'message': 'Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message.',
			'date': 'Fri Oct 09 2015 23:12:03 GMT-0600 (MDT)'
		},
		{
			'id': '00003',
			'from': 'Josiah Brower',
			'message': 'Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message.',
			'date': 'Fri Oct 09 2015 23:11:03 GMT-0600 (MDT)'
		},
		{
			'id': '00004',
			'from': 'Emily Tryon Brower',
			'message': 'Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message.',
			'date': 'Fri Oct 09 2015 23:10:50 GMT-0600 (MDT)'
		}
	];
	this.outbox = [
		{
			'id': '00005',
			'to': 'someemail@address.com',
			'message': 'Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message.',
			'date': 'Fri Oct 09 2015 23:13:03 GMT-0600 (MDT)'
		},
		{
			'id': '00006',
			'to': 'someemail@address.com',
			'message': 'Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message.',
			'date': 'Fri Oct 09 2015 23:12:03 GMT-0600 (MDT)'
		},
		{
			'id': '00007',
			'to': 'someemail@address.com',
			'message': 'Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message.',
			'date': 'Fri Oct 09 2015 23:11:03 GMT-0600 (MDT)'
		},
		{
			'id': '00008',
			'to': 'emily.tryon@gmail.com',
			'message': 'Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message.',
			'date': 'Fri Oct 09 2015 23:10:50 GMT-0600 (MDT)'
		}
	];
	this.archived = [
		{
			'id': '00009',
			'from': 'Josiah Brower',
			'message': 'Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message.',
			'date': 'Fri Oct 09 2015 23:13:03 GMT-0600 (MDT)'
		},
		{
			'id': '00010',
			'from': 'Some Company',
			'message': 'Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message.',
			'date': 'Fri Oct 09 2015 23:12:03 GMT-0600 (MDT)'
		},
		{
			'id': '00011',
			'from': 'Josiah Brower',
			'message': 'Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message.',
			'date': 'Fri Oct 09 2015 23:11:03 GMT-0600 (MDT)'
		},
		{
			'id': '00012',
			'from': 'Emily Tryon Brower',
			'message': 'Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message.',
			'date': 'Fri Oct 09 2015 23:10:50 GMT-0600 (MDT)'
		}
	];
	this.tab = 'inbox';
	
	this.setTab = function( tab ) {
		// Set the tab.
		this.tab = tab;
		
		setTimeout(initializeEvents, 100);
	};
	
	this.isTab = function( tab ) {
		// Check to see if the current tab matches the given tab.
		return this.tab === tab;
	};
	
	this.hasMessages = function() {
		// Check to see if the current tab has messages.
		return this[this.tab].length > 0;
	}
	
	$scope.compose = function( data ) {
		var to      = data.to;
		var message = data.message;
		
		// Make sure the form is valid before submitting the message.
		if (to !== undefined && message !== undefined) {
			// Add an id and date property to the given data object, and add the new message data to
			// the outbox array. Hide the compose modal, and reset the form.
			var messageData = {
				'id': generateId(),
				'date': new Date().toString(),
				'to': to,
				'message': message
			};
			
			$scope.messages.outbox.push(messageData);
			
			$('#composeModal').modal('hide');
			
			document.getElementById('composeForm').reset();
			
			initializeEvents();	
		}
	};
	
	$scope.deleteMessages = function() {
		// Find all of the messages that are checked, and keep track of their index within their
		// array. If not the archived folder, move the checked messages to the archived array, otherwise
		// delete the messages. Uncheck all messages.
		////////////////////////////////////////////////////////////////////////////////////////////////
		// Changed from using jQuery to select the '.message-checkbox' items, because it was grabbing the
		// original values even if the DOM had been updated.
		var checkboxes    = document.getElementsByClassName('message-checkbox');
		var remove        = [];
		var removeIndexes = [];
		var currentTab    = $scope.messages.tab;
		
		Array.prototype.forEach.call(checkboxes, function( checkbox ) {
			if (checkbox.checked) {
				remove.push(checkbox.getAttribute('data-id'));
			}
		});
		
		for (var inMessages = 0; inMessages < $scope.messages[currentTab].length; inMessages++) {
			if (remove.indexOf($scope.messages[currentTab][inMessages].id.toString()) > -1) {
				removeIndexes.push(inMessages);
			}
		}
		
		for (var inRemove = removeIndexes.length - 1; inRemove >= 0; inRemove--) {
			var removeIndex = removeIndexes[inRemove];
			
			switch (currentTab) {
				case 'inbox': 
				case 'outbox': {
					if ($scope.messages.archived === undefined) {
						$scope.messages.archived = [];
					}
					
					$scope.messages.archived.push($scope.messages[currentTab][removeIndex]);
					
					$scope.messages[currentTab] = removeFromArray($scope.messages[currentTab], removeIndex);
					
					break;
				}
				case 'archived': {
					$scope.messages.archived = removeFromArray($scope.messages.archived, removeIndex);
					
					break;
				}
			}
		}
		
		$('#selectAll').prop('checked', false);
		$('.message-checkbox').prop('checked', false);
	}
}]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JavaScript.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
	// Call to initialize the required events.
	initializeEvents();
});

function initializeEvents() {
	// Reset the event listeners.
	var messageBodies = document.getElementsByClassName('message-body');
	Array.prototype.forEach.call(messageBodies, function( messageBody ) {
		messageBody.onclick = null;
		messageBody.onclick = messageBodyClick;
	});
	
	$('#selectAll').off('click', selectAllMessages);
	$('#deleteBtn').off('click', deleteMessages);
	
	$('#selectAll').on('click', selectAllMessages);
	$('#deleteBtn').on('click', deleteMessages);
	
	var checkboxes = document.getElementsByClassName('message-checkbox');
	Array.prototype.forEach.call(checkboxes, function( checkbox ) {
		checkbox.onchange = null;
		checkbox.onchange = messageSelect;
	});
}

function messageBodyClick( evntClick ) {
	// Measure the max height, and the scroll height of the given message body class element. If the max
	// height is less than the scroll height (the entirety of the message is showing) keep a handle to
	// the initial max height, set the max height to the scroll height, and add an "expanded" class so
	// we can keep track of expanded messages. If the max height isn't less than the scroll height, and
	// the element is tagged as expanded, reset the max height to the initial max height, and remove the
	// expanded class.
	var messageBody  = $(evntClick.currentTarget);
	var maxHeight    = parseFloat(messageBody.css('max-height'));
	var scrollHeight = parseFloat(evntClick.currentTarget.scrollHeight);
	var expanded     = messageBody.hasClass('expanded');
	
	if (maxHeight < scrollHeight) {
		if (messageBody.data('data-initial-max-height') === undefined) {
			messageBody.data('data-initial-max-height', maxHeight);
		}
		
		messageBody.addClass('expanded');
		messageBody.css({
			'maxHeight': scrollHeight + 'px'
		});
	} else if (expanded) {
		messageBody.css({
			'maxHeight': parseFloat(messageBody.data('data-initial-max-height')) + 'px'
		});
		messageBody.removeClass('expanded');
	}
}

function selectAllMessages( evntClick ) {
	// Get a handle to the select all checkbox. If the select all checkbox is checked, mark the message
	// checkbox elements as checked, otherwise mark them as unchecked.
	var selectAll = $(evntClick.currentTarget);
	
	if (selectAll.prop('checked')) {
		$('.message-checkbox').prop('checked', true);
	} else {
		$('.message-checkbox').prop('checked', false);
	}
	
	// Call to check if the delete button should be enabled.
	checkDeleteEnabled();
}

function deleteMessages( evntClick ) {
	angular.element(document.body).scope().deleteMessages();
}

function messageSelect( evntClick ) {
	// Call to check if the delete button should be enabled.
	checkDeleteEnabled();
}

function checkDeleteEnabled() {
	// Enable the delete button only if at least one message is selected.
	var checkboxes = $('.message-checkbox');
	
	for (var inCheckboxes = 0; inCheckboxes < checkboxes.length; inCheckboxes++) {
		if ($(checkboxes[inCheckboxes]).prop('checked')) {
			$('#deleteBtn').removeClass('disabled');
			$('#deleteBtn').removeAttr('disabled');
			
			return
		}
	}
	
	$('#deleteBtn').addClass('disabled');
	$('#deleteBtn').attr('disabled', 'disabled');
}

function generateId() {
	// Generate two random numbers, them multiply them together and take the first 5 digits.
	var id01 = Math.round(Math.random() * 99999);
	var id02 = Math.floor(Math.random() * id01);
	
	return (id01 * id02).toString().slice(0, 5);
}

function removeFromArray( array, index ) {
	// Remove the given index from the given array.
	if (array.length <= 1) {
		return [];
	} else if (index === 0) {
		array.shift();
		
		return array; 
	} else if (index === array.length - 1) {
		array.pop();
		
		return array;
	}
	
	for (var inArray = 0; inArray < array.length; inArray++) {
		if (inArray == index) {
			array[inArray] = array[inArray + 1];
		} else if (inArray > index && inArray < array.length - 1) {
			array[inArray] = array[inArray + 1];
		} else if (inArray > index) {
			array.pop();
		}
	}
	
	return array;
}
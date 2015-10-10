//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Angular.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var mailApp = angular.module('mailApp', []);

mailApp.controller('MessagesController', ['$scope', function( $scope ) {
	this.inbox = [
		{
			'from': 'Josiah Brower',
			'message': 'Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message.',
			'dateRecieved': 'Fri Oct 09 2015 23:13:03 GMT-0600 (MDT)'
		},
		{
			'from': 'Some Company',
			'message': 'Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message.',
			'dateRecieved': 'Fri Oct 09 2015 23:12:03 GMT-0600 (MDT)'
		},
		{
			'from': 'Josiah Brower',
			'message': 'Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message.',
			'dateRecieved': 'Fri Oct 09 2015 23:11:03 GMT-0600 (MDT)'
		},
		{
			'from': 'Emily Tryon Brower',
			'message': 'Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message. Here is my INBOX message.',
			'dateRecieved': 'Fri Oct 09 2015 23:10:50 GMT-0600 (MDT)'
		}
	];
	this.outbox = [
		{
			'to': 'someemail@address.com',
			'message': 'Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message.',
			'dateSent': 'Fri Oct 09 2015 23:13:03 GMT-0600 (MDT)'
		},
		{
			'to': 'someemail@address.com',
			'message': 'Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message.',
			'dateSent': 'Fri Oct 09 2015 23:12:03 GMT-0600 (MDT)'
		},
		{
			'to': 'someemail@address.com',
			'message': 'Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message.',
			'dateSent': 'Fri Oct 09 2015 23:11:03 GMT-0600 (MDT)'
		},
		{
			'to': 'emily.tryon@gmail.com',
			'message': 'Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message. Here is my OUTBOX message.',
			'dateSent': 'Fri Oct 09 2015 23:10:50 GMT-0600 (MDT)'
		}
	];
	this.archived = [
		{
			'from': 'Josiah Brower',
			'message': 'Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message.',
			'dateRecieved': 'Fri Oct 09 2015 23:13:03 GMT-0600 (MDT)'
		},
		{
			'from': 'Some Company',
			'message': 'Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message.',
			'dateRecieved': 'Fri Oct 09 2015 23:12:03 GMT-0600 (MDT)'
		},
		{
			'from': 'Josiah Brower',
			'message': 'Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message.',
			'dateRecieved': 'Fri Oct 09 2015 23:11:03 GMT-0600 (MDT)'
		},
		{
			'from': 'Emily Tryon Brower',
			'message': 'Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message. Here is my ARCHIVED message.',
			'dateRecieved': 'Fri Oct 09 2015 23:10:50 GMT-0600 (MDT)'
		}
	];
	
	this.tab     = 'inbox';
	this.display = this.inbox;
	
	this.setTab = function( tabName ) {
		this.tab = tabName;
		
		$('.tab.active').removeClass('active');
		$('#' + tabName + 'Tab').addClass('active');
		
		this.display = this[tabName];
		
		setTimeout(initializeEvents, 50);
	};
	
	$scope.compose = function( data ) {
		data.dateSent = new Date().toDateString();
		
		$scope.messages.outbox.push(data);
		
		$('#composeModal').modal('hide');
		
		document.getElementById('composeForm').reset();
	};
}]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JavaScript.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
	// Call to initialize the required events.
	initializeEvents();
});

function initializeEvents() {
	// Add a click event to the message body class elements.
	$('.message-body').off('click', messageBodyClick);
	$('.message-body').on('click', messageBodyClick);
}

function messageBodyClick( evntClick ) {
	console.log('messageBodyClick()');
		
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
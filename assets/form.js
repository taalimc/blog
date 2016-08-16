$(document).ready(function() {
	
	var form = $('#mc-embedded-subscribe-form');
	var subForm = $('.subscribe-form-wrapper');

    // Listens for the element with the .h class attached to it to be clicked. If clicked called toggleForm 
    $('.h').click(function() {
        subForm.toggleForm();
    });

    // Add toggleForm to form wrapper. Removes open class to give a shrinking/hide effect to the form. 
    subForm.toggleForm = function(){
        this.toggleClass('open');
        return this;
    };

    // Back to top
    $(".up-top").click(function () {
        $("body, html").animate({ scrollTop: 0, easing: "easein" });
        return false;
    });

    // Floating subscribe button
    $(".subscribe-shortcut").click(function () {
        $(".subscribe-shortcut").removeClass("shortcut-active");
        $("body, html").animate({ scrollTop: $(".subscribe").offset().top, easing: "easein" });
        if (!subForm.hasClass("open")) {
            subForm.addClass("open");
        }
        return false;
    });


    // Removes the invalid class from the subscribe fields (if it exists). Calls the ResetInput function.
    $('input', form).on('change', function(e) {
        if ($(this).hasClass('invalid')) {
            resetInput(this);
        }
    });

    // On the attempt to submit the form, run validation and attempt to submit via AJAX. 
    form.submit(function(e) {
        e.preventDefault();

        removeInputMessages(this);
        var submitButton = $('.button', this);
        var submitButtonText = submitButton.html();
        submitButton.html('Please wait &hellip;');

        
        formData = form.serializeArray();

        // Simple form validation (Did you enter anything in the email box?)
        if (validateForm(formData, form) === true) {
            
            // Further validation, submission, and validation handling
            registerForm(form, subForm);

            // Replaces "Please wait" submit button for when the entry doesn't pass validation
            submitButton.html(submitButtonText);

        } else {

        	// Replaces "Please wait" submit button for when the entry doesn't pass validation
        	submitButton.html(submitButtonText);
        }


    });
	
});

var validateForm = function(formData, form) {
    var errorFlag = false;
    if (formData[0].value === "") {
        errorFlag = true;
        input = $('input[name=' + formData[0].name + ']');
        input.addClass('invalid');
        input.focus();
        appendInputMessage(input, "Your email is required");
    }
    if (errorFlag) {
        return false;
    } else {
        return true;
    }
};

// Function that actually submits the form via AJAX. It will also return any major error messages back to the user.
function registerForm(form, subForm) {
  $.ajax({
    type: form.attr('method'),
    url: form.attr('action'),
    data: form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(err) { subForm.parent().html('<h2 class="alignc below12">Thanks for trying to subscribe!</h2><p class="alignc">Whoops, could not connect to server. Please try again later.</p>'); },
    success     : function(data) {
    
	    if (data.result != "success") { //If there is an error
	    	
	    	//Get the error message minus the ID #
	    	var errorMessage = data.msg.substring(4);

			switch(getErrorType(errorMessage)) {
				case "List_AlreadySubscribed":
                    input = $('input[name=EMAIL]');
                    appendInputMessage(input, "You’re already subscribed to The UX Newsletter.");
                    input.addClass('invalid');
                    input.focus();
                    break;
                case "ValidationError":
                    input = $('input[name=EMAIL]');
                    appendInputMessage(input, errorMessage);
                    input.addClass('invalid');
                    input.focus();
                    break;
                default:
                	alert("Something went terribly, terribly wrong.");
                    console.log(errorMessage);
                    break;
			}
		} 

		else {
			// Otherwise, I think we're good!
	        subForm.parent().html('<h2 class="alignc below12">Thanks for subscribing!</h2><p class="alignc">Check out some newsletters below!</p>').parent().addClass('success');
		}
    }
  });
}

var appendInputMessage = function(input, msg) {
    var errorContainerTpl = $('<div/>', {class: "error-invalid"});
    errorContainerTpl.html(msg).insertAfter(input);
};

var removeInputMessages = function(form) {
    $('.invalid').removeClass('invalid');
    $('div.error-invalid').remove();
};

var resetInput = function(input) {
    var wrapper = $(input).parent();
    $(input).removeClass('invalid');
    $('div.error-invalid', wrapper).remove();
};

// Function that reviews the JSON error message and returns a simple classification
var getErrorType = function(errorMessage) {

	var possibleErrorMessages = [
            'Please enter a value',
            'An email address must contain a single @',
            'The domain portion of the email address is invalid (the portion after the @: )',
            'The username portion of the email address is invalid (the portion before the @: )',
            'This email address looks fake or invalid. Please enter a real email address'
        ];

	// if the user is already subscribed
	if (errorMessage.indexOf('already subscribed') >= 0) {
		return "List_AlreadySubscribed";
	}

	// if it is a validation error
	else if ($.inArray(errorMessage, possibleErrorMessages) > -1) {

		return "ValidationError";
	}
	else {

		// Not sure what the error message is.... Returning the message back. 
		return errorMessage;

	}

}
// JavaScript Document

// Set values pulled from database into data object
dataObj = new Object();

createInt('months_enrolled', 9);
data('email', email);
data('student_first_name', student_first_name);
data('student_last_name', student_last_name);
data('street_address', street_address);
data('city', city);
data('state', state);
data('zip', zip);
data('parent_street_address', parent_street_address);
data('parent_city', parent_city);
data('parent_state', parent_state);
data('parent_zip', parent_zip);
createInt('number_in_household', number_in_household);
createInt('number_in_college', number_in_college);
createInt('married', married);
createInt('one_two_parent_household', one_two_parent_household);
// Format mother's DOB
data('mother_dob', mother_dob);
formatDob(dataObj.mother_dob, 'mother');
createInt('mother_birth_year', dataObj.mother_birth_year);
// Format father's DOB
data('father_dob', father_dob);
formatDob(dataObj.father_dob, 'father');
createInt('father_birth_year', dataObj.father_birth_year);
// Format student's DOB
data('student_dob', student_dob);
formatDob(dataObj.student_dob, 'student');
createInt('student_birth_year', dataObj.student_birth_year);

createInt('number_parents_working', number_parents_working);
// If the button for whether required to file taxes is not clicked, default to yes, required to file
if(!dataObj.not_required_taxes){
        dataObj.not_required_taxes = false;
    }
// Load tooltip for any DOM element with rel="tooltip"
$('body').tooltip({
    selector: '[rel=tooltip]'
});

/*
 * object.watch polyfill
 *
 * 2012-04-03
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 * Cross-browser implementation of object.watch for object property changes
 */

// object.watch
if (!Object.prototype.watch) {
	Object.defineProperty(Object.prototype, "watch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop, handler) {
			var
			  oldval = this[prop]
			, newval = oldval
			, getter = function () {
				return newval;
			}
			, setter = function (val) {
				oldval = newval;
				return newval = handler.call(this, prop, oldval, val);
			}
			;
			
			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter
					, set: setter
					, enumerable: true
					, configurable: true
				});
			}
		}
	});
}

// object.unwatch
if (!Object.prototype.unwatch) {
	Object.defineProperty(Object.prototype, "unwatch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop) {
			var val = this[prop];
			delete this[prop]; // remove accessors
			this[prop] = val;
		}
	});
}

/**
 * FUNCTION cantBeNegative
 * Prevents the value from being negative
 * @param string id
 */

function cantBeNegative(id){
    var val = $(id).val();
    var_name = $(id).attr('id');
    if($.isNumeric(val) && val < 0){
        val = 0;
        $(id).val(val);
        data(var_name, val);
    }
}

/**
 * FUNCTION createFloat
 * Creates an float and places it in the data object
 * @param string id
 * @param string value
 */

function createFloat(id, value){
    parsed = parseFloat(value);
    if(isNaN(parsed)){
        parsed = 0;
    }
    data(id, parsed);
}

/**
 * FUNCTION createInt
 * Creates an integer out of the string pulled from the DB and places it in the data object
 * @param string id
 * @param string value
 */

function createInt(id, value){
    parsed = parseInt(value);
    if(isNaN(parsed)){
        parsed = 0;
    }
    data(id, parsed);
}

/**
 * FUNCTION createVar
 * Creates a global variable for the input item, checks if the value is a number, sets to 0 is NaN, stores value in data object
 * @param string id
 * @returns float parsed
 * @returns int 0
 */

function createVar(element, obj){
    value = $(element).val();
    id = $(element).attr('id');
    // Do I really need this here? I just need to know when one is defined, not changes
    obj.watch(id, function(prop,oldval,newval){
        //console.log("value for " + id + " changed from " + oldval + " to " + newval);
        return newval;
    });
    parsed = parseFloat(value);
    if(isNaN(parsed)){
        parsed = 0;
    }
    $(element).val(parsed);
    data(id, parsed);
}

/**
 * FUNCTION data
 * @param string var_name
 * @param mixed value
 * Creates a global variable, as well as stores user data in an object for easy retrieval
 */

function data(var_name, value){
    window[var_name] = value;
    dataObj[var_name] = value;
    $("#user_answers").data(var_name, value);
}

/**
 * FUNCTION determineWorksheetDependent
 * Determines whether to use simplified (true) or regular worksheet A (false)
 * @returns bool
 */

function determineWorksheetDependent(){
    try{
        // Use simplified worksheet A
        if(dataObj.income_under_50k
           && (dataObj.benefits
               || dataObj.form1040a1040ez
               || dataObj.not_required_taxes
               || dataObj.dislocated_worker)){
                    console.log("Use simplified worksheet A");
                    data('worksheet_type', 'simplified_a');
                    return true;
        // Use regular worksheet A
        }else{
            console.log("Use regular worksheet A");
            data('worksheet_type', 'regular_a');
            return false;
        }
    }catch(e){
        // Default to regular worksheet A
        console.log("Worksheet determination failed. " + e);
        console.log("Defaulting to regular worksheet a");
        data('worksheet_type', 'regular_a');
        return false;
    }
}

/**
 * FUNCTION determineWorksheetIndependent
 * Determines whether to use simplified or regular worksheet for independent students
 * @returns bool
 */

function determineWorksheetIndependent(){
    try{
        // Use simplified worksheet
        if(dataObj.income_under_50k
           && (dataObj.benefits
               || dataObj.form1040a1040ez
               || dataObj.not_required_taxes
               || dataObj.dislocated_worker)){
                    console.log("Use simplified worksheet for independent");
                    return true;
        // Use regular worksheet
        }else{
            console.log("Use regular worksheet from determineWorksheetIndependent()");
            return false;
        }
    }catch(e){
        // Default to regular worksheet
        console.log("Worksheet determination failed from determineWorksheetIndependent. " + e);
        console.log("Defaulting to regular worksheet");
        return false;
    }
}

/**
 * FUNCTION determineWorksheetQuestionsDisplay
 * Handle DOM changes for worksheet determination
 */

function determineWorksheetQuestionsDisplay(){
    $("#loading").attr("class", "hidden");
    // Change the back button to return to the zero EFC self-assessment
    $("#btn_back").attr('id', 'btn_back_to_efc_zero_questions');
    // Change the next button to go to the proper worksheet
    $("#btn_next_efc_zero").attr('id', 'btn_go_to_worksheet');
    // Hide the self-assessment buttons
    $("#self_assessment_buttons").hide();
    // Replace the billboard text
    $("p#self_assessment_text").text("Let's see which worksheet type you should use.");
    $("div#common_reasons").remove();
    $("#self_assessment_text_bottom").remove();
    // Attach yes/no buttons to DOM
    $("a#btn_yes, a#btn_no").on('click', function(){
        handleButtonClick(this);
    });
    $("div.questions").slideDown();
    $("div#next_section").slideDown();
    $("h4#next_section").text("Determine the type of worksheet you'll be using");
}

/**
 * FUNCTION efcZero
 * Determines whether the user will have a zero EFC
 * @returns bool
 */

function efcZero(){
    
    // If filing independent
    if(dataObj.filing_independent){
        // EFC is zero
        try{
            if(dataObj.dependents
                && dataObj.income_under_24k
                && (dataObj.benefits
                    || dataObj.form1040a1040ez
                    || dataObj.not_required_taxes
                    || dataObj.dislocated_worker)){
                console.log("EFC is zero for independent");
                data('efc_zero', true);
                return true;
                // EFC is not zero
            }else{
                console.log("EFC is not zero for independent");
                data('efc_zero', false);
                return false;
            }
        }catch(e){
            console.log("Zero EFC determination failed: " + e);
            console.log("Defaulting to EFC is not zero");
            data('efc_zero', false);
            return false;
        }
         
    // If filing dependent
    }else{
        try{
            // EFC is zero
            if(income_under_24k == "Yes"
               && (benefits == "Yes"
                   || form1040a1040ez == "Yes"
                   || not_required_taxes == "Yes"
                   || dislocated_worker == "Yes")){
                console.log("efc is zero for dependent");
                data('efc_zero', true);
                return true;
            // EFC is not zero
            }else{
                console.log("EFC is not zero for dependent");
                data('efc_zero', false);
                return false;
            }
        }catch(e){
            console.log("Zero EFC determination failed: " + e);
            console.log("Defaulting to EFC is not zero");
            data('efc_zero', false);
            return false;
        }
    }
}

/**
* FUNCTION efcZeroQuestionsDisplay
* Handle DOM changes for EFC zero assessment
*/

function efcZeroQuestionsDisplay(){
    $("#loading").attr("class", "hidden");
    // Change the back button to return to the independence self-assessment
    $("#btn_back").attr('id', 'btn_back_to_independence_questions');
    $("p#self_assessment_text").text("Not many can claim a zero EFC. Some of the common reasons for claiming a zero EFC are:");
    if(!filingIndependent()){
        var common_reasons = "<li>If someone in your parents household gets government benefits.<li>Your parents filed (or could have filed) a 1040A or 1040EZ for their taxes.<li>Your parents weren't required to file taxes at all.<li>Your parents are currently dislocated workers.<li>Your parents income is under $24,000.";
        $("div#common_reasons").html(common_reasons);
    }else{
        var common_reasons = "<li>Anyone in your parents' household received benefits during 2011 or 2012<li>Your parents were eligible to file a IRS Form 1040A or 1040EZ.<li>Your parents files an IRS Form 1040, but weren't required to do so.<li>Your parents were required to file taxes.<li>Either of your parents are a dislocated worker.<li>Your parents 2012 income is less than $24,000.";
        $("div#common_reasons").html(common_reasons);
    }
    $("#self_assessment_text_bottom").text("Do you think you'll be able to claim a zero EFC?");
    $("#btn_next_independence").attr('id', 'btn_next_efc_zero');
    $("a#btn_yes, a#btn_no").on('click', function(){
        handleButtonClick(this);
    });
    $("div.questions").slideUp();
}

/**
 * FUNCTION filingIndependent
 * Determines whether the user is filing as an independent
 * @returns bool
 */

function filingIndependent(){
    try{
        if(dataObj.born_before_1990
           || dataObj.advanced_degree
           || dataObj.military
           || dataObj.veteran
           || dataObj.emancipated
           || dataObj.dependents
           || dataObj.legal_guardian
           || dataObj.homeless
           || dataObj.married
           || dataObj.parents_deceased){
            console.log("Filing independent");
            data('filing_independent', true);
            return true;
        }else{
            console.log("Filing dependent");
            data('filing_independent', false);
            return false;
        }
    }catch(e){
        console.log("Independence determination failed. " + e);
        console.log("Defaulting to filing as a dependent.");
        data('filing_independent', false);
        return false;
    }
}

/**
 * FUNCTION formatDob
 * Format entered dates of birth into something usable
 * @param string dob
 */

function formatDob(dob, mother_or_father){
    parent_birth_year = mother_or_father + "_birth_year";
    parent_birth_month = mother_or_father + "_birth_month";
    parent_birth_day = mother_or_father + "_birth_day";
    year = dob.substring(4);
    day = dob.substring(2,4);
    month = dob.substring(0,2);
    window[parent_birth_year] = year;
    window[parent_birth_month] = month;
    window[parent_birth_day] = day;
    createInt(parent_birth_year, window[parent_birth_year]);
    createInt(parent_birth_month, window[parent_birth_month]);
    createInt(parent_birth_day, window[parent_birth_day]);
}

/**
 * FUNCTION calcAge
 * Calculates the parent's age based on the entered birthday and today's date
 * @param string input
 * @returns int
 */

function calcAge(input) {
    year = input + "_birth_year";
    month = input + "_birth_month";
    day = input + "_birth_day";
    try{
        dateString = dataObj[year] + '-' + dataObj[month ]+ '-' + dataObj[day];
        var birthday = +new Date(dateString);
        return ~~((Date.now() - birthday) / (31557600000));
    }catch(e){
        return false;
    }
}

/**
 * FUNCTION handleButtonClick
 * Button display changes, saves user input into the global scope
 * @param object btn
 */

function handleButtonClick(btn){
    // Get whether yes or no was clicked
    var btn_type = $(btn).text();
    // Select the div parent's original class (I don't think it'll be anything)
    // Add "parent_question" to the class of the parent div
    $(btn).parent().attr('class', 'parent_question');
    // Get the displayed text between <p> tags within the parent div
    var text = $('div.parent_question p').text();
    var id = $('div.parent_question p').attr("id");
    // Select the proper button within the parent class
    if(btn_type == "Yes"){
        $("div.parent_question #btn_no").css('opacity','0.5');
        $("div.parent_question #btn_yes").css('opacity','1.0');
    }else{
        $("div.parent_question #btn_yes").css('opacity','0.5');
        $("div.parent_question #btn_no").css('opacity','1.0');
    }
    // Remove the now added parent class attribute
    $(btn).parent().removeAttr('class');
    if(btn_type == "Yes"){
        btn_type = true;
    }else{
        btn_type = false;
    }
    data(id, btn_type);
}

/**
 * FUNCTION loadJS
 * Dynamically loads JavaScript for each form type
 */

function loadJs(js_to_load){
    //var original_html = $("#js_loader").html();
    var load_js = '<script src="' + js_to_load + '"></script>';
    //console.log(load_js);
    $("#js_loader").html(load_js);
}

/**
 * FUNCTION setVar
 * Creates a global variable for the answer to each yes/no question
 * @param string id
 * @param string btn_type
 */

function setVar (id, btn_type) {
  window[id] = btn_type;
}

// Yes/no button clicked
$("a#btn_yes, a#btn_no").click(function(){
    handleButtonClick(this);
});

// Get the user supplied answers
$("a#btn_get_answers").click(function(){
    $.each($('#user_answers'), function(k, v){
        console.log($('#user_answers').data());
    });
});

// Self-assessment button handler
$('#btn_self_assessment_yes, #btn_self_assessment_no').click(function(){
    var btn = $(this).text();
    if(btn == "Yes"){
        $("#btn_self_assessment_no").css('opacity','0.5');
        $("#btn_self_assessment_yes").css('opacity','1.0');
        $("div.questions").slideDown();
        $("#next_section").slideDown();
    }else{
        $("#btn_self_assessment_no").css('opacity','1.0');
        $("#btn_self_assessment_yes").css('opacity','0.5');
        $("div.questions").slideUp();
        $("#next_section").slideDown();
    }
});

if(dataObj.married){
    $("div.questions").load("question_source.php #zero_efc_independent", function(){
        efcZeroQuestionsDisplay();
    });
}

// NEXT BUTTON HANDLER
$("a.btn.btn-primary.pull-right").click(function(){
    var btn_id = $(this).attr('id');
    $("#btn_self_assessment_no").css('opacity', '1.0');
    $("#btn_self_assessment_yes").css('opacity', '1.0');
    
    /**
     * NEXT BUTTON FOR INDEPENDENCE SELF-ASSESSMENT (GO TO ZERO EFC SELF-ASSESSMENT)
     */
    if(btn_id == 'btn_next_independence'){
        $("#loading").attr("class", "col-md-1 col-md-offset-5");
        $("#next_section").hide();
        // If filing independent
        if(filingIndependent()){
            $("div.questions").load("question_source.php #zero_efc_independent", function(){
                efcZeroQuestionsDisplay();
            });
        // If filing dependent
        }else{
            $("div.questions").load("question_source.php #zero_efc_dependent", function(){
                efcZeroQuestionsDisplay();
            });
        }
    // END NEXT BUTTON FOR INDEPENDENCE SELF-ASSESSMENT
    }
    
    /**
     * NEXT BUTTON FOR ZERO EFC DETERMINATION (GO TO WORKSHEET DETERMINATION)
     */
    if(btn_id == 'btn_next_efc_zero'){
        $("#loading").attr("class", "col-md-1 col-md-offset-5");
        $("#next_section").hide();
        
        /**
         * IF FILING INDEPENDENT
         */
        if(filing_independent){
            // If EFC is zero
            if(efcZero()){
                $("div.questions").text("EFC is zero. Stop here.");
                $("#loading").attr("class", "hidden");
            // If EFC is not zero
            }else{
                $("div.questions").load("question_source.php #determine_worksheet_independent", function(){
                    determineWorksheetQuestionsDisplay();
                });
            }
            
        /**
         * IF FILING DEPENDENT
         */
        }else{
            // IF EFC IS ZERO
            if(efcZero()){
                $("div.questions").text("EFC is zero. Stop here.");
                $("#loading").attr("class", "hidden");
            // IF EFC IS NOT ZERO
            }else{
                $("div.questions").load("question_source.php #determine_worksheet_dependent", function(){
                    determineWorksheetQuestionsDisplay();
                });
            }
        }
        
    // END NEXT BUTTON FOR EFC ZERO DETERMINATION
    }
    
    /**
     * NEXT BUTTON TO DETERMINE WORKSHEET TYPE (GO TO WORKSHEET)
     */
    if(btn_id == 'btn_go_to_worksheet'){
        $("#loading").attr("class", "col-md-1 col-md-offset-5");
        $("#next_section").hide();
        
        /**
         * IF FILING INDEPENDENT
         */
        if(filing_independent){
            // If #dependents_other_than_spouse is not set, default to no
            if(typeof(dataObj.dependents_other_than_spouse) == 'undefined'){
                data('dependents_other_than_spouse', false);
            }
            try{
                console.log("dependents other than spouse?: " + dataObj.dependents_other_than_spouse);
                /**
                * WORKSHEET C
                */
                if(dataObj.dependents_other_than_spouse){
                    // USE SIMPLIFIED WORKSHEET
                    if(determineWorksheetIndependent() == true){
                        data('worksheet_type', 'simplified_c');
                        console.log("using simplified worksheet c");
                        $("div.questions").load("question_source.php #simplified_c", function(){
                            $("h2.muted.text-center").text("Simplified Worksheet C");
                            $("#question_self_assessment_heading").hide();
                            $("#loading").attr("class", "hidden");
                        });
                    // USE REGULAR WORKSHEET    
                    }else{
                        data('worksheet_type', 'regular_c');
                        console.log("using simplified worksheet c");
                        $("div.questions").load("question_source.php #regular_c", function(){
                            $("h2.muted.text-center").text("Regular Worksheet C");
                            $("#question_self_assessment_heading").hide();
                            $("#loading").attr("class", "hidden");
                        });
                    }
                
                /**
                 * WORKSHEET B
                 */
                }else{
                    // USE SIMPLIFIED WORKSHEET
                    if(determineWorksheetIndependent()){
                        // Load Regular B javascript
                        if(dataObj.married){
                            loadJs('../assets/js/simplified_b_married.js');
                            // Bind to persistent data object for use in PDF creation
                            data('worksheet_type', 'simplified_b');
                            console.log("using regular worksheet b married");
                        }else{
                            loadJs('../assets/js/simplified_b_unmarried.js');
                            // Bind to persistent data object for use in PDF creation
                            data('worksheet_type', 'simplified_b');
                            console.log("using regular worksheet b unmarried");
                        }
                        console.log("using simplified worksheet b");
                        $("div.questions").load("question_source.php #simplified_b", function(){
                            $("h2.muted.text-center").text("Simplified Worksheet B");
                            $("#question_self_assessment_heading").hide();
                            $("#loading").attr("class", "hidden");
                            // Unbind one change event from input elements
                            $("input").unbind('change');
                            // Create variable for each input item when it is changed
                            $("input").change(function(){
                                createVar(this, dataObj);
                            });
                        });
                    // USE REGULAR WORKSHEET    
                    }else{
                        // Load Regular B javascript
                        if(dataObj.married){
                            loadJs('../assets/js/regular_b_married.js');
                            // Bind to persistent data object for use in PDF creation
                            data('worksheet_type', 'regular_b');
                            console.log("using regular worksheet b married");
                        }else{
                            loadJs('../assets/js/regular_b_unmarried.js');
                            // Bind to persistent data object for use in PDF creation
                            data('worksheet_type', 'regular_b');
                            console.log("using regular worksheet b unmarried");
                        }
                        $("div.questions").load("question_source.php #regular_b", function(){
                            // DOM/CSS changes
                            $("h2.muted.text-center").text("Regular Worksheet B");
                            $("#question_self_assessment_heading").hide();
                            $("#loading").attr("class", "hidden");
                            // Unbind one change event from input elements
                            $("input").unbind('change');
                            // Create variable for each input item when it is changed
                            $("input").change(function(){
                                createVar(this, dataObj);
                            });
                        });
                    }
                }
            // UNABLE TO DETERMINE WHETHER TO USE B OR C
            }catch(e){
                console.log("Worksheet determination failed. " + e);
                console.log("Unable to determine whether to use worksheet b or c");
            }
            
        /**
         * IF FILING DEPENDENT
         */
        }else{
            // IF SIMPLIFIED WORKSHEET A
            if(determineWorksheetDependent()){
                // Load Simplified A javascript
                loadJs('../assets/js/simplified_a.js');
                // Bind to persistent data object for use in PDF creation
                data('worksheet_type', 'simplified_a');
                $("div.questions").load("question_source.php #simplified_a", function(){
                    // DOM/CSS changes
                    $("h2.muted.text-center").text("Simplified Worksheet A");
                    $("#question_self_assessment_heading").hide();
                    $("#loading").attr("class", "hidden");
                    // Unbind one change event from input elements
                    $("input").unbind('change');
                    // Create variable for each input item when it is changed
                    $("input").change(function(){
                        createVar(this, dataObj);
                    });
                });
            // IF REGULAR WORKSHEET A
            }else{
                // Load Regular A javascript
                loadJs('../assets/js/regular_a.js');
                // Bind to persistent data object for use in PDF creation
                data('worksheet_type', 'regular_a');
                $("div.questions").load("question_source.php #regular_a", function(){
                    // DOM/CSS changes
                    $("h2.muted.text-center").text("Regular Worksheet A");
                    $("#question_self_assessment_heading").hide();
                    $("#loading").attr("class", "hidden");
                    // Unbind one change event from input elements
                    $("input").unbind('change');
                    // Create variable for each input item when it is changed
                    $("input").change(function(){
                        createVar(this, dataObj);
                    });
                });
            }
        }
        
    // END NEXT BUTTON TO DETERMINE WORKSHEET TYPE
    }
});



$(document).on('click', "#submit_test", function(){
    //$('#pass_to_post').val(jQuery.param(dataObj));
    $('#pass_to_post').val(JSON.stringify(dataObj));
});


// Back button clicked
$("li#btn_back").click(function(){
    console.log("Back clicked");
});
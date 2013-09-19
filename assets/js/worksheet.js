/*
 * object.watch polyfill
 *
 * 2012-04-03
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 * Executes changes upon property change in objects
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
        window[id] = parsed;
        $("#user_answers").data(var_name, val);
    }
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
    //obj.watch(id, function(prop,oldval,newval){
    //    console.log("watch called");
    //    return newval;
    //});
    //console.log(swa.SWA_parents_adjusted_gross_income);
    parsed = parseFloat(value);
        if(isNaN(parsed)){
            parsed = 0;
        }
    $(element).val(parsed);
    obj[id] = parsed;
    $("#user_answers").data(id, parsed);
}

/**
 * FUNCTION triggerChange
 * Causes form values to trigger the .change() method upon automatic update
 * @param string id
 * @param string value
 */
// NOT CURRENTLY USED
function triggerChange(id, value) {
    $("#" + id).val(value).trigger('change');
}

/*******************************************************
 * SIMPLIFIED WORKSHEET A DYNAMIC ELEMENT EVENT HANDLERS
 *******************************************************/

/**
 * LINE 1
 * Parents adjusted gross income
 */
$(document).on('change', "#SWA_parents_adjusted_gross_income", function(){
    cantBeNegative(this);
});

/**
 * LINE 2A
 * Father's income from work
 */
$(document).on('change', "#SWA_fathers_income", function(){
    swa.watch('SWA_fathers_income', function(prop,oldval,newval){
        console.log("SWA_fathers_income called");
        return newval;
    });
    console.log(swa.SWA_parents_adjusted_gross_income);
});

/**
 * LINE 2B
 */
$(document).on('change', "#SWA_mothers_income", function(){
    cantBeNegative(this);
});

/**
 * LINE 4
 */
$(document).on('change', "#SWA_untaxed_income", function(){
    cantBeNegative(this);
});

/**
 * LINE 6
 */
$(document).on('change', "#SWA_total_additional_financial_information", function(){
    cantBeNegative(this);
});

/**
 * LINE 8
 */
$(document).on('change', "#SWA_income_tax_paid_2012", function(){
    cantBeNegative(this);
});

/**
 * HOW MANY MONTHS ENROLLED
 */
$(document).on('change', "#SWA_months_enrolled", function(){
    cantBeNegative(this);
});

/**
 * LINE 29
 */
$(document).on('change', "#SWA_student_adjusted_gross_income", function(){
    cantBeNegative(this);
});

/**
 * LINE 30
 */
$(document).on('change', "#SWA_students_income", function(){
    cantBeNegative(this);
});

/**
 * LINE 32
 */
$(document).on('change', "#SWA_students_untaxed_income_benefits", function(){
    cantBeNegative(this);
});

/**
 * LINE 34
 */
$(document).on('change', "#SWA_students_additional_financial_information", function(){
    cantBeNegative(this);
});

/**
 * LINE 36
 */
$(document).on('change', "#SWA_students_income_tax_paid_2012", function(){
    cantBeNegative(this);
});

/**
 * HOW MANY PARENTS WORKING
 */
$(document).on('change', "#how_many_parents_working", function(){
    cantBeNegative(this);
});

/**
 * EFC NINE MONTHS
 */
$(document).on('change', "#SWA_efc_nine_months", function(){
    cantBeNegative(this);
});
console.log("Regular B loaded");

// Prevent accidental form submission
$(document).ready(function(){
    $("#regular_a").bind("keydown", function(e) {
        var code = e.keyCode || e.which; 
        if (code  == 13) {               
            e.preventDefault();
            return false;
        }
    });
});

// If nothing is entered, replace placeholder with value of 0 on focus
$(document).on('focus', 'input', function(){
    var current_val = $(this).val();
    if(current_val == ''){
        $(this).val(0);
        $(this).trigger('change');
    }
});

// Enable drop-down menus
$('.dropdown-toggle').dropdown()

// Default to spouse is not enrolled in school more than 1/2 time
data('spouse_in_school', false);
$(document).on('click', '#spouse_in_school_drop_down_yes', function(){
    data('spouse_in_school', true);
});
$(document).on('click', '#spouse_in_school_drop_down_no', function(){
    data('spouse_in_school', false);
});

// Default to spouse is working
data('spouse_working', true);
$(document).on('click', '#spouse_working_drop_down_yes', function(){
    data('spouse_working', true);
});
$(document).on('click', '#spouse_working_drop_down_no', function(){
    data('spouse_working', false);
});

/**
 * FUNCTION determineAdjustedNetWorthBusinessFarm
 * Determines adjusted net worth of business/investment farm
 */

function determineAdjustedNetWorthBusinessFarm(){
    if(dataObj.net_worth_business_farm < 1){
        adjusted_net_worth_business_farm = 0;
    }else if(1 < dataObj.net_worth_business_farm && dataObj.net_worth_business_farm <= 12000){
        adjusted_net_worth_business_farm = dataObj.net_worth_business_farm * 0.4;
    }else if(120000 < dataObj.net_worth_business_farm && dataObj.net_worth_business_farm <= 365000){
        adjusted_net_worth_business_farm = ((dataObj.net_worth_business_farm - 120000) * 0.5) + 48000;
    }else if(365000 < dataObj.net_worth_business_farm && dataObj.net_worth_business_farm <= 610000){
        adjusted_net_worth_business_farm = ((dataObj.net_worth_business_farm - 365000) * 0.6) + 170500;
    }else if(dataObj.net_worth_business_farm > 610000){
        adjusted_net_worth_business_farm = (dataObj.net_worth_business_farm - 610000) + 317500;
    }
    data('adjusted_net_worth_business_farm', adjusted_net_worth_business_farm);
}
    
/**
 * FUNCTION determineAgeOfStudent
 * Determines age of student
 * @returns int
 */

function determineAgeOfStudent(){
    student_age = calcAge('student');
    // Get age of older parent for a one parent household
    if(dataObj.one_two_parent_household == 1){
        if(fathers_age){
            age_of_older_parent = fathers_age;
        }else{
            age_of_older_parent = mothers_age;
        }
    // Get age of older parent for a two parent household
    }else{
        // If father is older
        if(fathers_age > mothers_age){
            age_of_older_parent = fathers_age;
        // If father is younger
        }else if(fathers_age < mothers_age){
            age_of_older_parent = mothers_age;
        // If both parents are the same age
        }else{
            age_of_older_parent = fathers_age;
        }
    }
    data('age_of_older_parent',age_of_older_parent);
}

/**
 * FUNCTION determineAssetProtectionAllowance
 * Determines asset protection allowance
 */

function determineAssetProtectionAllowance(){
    // If married
    if(dataObj.married){
        switch(dataObj.student_age){
            case dataObj.student_age <= 25:
                asset_protection_allowance = 0;
                break;
            case 26:
                asset_protection_allowance = 2100;
                break;
            case 27:
                asset_protection_allowance = 4300;
                break;
            case 28:
                asset_protection_allowance = 6400;
                break;
            case 29:
                asset_protection_allowance = 8600;
                break;
            case 30:
                asset_protection_allowance = 10700;
                break;
            case 31:
                asset_protection_allowance = 12800;
                break;
            case 32:
                asset_protection_allowance = 15000;
                break;
            case 33:
                asset_protection_allowance = 17100;
                break;
            case 34:
                asset_protection_allowance = 19300;
                break;
            case 35:
                asset_protection_allowance = 21400;
                break;
            case 36:
                asset_protection_allowance = 23500;
                break;
            case 37:
                asset_protection_allowance = 25700;
                break;
            case 38:
                asset_protection_allowance = 27800;
                break;
            case 39:
                asset_protection_allowance = 30000;
                break;
            case 40:
                asset_protection_allowance = 32100;
                break;
            case 41:
                asset_protection_allowance = 32900;
                break;
            case 42:
                asset_protection_allowance = 33700;
                break;
            case 43:
                asset_protection_allowance = 34500;
                break;
            case 44:
                asset_protection_allowance = 35400;
                break;
            case 45:
                asset_protection_allowance = 36200;
                break;
            case 46:
                asset_protection_allowance = 37100;
                break;
            case 47:
                asset_protection_allowance = 38000;
                break;
            case 48:
                asset_protection_allowance = 39000;
                break;
            case 49:
                asset_protection_allowance = 39900;
                break;
            case 50:
                asset_protection_allowance = 40900;
                break;
            case 51:
                asset_protection_allowance = 42100;
                break;
            case 52:
                asset_protection_allowance = 43100;
                break;
            case 53:
                asset_protection_allowance = 44200;
                break;
            case 54:
                asset_protection_allowance = 45500;
                break;
            case 55:
                asset_protection_allowance = 46800;
                break;
            case 56:
                asset_protection_allowance = 47900;
                break;
            case 57:
                asset_protection_allowance = 49300;
                break;
            case 58:
                asset_protection_allowance = 50800;
                break;
            case 59:
                asset_protection_allowance = 52200;
                break;
            case 60:
                asset_protection_allowance = 53500;
                break;
            case 61:
                asset_protection_allowance = 55000;
                break;
            case 62:
                asset_protection_allowance = 56900;
                break;
            case 63:
                asset_protection_allowance = 58500;
                break;
            case 64:
                asset_protection_allowance = 60100;
                break;
            default:
                asset_protection_allowance = 61800;
                break;
        }
    // If not married
    }else{
        switch(dataObj.student_age){
            case dataObj.student_age <= 25:
                asset_protection_allowance = 0;
                break;
            case 26:
                asset_protection_allowance = 600;
                break;
            case 27:
                asset_protection_allowance = 1300;
                break;
            case 28:
                asset_protection_allowance = 1900;
                break;
            case 29:
                asset_protection_allowance = 2500;
                break;
            case 30:
                asset_protection_allowance = 3200;
                break;
            case 31:
                asset_protection_allowance = 3800;
                break;
            case 32:
                asset_protection_allowance = 4400;
                break;
            case 33:
                asset_protection_allowance = 5100;
                break;
            case 34:
                asset_protection_allowance = 5700;
                break;
            case 35:
                asset_protection_allowance = 6300;
                break;
            case 36:
                asset_protection_allowance = 7000;
                break;
            case 37:
                asset_protection_allowance = 7600;
                break;
            case 38:
                asset_protection_allowance = 8200;
                break;
            case 39:
                asset_protection_allowance = 8900;
                break;
            case 40:
                asset_protection_allowance = 9500;
                break;
            case 41:
                asset_protection_allowance = 9700;
                break;
            case 42:
                asset_protection_allowance = 9900;
                break;
            case 43:
                asset_protection_allowance = 10100;
                break;
            case 44:
                asset_protection_allowance = 10300;
                break;
            case 45:
                asset_protection_allowance = 10600;
                break;
            case 46:
                asset_protection_allowance = 10800;
                break;
            case 47:
                asset_protection_allowance = 11100;
                break;
            case 48:
                asset_protection_allowance = 11300;
                break;
            case 49:
                asset_protection_allowance = 11600;
                break;
            case 50:
                asset_protection_allowance = 11900;
                break;
            case 51:
                asset_protection_allowance = 12200;
                break;
            case 52:
                asset_protection_allowance = 12500;
                break;
            case 53:
                asset_protection_allowance = 12800;
                break;
            case 54:
                asset_protection_allowance = 13100;
                break;
            case 55:
                asset_protection_allowance = 13400;
                break;
            case 56:
                asset_protection_allowance = 13700;
                break;
            case 57:
                asset_protection_allowance = 14100;
                break;
            case 58:
                asset_protection_allowance = 14400;
                break;
            case 59:
                asset_protection_allowance = 14800;
                break;
            case 60:
                asset_protection_allowance = 15100;
                break;
            case 61:
                asset_protection_allowance = 15600;
                break;
            case 62:
                asset_protection_allowance = 16000;
                break;
            case 63:
                asset_protection_allowance = 16400;
                break;
            case 64:
                asset_protection_allowance = 16900;
                break;
            default:
                asset_protection_allowance = 17400;
                break;
        }
    }
    data('asset_protection_allowance',asset_protection_allowance);
}

/**
 * FUNCTION determineEmploymentExpense
 * Determines employment expense
 */

function determineEmploymentExpense(){
    // If student is married
    if(dataObj.married){
        // If spouse is working
        if(dataObj.spouse_working){
            if(dataObj.student_income < dataObj.spouse_income){
                lesser_income = 0.35 * dataObj.student_income;
            }else if(dataObj.student_income > dataObj.spouse_income){
                lesser_income = 0.35 * dataObj.spouse_income;
            }else{
                lesser_income = 0.35 * dataObj.student_income;
            }
            // If 35% of lesser income is greater than $3,900, set to $3,900
            if(lesser_income > 3900){
                employment_expense = 3900;
            }else{
                employment_expense = lesser_income;
            }
        // If spouse is not working
        }else{
            employment_expense = 0;
        }
    // If student is single, separated, divorced
    }else{
        employment_expense = 0;
    }
    data('employment_expense', employment_expense);
}

/**
 * FUNCTION determineIncomeProtectionAllowance
 * Determines income protection allowance
 */

function determineIncomeProtectionAllowance(){
    // If married
    if(dataObj.married){
        // If spouse is enrolled at least 1/2 time
        if(dataObj.spouse_in_school){
            income_protection_allowance = 9540;
        // If spouse is not enrolled at least 1/2 time
        }else{
            income_protection_allowance = 15,290;
        }
    // If single, separated, divorced
    }else{
        income_protection_allowance = 9540;
    }
    data('income_protection_allowance', income_protection_allowance);
}

/**
 * FUNCTION determineStudentStateTaxAllowance
 * Determines student's state tax allowance and places it into data object
 */

function determineStudentStateTaxAllowance(){
    switch(dataObj.state){
        case "Alabama":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Alaska":
            student_state_tax_allowance = dataObj.students_total_income * 0;
        break;
        case "American Samoa":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Arizona":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Arkansas":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "California":
            student_state_tax_allowance = dataObj.students_total_income * 0.05;
        break;
        case "Canada and Provinces":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Colorado":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Connecticut":
            student_state_tax_allowance = dataObj.students_total_income * 0.05;
        break;
        case "Delaware":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "District of Columbia":
            student_state_tax_allowance = dataObj.students_total_income * 0.05;
        break;
        case "Federated States of Micronesia":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Florida":
            student_state_tax_allowance = dataObj.students_total_income * 0.01;
        break;
        case "Georgia":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Guam":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Hawaii":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Idaho":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Illinois":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Indiana":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Iowa":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Kansas":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Kentucky":
            student_state_tax_allowance = dataObj.students_total_income * 0.04;
        break;
        case "Louisiana":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Maine":
            student_state_tax_allowance = dataObj.students_total_income * 0.04;
        break;
        case "Marshall Islands":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Maryland":
            student_state_tax_allowance = dataObj.students_total_income * 0.06;
        break;
        case "Massachusettes":
            student_state_tax_allowance = dataObj.students_total_income * 0.04;
        break;
        case "Mexico":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Michigan":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Minnesota":
            student_state_tax_allowance = dataObj.students_total_income * 0.04;
        break;
        case "Mississippi":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Missouri":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Montana":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Nebraska":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Nevada":
            student_state_tax_allowance = dataObj.students_total_income * 0.01;
        break;
        case "New Hampshire":
            student_state_tax_allowance = dataObj.students_total_income * 0.01;
        break;
        case "New Jersey":
            student_state_tax_allowance = dataObj.students_total_income * 0.04;
        break;
        case "New Mexico":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "New York":
            student_state_tax_allowance = dataObj.students_total_income * 0.06;
        break;
        case "North Dakota":
            student_state_tax_allowance = dataObj.students_total_income * 0.01;
        break;
        case "Northern Marianas Islands":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Ohio":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Oklahoma":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Oregon":
            student_state_tax_allowance = dataObj.students_total_income * 0.05;
        break;
        case "Palua":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Pennsylvania":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Puerto Rico":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Rhode Island":
            student_state_tax_allowance = dataObj.students_total_income * 0.04;
        break;
        case "South Carolina":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "South Dakota":
            student_state_tax_allowance = dataObj.students_total_income * 0.01;
        break;
        case "Tennessee":
            student_state_tax_allowance = dataObj.students_total_income * 0.01;
        break;
        case "Texas":
            student_state_tax_allowance = dataObj.students_total_income * 0.01;
        break;
        case "Utah":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Vermont":
            student_state_tax_allowance = dataObj.students_total_income * 0.03;
        break;
        case "Virgin Islands":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Virginia":
            student_state_tax_allowance = dataObj.students_total_income * 0.04;
        break;
        case "Washington":
            student_state_tax_allowance = dataObj.students_total_income * 0.01;
        break;
        case "West Virginia":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
        break;
        case "Wisconsin":
            student_state_tax_allowance = dataObj.students_total_income * 0.04;
        break;
        case "Wyoming":
            student_state_tax_allowance = dataObj.students_total_income * 0.01;
        break;
        case "Other":
            student_state_tax_allowance = dataObj.students_total_income * 0.02;
    }
    data('student_state_tax_allowance', student_state_tax_allowance);
}

/**
 * FUNCTION determineTotalParentsContributionAai
 * Determines total parent's contribution and places it in the data object
 */

function determineTotalParentsContributionAai(input_var){
    if(dataObj[input_var] < -3409){
        total_parents_contribution_aai = -750;
    }
    else if(-3409 <= dataObj[input_var] <= 15300){
        total_parents_contribution_aai = 0.22 * dataObj[input_var];
    }
    else if(15301 <= dataObj[input_var] <= 19200){
        total_parents_contribution_aai = 0.25 * (dataObj[input_var] - 15300) + 3366;
    }
    else if(19201 <= dataObj[input_var] <= 23100){
        total_parents_contribution_aai = 0.29 * (dataObj[input_var] - 19200) + 4341;
    }
    else if(23101 <= dataObj[input_var] <= 27000){
        total_parents_contribution_aai = 0.34 * (dataObj[input_var] - 23100) + 5472;
    }
    else if(27001 <= dataObj[input_var] <= 30900){
        total_parents_contribution_aai = 0.4 * (dataObj[input_var] - 27000) + 6798;
    }
    else if(dataObj[input_var] >= 30901){
        total_parents_contribution_aai = 0.47 * (dataObj[input_var] - 30900) + 8358;
    }
    createFloat('total_parents_contribution_aai', total_parents_contribution_aai);
}

/**
 * FUNCTION determineTotalParentsContributionAlternateAai
 * Determines line B4 and places into data object
 * NOTE: Need to combine this and above function
 */

function determineTotalParentsContributionAlternateAai(){
    if(dataObj.alternate_parent_aai_more_than_nine_months <= -3409){
        total_parents_contribution_alternate_aai = -750;
    }
    else if(-3409 < dataObj.alternate_parent_aai_more_than_nine_months <= 15300){
        total_parents_contribution_alternate_aai = 0.22 * dataObj.alternate_parent_aai_more_than_nine_months;
    }
    else if(15301 < dataObj.alternate_parent_aai_more_than_nine_months <= 19200){
        total_parents_contribution_alternate_aai = 0.25 * (dataObj.alternate_parent_aai_more_than_nine_months - 15300) + 3366;
    }
    else if(19201 < dataObj.alternate_parent_aai_more_than_nine_months <= 23100){
        total_parents_contribution_alternate_aai = 0.29 * (dataObj.alternate_parent_aai_more_than_nine_months - 19200) + 4341;
    }
    else if(23101 < dataObj.alternate_parent_aai_more_than_nine_months <= 27000){
        total_parents_contribution_alternate_aai = 0.34 * (dataObj.alternate_parent_aai_more_than_nine_months - 23100) + 5472;
    }
    else if(27001 < dataObj.alternate_parent_aai_more_than_nine_months <= 30900){
        total_parents_contribution_alternate_aai = 0.4 * (dataObj.alternate_parent_aai_more_than_nine_months - 27000) + 6798;
    }
    else if(dataObj.alternate_parent_aai_more_than_nine_months >= 30901){
        total_parents_contribution_alternate_aai = 0.47 * (dataObj.alternate_parent_aai_more_than_nine_months - 30900) + 8358;
    }
    createFloat('total_parents_contribution_alternate_aai',total_parents_contribution_alternate_aai);
}

/**
 * FUNCTION ssTaxAllowance
 * Determines social security tax allowance and places it in data object
 * @param string student_or_spouse
 */

function ssTaxAllowance(student_or_spouse){
    income_from_work = student_or_spouse + "_income";
    student_or_spouse_ss_tax_allowance = student_or_spouse + '_ss_tax_allowance';
    if(dataObj[income_from_work] > 110100){
        window[student_or_spouse_ss_tax_allowance] = 8422.65 + (0.0145 * (dataObj[income_from_work] - 110100));
        data(student_or_spouse_ss_tax_allowance, window[student_or_spouse_ss_tax_allowance]);
    }else{
        window[student_or_spouse_ss_tax_allowance] = 0.0765 * dataObj[income_from_work];
        data(student_or_spouse_ss_tax_allowance, window[student_or_spouse_ss_tax_allowance]);
    }
}

/**
 * FUNCTION stateTaxAllowance
 * Determines the state tax allowance
 */

function stateTaxAllowance(){
    switch(dataObj.state){
        case "Alabama":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Alaska":
            state_tax_allowance = dataObj.total_income * 0.00;
        break;
        case "American Samoa":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Arizona":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Arkansas":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "California":
            state_tax_allowance = dataObj.total_income * 0.05;
        break;
        case "Canada and Provinces":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Colorado":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Connecticut":
            state_tax_allowance = dataObj.total_income * 0.05;
        break;
        case "Delaware":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "District of Columbia":
            state_tax_allowance = dataObj.total_income * 0.05;
        break;
        case "Federated States of Micronesia":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Florida":
            state_tax_allowance = dataObj.total_income * 0.01;
        break;
        case "Georgia":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Guam":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Hawaii":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Idaho":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Illinois":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Indiana":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Iowa":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Kansas":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Kentucky":
            state_tax_allowance = dataObj.total_income * 0.04;
        break;
        case "Louisiana":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Maine":
            state_tax_allowance = dataObj.total_income * 0.04;
        break;
        case "Marshall Islands":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Maryland":
            state_tax_allowance = dataObj.total_income * 0.06;
        break;
        case "Massachusettes":
            state_tax_allowance = dataObj.total_income * 0.04;
        break;
        case "Mexico":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Michigan":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Minnesota":
            state_tax_allowance = dataObj.total_income * 0.04;
        break;
        case "Mississippi":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Missouri":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Montana":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Nebraska":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Nevada":
            state_tax_allowance = dataObj.total_income * 0.01;
        break;
        case "New Hampshire":
            state_tax_allowance = dataObj.total_income * 0.01;
        break;
        case "New Jersey":
            state_tax_allowance = dataObj.total_income * 0.04;
        break;
        case "New Mexico":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "New York":
            state_tax_allowance = dataObj.total_income * 0.06;
        break;
        case "North Carolina":
            state_tax_allowance = dataObj.total_income * 0.04;
        break;
        case "North Dakota":
            state_tax_allowance = dataObj.total_income * 0.01;
        break;
        case "Northern Marianas Islands":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Ohio":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Oklahoma":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Oregon":
            state_tax_allowance = dataObj.total_income * 0.05;
        break;
        case "Palua":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Pennsylvania":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Puerto Rico":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Rhode Island":
            state_tax_allowance = dataObj.total_income * 0.04;
        break;
        case "South Carolina":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "South Dakota":
            state_tax_allowance = dataObj.total_income * 0.01;
        break;
        case "Tennessee":
            state_tax_allowance = dataObj.total_income * 0.01;
        break;
        case "Texas":
            state_tax_allowance = dataObj.total_income * 0.01;
        break;
        case "Utah":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Vermont":
            state_tax_allowance = dataObj.total_income * 0.03;
        break;
        case "Virgin Islands":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Virginia":
            state_tax_allowance = dataObj.total_income * 0.04;
        break;
        case "Washington":
            state_tax_allowance = dataObj.total_income * 0.01;
        break;
        case "West Virginia":
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
        case "Wisconsin":
            state_tax_allowance = dataObj.total_income * 0.04;
        break;
        case "Wyoming":
            state_tax_allowance = dataObj.total_income * 0.01;
        break;
        default:
            state_tax_allowance = dataObj.total_income * 0.02;
        break;
    }
    data('state_tax_allowance', state_tax_allowance);
}

/*******************************************************
 * REGULAR WORKSHEET A DYNAMIC ELEMENT EVENT HANDLERS
 *******************************************************/

/**
 * FORM VARIABLES
 * 
 * Line 1: adjusted_gross_income 
 * Line 2A: student_income 
 * Line 2B: spouse_income 
 * Line 2: total_income_from_work 
 * Line 3: taxable_income 
 * Line 4: untaxed_income_benefits 
 * Line 5: taxable_untaxable_income 
 * Line 6: total_additional_financial_information 
 * Line 7: total_income 
 * Line 8: income_tax_paid 
 * Line 9: state_tax_allowance 
 * Line 10: student_ss_tax_allowance
 * Line 11: spouse_ss_tax_allowance
 * Line 12: income_protection_allowance
 * Line 13: employment_expense
 * Line 14: total_allowances
 * Line 15: available_income
 * Line 16: CONSTANT 0.5
 * Line 17: student_contribution_from_ai
 * Line 18: cash_savings_checking
 * Line 19: net_worth_investments
 * Line 20: net_worth_business_farm
 * Line 21: adjusted_net_worth_business_farm
 * Line 22: net_worth_assets
 * Line 23: asset_protection_allowance
 * Line 24: discretionary_net_worth
 * Line 25: CONSTANT 0.2
 * Line 26: student_contribution_from_assets
 * Line 27: contribution_from_ai_and_assets
 * Line 28: number_in_college
 * Line 29: efc_nine_months
 * Line B1: efc_nine_months
 * Line B2: CONSTANT 9
 * Line B3: efc_per_month
 * Line B4: months_enrolled
 * Line B5: efc_less_than_nine_months
 */

/**
 * LINE 1
 * Student adjusted gross income
 */
$(document).on('change', "#adjusted_gross_income", function(){
    cantBeNegative(this);
});

/**
 * LINE 2A, 2B
 * Student's income from work, spouse's income from work
 */
$(document).on('change', "#student_income, #spouse_income", function(){
    // Line 2: Lines 2A + 2B
    if(dataObj.student_income && dataObj.spouse_income){
        total_income_from_work = dataObj.student_income + dataObj.spouse_income;
        data('total_income_from_work', total_income_from_work);
    }
    try{
        // Line 3: If not required to file taxes, taxable income is set to line 2
        if(dataObj.not_required_taxes){
            data('taxable_income', dataObj.total_income_from_work);
        // Line 3: If required to file taxes, taxable income is set to line 1    
        }else{
            data('taxable_income', dataObj.adjusted_gross_income);
        }
    }catch(e){
        // If not required to file isn't set, assume they are required
        data('taxable_income', dataObj.adjusted_gross_income);
    }
});


/**
 * LINE 4
 */
$(document).on('change', "#untaxed_income_benefits", function(){
    // Line 5: Line 3 + line 4
    try{
        taxable_untaxable_income = dataObj.taxable_income + dataObj.untaxed_income_benefits;
        data('taxable_untaxable_income', taxable_untaxable_income);
    }catch(e){
        alert("Please complete the previous lines.");
    }
});

/**
 * LINE 6
 */
$(document).on('change', "#total_additional_financial_information", function(){
    // Line 7: Line 5 - line 6
    try{
        total_income = dataObj.taxable_untaxable_income - dataObj.total_additional_financial_information;
        data('total_income', total_income);
    }catch(e){
        alert("Please complete the previous lines.");
    }
});

/**
 * LINE 8
 */

$(document).on('change', "#income_tax_paid", function(){
    cantBeNegative(this);
    // Line 9: Use table B1 and line 7 (total_income)
    stateTaxAllowance();
    // Line 10: Use line 2A (student_income) and table A2
    ssTaxAllowance('student');
    // Line 11: Use line 2B (spouse_income) and table A2
    ssTaxAllowance('spouse');
    // Line 12: Use table A3, number_in_household, and number_in_college
    determineIncomeProtectionAllowance();
    // Line 13: Use number of parents, number of parents working
    // If two parent household, only one working
    determineEmploymentExpense();
    // Line 14: Sum 8, 9, 10, 11, 12, 13
    total_allowances = dataObj.income_tax_paid +
                        dataObj.state_tax_allowance +
                        dataObj.student_ss_tax_allowance +
                        dataObj.spouse_ss_tax_allowance +
                        dataObj.income_protection_allowance +
                        dataObj.employment_expense;
    data('total_allowances', total_allowances);
    // Line 15: Line 7 - line 14
    data('available_income', dataObj.total_income - dataObj.total_allowances);
    // Line 16: CONSTANT 0.5
    // Line 17: Line 15 * 0.5
    student_contribution_from_ai = dataObj.available_income * 0.5;
    data('student_contribution_from_ai', student_contribution_from_ai);
    // Line 27: Line 17
    data('contribution_from_ai_and_assets', dataObj.student_contribution_from_ai);
    // Line 28: number in college
    // Line 29: Line 27 / number_in_college
    efc_nine_months = dataObj.contribution_from_ai_and_assets / dataObj.number_in_college;
    if(efc_nine_months < 0){
        efc_nine_months = 0;
    }
    data('efc_nine_months', efc_nine_months);
    $("#efc_nine_months").val(dataObj.efc_nine_months);
});

    
/**
 * IF ATTENDING FOR OTHER THAN NINE MONTHS
 */
// Determine number of months to be enrolled, defaults to 9
$(document).on('change', '#months_enrolled', function(){
    data('months_enrolled', $(this).val());
    if(dataObj.months_enrolled == 9){
        $("div.row.efc_nine_months").show();
        $("div#not_nine_months_questions").attr('class', 'hidden');
    }else{
        $("div.row.efc_nine_months").hide();
        $("div#not_nine_months_questions").removeAttr('class');
    }
    // If attending for less than nine months
    if(dataObj.months_enrolled < 9){
        // Determine EFC per months
        data('efc_per_month', dataObj.efc_nine_months / 9);
        // efc_per_months * months_enrolled
        data('efc_less_than_nine_months', dataObj.efc_per_month * dataObj.months_enrolled);
        $("#expected_family_contribution_other_than_nine_months").val(dataObj.efc_less_than_nine_months);
    // If attending for more than 9 months
    }else{
        $("#expected_family_contribution_other_than_nine_months").val(dataObj.efc_nine_months);
        data('lowered_efc_nine_months',lowered_efc_nine_months);
    }
});
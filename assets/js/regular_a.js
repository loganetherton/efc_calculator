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

/**
 * FUNCTION determineAgeOfOlderParent
 * Determines age of older parent
 * @returns int
 */

function determineAgeOfOlderParent(){
    mothers_age = calcAge('mother');
    fathers_age = calcAge('father');
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
    return age_of_older_parent;
}

/**
 * FUNCTION determineEducationSavingsAssetProtectionAllowance
 * Determines education, savings, and asset protection allowance
 */

function determineEducationSavingsAssetProtectionAllowance(){
    console.log(age_of_older_parent);
    if(dataObj.one_two_parent_household == 1){
        switch(age_of_older_parent){
            case 25:
                education_savings_asset_protection_allowance = 0;
                break;
            case 26:
                education_savings_asset_protection_allowance = 2100;
                break;
            case 27:
                education_savings_asset_protection_allowance = 4300;
                break;
            case 28:
                education_savings_asset_protection_allowance = 6400;
                break;
            case 29:
                education_savings_asset_protection_allowance = 8600;
                break;
            case 30:
                education_savings_asset_protection_allowance = 10700;
                break;
            case 31:
                education_savings_asset_protection_allowance = 12800;
                break;
            case 32:
                education_savings_asset_protection_allowance = 15000;
                break;
            case 33:
                education_savings_asset_protection_allowance = 17100;
                break;
            case 34:
                education_savings_asset_protection_allowance = 19300;
                break;
            case 35:
                education_savings_asset_protection_allowance = 21400;
                break;
            case 36:
                education_savings_asset_protection_allowance = 23500;
                break;
            case 37:
                education_savings_asset_protection_allowance = 25700;
                break;
            case 38:
                education_savings_asset_protection_allowance = 27800;
                break;
            case 39:
                education_savings_asset_protection_allowance = 30000;
                break;
            case 40:
                education_savings_asset_protection_allowance = 32100;
                break;
            case 41:
                education_savings_asset_protection_allowance = 32900;
                break;
            case 42:
                education_savings_asset_protection_allowance = 33700;
                break;
            case 43:
                education_savings_asset_protection_allowance = 34500;
                break;
            case 44:
                education_savings_asset_protection_allowance = 35400;
                break;
            case 45:
                education_savings_asset_protection_allowance = 36200;
                break;
            case 46:
                education_savings_asset_protection_allowance = 37100;
                break;
            case 47:
                education_savings_asset_protection_allowance = 38000;
                break;
            case 48:
                education_savings_asset_protection_allowance = 39000;
                break;
            case 49:
                education_savings_asset_protection_allowance = 39900;
                break;
            case 50:
                education_savings_asset_protection_allowance = 40900;
                break;
            case 51:
                education_savings_asset_protection_allowance = 42100;
                break;
            case 52:
                education_savings_asset_protection_allowance = 43100;
                break;
            case 53:
                education_savings_asset_protection_allowance = 44200;
                break;
            case 54:
                education_savings_asset_protection_allowance = 45500;
                break;
            case 55:
                education_savings_asset_protection_allowance = 46800;
                break;
            case 56:
                education_savings_asset_protection_allowance = 47900;
                break;
            case 57:
                education_savings_asset_protection_allowance = 49300;
                break;
            case 58:
                education_savings_asset_protection_allowance = 50800;
                break;
            case 59:
                education_savings_asset_protection_allowance = 52200;
                break;
            case 60:
                education_savings_asset_protection_allowance = 53500;
                break;
            case 61:
                education_savings_asset_protection_allowance = 55000;
                break;
            case 62:
                education_savings_asset_protection_allowance = 56900;
                break;
            case 63:
                education_savings_asset_protection_allowance = 58500;
                break;
            case 64:
                education_savings_asset_protection_allowance = 60100;
                break;
            default:
                education_savings_asset_protection_allowance = 61800;
                break;
        }
    }else if(dataObj.one_two_parent_household == 2){
        switch(age_of_older_parent){
            case 25:
                education_savings_asset_protection_allowance = 0;
                break;
            case 26:
                education_savings_asset_protection_allowance = 600;
                break;
            case 27:
                education_savings_asset_protection_allowance = 1300;
                break;
            case 28:
                education_savings_asset_protection_allowance = 1900;
                break;
            case 29:
                education_savings_asset_protection_allowance = 2500;
                break;
            case 30:
                education_savings_asset_protection_allowance = 3200;
                break;
            case 31:
                education_savings_asset_protection_allowance = 3800;
                break;
            case 32:
                education_savings_asset_protection_allowance = 4400;
                break;
            case 33:
                education_savings_asset_protection_allowance = 5100;
                break;
            case 34:
                education_savings_asset_protection_allowance = 5700;
                break;
            case 35:
                education_savings_asset_protection_allowance = 6300;
                break;
            case 36:
                education_savings_asset_protection_allowance = 7000;
                break;
            case 37:
                education_savings_asset_protection_allowance = 7600;
                break;
            case 38:
                education_savings_asset_protection_allowance = 8200;
                break;
            case 39:
                education_savings_asset_protection_allowance = 8900;
                break;
            case 40:
                education_savings_asset_protection_allowance = 9500;
                break;
            case 41:
                education_savings_asset_protection_allowance = 9700;
                break;
            case 42:
                education_savings_asset_protection_allowance = 9900;
                break;
            case 43:
                education_savings_asset_protection_allowance = 10100;
                break;
            case 44:
                education_savings_asset_protection_allowance = 10300;
                break;
            case 45:
                education_savings_asset_protection_allowance = 10600;
                break;
            case 46:
                education_savings_asset_protection_allowance = 10800;
                break;
            case 47:
                education_savings_asset_protection_allowance = 11100;
                break;
            case 48:
                education_savings_asset_protection_allowance = 11300;
                break;
            case 49:
                education_savings_asset_protection_allowance = 11600;
                break;
            case 50:
                education_savings_asset_protection_allowance = 11900;
                break;
            case 51:
                education_savings_asset_protection_allowance = 12200;
                break;
            case 52:
                education_savings_asset_protection_allowance = 12500;
                break;
            case 53:
                education_savings_asset_protection_allowance = 12800;
                break;
            case 54:
                education_savings_asset_protection_allowance = 13100;
                break;
            case 55:
                education_savings_asset_protection_allowance = 13400;
                break;
            case 56:
                education_savings_asset_protection_allowance = 13700;
                break;
            case 57:
                education_savings_asset_protection_allowance = 14100;
                break;
            case 58:
                education_savings_asset_protection_allowance = 14400;
                break;
            case 59:
                education_savings_asset_protection_allowance = 14800;
                break;
            case 60:
                education_savings_asset_protection_allowance = 15100;
                break;
            case 61:
                education_savings_asset_protection_allowance = 15600;
                break;
            case 62:
                education_savings_asset_protection_allowance = 16000;
                break;
            case 63:
                education_savings_asset_protection_allowance = 16400;
                break;
            case 64:
                education_savings_asset_protection_allowance = 16900;
                break;
            default:
                education_savings_asset_protection_allowance = 17400;
                break;
        }
    }
    data('education_savings_asset_protection_allowance', education_savings_asset_protection_allowance);
}

/**
 * FUNCTION determineEmploymentExpense
 * Determines employment expense
 */

function determineEmploymentExpense(){
    if(dataObj.one_two_parent_household == 2 && dataObj.number_parents_working == 1){
        parent_employment_expense = 0;
    }else if(dataObj.number_parents_working == 2){
        if(dataObj.mothers_income < dataObj.fathers_income){
            lesser_income = 0.35 * dataObj.mothers_income;
        }else if(dataObj.mothers_income > dataObj.fathers_income){
            lesser_income = 0.35 * dataObj.fathers_income;
        }else{
            lesser_income = 0.35 * dataObj.mothers_income;
        }
        if(lesser_income > 3900){
            parent_employment_expense = 3900;
        }else{
            parent_employment_expense = lesser_income;
        }
    // If single parent household
    }else if(dataObj.one_two_parent_household == 1){
        if(dataObj.mothers_income != 0){
            parent_employment_expense = 0.35 * dataObj.mothers_income;
            if(3900 < parent_employment_expense){
                parent_employment_expense = 3900;
            }
        }else if(dataObj.fathers_income != 0){
            parent_employment_expense = 0.35 * dataObj.fathers_income;
            if(3900 < parent_employment_expense){
                parent_employment_expense = 3900;
            }
        }
    }
    createInt('parent_employment_expense', parent_employment_expense);
}

/**
 * FUNCTION determineIncomeProtectionAllowance
 * Determines income protection allowance
 */

function determineIncomeProtectionAllowance(){
    switch(dataObj.number_in_household){
    case 2:
        switch(dataObj.number_in_college){
            case 1:
                parent_income_protection_allowance = 17100;
                break;
            case 2:
                parent_income_protection_allowance = 14170;
                break;
        }
        break;
    case 3:
        switch(dataObj.number_in_college){
            case 1:
                parent_income_protection_allowance = 21290;
                break;
            case 2:
                parent_income_protection_allowance = 18380;
                break;
            case 3:
                parent_income_protection_allowance = 15450;
                break;
        }
        break;
    case 4:
        switch(dataObj.number_in_college){
            case 1:
                parent_income_protection_allowance = 26290;
                break;
            case 2:
                parent_income_protection_allowance = 23370;
                break;
            case 3:
                parent_income_protection_allowance = 20460;
                break;
            case 4:
                parent_income_protection_allowance = 17530;
                break;
        }
        break;
    case 5:
        switch(dataObj.number_in_college){
            case 1:
                parent_income_protection_allowance = 31020;
                break;
            case 2:
                parent_income_protection_allowance = 28100;
                break;
            case 3:
                parent_income_protection_allowance = 25190;
                break;
            case 4:
                parent_income_protection_allowance = 22260;
                break;
            case 5:
                parent_income_protection_allowance = 19350;
                break;
        }
        break;
    case 6:
        switch(dataObj.number_in_college){
            case 1:
                parent_income_protection_allowance = 36290;
                break;
            case 2:
                parent_income_protection_allowance = 33360;
                break;
            case 3:
                parent_income_protection_allowance = 30450;
                break;
            case 4:
                parent_income_protection_allowance = 27530;
                break;
            case 5:
                parent_income_protection_allowance = 24620;
                break;
        }
        break;
    }
    
    if(dataObj.number_in_household > 6){
        over_six_in_household = dataObj.number_in_household - 6;
        
        switch(dataObj.number_in_college){
            case 1:
                income_protection_allowance = 36290 + (4100 * over_six_in_household);
                break;
            case 2:
                income_protection_allowance = 33360 + (4100 * over_six_in_household);
                break;
            case 3:
                income_protection_allowance = 30450 + (4100 * over_six_in_household);
                break;
            case 4:
                income_protection_allowance = 27530 + (4100 * over_six_in_household);
                break;
            case 5:
                income_protection_allowance = 24620 + (4100 * over_six_in_household);
                break;
        }
        
        if(dataObj.number_in_college > 5){
            over_five_in_college = dataObj.number_in_college - 5;
            income_protection_allowance = 24620 + (4100 * over_six_in_household) - (2910 * over_five_in_college);
        }
    }
    
    data('parent_income_protection_allowance', parent_income_protection_allowance);
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
    if(student_state_tax_allowance < 0){
        student_state_tax_allowance = 0;
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
    else if((-3409 <= dataObj[input_var]) && (dataObj[input_var]<= 15300)){
        total_parents_contribution_aai = 0.22 * dataObj[input_var];
    }
    else if((15301 <= dataObj[input_var]) && (dataObj[input_var]<= 19200)){
        total_parents_contribution_aai = 0.25 * (dataObj[input_var] - 15300) + 3366;
    }
    else if((19201 <= dataObj[input_var]) &&(dataObj[input_var]<= 23100)){
        total_parents_contribution_aai = 0.29 * (dataObj[input_var] - 19200) + 4341;
    }
    else if((23101 <= dataObj[input_var]) && (dataObj[input_var] <= 27000)){
        total_parents_contribution_aai = 0.34 * (dataObj[input_var] - 23100) + 5472;
    }
    else if((27001 <= dataObj[input_var]) && (dataObj[input_var] <= 30900)){
        total_parents_contribution_aai = 0.4 * (dataObj[input_var] - 27000) + 6798;
    }
    else if(dataObj[input_var] >= 30901){
        total_parents_contribution_aai = 0.47 * (dataObj[input_var] - 30900) + 8358;
    }
    data('total_parents_contribution_aai', total_parents_contribution_aai);
}

/**
 * FUNCTION determineTotalParentsContributionAai
 * Determines total parent's contribution for lowered EFC and places it in the data object
 */

function determineTotalParentsContributionAaiEfcLowered(input_var){
    if(dataObj[input_var] < -3409){
        total_parents_contribution_aai = -750;
    }
    else if((-3409 <= dataObj[input_var]) && (dataObj[input_var]<= 15300)){
        total_parents_contribution_aai = 0.22 * dataObj[input_var];
    }
    else if((15301 <= dataObj[input_var]) && (dataObj[input_var]<= 19200)){
        total_parents_contribution_aai = 0.25 * (dataObj[input_var] - 15300) + 3366;
    }
    else if((19201 <= dataObj[input_var]) &&(dataObj[input_var]<= 23100)){
        total_parents_contribution_aai = 0.29 * (dataObj[input_var] - 19200) + 4341;
    }
    else if((23101 <= dataObj[input_var]) && (dataObj[input_var] <= 27000)){
        total_parents_contribution_aai = 0.34 * (dataObj[input_var] - 23100) + 5472;
    }
    else if((27001 <= dataObj[input_var]) && (dataObj[input_var] <= 30900)){
        total_parents_contribution_aai = 0.4 * (dataObj[input_var] - 27000) + 6798;
    }
    else if(dataObj[input_var] >= 30901){
        total_parents_contribution_aai = 0.47 * (dataObj[input_var] - 30900) + 8358;
    }
    data('total_parents_contribution_aai_efc_lowered', total_parents_contribution_aai);
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
    else if((-3409 < dataObj.alternate_parent_aai_more_than_nine_months) &&(dataObj.alternate_parent_aai_more_than_nine_months <= 15300)){
        total_parents_contribution_alternate_aai = 0.22 * dataObj.alternate_parent_aai_more_than_nine_months;
    }
    else if((15301 < dataObj.alternate_parent_aai_more_than_nine_months) && (dataObj.alternate_parent_aai_more_than_nine_months <= 19200)){
        total_parents_contribution_alternate_aai = 0.25 * (dataObj.alternate_parent_aai_more_than_nine_months - 15300) + 3366;
    }
    else if((19201 < dataObj.alternate_parent_aai_more_than_nine_months) && (dataObj.alternate_parent_aai_more_than_nine_months <= 23100)){
        total_parents_contribution_alternate_aai = 0.29 * (dataObj.alternate_parent_aai_more_than_nine_months - 19200) + 4341;
    }
    else if((23101 < dataObj.alternate_parent_aai_more_than_nine_months) && (dataObj.alternate_parent_aai_more_than_nine_months <= 27000)){
        total_parents_contribution_alternate_aai = 0.34 * (dataObj.alternate_parent_aai_more_than_nine_months - 23100) + 5472;
    }
    else if((27001 < dataObj.alternate_parent_aai_more_than_nine_months) && (dataObj.alternate_parent_aai_more_than_nine_months <= 30900)){
        total_parents_contribution_alternate_aai = 0.4 * (dataObj.alternate_parent_aai_more_than_nine_months - 27000) + 6798;
    }
    else if(dataObj.alternate_parent_aai_more_than_nine_months >= 30901){
        total_parents_contribution_alternate_aai = 0.47 * (dataObj.alternate_parent_aai_more_than_nine_months - 30900) + 8358;
    }
    createFloat('total_parents_contribution_alternate_aai',total_parents_contribution_alternate_aai);
}

/**
 * FUNCTION lowerEfcNineMonths
 * Determines the EFC is student and parent investment assets are lowered to zero
 */

function lowerEfcNineMonths(){
    // Set parent investments to zero
    // Line 16 (parents_cash_savings_checking) set to 0
    data('parents_cash_savings_checking_efc_lowered', 0);
    // Line 17 (dataObj.parents_net_worth_investments)
    data('parents_net_worth_investments_efc_lowered', 0);
    // Line 18 (dataObj.parents_net_worth_business_farm) set to 0
    data('parents_net_worth_business_farm_efc_lowered', 0);
    // Leave 19 as is (dataObj.parents_adjusted_net_worth_business_farm)
    // Line 20 recalculated (parent_net_worth_assets)
    parent_net_worth_assets_efc_lowered = dataObj.parents_cash_savings_checking_efc_lowered
    + dataObj.parents_net_worth_investments_efc_lowered
    + dataObj.parents_net_worth_business_farm_efc_lowered;
    data('parent_net_worth_assets_efc_lowered', parent_net_worth_assets_efc_lowered);
    // Leave 21 as is (education_savings_asset_protection_allowance)
    // Line 22 (discretionary_net_worth)
    parent_discretionary_net_worth_efc_lowered = dataObj.parent_net_worth_assets_efc_lowered
    - dataObj.education_savings_asset_protection_allowance;
    data('parent_discretionary_net_worth_efc_lowered', parent_discretionary_net_worth_efc_lowered);
    // Line 24 (parent_contribution_from_assets)
    parent_contribution_from_assets_efc_lowered = dataObj.parent_discretionary_net_worth_efc_lowered * 0.12;
    data('parent_contribution_from_assets_efc_lowered', parent_contribution_from_assets_efc_lowered);
    // Line 25 (parent_adjusted_available_income)
    data('parent_adjusted_available_income_efc_lowered', dataObj.parent_available_income
         + dataObj.parent_contribution_from_assets_efc_lowered);
    // Line 26 (total_parents_contribution_aai_efc_lowered)
    determineTotalParentsContributionAaiEfcLowered('parent_adjusted_available_income_efc_lowered');
    // Leave line 27 alone
    // Line 28 (parent_contribution_nine_months_efc_lowered)
    createFloat('parent_contribution_nine_months_efc_lowered', dataObj.total_parents_contribution_aai_efc_lowered
                / dataObj.number_in_college); 
    
    // Set student investments to zero
    data('student_net_worth_investments_efc_lowered', 0);
    // Set student cash, savings, and checking to zero
    data('student_cash_savings_checking_efc_lowered', 0);
    // Set student business/investment farm to zero
    data('student_net_worth_business_farm_efc_lowered' ,0);
    // Leave 47 alone (student_net_worth_business_farm)
    // Line 48 (student_net_worth)
    data('student_net_worth_efc_lowered',
         dataObj.student_cash_savings_checking_efc_lowered +
         dataObj.student_net_worth_investments_efc_lowered +
         dataObj.student_net_worth_business_farm);
    // Line 50 (student_contribution_from_assets)
    data('student_contribution_from_assets_efc_lowered', dataObj.student_net_worth_efc_lowered * 0.2);
    // Lowered EFC
    // Line 51: Line 28 + line 44 + line 50
    efc_nine_months_efc_lowered = dataObj.parent_contribution_nine_months_efc_lowered
    + dataObj.student_contribution_from_ai
    + dataObj.student_contribution_from_assets_efc_lowered;
    if(efc_nine_months_efc_lowered < 0){
        efc_nine_months_efc_lowered = 0;
    }
    createFloat('efc_nine_months_efc_lowered', efc_nine_months_efc_lowered);
    $("#efc_lowered").val(dataObj.efc_nine_months_efc_lowered);
}

/**
 * FUNCTION ssTaxAllowance
 * Determines social security tax allowance and places it in data object
 * @param string father_or_mother
 */

function ssTaxAllowance(father_or_mother){
    parent_income = father_or_mother + "_income";
    parent_ss_tax_allowance = father_or_mother + '_ss_tax_allowance';
    if(dataObj[parent_income] > 110100){
        window[parent_ss_tax_allowance] = 8422.65 + (0.0145 * (dataObj[parent_income] - 110100));
        data(parent_ss_tax_allowance, window[parent_ss_tax_allowance]);
    }else{
        window[parent_ss_tax_allowance] = 0.0765 * dataObj[parent_income];
        data(parent_ss_tax_allowance, window[parent_ss_tax_allowance]);
    }
}

/**
 * FUNCTION stateTaxAllowance
 * Determines the state tax allowance
 */

function stateTaxAllowance(){
    try{
        if(dataObj.parent_total_income > 15000){
            tax_allowance_high = true;
        }else{
            tax_allowance_high = false;
        }
    }catch(e){
        $("#income_tax_paid_2012").focus();
    }
    switch(dataObj.parent_state){
        case "Alabama":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }
        break;
        case "Alaska":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "American Samoa":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Arizona":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }
        break;
        case "Arkansas":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }
        break;
        case "California":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.08;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.07;
            }
        break;
        case "Canada and Provinces":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Colorado":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Connecticut":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.08;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.07;
            }
        break;
        case "Delaware":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "District of Columbia":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.07;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }
        break;
        case "Federated States of Micronesia":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Florida":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }
        break;
        case "Georgia":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }
        break;
        case "Guam":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Hawaii":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }
        break;
        case "Idaho":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Illinois":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Indiana":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }
        break;
        case "Iowa":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Kansas":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Kentucky":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Louisiana":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }
        break;
        case "Maine":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }
        break;
        case "Marshall Islands":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Maryland":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.08;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.07;
            }
        break;
        case "Massachusettes":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.07;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }
        break;
        case "Mexico":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Michigan":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Minnesota":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }
        break;
        case "Mississippi":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }
        break;
        case "Missouri":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Montana":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Nebraska":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Nevada":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }
        break;
        case "New Hampshire":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "New Jersey":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.09;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.08;
            }
        break;
        case "New Mexico":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }
        break;
        case "New York":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.09;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.08;
            }
        break;
        case "North Dakota":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }
        break;
        case "North Dakota":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }
        break;
        case "Northern Marianas Islands":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Ohio":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }
        break;
        case "Oklahoma":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }
        break;
        case "Oregon":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.07;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }
        break;
        case "Palua":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Pennsylvania":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Puerto Rico":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Rhode Island":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.07;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }
        break;
        case "South Carolina":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "South Dakota":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Tennessee":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Texas":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }
        break;
        case "Utah":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }
        break;
        case "Vermont":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }
        break;
        case "Virgin Islands":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        case "Virginia":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.05;
            }
        break;
        case "Washington":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }
        break;
        case "West Virginia":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }
        break;
        case "Wisconsin":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.07;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.06;
            }
        break;
        case "Wyoming":
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
        default:
            if(tax_allowance_high){
                parent_state_tax_allowance = dataObj.parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = dataObj.parent_total_income * 0.01;
            }
        break;
    }
    data('parent_state_tax_allowance', parent_state_tax_allowance);
}

/*******************************************************
 * REGULAR WORKSHEET A DYNAMIC ELEMENT EVENT HANDLERS
 *******************************************************/

/**
 * FORM VARIABLES
 * 
 * Line 1: parent_adjusted_gross_income
 * Line 2A: fathers_income
 * Line 2B: mothers_income
 * Line 2: parent_total_income_from_work
 * Line 3: parent_taxable_income
 * Line 4: parent_untaxed_income
 * Line 5: parent_taxable_untaxable_income
 * Line 6: parent_total_additional_financial_information
 * Line 7: parent_total_income //GOOD
 * Line 8: parent_income_tax_paid_2012 
 * Line 9: parent_state_tax_allowance //GOOD
 * Line 10: fathers_ss_tax_allowance 
 * Line 11: mothers_ss_tax_allowance //GOOD
 * Line 12: parent_income_protection_allowance //GOOD
 * Line 13: parent_employment_expense //GOOD
 * Line 14: parent_total_allowances
 * Line 15: parent_available_income //GOOD
 * Line 16: parents_cash_savings_checking
 * Line 17: parents_net_worth_investments
 * Line 18: parents_net_worth_business_farm
 * Line 19: parents_adjusted_net_worth_business_farm
 * Line 20: parent_net_worth_assets
 * Line 21: education_savings_asset_protection_allowance //GOOD
 * Line 22: parent_discretionary_net_worth
 * Line 23: CONSTANT 0.12
 * Line 24: parent_contribution_from_assets
 * Line 25: parent_adjusted_available_income //GOOD
 * Line 26: total_parents_contribution_aai //GOOD
 * Line 27: number_in_college
 * Line 28: parent_contribution_nine_months //GOOD
 * Line 29: student_adjusted_gross_income
 * Line 30: students_income
 * Line 31: students_taxable_income
 * Line 32: students_untaxed_income_benefits
 * Line 33: students_taxable_untaxable_income
 * Line 34: students_additional_financial_information
 * Line 35: students_total_income
 * Line 36: students_income_tax_paid_2012 //GOOD
 * Line 37: student_state_tax_allowance //GOOD
 * Line 38: students_social_security_tax_allowance
 * Line 39: CONSTANT 6,130
 * Line 40: allowance_parents_negative_aai //GOOD
 * Line 41: student_total_allowances //Good
 * Line 42: students_available_income 
 * Line 43: CONSTANT 0.5
 * Line 44: student_contribution_from_ai
 * Line 45: student_cash_savings_checking
 * Line 46: student_net_worth_investments
 * Line 47: student_net_worth_business_farm
 * Line 48: student_net_worth
 * Line 49: CONSTANT 0.2
 * Line 50: student_contribution_from_assets
 * Line 51: efc_nine_months
 * Months enrolled for 2013: months_enrolled
 * Line A1: parent_contribution_nine_months
 * Line A2: CONSTANT 9
 * Line A3: parent_contribution_per_month
 * Line A4: months_enrolled
 * Line A5: parent_contribution_less_than_nine_months
 * Line B1: adjusted_available_income
 * Line B2: Constant 4,730
 * Line B3: alternate_parent_aai_more_than_nine_months
 * Line B4: total_parents_contribution_alternate_aai
 * Line B5: number_in_college
 * Line B6: alternate_parents_contribution
 * Line B7: parent_contribution_nine_months
 * Line B8: NONE
 * Line B9: NONE
 * Line B10: parents_contribution_per_month
 * Line B11: NONE
 * Line B12: parents_contribution_over_nine_months_adjustment
 * Line B13: parent_contribution_nine_months
 * Line B14: parents_contribution_over_nine_months
 * Line C1: student_contribution_from_ai
 * Line C2: CONSTANT 9
 * Line C3: student_contribution_from_ai_per_month
 * Line C4: months_enrolled
 * Line C5: student_contribution_from_ai_less_than_nine_months
 * Line D1: parents_contribution_other_than_nine_months
 * Line D2: student_contribution_from_ai_other_than_nine_months
 * Line D3: efc_other_than_nine_months
 */

/**
 * LINE 1
 * Parents adjusted gross income
 */
$(document).on('change', "#parent_adjusted_gross_income", function(){
    cantBeNegative(this);
});

/**
 * LINE 2A, 2B
 * Father's income from work, mother's income from work
 */
$(document).on('change', "#fathers_income, #mothers_income", function(){
    // Line 2: Lines 2A + 2B
    if(dataObj.mothers_income && dataObj.fathers_income){
        parent_total_income_from_work = dataObj.mothers_income + dataObj.fathers_income;
        data('parent_total_income_from_work', parent_total_income_from_work);
    }
    try{
        // Line 3: If not required to file taxes, taxable income is set to line 2
        if(dataObj.not_required_taxes){
            data('parent_taxable_income', parent_total_income_from_work);
        // Line 3: If required to file taxes, taxable income is set to line 1    
        }else{
            data('parent_taxable_income', parent_adjusted_gross_income);
        }
    }catch(e){
        // If not required to file isn't set, assume they are required
        data('parent_taxable_income', parent_adjusted_gross_income);
    }
    if(dataObj.parent_taxable_income < 24000 && (dataObj.not_required_taxes || dataObj.benefits || dataObj.dislocated_worker)){
        $("div.questions").text("You are eligible for an automatic zero EFC");
    }
});


/**
 * LINE 4
 */
$(document).on('change', "#parent_untaxed_income", function(){
    // Line 5: Line 3 + line 4
    if(dataObj.parent_taxable_income){
        parent_taxable_untaxable_income = dataObj.parent_untaxed_income + dataObj.parent_taxable_income;
        data('parent_taxable_untaxable_income', parent_taxable_untaxable_income);
    }
});

/**
 * LINE 6
 */
$(document).on('change', "#parent_total_additional_financial_information", function(){
    // Line 7: Line 5 - line 6
    if(dataObj.parent_taxable_untaxable_income){
        parent_total_income = dataObj.parent_taxable_untaxable_income - dataObj.parent_total_additional_financial_information;
        data('parent_total_income', parent_total_income);
    }
});

/**
 * LINE 8
 */

$(document).on('change', "#parent_income_tax_paid_2012", function(){
    cantBeNegative(this);
    // Line 9: Use table A1 and line 7
    stateTaxAllowance();
    // Line 10: Use line 2A (fathers_income) and table A2
    ssTaxAllowance('fathers');
    // Line 11: Use line 2B (mothers_income) and table A2
    ssTaxAllowance('mothers');
    // Line 12: Use table A3, number_in_household, and number_in_college
    determineIncomeProtectionAllowance();
    // Line 13: Use number of parents, number of parents working
    // If two parent household, only one working
    determineEmploymentExpense();
    // Line 14: Sum 8, 9, 10, 11, 12, 13
    parent_total_allowances = dataObj.parent_income_tax_paid_2012 +
                        dataObj.parent_state_tax_allowance +
                        dataObj.fathers_ss_tax_allowance +
                        dataObj.mothers_ss_tax_allowance +
                        dataObj.parent_income_protection_allowance +
                        dataObj.parent_employment_expense;
    createFloat('parent_total_allowances', parent_total_allowances);
    // Line 15: Line 7 - line 14
    createFloat('parent_available_income', dataObj.parent_total_income - parent_total_allowances);
});
    
/**
 * LINE 17
 */
$(document).on('change', "#parents_net_worth_investments", function(){
    cantBeNegative(this);
});

/**
 * LINE 18
 */
$(document).on('change', "#parents_net_worth_business_farm", function(){
    // Line 19: Use table A4 and line 18
    if(dataObj.parents_net_worth_business_farm < 1){
        parents_adjusted_net_worth_business_farm = 0;
    }else if(1 < dataObj.parents_net_worth_business_farm && dataObj.parents_net_worth_business_farm <= 120000){
        parents_adjusted_net_worth_business_farm = dataObj.parents_net_worth_business_farm * 0.4;
    }else if(120000 < dataObj.parents_net_worth_business_farm && dataObj.parents_net_worth_business_farm <= 365000){
        parents_adjusted_net_worth_business_farm = ((dataObj.parents_net_worth_business_farm - 120000) * 0.5) + 48000;
    }else if(365000 < dataObj.parents_net_worth_business_farm && dataObj.parents_net_worth_business_farm <= 610000){
        parents_adjusted_net_worth_business_farm = ((dataObj.parents_net_worth_business_farm - 365000) * 0.6) + 170500;
    }else if(dataObj.parents_net_worth_business_farm > 610000){
        parents_adjusted_net_worth_business_farm = (dataObj.parents_net_worth_business_farm - 610000) + 317500;
    }
    data('parents_adjusted_net_worth_business_farm', parents_adjusted_net_worth_business_farm);
    // Line 20: Sum line 16, 17, and 19
    data('parent_net_worth_assets',
         dataObj.parents_cash_savings_checking +
         dataObj.parents_net_worth_investments +
         dataObj.parents_adjusted_net_worth_business_farm);
    // Line 21: Age of older parent, number of parents in household, and table A5
    age_of_older_parent = determineAgeOfOlderParent();
    determineEducationSavingsAssetProtectionAllowance();
    // Line 22: Line 20 - line 21
    data('parent_discretionary_net_worth', dataObj.parent_net_worth_assets - dataObj.education_savings_asset_protection_allowance);
    // Line 23: CONSTANT 0.12
    // Line 24: Line 22 * 0.12
    data('parent_contribution_from_assets', dataObj.parent_discretionary_net_worth * 0.12);
    // Line 25: Line 15 + line 24
    data('parent_adjusted_available_income', dataObj.parent_available_income + dataObj.parent_contribution_from_assets);
    // Line 26: Use table A6 and line 24
    determineTotalParentsContributionAai('parent_adjusted_available_income');
    // Line 27: Takes from DB (dataObj.number_in_college)
    // Line 28: Line 26 / line 27
    createFloat('parent_contribution_nine_months', dataObj.total_parents_contribution_aai / dataObj.number_in_college); 
});

// Determine number of months to be enrolled, defaults to 9
$(document).on('change', '#months_enrolled', function(){
    createInt('months_enrolled', $(this).val());
    if(dataObj.months_enrolled == 9){
        $("div.row.efc_nine_months").show();
        $("div#not_nine_months_questions").attr('class', 'hidden');
    }else{
        $("div.row.efc_nine_months").hide();
        $("div#not_nine_months_questions").removeAttr('class');
    }
});

/**
 * LINE 29
 */
$(document).on('change', "#student_adjusted_gross_income", function(){
    cantBeNegative(this);
});

/**
 * LINE 30
 */
$(document).on('change', "#students_income", function(){
    // Line 31: If required to file taxes, value from line 29
    // Line 31: If not required to file taxes, value from line 30
    if(dataObj.not_required_taxes){
        createFloat('students_taxable_income', dataObj.students_income)
    }else{
        createFloat('students_taxable_income', dataObj.student_adjusted_gross_income)
    }
});

/**
 * LINE 32
 */
$(document).on('change', "#students_untaxed_income_benefits", function(){
    // Line 33: Sum of line 31 and line 32
    createFloat('students_taxable_untaxable_income', dataObj.student_adjusted_gross_income + dataObj.students_untaxed_income_benefits)
});

/**
 * LINE 34
 */
$(document).on('change', "#students_additional_financial_information", function(){
    // Line 35: Line 33 - line 34
    createFloat('students_total_income',
        dataObj.students_taxable_untaxable_income - dataObj.students_additional_financial_information);
});

/**
 * LINE 36
 */
// 
$(document).on('change', "#students_income_tax_paid_2012", function(){
    cantBeNegative(this);
    //Line 37: Use line 35 and table A7
    determineStudentStateTaxAllowance();
    // Line 38: Use table A2 and 
    if(dataObj.students_income > 110101){
        students_social_security_tax_allowance = 8422.65 + (0.145 * (dataObj.students_income - 110100));
    }else{
        students_social_security_tax_allowance = 0.765 * dataObj.students_income;
    }
    createFloat('students_social_security_tax_allowance', students_social_security_tax_allowance);
    // Line 39: Always 6,130
    // Line 40: Use line 25
    if(dataObj.parent_adjusted_available_income < 0){
        createFloat('allowance_parents_negative_aai', Math.abs(parent_adjusted_available_income));
    }else{
        createFloat('allowance_parents_negative_aai', 0);
    }
    // Line 41: Sum line 36, 37, 38, 39, 40
    student_total_allowances = dataObj.students_income_tax_paid_2012 + dataObj.student_state_tax_allowance + dataObj.students_social_security_tax_allowance + 6130 + dataObj.allowance_parents_negative_aai;
    createFloat('student_total_allowances', student_total_allowances);
    // Line 42: Line 35 - line 41
    students_available_income = dataObj.students_total_income - dataObj.student_total_allowances;
    createFloat('students_available_income', students_available_income);
    // Line 43: Always 0.5
    // Line 44: Line 42 * 0.5
    student_contribution_from_ai = dataObj.students_available_income * 0.5
    if(student_contribution_from_ai < 0){
        student_contribution_from_ai = 0;
    }
    createFloat('student_contribution_from_ai', student_contribution_from_ai);
});
// Line 45: Entered by user
// Line 46: Entered by user
$(document).on('change', "#student_net_worth_investments", function(){
    cantBeNegative(this);
});
// Line 47
$(document).on('change', "#student_net_worth_business_farm", function(){
    cantBeNegative(this);
    // Line 48: Sum line 45, 46, 47
    data('student_net_worth',
         dataObj.student_cash_savings_checking +
         dataObj.student_net_worth_investments +
         dataObj.student_net_worth_business_farm);
    // Line 49: CONSTANT 0.2
    // Line 50: Line 48 * 0.2
    data('student_contribution_from_assets', dataObj.student_net_worth * 0.2);
    // Line 51: Line 28 + line 44 + line 50
    efc_nine_months = dataObj.parent_contribution_nine_months + dataObj.student_contribution_from_ai + dataObj.student_contribution_from_assets;
    if(efc_nine_months < 0){
        efc_nine_months = 0;
    }
    createFloat('efc_nine_months', efc_nine_months);
    $("#efc_nine_months").val(dataObj.efc_nine_months);
    // Determine lowered EFC
    lowerEfcNineMonths();
    
    /**
     * DETERMINE EFC FOR LESS THAN NINE MONTHS ENROLLMENT
     */
    
    if(dataObj.months_enrolled < 9){
        // Line A1: same as line 28 (parent_contribution_nine_months)
        // Line A2: Divide by 9
        // Line A3: A1 / 9
        parent_contribution_per_month = dataObj.parent_contribution_nine_months / 9;
        createFloat('parent_contribution_per_month', parent_contribution_per_month);
        // Line A4: months_enrolled
        // Line A5: Line A3 * months_enrolled
        parent_contribution_less_than_nine_months = parent_contribution_per_month * dataObj.months_enrolled;
        createFloat('parent_contribution_less_than_nine_months', parent_contribution_less_than_nine_months);
        // Line C1: student_contribution_from_ai
        // Line C2: CONSTANT 9
        // Line C3: C1 / 9
        student_contribution_from_ai_per_month = dataObj.student_contribution_from_ai / 9;
        createFloat('student_contribution_from_ai_per_month', student_contribution_from_ai_per_month);
        // Line C4: months_enrolled
        // Line C5: C3 * C4
        student_contribution_from_ai_less_than_nine_months = student_contribution_from_ai_per_month * months_enrolled;
        createFloat('student_contribution_from_ai_less_than_nine_months', student_contribution_from_ai_less_than_nine_months);
        // Line D1: Same as A5 (parent_contribution_less_than_nine_months)
        // Line D2: Same as C5 (student_contribution_from_ai_less_than_nine_months)
        // Line D3: D1 + D2
        efc_other_than_nine_months = parent_contribution_less_than_nine_months + student_contribution_from_ai_less_than_nine_months;
        if(efc_other_than_nine_months < 0){
            efc_other_than_nine_months = 0;
        }
        createFloat('efc_other_than_nine_months', efc_other_than_nine_months);
        $("#expected_family_contribution_other_than_nine_months").val(dataObj.efc_other_than_nine_months);
    }
    
    /**
     * DETERMINE EFC FOR MORE THAN NINE MONTHS ENROLLMENT
     */
    
    if(dataObj.months_enrolled > 9){
        // Line B1: Same as Line 25 (parent_adjusted_available_income)
        // Line B2: CONSTANT 4,730
        // Line B3: B1 + B2
        alternate_parent_aai_more_than_nine_months = dataObj.parent_adjusted_available_income + 4730;
        createFloat('alternate_parent_aai_more_than_nine_months', alternate_parent_aai_more_than_nine_months);
        // Line B4: Table A6 and B3
        determineTotalParentsContributionAlternateAai();
        // Line B5: number_in_college
        // Line B6: Line B4 / Line B5
        alternate_parents_contribution = dataObj.total_parents_contribution_alternate_aai / dataObj.number_in_college;
        createFloat('alternate_parents_contribution', alternate_parents_contribution);
        // Line B7: Same as line 28 (parent_contribution_nine_months)
        // Line B8: Line B6 - Line B7
        // Line B9: CONSTANT 12
        // Line B10: Line B8 / 12
        parents_contribution_per_month = (dataObj.alternate_parents_contribution - dataObj.parent_contribution_nine_months) / 12;
        createFloat('parents_contribution_per_month', parents_contribution_per_month);
        // Line B11: Months enrolled over nine
        // Line B12: B10 * B11
        parents_contribution_over_nine_months_adjustment = dataObj.parents_contribution_per_month * (dataObj.months_enrolled - 9);
        createFloat('parents_contribution_over_nine_months_adjustment', parents_contribution_over_nine_months_adjustment);
        // Line B13: Same as line 28 (parent_contribution_nine_months)
        // Line B14: B12 + B13
        parents_contribution_over_nine_months = dataObj.parents_contribution_over_nine_months_adjustment + dataObj.parent_contribution_nine_months;
        createFloat('parents_contribution_over_nine_months', parents_contribution_over_nine_months);
        // Line D1: Same as line B14 (parents_contribution_over_nine_months)
        // Line D2: Same as line 44 (student_contribution_from_ai)
        // Line D3: D1 + D2
        efc_other_than_nine_months = dataObj.parents_contribution_over_nine_months + dataObj.student_contribution_from_ai;
        if(efc_other_than_nine_months < 0){
            efc_other_than_nine_months = 0;
        }
        data('efc_other_than_nine_months', efc_other_than_nine_months);
        $("#expected_family_contribution_other_than_nine_months").val(dataObj.efc_other_than_nine_months);
    }
    
    /******************************************
     * LOWERED EFC NINE MONTHS
     ******************************************/
    // EFC can be lowered by lowering line 28 (parent_contribution_nine_months), line 44 (student_contribution_from_ai), or line 50 (student_contribution_from_assets)
    
    
});
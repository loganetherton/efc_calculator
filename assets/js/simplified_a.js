// Prevent accidental form submission
$(document).ready(function(){
    $("#simplified_a").bind("keydown", function(e) {
        var code = e.keyCode || e.which; 
        if (code  == 13) {               
            e.preventDefault();
            return false;
        }
    });
});

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
                parent_income_protection_allowance = 36290 + (4100 * over_six_in_household);
                break;
            case 2:
                parent_income_protection_allowance = 33360 + (4100 * over_six_in_household);
                break;
            case 3:
                parent_income_protection_allowance = 30450 + (4100 * over_six_in_household);
                break;
            case 4:
                parent_income_protection_allowance = 27530 + (4100 * over_six_in_household);
                break;
            case 5:
                parent_income_protection_allowance = 24620 + (4100 * over_six_in_household);
                break;
        }
        
        if(dataObj.number_in_college > 5){
            over_five_in_college = dataObj.number_in_college - 5;
            parent_income_protection_allowance = 24620 + (4100 * over_six_in_household) - (2910 * over_five_in_college);
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
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Alaska":
            student_state_tax_allowance = dataObj.student_total_income * 0;
        break;
        case "American Samoa":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Arizona":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Arkansas":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "California":
            student_state_tax_allowance = dataObj.student_total_income * 0.05;
        break;
        case "Canada and Provinces":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Colorado":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Connecticut":
            student_state_tax_allowance = dataObj.student_total_income * 0.05;
        break;
        case "Delaware":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "District of Columbia":
            student_state_tax_allowance = dataObj.student_total_income * 0.05;
        break;
        case "Federated States of Micronesia":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Florida":
            student_state_tax_allowance = dataObj.student_total_income * 0.01;
        break;
        case "Georgia":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Guam":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Hawaii":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Idaho":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Illinois":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Indiana":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Iowa":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Kansas":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Kentucky":
            student_state_tax_allowance = dataObj.student_total_income * 0.04;
        break;
        case "Louisiana":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Maine":
            student_state_tax_allowance = dataObj.student_total_income * 0.04;
        break;
        case "Marshall Islands":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Maryland":
            student_state_tax_allowance = dataObj.student_total_income * 0.06;
        break;
        case "Massachusettes":
            student_state_tax_allowance = dataObj.student_total_income * 0.04;
        break;
        case "Mexico":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Michigan":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Minnesota":
            student_state_tax_allowance = dataObj.student_total_income * 0.04;
        break;
        case "Mississippi":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Missouri":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Montana":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Nebraska":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Nevada":
            student_state_tax_allowance = dataObj.student_total_income * 0.01;
        break;
        case "New Hampshire":
            student_state_tax_allowance = dataObj.student_total_income * 0.01;
        break;
        case "New Jersey":
            student_state_tax_allowance = dataObj.student_total_income * 0.04;
        break;
        case "New Mexico":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "New York":
            student_state_tax_allowance = dataObj.student_total_income * 0.06;
        break;
        case "North Dakota":
            student_state_tax_allowance = dataObj.student_total_income * 0.01;
        break;
        case "Northern Marianas Islands":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Ohio":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Oklahoma":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Oregon":
            student_state_tax_allowance = dataObj.student_total_income * 0.05;
        break;
        case "Palua":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Pennsylvania":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Puerto Rico":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Rhode Island":
            student_state_tax_allowance = dataObj.student_total_income * 0.04;
        break;
        case "South Carolina":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "South Dakota":
            student_state_tax_allowance = dataObj.student_total_income * 0.01;
        break;
        case "Tennessee":
            student_state_tax_allowance = dataObj.student_total_income * 0.01;
        break;
        case "Texas":
            student_state_tax_allowance = dataObj.student_total_income * 0.01;
        break;
        case "Utah":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Vermont":
            student_state_tax_allowance = dataObj.student_total_income * 0.03;
        break;
        case "Virgin Islands":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Virginia":
            student_state_tax_allowance = dataObj.student_total_income * 0.04;
        break;
        case "Washington":
            student_state_tax_allowance = dataObj.student_total_income * 0.01;
        break;
        case "West Virginia":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
        break;
        case "Wisconsin":
            student_state_tax_allowance = dataObj.student_total_income * 0.04;
        break;
        case "Wyoming":
            student_state_tax_allowance = dataObj.student_total_income * 0.01;
        break;
        case "Other":
            student_state_tax_allowance = dataObj.student_total_income * 0.02;
    }
    createFloat('student_state_tax_allowance', student_state_tax_allowance);
}

/**
 * FUNCTION determineTotalParentsContributionAai
 * Determines total parent's contribution and places it in the data object
 */

function determineTotalParentsContributionAai(input_var){
    if(dataObj[input_var] < -3409){
        total_parent_contribution_aai = -750;
    }
    else if(-3409 <= dataObj[input_var] && dataObj[input_var] <= 15300){
        total_parent_contribution_aai = 0.22 * dataObj[input_var];
    }
    else if(15301 <= dataObj[input_var] && dataObj[input_var] <= 19200){
        total_parent_contribution_aai = 0.25 * (dataObj[input_var] - 15300) + 3366;
    }
    else if(19201 <= dataObj[input_var] && dataObj[input_var] <= 23100){
        total_parent_contribution_aai = 0.29 * (dataObj[input_var] - 19200) + 4341;
    }
    else if(23101 <= dataObj[input_var] && dataObj[input_var] <= 27000){
        total_parent_contribution_aai = 0.34 * (dataObj[input_var] - 23100) + 5472;
    }
    else if(27001 <= dataObj[input_var] && dataObj[input_var] <= 30900){
        total_parent_contribution_aai = 0.4 * (dataObj[input_var] - 27000) + 6798;
    }
    else if(dataObj[input_var] >= 30901){
        total_parent_contribution_aai = 0.47 * (dataObj[input_var] - 30900) + 8358;
    }
    createFloat('total_parent_contribution_aai', total_parent_contribution_aai);
}

/**
 * FUNCTION determineTotalParentsContributionAlternateAai
 * Determines line B4 and places into data object
 * NOTE: Need to combine this and above function
 */

function determineTotalParentsContributionAlternateAai(){
    if(dataObj.alternate_parent_aai_more_than_nine_months < -3409){
        total_parents_contribution_alternate_aai = -750;
    }
    else if(-3409 <= dataObj.alternate_parent_aai_more_than_nine_months &&
            dataObj.alternate_parent_aai_more_than_nine_months <= 15300){
        total_parents_contribution_alternate_aai = 0.22 * dataObj.alternate_parent_aai_more_than_nine_months;
    }
    else if(15301 <= dataObj.alternate_parent_aai_more_than_nine_months &&
            dataObj.alternate_parent_aai_more_than_nine_months <= 19200){
        total_parents_contribution_alternate_aai = 0.25 * (dataObj.alternate_parent_aai_more_than_nine_months - 15300) + 3366;
    }
    else if(19201 <= dataObj.alternate_parent_aai_more_than_nine_months &&
            dataObj.alternate_parent_aai_more_than_nine_months <= 23100){
        total_parents_contribution_alternate_aai = 0.29 * (dataObj.alternate_parent_aai_more_than_nine_months - 19200) + 4341;
    }
    else if(23101 <= dataObj.alternate_parent_aai_more_than_nine_months &&
            dataObj.alternate_parent_aai_more_than_nine_months <= 27000){
        total_parents_contribution_alternate_aai = 0.34 * (dataObj.alternate_parent_aai_more_than_nine_months - 23100) + 5472;
    }
    else if(27001 <= dataObj.alternate_parent_aai_more_than_nine_months &&
            dataObj.alternate_parent_aai_more_than_nine_months <= 30900){
        total_parents_contribution_alternate_aai = 0.4 * (dataObj.alternate_parent_aai_more_than_nine_months - 27000) + 6798;
    }
    else if(dataObj.alternate_parent_aai_more_than_nine_months >= 30901){
        total_parents_contribution_alternate_aai = 0.47 * (dataObj.alternate_parent_aai_more_than_nine_months - 30900) + 8358;
    }
    return total_parents_contribution_alternate_aai;
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
        window[parent_ss_tax_allowance] = 8422.65 + (0.145 * (dataObj[parent_income] - 110100));
        data(parent_ss_tax_allowance, window[parent_ss_tax_allowance]);
    }else{
        window[parent_ss_tax_allowance] = 0.765 * dataObj[parent_income];
        data(parent_ss_tax_allowance, window[parent_ss_tax_allowance]);
    }
}

/**
 * FUNCTION stateTaxAllowance
 * Determines the state tax allowance (can't be negative)
 */

function stateTaxAllowance(){
    try{
        if(dataObj.parent_total_income > 15000){
            tax_allowance_high = true;
        }else{
            tax_allowance_high = false;
        }
    }catch(e){
        $("#parent_income_tax_paid_2012").focus();
    }
    switch(dataObj.parent_state){
        case "Alabama":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.02;
            }
        break;
        case "Alaska":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "American Samoa":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Arizona":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.03;
            }
        break;
        case "Arkansas":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.03;
            }
        break;
        case "California":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.08;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.07;
            }
        break;
        case "Canada and Provinces":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Colorado":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Connecticut":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.08;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.07;
            }
        break;
        case "Delaware":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "District of Columbia":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.07;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.06;
            }
        break;
        case "Federated States of Micronesia":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Florida":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.02;
            }
        break;
        case "Georgia":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.05;
            }
        break;
        case "Guam":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Hawaii":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.03;
            }
        break;
        case "Idaho":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Illinois":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Indiana":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.03;
            }
        break;
        case "Iowa":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Kansas":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Kentucky":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Louisiana":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.02;
            }
        break;
        case "Maine":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.05;
            }
        break;
        case "Marshall Islands":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Maryland":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.08;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.07;
            }
        break;
        case "Massachusettes":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.07;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.06;
            }
        break;
        case "Mexico":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Michigan":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Minnesota":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.05;
            }
        break;
        case "Mississippi":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.02;
            }
        break;
        case "Missouri":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Montana":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Nebraska":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Nevada":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.02;
            }
        break;
        case "New Hampshire":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "New Jersey":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.09;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.08;
            }
        break;
        case "New Mexico":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.02;
            }
        break;
        case "New York":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.09;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.08;
            }
        break;
        case "North Dakota":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.02;
            }
        break;
        case "Northern Marianas Islands":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Ohio":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.05;
            }
        break;
        case "Oklahoma":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.03;
            }
        break;
        case "Oregon":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.07;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.06;
            }
        break;
        case "Palua":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Pennsylvania":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Puerto Rico":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Rhode Island":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.07;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.06;
            }
        break;
        case "South Carolina":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "South Dakota":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Tennessee":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Texas":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.02;
            }
        break;
        case "Utah":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.05;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.04;
            }
        break;
        case "Vermont":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.05;
            }
        break;
        case "Virgin Islands":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Virginia":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.06;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.05;
            }
        break;
        case "Washington":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.04;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.03;
            }
        break;
        case "West Virginia":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.03;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.02;
            }
        break;
        case "Wisconsin":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.07;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.06;
            }
        break;
        case "Wyoming":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
        case "Other":
            if(tax_allowance_high){
                parent_state_tax_allowance = parent_total_income * 0.02;
            }else{
                parent_state_tax_allowance = parent_total_income * 0.01;
            }
        break;
    }
    if(parent_state_tax_allowance < 0){
        parent_state_tax_allowance = 0;
    }
    data('parent_state_tax_allowance', parent_state_tax_allowance);
}

/*******************************************************
 * SIMPLIFIED WORKSHEET A DYNAMIC ELEMENT EVENT HANDLERS
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
 * Line 6: total_additional_financial_information
 * Line 7: parent_total_income
 * Line 8: parent_income_tax_paid_2012
 * Line 9: parent_state_tax_allowance
 * Line 10: fathers_ss_tax_allowance
 * Line 11: mothers_ss_tax_allowance
 * Line 12: parent_income_protection_allowance
 * Line 13: parent_employment_expense
 * Line 14: parent_total_allowances
 * Line 15: parent_available_income
 * Line 16:
 * Line 17:
 * Line 18:
 * Line 19:
 * Line 20:
 * Line 21:
 * Line 22:
 * Line 23:
 * Line 24:
 * Line 25: parent_adjusted_available_income
 * Line 26: total_parent_contribution_aai
 * Line 27: number_in_college
 * Line 28: parent_contribution_nine_months
 * Line 29: student_adjusted_gross_income
 * Line 30: student_income
 * Line 31: student_taxable_income
 * Line 32: student_untaxed_income_benefits
 * Line 33: student_taxable_untaxable_income
 * Line 34: student_additional_financial_information
 * Line 35: student_total_income
 * Line 36: student_income_tax_paid_2012
 * Line 37: student_state_tax_allowance
 * Line 38: student_social_security_tax_allowance
 * Line 39: CONSTANT 6,130
 * Line 40: allowance_parents_negative_aai
 * Line 41: student_total_allowances
 * Line 42: student_available_income
 * Line 43: CONSTANT 0.5
 * Line 44: student_contribution_from_ai
 * Line 45:
 * Line 46:
 * Line 47:
 * Line 48:
 * Line 49:
 * Line 50:
 * Line 51: efc_nine_months
 * Months enrolled for 2013: months_enrolled
 * Line A1: parent_contribution_nine_months
 * Line A2: CONSTANT 9
 * Line A3: parent_contribution_per_month
 * Line A4: months_enrolled
 * Line A5: parent_contribution_less_than_nine_months
 * Line B1: parent_adjusted_available_income
 * Line B2: Constant 4,730
 * Line B3: alternate_parent_aai_more_than_nine_months
 * Line B4: total_parents_contribution_alternate_aai
 * Line B5: number_in_college
 * Line B6: alternate_parents_contribution
 * Line B7: parent_contribution_nine_months
 * Line B8: NONE
 * Line B9: NONE
 * Line B10: parent_contribution_per_month
 * Line B11: NONE
 * Line B12: parent_contribution_over_nine_months_adjustment
 * Line B13: parent_contribution_nine_months
 * Line B14: parent_contribution_over_nine_months
 * Line C1: student_contribution_from_ai
 * Line C2: CONSTANT 9
 * Line C3: student_contribution_from_ai_per_month
 * Line C4: months_enrolled
 * Line C5: student_contribution_from_ai_less_than_nine_months
 * Line D1: parent_contribution_other_than_nine_months
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
$(document).on('change', "#total_additional_financial_information", function(){
    // Line 7: Line 5 - line 6
    if(dataObj.parent_taxable_untaxable_income){
        parent_total_income = dataObj.parent_taxable_untaxable_income - dataObj.total_additional_financial_information;
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
    parent_total_allowances =   parent_income_tax_paid_2012 +
                                parent_state_tax_allowance +
                                fathers_ss_tax_allowance +
                                mothers_ss_tax_allowance +
                                parent_income_protection_allowance +
                                parent_employment_expense;
    createFloat('parent_total_allowances', parent_total_allowances);
    // Line 15: Line 7 - line 14
    createFloat('parent_available_income', parent_total_income - parent_total_allowances);
    // Line 25: Same as line 15 for SWA
    createFloat('parent_adjusted_available_income', parent_available_income);
    // Line 26: Use table A6 and line 15
    determineTotalParentsContributionAai('parent_available_income');
    // Line 27: Takes from DB
    // Line 28: Line 26 / number in college
    createFloat('parent_contribution_nine_months', dataObj.total_parent_contribution_aai / dataObj.number_in_college);
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
$(document).on('change', "#student_income", function(){
    // Line 31: If required to file taxes, value from line 29
    // Line 31: If not required to file taxes, value from line 30
    if(dataObj.not_required_taxes){
        createFloat('student_taxable_income', dataObj.student_income)
    }else{
        createFloat('student_taxable_income', dataObj.student_adjusted_gross_income)
    }
});

/**
 * LINE 32
 */
$(document).on('change', "#student_untaxed_income_benefits", function(){
    // Line 33: Sum of line 31 and line 32
    createFloat('student_taxable_untaxable_income', dataObj.student_taxable_income + dataObj.student_untaxed_income_benefits)
});

/**
 * LINE 34
 */
$(document).on('change', "#student_additional_financial_information", function(){
    // Line 35: Line 33 - line 34
    createFloat('student_total_income',
        dataObj.student_taxable_untaxable_income - dataObj.student_additional_financial_information);
});

/**
 * LINE 36
 */
// 
$(document).on('change', "#student_income_tax_paid_2012", function(){
    cantBeNegative(this);
    //Line 37: Use line 35 and table A7
    determineStudentStateTaxAllowance();
    // Line 38: Use table A2 and 
    if(dataObj.student_income > 110100){
        student_social_security_tax_allowance = 8422.65 + (0.0145 * (dataObj.student_income - 110100));
    }else{
        student_social_security_tax_allowance = 0.0765 * dataObj.student_income;
    }
    createFloat('student_social_security_tax_allowance', student_social_security_tax_allowance);
    // Line 39: Always 6,130
    // Line 40: Use line 25
    if(dataObj.parent_adjusted_available_income < 0){
        createFloat('allowance_parents_negative_aai', Math.abs(parent_adjusted_available_income));
    }else{
        createFloat('allowance_parents_negative_aai', 0);
    }
    // Line 41: Sum line 36, 37, 38, 39, 40
    student_total_allowances = student_income_tax_paid_2012 + student_state_tax_allowance + student_social_security_tax_allowance + 6130 + allowance_parents_negative_aai;
    createFloat('student_total_allowances', student_total_allowances);
    // Line 42: Line 35 - line 41
    student_available_income = student_total_income - student_total_allowances;
    createFloat('student_available_income', student_available_income);
    // Line 43: Always 0.5
    // Line 44: Line 42 * 0.5
    student_contribution_from_ai = dataObj.student_available_income * 0.5
    createFloat('student_contribution_from_ai', student_contribution_from_ai);
    // Line 51: Line 28 + line 44
    efc_nine_months = parent_contribution_nine_months + student_contribution_from_ai;
    if(efc_nine_months < 0){
        efc_nine_months = 0;
    }
    createFloat('efc_nine_months', efc_nine_months);
    $("#efc_nine_months").val(dataObj.efc_nine_months);
    
    /**
     * DETERMINE EFC FOR LESS THAN NINE MONTHS ENROLLMENT
     */
    
    if(dataObj.months_enrolled < 9){
        // Line A1: same as line 28 (parent_contribution_nine_months)
        // Line A2: Divide by 9
        // Line A3: A1 / 9
        parent_contribution_per_month = parent_contribution_nine_months / 9;
        createFloat('parent_contribution_per_month', parent_contribution_per_month);
        // Line A4: months_enrolled
        // Line A5: Line A3 * months_enrolled
        parent_contribution_less_than_nine_months = parent_contribution_per_month * dataObj.months_enrolled;
        createFloat('parent_contribution_less_than_nine_months', parent_contribution_less_than_nine_months);
        // Line C1: student_contribution_from_ai
        // Line C2: CONSTANT 9
        // Line C3: C1 / 9
        student_contribution_from_ai_per_month = student_contribution_from_ai / 9;
        createFloat('student_contribution_from_ai_per_month', student_contribution_from_ai_per_month);
        // Line C4: months_enrolled
        // Line C5: C3 * C4
        student_contribution_from_ai_less_than_nine_months = student_contribution_from_ai_per_month * dataObj.months_enrolled;
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
        total_parents_contribution_alternate_aai = determineTotalParentsContributionAlternateAai();
        data('total_parents_contribution_alternate_aai',total_parents_contribution_alternate_aai);
        // Line B5: number_in_college
        // Line B6: Line B4 / Line B5
        alternate_parents_contribution = dataObj.total_parents_contribution_alternate_aai / dataObj.number_in_college;
        createFloat('alternate_parents_contribution', alternate_parents_contribution);
        // Line B7: Same as line 28 (parent_contribution_nine_months)
        // Line B8: Line B6 - Line B7
        // Line B9: CONSTANT 12
        // Line B10: Line B8 / 12
        parent_contribution_per_month = (dataObj.alternate_parents_contribution - dataObj.parent_contribution_nine_months) / 12;
        createFloat('parent_contribution_per_month', parent_contribution_per_month);
        // Line B11: Months enrolled over nine
        // Line B12: B10 * B11
        parent_contribution_over_nine_months_adjustment = dataObj.parent_contribution_per_month * (dataObj.months_enrolled - 9);
        createFloat('parent_contribution_over_nine_months_adjustment', parent_contribution_over_nine_months_adjustment);
        // Line B13: Same as line 28 (parent_contribution_nine_months)
        // Line B14: B12 + B13
        parent_contribution_over_nine_months =  dataObj.parent_contribution_over_nine_months_adjustment +
                                                dataObj.parent_contribution_nine_months;
        createFloat('parent_contribution_over_nine_months', parent_contribution_over_nine_months);
        // Line D1: Same as line B14 (parent_contribution_over_nine_months)
        // Line D2: Same as line 44 (student_contribution_from_ai)
        // Line D3: D1 + D2
        efc_other_than_nine_months = dataObj.parent_contribution_over_nine_months + dataObj.student_contribution_from_ai;
        if(efc_other_than_nine_months < 0){
            efc_other_than_nine_months = 0;
        }
        createFloat('efc_other_than_nine_months', efc_other_than_nine_months);
        $("#expected_family_contribution_other_than_nine_months").val(dataObj.efc_other_than_nine_months);
    }
});
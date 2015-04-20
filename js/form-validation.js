// When the browser is ready...
$().ready(function () {
  
    // Setup form validation on the form element
    $("qdbform").validate({
    
        // Specify the validation rules
        rules: {
            
            // Business Owner Information
            // Business Owner Name*
            _fid_55:  {
                required: true

            },
            
            // Social Security Number (SSN)*
            _fid_85: {
                required: true,
                minlength: 9,
                maxlength: 11
            },
            
            //Business Owner Address Full Google Look-up
            _fid_86:  {

            },
            
            // Business Owner Address 1*
            _fid_87: {
                required: true
            },
            
            // Address 2
            _fid_88: {
                
            },
            
            // City*
            _fid_89:  {
                required: true

            },
            
            // State*
            _fid_90:  {
                required: true

            },
            
            // Zip Code*
            _fid_91:  {
                required: true,
                minlength: 5,
                maxlength: 10,
                digits: true
            },        
            
            
            // Business Information
            //Legal Name*
            _fid_6:  {
                required: true

            },
            
            // Doing Business As (DBA)
            _fid_10:  {

            },
            
            // Business Address Full Google Look up*
            _fid_44:  {

            },
            
            // Business Address 1*
            _fid_45: {
                required: true
            },
            
            // Address 2
            _fid_46: {
            
            },
            
            // City*
            _fid_47:  {
                required: true

            },
            
            // State*
            _fid_48:  {
                required: true

            },
            
            // Zip Code*
            _fid_49:  {
                required: true,
                minlength: 5,
                maxlength: 10,
                digits: true
            },
            
            // Business Contact Name
            _fid_60: {
            
            },
        
            // Billing Contact Name
            _fid_80: {
                
            },
        
            // Business Phone*
            _fid_58:  {
                required: true

            },
            
            // Mobile Phone*
            _fid_51:  {
                required: true

            },
            
            // Business Fax*
            _fid_59:  {
                required: true

            },
            
            // Business Email*
            _fid_61:  {
                required: true,
                email: true
            },
            
            // Business Website
            _fid_56: {
                url: true
            },
        
            // Date Business Started
            _fid_57: {
                date: true
            },
        
            // Entity Type*
            _fid_62:  {
                required: true

            },
            
            // State of Incorporation*
            state_of_incorp:  {
                required: true

            },
        
            // Pay Frequency*
            _fid_30:  {
                required: true

            },
        
            // Total Expected Direct Deposit*
            _fid_63:  {
                required: true,
                number: true
            },
            
            // Current Payroll Provider
            _fid_64: {
                
            },
        
            // Federal Reporting Information (EIN)*
            _fid_7:  {
                required: true,
                number: true
            },
            
            // Sage Customer ID
            _fid_22: {
                
            },
            
            // Are you a SAN Member?*
            is_san_member:  {
                required: true

            },
        
            // SAN Member ID
            _fid_22:  {

            },
        
            // Expected Start Date
            _fid_65: {
                date: true
            },
        
            // Preferred Pin Number
            fid_123: {
                number: true,
                minlength: 4,
                maxlength: 4
            },
            
        
            // Payroll / CPA Contact Details
            // Payroll Contact Name*
            _fid_26:  {
                required: true

            },
            
            // Payroll Contact Address Full Google Look Up
            _fid_113:  {
                

            },
            
            // Payroll Contact Address 1*
            _fid_114: {
                required: true
            },
        
            // Address 2
            _fid_115: {
                
            },
        
            // City*
            _fid_116:  {
                required: true

            },
            
            // State*
            _fid_117:  {
                required: true

            },
            
            // Zip Code*
            _fid_118:  {
                required: true,
                minlength: 5,
                maxlength: 10,
                number: true
            },
            
            // Payroll Contact Phone*
            _fid_27:  {
                required: true,
                tel: true

            },
        
            // Payroll Contact E-mail Address*
            _fid_28:  {
                required: true,
                email: true
            },
            
            // Payroll contact is primary
            _fid_83: {
                
            },
        
            // Do you have any other accounts using Sage 50?
            _fid_84: {
                
            },
        
            // Debit-Authorization File Attachment
            debit_authorization: {
                
            },
        
        
            // Bank Information - Payroll Funding / Billing / Client Account
            // Name of Funding Bank*
            _fid_66:  {
                required: true

            },
            
            // Funding Bank Address*
            _fid_99:  {
                required: true

            },
            
            // Street 1
            _fid_100: {
                
            },
        
            // Street 2
            _fid_101: {
                
            },
            
            // City*
            _fid_102:  {
                required: true

            },
            
            // State*
            _fid_103:  {
                required: true

            },
            
            // Zip Code*
            _fid_104:  {
                required: true,
                minlength: 5,
                maxlength: 10,
                number: true
            },
            
            // Funding Bank Contact Name*
            _fid_68:  {
                required: true

            },
            
            // Funding Bank Contact Phone*
            _fid_69:  {
                required: true
                
            },
            
            // Routing Number
            _fid_70: {
                number: true
            },
        
            // Funding Account Number*
            _fid_71:  {
                required: true,
                number: true
            },
            
            // Funding Account Type*
            _fid_72:  {
                required: true

            },
            
            // Funding Voided Check File Attachment*
            funding_check:  {
                required: true

            },
        
        
        
            // Bank Information - Billing Only
            // Name of Billing Bank*
            _fid_73: {
                
            },
            
            // Billing Bank Address
            _fid_106: {
                
            },
        
            // Street 1
            _fid_107: {
                
            },
        
            // Street 2
            _fid_108: {
                
            },
            
            // City
            _fid_109: {
                
            },
            
            // State
            _fid_110: {
        
            },
            
            // Zip Code
            _fid_111: {
                minlength: 5,
                maxlength: 10,
                number: true
            },
            
            // Billing Bank Contact Name
            _fid_75: {
                
            },
            
            // Billing Bank Contact Phone
            _fid_76: {
                
            },
            
            // Routing Number
            _fid_77: {
                required: true,
                number: true
            },
        
            // Billing Account Number
            _fid_78:  {
                required: true,
                number: true
            },
            
            // Billing Account Type
            _fid_79:  {
                required: true

            },
        
            // Billing Voided Check File Attachment
            billing_check: {
                
            },
        
        
        
            // Internal Use Only
            // Sales Representative Name
            _fid_19: {
                
            },
        
            // Sales Representative Email Address
            _fid_122: {
                email: true
            },
        
            // Referring Business Partner ID (BPID)
            _fid_35: {
                number: true
            },
        
            // Send to G/L
            _fid_34: {
                
            },
        
            // Most EE 1099
            _fid_93: {
                
            },
        
            // Client Awareness of Payroll
            _fid_94: {
                
            },
        
            // Eager to Process
            _fid_95: {
                
            },
        
            // Email a Free Provider
            _fid_96: {
                
            },
        
            // Remote Unverified Source
            _fid_97: {
                
            },
        
            // ACH Processing Limits
            _fid_98: {
                
            },

        },
        
        
        
        
        
        // Specify the validation error messages

            // Business Owner Information
            // Business Owner Name*
            _fid_55:  {
                required: "Please enter the name of the business owner."

            },
            
            // Social Security Number (SSN)*
            _fid_85: {
                required: "Please enter the business owner's social security number (SSN).",
                minlength: "SSN must be at least 9 characters long",
                maxlength: "SSN must be at most 11 characters long"
            },
            
            //Business Owner Address*
            _fid_86:  {
                required: "Please enter the business owner's address."

            },
            
            // Street 1
            _fid_87: {
                
            },
            
            // Street 2
            _fid_88: {
                
            },
            
            // City*
            _fid_89:  {
                required: "Please enter the business owner's city."

            },
            
            // State*
            _fid_90:  {
                required: "Please select the business owner's state."

            },
            
            // Zip Code*
            _fid_91:  {
                required: "Please enter the business owner's zip code.",
                minlength: "Zip code must be at least 5 digits.",
                maxlength: "Zip code must be less than 10 digits.",
                digits: "Zip code may only contain digits."
            },        
            
            
        
            // Business Information
            //Legal Name*
            _fid_6:  {
                required: "Please enter your business' legal name."

            },
            
            // Doing Business As (DBA)
            _fid_10:  {

            },
            
            // Business Address*
            _fid_44:  {
                required: "Please enter your business address."

            },
            
            // Street 1
            _fid_45: {
            
            },
            
            // Street 2
            _fid_46: {
            
            },
            
            // City*
            _fid_47:  {
                required: "Please enter your business' city."

            },
            
            // State*
            _fid_48:  {
                required: "Please select your business' state/region."

            },
            
            // Zip Code*
            _fid_49:  {
                required: "Please enter the business' zip code. (ex. 'xxxxx' or 'xxxxx-xxxx')",
                minlength: "Zip code must be at least 5 digits. (ex. 'xxxxx')",
                maxlength: "Zip code must be less than 10 digits. (ex. 'xxxxx-xxxx')",
                digits: "Zip code may only contain digits (0-9)"
            },
            
            // Business Contact Name
        
            _fid_60: {
            
            },
        
            // Billing Contact Name
            _fid_80: {
                
            },
        
            // Business Phone*
            _fid_58:  {
                required: "Please enter the business' phone number. (ex. 'xxx-xxx-xxxx')"

            },
            
            // Mobile Phone*
            _fid_51:  {
                required: "Please enter the business' mobile number. (ex. 'xxx-xxx-xxxx')"

            },
            
            // Business Fax*
            _fid_59:  {
                required: "Please enter the business' fax number. (ex. 'xxx-xxx-xxxx')"

            },
            
            // Business Email*
            _fid_61:  {
                required: "Please enter the business' email address. (ex. 'example@sage.com')",
                email: "Please enter a valid email address. (ex. 'example@sage.com')"
            },
            
            // Business Website
            _fid_56: {
                url: "Please enter a valid url. (ex. 'www.sage.com')"
            },
        
            // Date Business Started
            _fid_57: {
                date: "Please enter a valid date using MM/DD/YYYY format or select using the calendar date picker by clicking on the field."
            },
        
            // Entity Type*
            _fid_62:  {
                required: "Please select the business entity type."

            },
            
            // State of Incorporation*
            state_of_incorp:  {
                required: "Please select the business' state of incorporation."

            },
        
            // Pay Frequency*
            _fid_30:  {
                required: "Please select a pay frequency."

            },
        
            // Total Expected Direct Deposit*
            _fid_63:  {
                required: "Please enter your business' total expected direct deposit per paycycle.",
                number: "Please enter a valid number."
            },
            
            // Current Payroll Provider
            _fid_64: {
                
            },
        
            // Federal Reporting Information (EIN)*
            _fid_7:  {
                required: "Please enter your business' Federal Reporting Information (EIN).",
                number: "Please enter a valid number."
            },
            
            // Sage Customer ID
            _fid_22: {
                
            },
            
            // Are you a SAN Member?*
            is_san_member:  {
                required: "Please select if your business is a SAN member."

            },
        
            // SAN Member ID*
            _fid_22:  {

            },
        
            // Expected Start Date
            _fid_65: {
                date: "Please enter a valid date using MM/DD/YYYY format or select using the calendar date picker by clicking on the field."
            },
        
            // Preferred Pin Number
            fid_123: {
                digits: "Please enter a valid pin number consisting of 4 numbers.",
                minlength: "Pin must be 4 numbers.",
                maxlength: "Pin must be 4 numbers."
            },
            
        
        
            // Payroll / CPA Contact Details
            // Payroll Contact Name*
            _fid_26:  {
                required: "Please enter payroll contact name."

            },
            
            // Payroll Contact Address*
            _fid_113:  {
                required: "Please enter payroll contact address."

            },
            
            // Street 1
            _fid_114: {
                
            },
        
            // Street 2
            _fid_115: {
                
            },
        
            // City*
            _fid_116:  {
                required: "Please enter payroll contact city."

            },
            
            // State*
            _fid_117:  {
                required: "Please enter payroll contact state."

            },
            
            // Zip Code*
            _fid_118:  {
                required: "Please enter the payroll contact's zip code. (ex. 'xxxxx' or 'xxxxx-xxxx')",
                minlength: "Zip code must be at least 5 digits. (ex. 'xxxxx')",
                maxlength: "Zip code must be less than 10 digits. (ex. 'xxxxx-xxxx')",
                digits: "Zip code may only contain digits. (0-9)"
            },
            
            // Payroll Contact Phone*
            _fid_27:  {
                required: "Please enter the payroll contact's phone number. (ex. 'xxx-xxx-xxxx').

            },
        
            // Payroll Contact E-mail Address*
            _fid_28:  {
                required: "Please enter payroll contact email address. (ex. 'example@sage.com')",
                email: "Please enter a valid email address. (ex. 'example@sage.com')"
            },
            
            // Payroll contact is primary
            _fid_83: {
                
            },
        
            // Do you have any other accounts using Sage 50?
            _fid_84: {
                
            },
        
            // Debit-Authorization File Attachment
            debit_authorization: {
                
            },
        
        
        
            // Bank Information - Payroll Funding / Billing / Client Account
            // Name of Funding Bank*
            _fid_66:  {
                required: "Please enter the name of funding bank."

            },
            
            // Funding Bank Address*
            _fid_99:  {
                required: "Please enter the funding bank address."

            },
            
            // Street 1
            _fid_100: {
                
            },
        
            // Street 2
            _fid_101: {
                
            },
            
            // City*
            _fid_102:  {
                required: "Please enter the funding bank city."

            },
            
            // State*
            _fid_103:  {
                required: "Please select the funding bank state."

            },
            
            // Zip Code*
            _fid_104:  {
                required: "Please enter the funding bank's zip code. (ex. 'xxxxx' or 'xxxxx-xxxx')",
                minlength: "Zip code must be at least 5 digits. (ex. 'xxxxx')",
                maxlength: "Zip code must be less than 10 digits. (ex. 'xxxxx-xxxx')",
                digits: "Zip code may only contain digits. (0-9)"
            },
            
            // Funding Bank Contact Name*
            _fid_68:  {
                required: "Please enter the funding bank contact name."

            },
            
            // Funding Bank Contact Phone*
            _fid_69:  {
                required: "Please enter the funding bank contact phone number. (ex. 'xxx-xxx-xxxx')"
                
            },
            
            // Routing Number
            _fid_70: {
                digits: "Routing Number must contain numbers 0-9."
            },
        
            // Funding Account Number*
            _fid_71:  {
                required: "Please enter the funding bank account number.",
                number: "Funding bank account number may only contain numbers 0-9.
            },
            
            // Funding Account Type*
            _fid_72:  {
                required: "Please select funding account type."

            },
            
            // Funding Voided Check File Attachment*
            funding_check:  {
                required: "Please attach a voided check from the funding bank account."

            },
        
        
        
            // Bank Information - Billing Only
            // Name of Billing Bank*
            _fid_73: {
                
            },
            
            // Billing Bank Address
            _fid_106: {
                
            },
        
            // Street 1
            _fid_107: {
                
            },
        
            // Street 2
            _fid_108: {
                
            },
            
            // City
            _fid_109: {
                
            },
            
            // State
            _fid_110: {
        
            },
            
            // Zip Code
            _fid_111: {
                minlength: "Zip code must be at least 5 digits.  (ex. 'xxxxx')",
                maxlength: "Zip code must be less than 10 digits. (ex. 'xxxxx-xxxx')",
                digits: "Zip code may only contain digits 0-9."
            },
            
            // Billing Bank Contact Name
            _fid_75: {
                
            },
            
            // Billing Bank Contact Phone
            _fid_76: {
                
            },
            
            // Routing Number
            _fid_77: {
                required: "Please enter the billing bank account routing number.",
                number: "Billing bank account routing number may only contain numbers."
            },
        
            // Billing Account Number
            _fid_78:  {
                required: "Please enter the billing bank account number.",
                number: "Billing bank account number may only contain numbers."
            },
            
            // Billing Account Type
            _fid_79:  {
                required: "Please select billing acount type."

            },
        
            // Billing Voided Check File Attachment
            billing_check: {
                
            },
        
        
        
            // Internal Use Only
            // Sales Representative Name
            _fid_19: {
                
            },
        
            // Sales Representative Email Address
            _fid_122: {
                email: "Please enter a valid email address. (ex. 'example@sage.com')"
            },
        
            // Referring Business Partner ID (BPID)
            _fid_35: {
                number: "Business partner ID may only contain numbers 0-9.
            },
        
            // Send to G/L
            _fid_34: {
                
            },
        
            // Most EE 1099
            _fid_93: {
                
            },
        
            // Client Awareness of Payroll
            _fid_94: {
                
            },
        
            // Eager to Process
            _fid_95: {
                
            },
        
            // Email a Free Provider
            _fid_96: {
                
            },
        
            // Remote Unverified Source
            _fid_97: {
                
            },
        
            // ACH Processing Limits
            _fid_98: {
                
            },

        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

  });
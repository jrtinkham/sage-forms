<!-- jQuery Form Validation code -->
  <script>
  
  // When the browser is ready...
  $(function() {
  
    // Setup form validation on the #register-form element
    $("qdbform").validate({
    
        // Specify the validation rules
        rules: {
            _fid_55: "required",
            _fid_85: {
                required: true,
                minlength: 9
            },
            _fid_86: "required",
            _fid_87: "required",
            _fid_88: "required",
            _fid_89: "required",
            _fid_90: "required",
            _fid_91: "required",        
            _fid_6: "required",
            _fid_44: "required",
            _fid_47: "required",
            _fid_48: "required",
            _fid_49: "required",
            _fid_58: "required",
            _fid_51: "required",
            _fid_59: "required",
            _fid_61: "required",
            _fid_62: "required",
            _fid_63: "required",
            _fid_7: "required",
            _fid_22: "required",
            _fid_26: "required",
            _fid_113: "required",
            _fid_116: "required",
            _fid_117: "required",
            _fid_118: "required",
            _fid_28: "required",
            _fid_66: "required",
            _fid_99: "required",
            _fid_102: "required",
            _fid_103: "required",
            _fid_104: "required",
            _fid_68: "required",
            _fid_69: "required",
            _fid_71: "required",
            _fid_72: "required",
            _fid_73: "required",
            _fid_106: "required",
            _fid_109: "required",
            _fid_110: "required",
            _fid_111: "required",
            _fid_75: "required",
            _fid_76: "required",
            _fid_78: "required",
            _fid_79: "required",

        },
        
        // Specify the validation error messages
        messages: {
            _fid_55: "Please enter the name of the business owner.",
            _fid_85: "Please enter the business owner's social security number (SSN).",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

  });
  
  </script>
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
            _fid_87: "required"
            _fid_88: 
            _fid_89:
            _fid_90:
            _fid_91:
            
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            agree: "required"
        },
        
        // Specify the validation error messages
        messages: {
            _fid_55:: "Please enter the name of the business owner.",
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
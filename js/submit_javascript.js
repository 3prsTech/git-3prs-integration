window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData( form );
    const submitBtn = document.getElementById( "submitBtn" );

    // Define what happens on successful data submission
    XHR.addEventListener( "load", function(event) {
      alert( event.target.responseText );
      submitBtn.disabled = false;
    } );

    // Define what happens in case of error
    XHR.addEventListener( "error", function( event ) {
      alert( 'Oops! Something went wrong.' );
      submitBtn.disabled = false;
    } );

    // Set up our request
    //la-3prs-prod-rewrite-fortegra
    XHR.open( "POST", "https://prod-25.eastus.logic.azure.com:443/workflows/fda362c9fba54184a108f4d4720ed132/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WQzAoEKN63Qe41_hBpMDgPoX3a8VUq_fLzNSLo7LN5s" );

    // The data sent is what the user provided in the form
    XHR.send( FD );
  }

  function recaptcha_callback() {
        const submitButton = document.getElementById("submitBtn");
        submitButton.disabled = false;
      }
  
  // Access the form element...
  const form = document.getElementById( "form_id" );
  const submitBtn = document.getElementById( "submitBtn" ); 

  submitBtn.disabled = true;
  
  // ...and take over its submit event.
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();
    submitBtn.disabled = true;
    sendData();
  } );
} );

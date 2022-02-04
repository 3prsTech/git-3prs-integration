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
    //la-3prs-dev-registerexistingdevice-fortegra
    XHR.open( "POST", "https://prod-74.eastus.logic.azure.com:443/workflows/a9cb52fe19d345e69225b98a32d190d2/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=S4M9Ln_zbk2Dom3jyIDA6t-kk-_j3YBEHcg_faculAs" );

    // The data sent is what the user provided in the form
    XHR.send( FD );
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

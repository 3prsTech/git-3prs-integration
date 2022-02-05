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
    XHR.open( "POST", "https://prod-48.eastus.logic.azure.com:443/workflows/20a7c042234047d299648fb786c24c2f/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=pUhTG-jdWHefWk_6BCvFLGBiI-6KRQfVh-OQfw0crx4" );

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

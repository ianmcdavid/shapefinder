(async () => {
    const viewer = await sdv.api.createViewer({ canvas: document.getElementById('canvas'), id: 'myViewer' });
    const session = await sdv.api.createSession({ ticket: 'c0577feede29c4221818ade7f16542ec79ee23f348be12c51cacb1d8b84b7edcd01eec1a7059deb955e6b271c894f678dba51fa2dac5c404e8dbd930c572060178fe1b5b1802087da8578a79d6b0d7199fdbcf90ebc240b456bfb87a2abd971ffc5ee351ca3084-84b6e667db10f40d08e9e835d217622e', modelViewUrl: 'https://sdeuc1.eu-central-1.shapediver.com', id: 'mySession'});
      // get the length parameter from API
    const lengthParameter = session.getParameterByName('Length')[0];
      // target number box
    const num = document.querySelector("#length-num");
      // target slider
    const slider = document.querySelector("#length");
    // slider value converted to integer 
    let v = parseInt(slider.value, 10);
    // pass slider value to length parameter
    lengthParameter.value = v;
     // set number box value 
    num.value = v;
    // render scene with slider value as default
    session.customize();
     // Event listener to update length parameter on slider change  
    slider.addEventListener("change", (e) => {
      // new slider value converted to integer
         v = parseInt(e.target.value, 10);
      // update number box value
         num.value = v;
      // update length parameter value
        lengthParameter.value = v;
      // render scene with new value of slider
        session.customize();
      });
     
  })()
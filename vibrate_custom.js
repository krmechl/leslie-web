
isDeviceReady = false; // flag indicates if cordova is initialized

/**
 * Called when document is loaded.
 */
phoneui.documentReadyHandler = function() {
   //list for cordova runtime initialized for use
   document.addEventListener('deviceready', deviceReady, false);
}
  
function deviceReady(event) {
   //cordova is ready for use
   isDeviceReady = true;
}
  
//called by Vibrate button’s OnClick RunJS action
function vibrate() {
  if (phoneui.cordovaAvailable()){
     if (isDeviceReady) {
        navigator.notification.vibrate(1000); // 1000ms = 1sec
     } else {
        phoneui.alert("Cordova not initialized, try again");
     }
  } else {
    phoneui.alert("Cordova vibrate is not available");
  }
}  /**
 * Notification that the UI is about to transition to a new screen.
 * Perform custom prescreen-transition logic here.
 * @param {String} currentScreenId 
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue transtion; false to halt transition
 */
phoneui.prePageTransition = function(currentScreenId,targetScreenId) {
  // add custom pre-transition code here
  // return false to terminate transition
  return true;
}

/**
 * Notification that the UI has transitioned to a new screen.
 * 
 * @param {String} newScreenId 
 */
phoneui.postPageTransition = function(newScreenId) {
  
}

/**
 * Notification that device orientation has changed. 
 * 
 * @param {String} newOrientation 
 */
phoneui.postOrientationChange = function(newOrientation) {
  
}


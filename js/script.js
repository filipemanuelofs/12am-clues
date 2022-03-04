console.log(
  `%c ________________________________________

██   ██  █████  ██ ██          ████████  ██████                         
██   ██ ██   ██ ██ ██             ██    ██    ██                        
███████ ███████ ██ ██             ██    ██    ██                        
██   ██ ██   ██ ██ ██             ██    ██    ██                        
██   ██ ██   ██ ██ ███████        ██     ██████                         
                                                                        
                                                                        
███████ ██████   █████   ██████ ███████     ██████   ██████  ██████  ██ 
██      ██   ██ ██   ██ ██      ██          ██   ██ ██    ██ ██   ██ ██ 
███████ ██████  ███████ ██      █████       ██████  ██    ██ ██████  ██ 
     ██ ██      ██   ██ ██      ██          ██   ██ ██    ██ ██   ██    
███████ ██      ██   ██  ██████ ███████     ██████   ██████  ██████  ██ 
                                                                        
`,
  "font-family:monospace"
);
(function () {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  var trident = ua.indexOf("Trident/");
  if (msie > 0 || trident > 0) {
    console.log("IE detected.");
    window.location.replace("unsupported.html");
  }
})();

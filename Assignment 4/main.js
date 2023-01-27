$(document).ready(function() {
  
  
    $("#angry").click(function() {
      $("body").css("background-color", "crimson");
      if(!$('#iframe').length) {
        $('#iframeHolder').html('<iframe id="iframe" src="https://www.youtube.com/watch?v=B5jLhQP9-Rk" width="700" height="450"></iframe>');
      }
    });

    $("#crying").click(function() {
        $("body").css("background-color", "teal");
        if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="https://www.youtube.com/watch?v=IGrhyOtikQ0" width="700" height="450"></iframe>');
        }
      });

      $("#anxiety").click(function() {
        $("body").css("background-color", "skyblue");
        if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="https://www.youtube.com/watch?v=rJ6eGtsgbfM" width="700" height="450"></iframe>');
        }
      });

      $("#cheesin").click(function() {
        $("body").css("background-color", "gold");
        if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="https://www.youtube.com/watch?v=9fq4Pc5Q_EA" width="700" height="450"></iframe>');
        }
      });

      $("#heart").click(function() {
        $("body").css("background-color", "mediumpurple");
        if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="https://www.youtube.com/watch?v=T9Ybj8nrtQw" width="700" height="450"></iframe>');
        }
      });

      $("#party").click(function() {
        $("body").css("background-color", "magenta");
        if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="https://www.youtube.com/watch?v=qceiRQrdwFU" width="700" height="450"></iframe>');
        }
      });


    
  });
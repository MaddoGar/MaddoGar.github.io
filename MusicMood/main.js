$(document).ready(function() {
  
  
    $("#angry").click(function() {
      $("body").css("background-image", "linear-gradient(red, crimson)","background-attachment","fixed");
      if(!$('#iframe').length) {
        $('#iframeHolder').html('<iframe id="iframe" src="https://www.youtube.com/watch?v=B5jLhQP9-Rk" width="700" height="450"></iframe>');
      }
    });

    $("#crying").click(function() {
      $("body").css("background-image", "linear-gradient(blue, purple)","background-attachment","fixed");
        if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="https://www.youtube.com/watch?v=IGrhyOtikQ0" width="700" height="450"></iframe>');
        }
      });

      $("#anxiety").click(function() {
        $("body").css("background-image", "linear-gradient(red, yellow)","background-attachment","fixed");
        if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/79fQw73t2SwLVOX65TPHwx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
        }
      });

      $("#cheesin").click(function() {
        $("body").css("background-image", "linear-gradient(gold, orange)","background-attachment","fixed","height","auto","background-size","cover");
        if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="https://www.youtube.com/watch?v=9fq4Pc5Q_EA" width="700" height="450"></iframe>');
        }
      });

      $("#heart").click(function() {
        $("body").css("background-image", "linear-gradient(DeepPink, HotPink)","background-attachment","fixed");
        if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe id="iframe" src="https://www.youtube.com/watch?v=T9Ybj8nrtQw" width="700" height="450"></iframe>');
        }
      });

      $("#party").click(function() {
        $("body").css("background-image", "linear-gradient(Cyan, DarkViolet)","background-attachment","fixed");
        if(!$('#iframe').length) {
            $('#iframeHolder').html('<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/017ESgT2H5FYrP7xFnWAg9?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
        }
      });


    
  });
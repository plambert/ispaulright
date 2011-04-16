var locationHash;

var showResult=function(){
  locationHash=document.location.hash;
  if (locationHash) {
    $("#main a").each(function(idx, thing){$(thing).hide();});
    $.each([ "#yes", "#no" ], function(idx, div_id) {
      if (div_id == locationHash) {
        $(div_id).show();
      }
      else {
        $(div_id).hide();
      }
    });
  }
  else {
    $("#main a").each(function(idx, thing){$(thing).show();});
    $("#yes, #no").each(function(idx, thing){$(thing).hide();});
  }
};

var checkHashChange=function(){
  if (locationHash != document.location.hash) {
    // console.log("hash changed from '" + locationHash + "' to '" + document.location.hash + "'");
    showResult();
  }
};

var changeResult=function(){
  timedChange=setTimeout(showResult, 250);
};

$(function(){
  locationHash=window.location.hash;
  $('#main a').click(changeResult);
  showResult();
  setInterval(checkHashChange, 500);
});

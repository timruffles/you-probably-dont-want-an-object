function baconDemo() {
  var logins = $(".login").asEventStream("click").map(true);
  var logouts = $(".logout").asEventStream("click").map(false);


  var loginState = logins.merge(logouts)
    .scan(false,function(_,loginState) { return loginState });

  function not(x) { return !x }

  loginState.assign($(".login"),"prop","disabled");
  loginState.map(not).assign($(".logout"),"prop","disabled");
}

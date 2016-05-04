Router.route('/wechat-config', function () {
  var query = this.params.query;
  var echostr = query.echostr;
  this.response.end(query.echostr);
}, {where: 'server'});

// WECHAT LOGIN
Meteor.loginWithWechat = function(profileObject, callback) {
  // //create a login request with admin: true, so our loginHandler can handle this request
  // _.extend(userinfo, {name: userinfo.nickname});
  //
  // var loginRequest = {
  //   username: userinfo.openid,
  //   profile: userinfo
  // };

  var loginRequest = {
   // 用户 unionid 作为 username，防止冲突情况出现
   username: profileObject.unionid,
   openid: profileObject.openid,
   profile: profileObject,
   loginMethod: "WECHAT",
  };

  //send the login request
  Accounts.callLoginMethod({
    methodArguments: [loginRequest],
    userCallback: callback
  });

};

Router.route('/about', {

});

// 主要目的就是为了来处理与微信服务器通讯，换取的 code
Router.route('/wechatLogin', {
  data: function () {
    console.log("this.params.query :", this.params.query);
    return {
      loginType: this.params.query.logintype
    };
  },
  // code state
  onBeforeAction: function () {
    var code = this.params.query.code;
    var state = this.params.query.state;
    Meteor.call('getUserInfo', code, state, function(error, result) {
      if (!error) {
        Meteor.loginWithWechat(result, function() {
          console.log("state :", state);
          if (state == "about") {
            Router.go('/');
          }
          // if (state == 'goenroll') {
          //  Router.go('/');
          // }
          // if (state == "profile") {
          //   Router.go('/profile');
          // }
          // if (state === "index" || state === "webLogin") {
          //   Router.go('/candidates');
          // }
          // if (state.indexOf("/candidates") >= 0) {
          //   Router.go(state);
          // }
        });
      }
    });
    // this.render('loading');
  }
});

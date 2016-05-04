Accounts.registerLoginHandler(function(loginRequest) {

  // loginRequest 包含当前这个要使用微信登录的这个用户的信息。nickname、openid
  console.log("registerLoginHandler loginRequest :", loginRequest);

  //we create a admin user if not exists, and get the userId
  var userId = null;
  var user = Meteor.users.findOne({username: loginRequest.username});
  if(!user) {
    userId = Meteor.users.insert(loginRequest);
  } else {
    userId = user._id;
  }

  //send loggedin user's user id
  return {
    userId: userId
  }
});

Meteor.methods({
  getUserInfo: function(code, state) {
    var appId = 'wxb4e18ab96788b45b';
    var appSecret = '5be863e96a0a05e031f6440a19560289';

    try {
      var result = HTTP.get("https://api.weixin.qq.com/sns/oauth2/access_token?" +
        "appid=" + appId +
        "&secret=" + appSecret +
        "&code=" + code +
        "&grant_type=authorization_code");
    } catch(err) {
      throw new Meteor.error(err);
    }

    var resultContent = JSON.parse(result.content);
    var accessToken = resultContent.access_token;
    var openid = resultContent.openid;

    console.log("result :", resultContent);

    result = HTTP.get("https://api.weixin.qq.com/sns/userinfo?" +
      "access_token=" + accessToken +
      "&openid=" + openid +
      "&lang=zh_CN");

    resultContent = JSON.parse(result.content);
    console.log("userinfo resultContent :", resultContent);

    return resultContent;
  },
});

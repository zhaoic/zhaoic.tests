// 发布所有的微博到客户端
Meteor.publish('posts', function() {
    return Posts.find({});
});

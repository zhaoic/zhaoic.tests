Meteor.methods({
    addPost(p) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('loginRequired', 'login required');
        }

        // 微博作者
        p.author = {
            id: Meteor.userId(),
            username: Meteor.user().username,
        };
        // 微博获得的赞
        p.like = [], // 给赞用户的列表

        // 微博创建时间
        p.createdAt = new Date();

        Posts.insert(p);
    },
});

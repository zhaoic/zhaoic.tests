// 用户首页组件
UserHome = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        // 获取所有微博，并按时间倒序排序
        return {
            posts: Posts.find({}, {sort: { createdAt: -1 }}).fetch()
        };
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    componentWillMount() {
        // 如果用户没有登录就跳转到登录页
        if (!Meteor.userId()) {
            this.context.router.push('/login');
        }
    },
    renderPosts() {
        // 循环展示所有微博
        return this.data.posts.map((p) => {
            return <Post post={p} key={p._id} />
        });
    },
    render() {
        return (
            <div>
                <InputBox />
                <br />
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">最新微博</h3>
                    </div>
                    {this.renderPosts()}
                </div>
            </div>
        );
    }
});

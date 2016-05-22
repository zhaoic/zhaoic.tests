// 用户退出登录组件
Logout = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    logout() {
        const self = this;

        // 退出登录
        Meteor.logout(function(err) {
            self.context.router.push('/login');
        });
    },
    componentDidMount() {
        this.logout();
    },
    render() {
        return null;
    }
});

// 用户登录组件
Login = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    componentWillMount() {
        // 如果用户已经登录了就跳转到首页
        if (Meteor.userId()) {
            this.context.router.push(`/u/${Meteor.userId()}/home`);
        }
    },
    handleSubmit() {
        const self = this;
        const user = {
            email: this.refs.email.value,
            password: this.refs.password.value,
        };

        // 登录
        Meteor.loginWithPassword(user.email, user.password, function(err) {
            if (err) {
                self.context.router.push('/login');
            }
            self.context.router.push(`/u/${Meteor.userId()}/home`);
        });
    },
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Email:</label>
                    <input ref="email" type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input ref="password" type="password" className="form-control" />
                </div>
                <button onClick={this.handleSubmit} className="btn btn-default" type="button">登录</button>
            </form>
        );
    }
});

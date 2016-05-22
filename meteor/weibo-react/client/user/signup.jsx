// 用户注册组件
Signup = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    componentWillMount() {
        if (Meteor.userId()) {
            this.context.router.push(`/u/${Meteor.userId()}/home`);
        }
    },
    handleSubmit() {
        const self = this;
        const user = {
            username: this.refs.username.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
        };

        // 创建新用户
        Accounts.createUser(user);
        // 登录创建的用户
        Meteor.loginWidthPassword(user.email, user.password, function(err) {
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
                    <label>Username:</label>
                    <input ref="username" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input ref="email" type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input ref="password" type="password" className="form-control" />
                </div>
                <button onClick={this.handleSubmit} className="btn btn-default" type="button">注册</button>
            </form>
        );
    }
});

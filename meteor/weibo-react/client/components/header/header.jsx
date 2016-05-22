const { Link } = ReactRouter;

let Logined = React.createClass({
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to={`/u/${this.props.user._id}/home`}>{this.props.user.username}</Link></li>
                <li><Link to="/logout">退出</Link></li>
            </ul>
        );
    }
});

let NotLogin = React.createClass({
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/login">登录</Link></li>
                <li><Link to="/signup">注册</Link></li>
            </ul>
        );
    }
});
// 页面header组件
Header = React.createClass({
    render() {
        let user = Meteor.user();
        let CurrentUser = user ? <Logined user={user} /> : <NotLogin />;

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="weibo-navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/login">微博</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="weibo-navbar-collapse">
                        {CurrentUser}
                    </div>
                </div>
            </nav>
      );
    }
});

const {
    Route,
    Router,
    browserHistory,
} = ReactRouter;

const ClientRoutes = (
    <Router history={browserHistory}>
        // path 定义 url 地址
        // component 是此地址对于的 React 组件
        <Route path="/" component={App}>
            // 这是子路由，其 url 地址是 /login
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
            <Route path="logout" component={Logout} />
            <Route path="u/:userId/home" component={UserHome} />
        </Route>
    </Router>
);

Meteor.startup(function() {
    ReactDOM.render(ClientRoutes, document.getElementById('app'));
});

// app 组件
App = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    componentWillMount() {
        if (!Meteor.userId()) {
            this.context.router.push('/login');
        } else {
            this.context.router.push(`/u/${Meteor.userId()}/home`);
        }
    },
    render() {
      // console.log("this.pros.children",this.props);
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            {this.props.children}
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

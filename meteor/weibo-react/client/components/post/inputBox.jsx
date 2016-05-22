// 微博发布输入框组件
InputBox = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    handleSubmit() {
        const self = this;
        const post = {
            content: this.refs.content.value
        };

        // 调用 Meteor 方法发布微博
        Meteor.call('addPost', post, function(err) {
            if (err && err.error === 'loginRequired') {
                self.context.router.push('/login');
            }
        });
    },
    render() {
        return (
            <div className="post-input">
                <div className="post-input-header">
                    <h4 className="post-input-title">有什么新鲜事想告诉大家？</h4>
                </div>
                <div className="form-group post-input-body">
                    <textarea className="form-control" ref="content"></textarea>
                </div>
                <div className="post-input-footer">
                    <button onClick={this.handleSubmit} className="btn btn-danger">发布</button>
                </div>
            </div>
        );
    }
});

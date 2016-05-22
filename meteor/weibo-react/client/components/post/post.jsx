const { Link } = ReactRouter;

// 微博展示组件
Post = React.createClass({
    render() {
        return (
            <div className="panel-body post">
                <div className="col-md-12 post-header">
                    <strong>{this.props.post.author.username}</strong>
                </div>
                <div className="col-md-12 post-body">
                    <div className="post-content">{this.props.post.content}</div>
                </div>
                <div className="col-md-12 post-footer">
                    <div className="col-md-12 post-created">
                    </div>
                    <div className="col-md-4 post-repost">转发 0</div>
                    <div className="col-md-4 post-comments">评论 0</div>
                    <div className="col-md-4 post-like">赞 {this.props.post.like}</div>
                </div>
            </div>
        );
    }
});

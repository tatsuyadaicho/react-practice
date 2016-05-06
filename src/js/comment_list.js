import React from 'react';
import Comment from './comment';

export default class CommentList extends React.Component {
    static get propTypes() {
        return {
            data: React.PropTypes.arrayOf(React.PropTypes.shape({
                id: React.PropTypes.number,
                author: React.PropTypes.string,
                text: React.PropTypes.string
            }))
        };
    }
    render() {
        const commentNodes = this.props.data.map((comment) => {
            return (
                <Comment key={comment.id} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}

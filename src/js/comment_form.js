import React from 'react';
import ReactDom from 'react-dom';

export default class CommentForm extends React.Component {
    static get propTypes() {
        return {
            onCommentSubmit: React.PropTypes.func
        };
    }
    handleSubmit(e) {
        console.info('submit');
        e.preventDefault();
        const authorForm =  ReactDom.findDOMNode(this.refs.author);
        const textForm = ReactDom.findDOMNode(this.refs.text);
        const author = authorForm.value.trim();
        const text = textForm.value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        authorForm.value = '';
        textForm.value = '';
    }
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
}

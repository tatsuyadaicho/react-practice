import React from 'react';
import ReactDOM from 'react-dom';
import CommentForm from './comment_form';
import CommentList from './comment_list';

class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);

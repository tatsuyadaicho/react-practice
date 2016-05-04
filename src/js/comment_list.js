import React from 'react';
import Comment from './comment';

export default class CommentList extends React.Component {
    render() {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">comment one</Comment>
                <Comment author="Jordan Walke">comment two</Comment>
            </div>
        );
    }
}

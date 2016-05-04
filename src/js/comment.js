import React from 'react';

export default class Comment extends React.Component {
    static get propTypes() {
        return {
            author: React.PropTypes.string,
            children: React.PropTypes.node
        };
    }
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
}

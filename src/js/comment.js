import React from 'react';
import marked from 'marked';

export default class Comment extends React.Component {
    static get propTypes() {
        return {
            author: React.PropTypes.string,
            children: React.PropTypes.node
        };
    }
    rawMarkup() {
        const rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    }
    render() {
        /* eslint-disable react/no-danger */
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
        /* eslint-disable */
    }
}

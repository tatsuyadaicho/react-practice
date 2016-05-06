import React from 'react';
import ReactDOM from 'react-dom';
import CommentForm from './comment_form';
import CommentList from './comment_list';

class CommentBox extends React.Component {
    static get propTypes() {
        return {
            data: React.PropTypes.object,
            pollInterval: React.PropTypes.number,
            url: React.PropTypes.string
        };
    }
    constructor(props) {
        super(props);
        this.state = {data: []};
    }
    loadCommentsFromServer() {
        fetch(this.props.url).
            then((response) => {
                return response.json();
            }).then((json) => {
                this.setState({
                    data: json
                });
            }).catch(e => console.error(this.props.url, e));
    }
    handleCommentSubmit(comment) {
        console.info('submit', comment);
        fetch(this.props.url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        }).then((data) => {
            this.setState({data: data});
        }).catch(e => console.error(this.props.url, e));
    }
    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(() => { 
            this.loadCommentsFromServer();
        }, this.props.pollInterval);
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={comment => this.handleCommentSubmit(comment)} />
            </div>
        );
    }
}

ReactDOM.render(
    <CommentBox url="http://localhost:3000/comments" pollInterval={2000} />,
    document.getElementById('content')
);

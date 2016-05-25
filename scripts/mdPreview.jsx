
var MarkdownPreviewer = React.createClass({
    
    render: function(){
        return (
            <div className="markdownPreviewer">
                <h1 className="title">Markdown Previewer</h1>
                <MarkdownBox />
            </div>
        );
    }
});

var MarkdownBox = React.createClass({
    getInitialState: function() {
        return {markdown: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n\n *[Tim Bauman\'s GitHub](https://github.com/baumant)*'};
    },
    handleChange: function(event) {
      this.setState({markdown: event.target.value});  
    },
    render: function() {
        var markdown = this.state.markdown;
        return (
            <div className="markdownBox row">
                <textarea className="col-md-6" value={markdown} onChange={this.handleChange} />
                <PreviewBox preview={markdown} />
            </div>
        );
    }
});

var PreviewBox = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.preview.toString(), {gfm: true, sanitize: true});
        return { __html: rawMarkup };
    },
    render: function() {
        return (
            <div className="previewBox col-md-6">
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

ReactDOM.render(
    <MarkdownPreviewer />,
    document.getElementById('content')
);
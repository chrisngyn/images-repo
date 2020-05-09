import React from 'react';

export default class Search extends React.Component {
    state = {
        userInput: ''
    }

    getUserInput = (event) => {
        console.log(event.target.value);
        this.setState({
            userInput: event.target.value
        })
    }

    enterQuery = (event) => {
        event.preventDefault();
        this.props.userEntersQuery(this.state.userInput);
    }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.enterQuery}>
                    <div className="field">
                        <label>Search for an image</label>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.userInput}
                            onChange={this.getUserInput}
                            onClick={() => console.log("Search field clicked")}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
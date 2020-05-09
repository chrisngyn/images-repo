import React from 'react';
import Search from './SearchBar';
import ImageList from './Images';
import Unsplash from './Unsplash';

export default class App extends React.Component {
    state = {
        images: []
    }

    onSearchSubmit = async (query) => {
        console.log("User is searching for: " + query);
        const response = await Unsplash.get("/search/photos", {
            params: { query: query }
        });

        console.log(response.data.results)
        
        this.setState({
            images: response.data.results
        })
    }

    render() {
        return(
            <div className="ui container" style={{ marginTop: '25px' }}>
                <Search userEntersQuery={this.onSearchSubmit} /* passing a FUNCTION as PROP to be called */ />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}
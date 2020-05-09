import React from 'react';
import Search from './SearchBar';
import ImageList from './Images';
import Axios from 'axios';

export default class App extends React.Component {
    state = {
        images: []
    }

    onSearchSubmit = async (search) => {
        console.log("User is searching for: " + search);
        
        const response = await Axios.get("https://api.unsplash.com/search/photos", {
            params: { query: search },
            headers: { Authorization: "Client-ID MK0UkR_pgHixKaaq7pXfsuGKIJxIA0XSzzsvKTL03MI"}
        });

        console.log(response.data.results)
        
        this.setState({
            images: response.data.results
        })
    }

    render() {
        return(
            <div className="ui container" style={{ marginTop: '25px' }}>
                <Search userEntersQuery={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}
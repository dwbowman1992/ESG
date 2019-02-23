import React from 'react';

var url = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBJV2JWouVd5YLYA4hfy87rFozEzdydSPE&part=snippet,contentDetails,statistics,status';


class ApiUtilities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            responseCode: null,
            items: []
        };
    }

    componentDidMount() {
        fetch(url)
            .then(
                (res) => {
                    this.setState({
                        responseCode: res.status
                    });
                    return res.json();
                }
            )
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items, responseCode } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    <li>
                        This is a sample API call
                    </li>
                    {items.map(item => (
                        <li key={item.snippet.description}>
                            This is a sample description being returned: {item.snippet.description}
                        </li>
                    ))}
                    <li>
                        Code Returned: {responseCode}
                    </li>
                </ul>
            );
        }
    }
}

export default ApiUtilities;

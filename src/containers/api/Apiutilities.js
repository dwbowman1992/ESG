import React from 'react';

var url = 'http://192.168.0.11:8000/tests:';


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
        } else if(items.length) {
            return (
                <ul style={{margin: '0px'}}>
                    <li>
                        This is a sample API call
                    </li>
                    {items.map(item => (
                        <li key={item.something}>
                            This is a sample description being returned: {item.something}
                        </li>
                    ))}
                    <li>
                        Code Returned: {responseCode}
                    </li>
                </ul>
            );
        } else {
            return (
                <div>Empty Array of items returned</div>
            )
        }
    }
}

export default ApiUtilities;

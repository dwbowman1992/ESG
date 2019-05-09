import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import './styles.css';

class Settings extends React.Component {
  constructor(props) {
      super(props);
      this.apiResponse = null;
      this.state = {
          loaded: false,
          apiInterval: null,
          forceUpdate: false
      };
      toast.configure();
  }

  componentDidMount() {
      this.state.apiInterval = this.startInterval();
  }

  componentDidUpdate() {
      if(this.props.error) {
          this.showError(this.props.error.message);
      }
  }

  componentWillUnmount() {
      this.stopInterval();
  }

  startInterval() {
      return setInterval(() => {
          this.props.onConfigRequestData();
      }, 500);
  };

  stopInterval() {
      clearInterval(this.state.apiInterval);
  }

  showError(message) {
      toast.error(message, {
          position: toast.POSITION.BOTTOM_CENTER,
          onClose: () => {
              this.apiResponse = null;
              this.props.onConfigRequestData();
          }
      });
  }

    render() {
      const { fetching, data, error } = this.props;

      let isDarkMode = parseInt(this.apiResponse.isDarkMode);
      // let degree = parseInt(this.apiResponse.direction);

      return (
        <div className="container col-sm-12">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Settings</h1>
              <div>
                <h4>Dark Mode: {isDarkMode}</h4>
            </div>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return ({
      fetching: state.reducer.fetching,
      data: state.reducer.data,
      error: state.reducer.error
  });
}

function mapDispatchToProps(dispatch){
  return bindActionCreators ({
    onConfigRequestData,
  }, dispatch);
}

// function mapDispatchToProps(dispatch){
//   return ({
//       onConfigRequestData: () => dispatch({ type: "GET_CONFIGURATION_REQUEST" })
//   });
// }

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

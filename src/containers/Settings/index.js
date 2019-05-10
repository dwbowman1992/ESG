import React from 'react';
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import './styles.css';

class Settings extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isDarkMode: 0,
        onSwitchClick: false,
      };
      toast.configure();
      this.settingsDidChange = this.settingsDidChange.bind(this);
  }

  componentDidMount() {
    this.props.onConfigRequestData();
  }

  componentDidUpdate() {
      if(this.props.error) {
          this.showError(this.props.error.message);
      }
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

  settingsDidChange() {
    const values = {targetFrequencies: [123, 160], errorThreshold: 2, isDarkMode: 0};
    this.props.onConfigPostData(values);
  }

  render() {
      const { fetching, data, error } = this.props;
      const mode = this.state.onSwitchClick ? 'Dark' : 'Light';
      const switchBtn = this.state.onSwitchClick ? faToggleOn : faToggleOff;
      const switchClass = this.state.onSwitchClick ? 'ToggleOn' : 'ToggleOff';

      return (
        <div className="container fontColor">
          <div>
            <h2 className="text-center pgHeader">Settings</h2>
            <div>
              <div className="input-group mb-3">
                <span className="inputHeader"><h4>Target Frequencies:</h4></span>
                <input className="form-control" placeholder="Minimum"/>
                <span className="inputTo"><h4>to</h4></span>
                <input className="form-control" placeholder="Maximum"/>
              </div>
              <div className="input-group mb-3">
                <span className="inputHeader"><h4>Error Threshhold:</h4></span>
                <input className="form-control" placeholder="Value"/>
              </div>
              <div className="input-group mb-3">
                <span className="inputHeader"><h4>Dark Mode</h4></span>
                <div>
                  <button className="switchBtnWrapper" onClick={() => this.setState({ onSwitchClick: !this.state.onSwitchClick})}>
                    <FontAwesomeIcon className={switchClass} icon={switchBtn} size="2x"/>
                  </button>
                </div>
              </div>
              <div className="float-right">
                <button>Save Settings</button>
              </div>
            </div>
          </div>
        </div>
      );

  }
}

const mapStateToProps = state => {
  return {
      fetching: state.reducer.fetching,
      data: state.reducer.data,
      error: state.reducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onConfigRequestData: () => dispatch({ type: "GET_CONFIGURATION_REQUEST" }),
      onConfigPostData: (values) => dispatch({ type: "POST_UPDATE_SETTINGS", obj: values }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

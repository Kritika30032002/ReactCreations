import React, { Component } from "react";
import "./styles.css";
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullName: '',
//       weight: '',
//       height: '',
//       bmi: '',
//       message: '',
//       optimalWeight: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.calculateBMI = this.calculateBMI.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   calculateBMI() {
//     let heightSquared = ((this.state.height / 100) * this.state.height) / 100;
//     let bmi = this.state.weight / heightSquared;
//     let low = Math.round(18.5 * heightSquared);
//     let high = Math.round(24.99 * heightSquared);
//     let message = '';
//     if (bmi >= 18.5 && bmi <= 24.99) {
//       message = 'You are in a healthy weight range';
//     } else if (bmi >= 25 && bmi <= 29.9) {
//       message = 'You are overweight';
//     } else if (bmi >= 30) {
//       message = 'You are obese';
//     } else if (bmi < 18.5) {
//       message = 'You are under weight';
//     }

//     this.setState({ message: message });
//     this.setState({
//       optimalWeight:
//         'Your suggested weight range is between ' + low + ' - ' + high
//     });
//     this.setState({ bmi: Math.round(bmi * 100) / 100 });
//   }

//   handleSubmit(e) {
//     this.calculateBMI();
//     e.preventDefault();
//     // console.log(this.state);
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="App-header" />
//         <form onSubmit={this.handleSubmit}>
//           <h2>BMI calculator</h2>
//           <div>
//             <label>Please enter your name</label>
//             <input
//               autoComplete="off"
//               type="text"
//               name="fullName"
//               value={this.state.fullName}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label>Enter your height in cm</label>
//             <input
//               type="number"
//               name="height"
//               value={this.state.height}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div>
//             <label>Enter your weight in kg</label>
//             <input
//               type="number"
//               name="weight"
//               value={this.state.weight}
//               onChange={this.handleChange}
//             />
//             <br />
//           </div>
//           <div>
//             {/* <input type="submit" value="Submit" /> */}
//             <button type="submit">submit</button>
//             <h3> {this.state.message} </h3>
//             <h3> {this.state.bmi} </h3>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      height: "",
      weight: "",
      bmi: "",
      msg: ""
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.calculateBMI = this.calculateBMI.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculateBMI = () => {
    let heightSq = (this.state.height / 100) * (this.state.height / 100);
    let bmi = this.state.weight / heightSq;
    let msg = "";
    if (bmi < 18.5) {
      msg = "under Weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      msg = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      msg = "Over Weight";
    } else if (bmi >= 30) {
      msg = "Obesity";
    }
    this.setState({ msg: msg });
    this.setState({ bmi: Math.round(bmi * 100) / 100 });
  };

  handleSubmit = (e) => {
    this.calculateBMI();
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h2> BMI calculator </h2>
          <div>
            <label>Height(cm)</label>
            <input
              type="number"
              value={this.state.height}
              name="height"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Weight</label>
            <input
              type="number"
              value={this.state.weight}
              name="weight"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
          <h2> {this.state.bmi} </h2>
          <h2> {this.state.msg} </h2>
        </form>
      </div>
    );
  }
}
export default App;

import React from 'react';
import './App.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //initializing the state of the application...
      powerButtonImg: "https://i.postimg.cc/5NZ5mz3s/Power-Button-On.png",
      screenImg: 'https://i.postimg.cc/1zJjmh2n/LCD-Screen-On.png',
      track: "https://i.postimg.cc/Pxzb84J8/Volume-Track-Light.png",
      volumeImg: "https://i.postimg.cc/1zFryPZB/Volume-Label-On.png",
      bank1: "https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png",
      bank2: "https://i.postimg.cc/sx8D8vPy/Bank-2-Button-Off.png",
      bankStyle: 'pointer',
      pad: Array.from({ length: 9 }, () => 'https://i.postimg.cc/pdwwm3Gt/Pad-Off.png'),
      volume: 0.5,
      displayText: '',
      // Here are all of the sounds used
      sounds1: [
      { src: "https://od.lk/s/MTBfMjM1MDA3Njg2Xw/Kick%20004.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA3NzE0Xw/Snare%20002.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA3ODAyXw/Clap%20002.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA3Nzk3Xw/Spinz%20808.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA3Nzk2Xw/Rim%20003.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA3ODAwXw/Speaker%20Knockerz%20%28RIP%29.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA3Nzk1Xw/Zay%20Signature%20Perc.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA3Nzk4Xw/Open%20Hi%20Hat%20001.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA3Nzk5Xw/Hi%20Hat%20002.mp3", audio: new Audio() }
      ],
      sounds2: [
      { src: "https://od.lk/s/MTBfMjM1MDA4NjkyXw/1.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA4NjkxXw/2.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA4NjkwXw/3.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA4NDkxXw/Lofi%20Crash%20009.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA4NDk1Xw/Lofi%20Perc%20005.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA4Njg5Xw/4.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA4NDkwXw/Lofi%20Kick%20013.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA4NDg4Xw/Lofi%20Hi%20Hat%20001.mp3", audio: new Audio() },
      { src: "https://od.lk/s/MTBfMjM1MDA4NDg5Xw/Lofi%20Snare%20002.mp3", audio: new Audio() }
      ] };
    //binding all of the functions so they can be used
    this.power = this.power.bind(this);
    this.bank = this.bank.bind(this);
    this.padPress = this.padPress.bind(this);
    this.padRelease = this.padRelease.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }
  //power function handles when the user turns the app on or off, a different set of images should be used depending on state
  power() {
    //when app is turned off
    if (this.state.powerButtonImg === "https://i.postimg.cc/5NZ5mz3s/Power-Button-On.png") {
      this.setState({
        powerButtonImg: "https://i.postimg.cc/WbD6r8MD/Power-Button-Off.png",
        screenImg: 'https://i.postimg.cc/KjgqDKzB/LCD-Screen-Off.png',
        track: 'https://i.postimg.cc/zB1SBMzr/Volume-Track-Light-Off.png',
        volumeImg: 'https://i.postimg.cc/PJXWbwvV/Volume-Label-Off.png',
        bank1: 'https://i.postimg.cc/gjr2NvZN/Bank-1-Button-Off.png',
        bank2: 'https://i.postimg.cc/sx8D8vPy/Bank-2-Button-Off.png',
        bankStyle: 'default',
        displayText: '',
        pad: Array.from({ length: 9 }, () => 'https://i.postimg.cc/pdwwm3Gt/Pad-Off.png') });

      document.documentElement.style.setProperty('--thumb-background', `url('https://i.postimg.cc/pd7ZTWWS/Volume-Knob-Light-off.png')`);
    } 
    //when app is turned on
    else
    {
      this.setState({
        powerButtonImg: "https://i.postimg.cc/5NZ5mz3s/Power-Button-On.png",
        screenImg: 'https://i.postimg.cc/1zJjmh2n/LCD-Screen-On.png',
        track: 'https://i.postimg.cc/Pxzb84J8/Volume-Track-Light.png',
        volumeImg: 'https://i.postimg.cc/1zFryPZB/Volume-Label-On.png',
        bank1: 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png',
        bank2: 'https://i.postimg.cc/sx8D8vPy/Bank-2-Button-Off.png',
        bankStyle: 'pointer' });

      document.documentElement.style.setProperty('--thumb-background', `url('https://i.postimg.cc/xCYYnr8m/Volume-Knob-Light.png')`);
    }
  }
  setVolume(newVolume) {
    this.setState({ volume: newVolume });
  }
  bank(a) {
    if (this.state.powerButtonImg === "https://i.postimg.cc/5NZ5mz3s/Power-Button-On.png")
    {
      if (a === 1) {
        this.setState({
          bank1: 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png',
          bank2: 'https://i.postimg.cc/sx8D8vPy/Bank-2-Button-Off.png' });

      } else
      {
        this.setState({
          bank1: 'https://i.postimg.cc/gjr2NvZN/Bank-1-Button-Off.png',
          bank2: 'https://i.postimg.cc/8PJCvmDC/Bank-2-Button-On.png' });

      }
    }
  }
  //
  padPress(a) {
    if (this.state.powerButtonImg === "https://i.postimg.cc/5NZ5mz3s/Power-Button-On.png") {
      if (a !== 0 && a !== 1 && a !== 2 && a !== 3 && a !== 4 && a !== 5 && a !== 6 && a !== 7 && a !== 8) {
        switch (a.keyCode) {
          case 81:a = 0;
            break;
          case 87:a = 1;
            break;
          case 69:a = 2;
            break;
          case 65:a = 3;
            break;
          case 83:a = 4;
            break;
          case 68:a = 5;
            break;
          case 90:a = 6;
            break;
          case 88:a = 7;
            break;
          case 67:a = 8;
            break;
          default: break;
          }

      }
      const updatedPad = [...this.state.pad];
      if (a === 0 || a.keyCode === 81) {
        if (this.state.bank1 === 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png') {
          const sound = this.state.sounds1[0];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'KICK' });

          sound.audio.play();
        }
        if (this.state.bank2 === 'https://i.postimg.cc/8PJCvmDC/Bank-2-Button-On.png') {
          const sound = this.state.sounds2[0];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'LOFI SAMPLE 1' });

          sound.audio.play();
        }
      }
      if (a === 1 || a.keyCode === 87) {
        if (this.state.bank1 === 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png') {
          const sound = this.state.sounds1[1];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'SNARE' });

          sound.audio.play();
        }
        if (this.state.bank2 === 'https://i.postimg.cc/8PJCvmDC/Bank-2-Button-On.png') {
          const sound = this.state.sounds2[1];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'LOFI SAMPLE 2' });

          sound.audio.play();
        }
      }
      if (a === 2 || a.keyCode === 69) {
        if (this.state.bank1 === 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png') {
          const sound = this.state.sounds1[2];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'CLAP' });

          sound.audio.play();
        }
        if (this.state.bank2 === 'https://i.postimg.cc/8PJCvmDC/Bank-2-Button-On.png') {
          const sound = this.state.sounds2[2];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'LOFI SAMPLE 3' });

          sound.audio.play();
        }
      }
      if (a === 3 || a.keyCode === 65) {
        if (this.state.bank1 === 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png') {
          const sound = this.state.sounds1[3];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: '808 BASS' });

          sound.audio.play();
        }
        if (this.state.bank2 === 'https://i.postimg.cc/8PJCvmDC/Bank-2-Button-On.png') {
          const sound = this.state.sounds2[3];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'CRASH' });

          sound.audio.play();
        }
      }
      if (a === 4 || a.keyCode === 83) {
        if (this.state.bank1 === 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png') {
          const sound = this.state.sounds1[4];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'RIM 1' });

          sound.audio.play();
        }
        if (this.state.bank2 === 'https://i.postimg.cc/8PJCvmDC/Bank-2-Button-On.png') {
          const sound = this.state.sounds2[4];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'LOFI RIM' });

          sound.audio.play();
        }
      }
      if (a === 5 || a.keyCode === 68) {
        if (this.state.bank1 === 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png') {
          const sound = this.state.sounds1[5];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'VOX CHANT' });

          sound.audio.play();
        }
        if (this.state.bank2 === 'https://i.postimg.cc/8PJCvmDC/Bank-2-Button-On.png') {
          const sound = this.state.sounds2[5];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'LOFI SAMPLE 4' });

          sound.audio.play();
        }
      }
      if (a === 6 || a.keyCode === 90) {
        if (this.state.bank1 === 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png') {
          const sound = this.state.sounds1[6];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'RIM 2' });

          sound.audio.play();
        }
        if (this.state.bank2 === 'https://i.postimg.cc/8PJCvmDC/Bank-2-Button-On.png') {
          const sound = this.state.sounds2[6];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'LOFI KICK' });

          sound.audio.play();
        }
      }
      if (a === 7 || a.keyCode === 88) {
        if (this.state.bank1 === 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png') {
          const sound = this.state.sounds1[7];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'OPEN HH' });

          sound.audio.play();
        }
        if (this.state.bank2 === 'https://i.postimg.cc/8PJCvmDC/Bank-2-Button-On.png') {
          const sound = this.state.sounds2[7];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'LOFI HH' });

          sound.audio.play();
        }
      }
      if (a === 8 || a.keyCode === 67) {
        if (this.state.bank1 === 'https://i.postimg.cc/CM61d63t/Bank-1-Button-On.png') {
          const sound = this.state.sounds1[8];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'CLOSED HH' });

          sound.audio.play();
        }
        if (this.state.bank2 === 'https://i.postimg.cc/8PJCvmDC/Bank-2-Button-On.png') {
          const sound = this.state.sounds2[8];
          sound.audio.pause();
          sound.audio.currentTime = 0;
          sound.audio.src = sound.src;
          sound.audio.volume = this.state.volume;
          this.setState({
            displayText: 'LOFI SNARE' });

          sound.audio.play();
        }
      }
      updatedPad[a] = 'https://i.postimg.cc/7LJvYqNV/Pad-On.png';
      this.setState({
        pad: updatedPad });

    }
  }
  padRelease(a) {
    this.setState({
      pad: Array.from({ length: 9 }, () => 'https://i.postimg.cc/pdwwm3Gt/Pad-Off.png') });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { tabindex: "0", onKeyDown: this.padPress, onKeyUp: this.padRelease }, /*#__PURE__*/
      React.createElement("img", { className: "background-img no-drag", src: "https://i.postimg.cc/3NnNyvkF/Drum-Machine-Background.jpg" }), /*#__PURE__*/
      React.createElement("div", { className: "top-buttons" }, /*#__PURE__*/
      React.createElement("div", { id: "powerb-div", class: "power-button" }, /*#__PURE__*/
      React.createElement("img", { onClick: this.power, class: "no-drag", src: this.state.powerButtonImg }))), /*#__PURE__*/


      React.createElement("img", { id: "bank-1", className: "no-drag", style: { cursor: this.state.bankStyle }, onClick: () => this.bank(1), src: this.state.bank1 }), /*#__PURE__*/
      React.createElement("img", { id: "bank-2", className: "no-drag", style: { cursor: this.state.bankStyle }, onClick: () => this.bank(2), src: this.state.bank2 }), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("img", { id: "screen", className: "no-drag", src: this.state.screenImg })), /*#__PURE__*/

      React.createElement("h3", { id: "display" }, this.state.displayText), /*#__PURE__*/
      React.createElement("img", { id: "drum-pad1", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(0), onMouseUp: () => this.padRelease(0), className: "drum-pad no-drag", src: this.state.pad[0] }), /*#__PURE__*/
      React.createElement("img", { id: "drum-pad2", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(1), onMouseUp: () => this.padRelease(1), className: "drum-pad no-drag", src: this.state.pad[1] }), /*#__PURE__*/
      React.createElement("img", { id: "drum-pad3", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(2), onMouseUp: () => this.padRelease(2), className: "drum-pad no-drag", src: this.state.pad[2] }), /*#__PURE__*/
      React.createElement("img", { id: "drum-pad4", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(3), onMouseUp: () => this.padRelease(3), className: "drum-pad no-drag", src: this.state.pad[3] }), /*#__PURE__*/
      React.createElement("img", { id: "drum-pad5", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(4), onMouseUp: () => this.padRelease(4), className: "drum-pad no-drag", src: this.state.pad[4] }), /*#__PURE__*/
      React.createElement("img", { id: "drum-pad6", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(5), onMouseUp: () => this.padRelease(5), className: "drum-pad no-drag", src: this.state.pad[5] }), /*#__PURE__*/
      React.createElement("img", { id: "drum-pad7", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(6), onMouseUp: () => this.padRelease(6), className: "drum-pad no-drag", src: this.state.pad[6] }), /*#__PURE__*/
      React.createElement("img", { id: "drum-pad8", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(7), onMouseUp: () => this.padRelease(7), className: "drum-pad no-drag", src: this.state.pad[7] }), /*#__PURE__*/
      React.createElement("img", { id: "drum-pad9", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(8), onMouseUp: () => this.padRelease(8), className: "drum-pad no-drag", src: this.state.pad[8] }), /*#__PURE__*/
      React.createElement("p", { className: "drum-pad q", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(0), onMouseUp: () => this.padRelease(0), id: "Q" }, "Q"), /*#__PURE__*/
      React.createElement("p", { className: "drum-pad w", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(1), onMouseUp: () => this.padRelease(1), id: "W" }, "W"), /*#__PURE__*/
      React.createElement("p", { className: "drum-pad e", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(2), onMouseUp: () => this.padRelease(2), id: "E" }, "E"), /*#__PURE__*/
      React.createElement("p", { className: "drum-pad a", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(3), onMouseUp: () => this.padRelease(3), id: "A" }, "A"), /*#__PURE__*/
      React.createElement("p", { className: "drum-pad s", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(4), onMouseUp: () => this.padRelease(4), id: "S" }, "S"), /*#__PURE__*/
      React.createElement("p", { className: "drum-pad d", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(5), onMouseUp: () => this.padRelease(5), id: "D" }, "D"), /*#__PURE__*/
      React.createElement("p", { className: "drum-pad z", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(6), onMouseUp: () => this.padRelease(6), id: "Z" }, "Z"), /*#__PURE__*/
      React.createElement("p", { className: "drum-pad x", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(7), onMouseUp: () => this.padRelease(7), id: "X" }, "X"), /*#__PURE__*/
      React.createElement("p", { className: "drum-pad c", style: { cursor: this.state.bankStyle }, onMouseDown: () => this.padPress(8), onMouseUp: () => this.padRelease(8), id: "C" }, "C"), /*#__PURE__*/
      React.createElement("img", { id: "volume-name", className: "no-drag", src: this.state.volumeImg }), /*#__PURE__*/
      React.createElement("img", { id: "track-light", className: "no-drag", src: this.state.track }), /*#__PURE__*/
      React.createElement("div", { className: "slider-container" }, /*#__PURE__*/
      React.createElement("input", { type: "range", value: this.state.volume, min: "0", max: "1", step: "0.1", onChange: e => this.setVolume(parseFloat(e.target.value)), className: "volume-slider" }))));



  }}

export default DrumMachine;

import React from 'react';
import playbtn from '../assets/playbtn.svg';
import MySong from '../assets/abc.mp3'
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import '../Styles/css/wavesufercomponent.css';

class WaveSurferComponent extends React.Component {
  state = {
    regions: [],
    context: null,
    processor: null,
  };

  componentDidMount() {
    const aud = document.querySelector('#song');
    this.wavesurfer = WaveSurfer.create({
      barWidth: 1,
      cursorWidth: 0,
      container: '#waveform',
      backend: 'MediaElement',
      height: 50,
      progressColor: '#4a74a5',
      responsive: true,
      waveColor: '#ccc',
      cursorColor: '#4a74a5',
      plugins: [
        RegionsPlugin.create({
          regions: this.state.regions,
          dragSelection: {
            slop: 5,
          },
        }),
      ],
    });
    this.wavesurfer.load(aud);
    this.wavesurfer.on('region-click', (region, e) => {
      e.stopPropagation();
      this.wavesurfer.play(region.start, region.end);
    });

    this.wavesurfer.on('region-created', (region, e) => {
      this.wavesurfer.clearRegions();
      this.setState({ regions: region });
    });
  }

  playIt = () => {
    this.wavesurfer.playPause();
  };

  playRegion = () => {
    this.wavesurfer.play(this.state.regions.start, this.state.regions.end);
  };

  removeAllRegions = () => {
    this.wavesurfer.clearRegions();
  };

  render() {
    return (
      <div className="audiomsg">
        <button onClick={this.playIt}>
          <img src={playbtn} alt="" />
        </button>

        <div id="waveform" />

        <audio
          id="song"
          src={MySong}
          // src="https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a"
        />
      </div>
    );
  }
}

export default WaveSurferComponent;

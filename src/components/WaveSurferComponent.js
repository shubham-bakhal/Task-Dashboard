import React from 'react';
import playbtn from '../assets/playbtn.svg';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

class WaveSurferComponent extends React.Component {
  state = {
    regions: [],
    context: null,
    processor: null,
  };

  componentDidMount() {
    const aud = document.querySelector('#song');
    this.wavesurfer = WaveSurfer.create({
      barWidth: 1.5,
      cursorWidth: 0,
      container: '#waveform',
      backend: 'MediaElement',
      height: 50,
      progressColor: '#2D4ACD',
      responsive: true,
      waveColor: '#D9E0EF',
      barGap: 2,
      barRadius: 1,
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

    this.wavesurfer.on('audioprocess', function (currTime) {
      var currentTime = currTime / 60;
      document.getElementById('tracktime').innerText = currentTime.toFixed(2);
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

        <audio id="song" src={this.props.aud} />
        <span id="tracktime">0:00</span>
      </div>
    );
  }
}

export default WaveSurferComponent;

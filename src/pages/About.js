import React, { Component } from 'react';
import './About.css';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
  render() {
    return (
      <div className="About container">
        <h1>About</h1>
        <p>
          <b>
            Our Product
          </b>
        </p>
        <p>
          EWH Portable Microscopy Software for Parasitic Infection Diagnosis
          This is a TensorFlow.js web application where users can classify images selected locally
          or taken with their device's camera. The app uses TensorFlow.js and a pre-trained model
          converted to the TensorFlow.js format to provide the inference capabilities.
          This model is saved locally in the browser using IndexedDB. A service worker is also used
          to provide offline capabilities.
        <br />
        <br />
          The Portable Microscopy team of Engineering World Health (EWH) UCSD
          Chapter 2020-2021 developed and trained a convolutional neural network
          to identify soil transmitted helminths in fecal samples. Soil
          transmitted helminth infections affect nearly 1 billion people globally,
          and are typically treated through mass drug administration without
          diagnosis. Through this webpage, you can upload images of fecal samples
          and our network will check for Soil Transmitted Helminths and output a
          diagnosis.
        <br />
        <br />
        </p>
        <p>
        <b>
          Our Team
        </b>
        </p>
        <p>
          The Portable Microscopy team of Engineering World Health (EWH) UCSD Chapter 2020-2021
        </p>
        <h1>Contact Us for Suggestions</h1>
        <p>
        If you’d like to contact us for any clarifications, questions, or
        suggestions to this webpage and/or convolutional neural network, please
        contact us at
        <br />
        - rkunowsk@ucsd.edu
        <br />
        - s2pai@ucsd.edu
        <br />
        Or fill out this google form (Please copy and paste the link into a new tab):
        forms.gle/5vp3nQWbFB64kzQR9
        </p>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Instructions.css';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
  render() {
    return (
      <div className="Instructions container">
        <h1>Instructions</h1>
        <p>
          Steps to upload fecal sample image for STH diagnosis:
        <br />
        <br />
          1. Go to the "Classify" page
        <br />
          2. Click on "Select Local File"
        <br />
          3. Click on "Browse" under Select Image File.
        <br />
          4. Select the image file you want to process.
        <br />
          5. Click on "Classify"
        <br />
        <br />
          The webpage will now output an STH diagnosis.
        </p>
        <h1> FAQS </h1>
        <p>
          * How does this work?
        <br />
          * How to save this webpage in my browser?
        <br />
          * How accurate is the diagnosis?
        <br />
          * Why do we need diagnosis when mass drug administration exists?
        <br />
          * What are the effects of Soil Transmitted Helminth infections?
        <br />
          * Where can I learn more about Soil Transmitted Helminths?
        <br />
              * https://www.neglecteddiseases.gov/usaid-targeted-diseases/
              soil-transmitted-helminths/
        <br />
              * https://www.who.int/news-room/fact-sheets/detail/soil-
              transmitted-helminth-infections

        </p>
      </div>
    );
  }
}
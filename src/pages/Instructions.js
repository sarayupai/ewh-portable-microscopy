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
          <b>
            What is this webpage for?
            </b>
            <br />
            Our project aims to reduce mass drug administration to treat Soil Transmitted Helminth
            infections. Over 1 billion people are affected by these parasitic diseases globally,
            and the current solution is to administer packaged drugs to entire communities without
            prior diagnosis because that requires time and resources such as trained microscopists
            which aren’t readily available. We’ve developed a convolutional neural network that
            detects soil transmitted helminths in microscopic images of fecal samples that works in
            the backend of this progressive web page. This webpage only requires internet on the
            first use and for updates, and is stored in the user’s browser cache for future offline
            uses
        <br />
        <br />
          <b> How to save this web app for offline use?
          </b>
          <br />
            In Chrome, click on the three dots at the top left of the page.
          <br /> Select "More Tools" and select "Create shortcut" to create a shortcut locally
          on your computer.
        <br />
        <br />
          <b> How accurate is the diagnosis?
          </b>
        <br />
        * Accuracy: 91.82%
        <br />
        * Sensitivity: 73.33%
        <br />
        * False negative rate: 2.3%
        <br />
        * Specificity: 96.55%
        <br />
        <br />
          <b> Why do we need diagnosis when mass drug administration exists?
          </b>
        <br />
        Since individual diagnosis by trained microscopist is currently not a feasible option,
        most tropical illnesses are treated with the distribution of mass drug delivery,
        which is a cheap way of eliminating multiple illnesses that share the same geographic
        region. However, this method is wasteful and often unpleasant for the population receiving
        the distributed medicine due to various non-lethal side effects such as nausea, vomiting,
        etc. Our goal is to provide the ability for easy individual diagnosis of these parasitic
        diseases to avoid administering drugs to uninfected people.
        <br />
        <br />
          <b> What are the effects of Soil Transmitted Helminth infections?
          </b>
        <br />
        The World Health Organization (WHO) lists the effects of STH infection as the following:
        <br />
        - "The worms feed on host tissues, including blood, which leads to a loss of iron and
         protein."
        <br />
        - "Hookworms in addition cause chronic intestinal blood loss that can result in anaemia."
        <br />
        - "The worms increase malabsorption of nutrients. In addition, roundworm may possibly
        compete
        for vitamin A in the intestine."
        <br />
        - "Some soil-transmitted helminths also cause loss of appetite and, therefore, a reduction
         of nutritional intake and physical fitness."
        <br />
        <br />
          <b> Where can I learn more about Soil Transmitted Helminths?
          </b>
        <br />
          Here are some links to help supplement your knowledge of Soil Transmitted Helminths (Please copy and paste the links into a new tab):
        <br />
        https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections
        <br />
        https://www.neglecteddiseases.gov/usaid-targeted-
        diseases/soil-transmitted-helminths
        </p>
      </div>
    );
  }
}

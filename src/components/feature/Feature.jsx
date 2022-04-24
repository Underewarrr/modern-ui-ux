import React from 'react';
import './feature.css';


const featuresData = [
  {
    title: 'Improving end distrusts instantly ',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active ',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Improving end distrusts instantly ',
    text: '',
  },
  {
    title: 'Really boy law county ',
    text:'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  }
]


const Feature = ({ title, text }) => (
  <div className="uiux__features-container__feature">
    <div className="uiux__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="uiux__features-container__feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;

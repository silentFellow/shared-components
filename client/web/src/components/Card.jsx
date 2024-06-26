/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

class Card extends React.Component {
  render() {
    const { props } = this;
    return (
      <section className='previewSection'>
        <div className='backCard'>
          <div className='card'>
            <div className='cardNameDiv'>
              <h4>
                { props.cardName }
              </h4>
            </div>
            <div className='imgDiv'>
              <img src={ props.cardImage } alt={ props.cardName } />
              {props.cardTrunfo ?
                <div className='trumpIcon'>
                  <p>Top Trump</p>
                </div> : <div /> }
            </div>
            <div className='descriptionDiv'>
              <h3>{ props.cardDescription }</h3>
            </div>
            <div className='attributes'>
              <div className='att1 atts'>
                <p>Rank</p>
                <h2>{ props.cardAttr1 ? props.cardAttr1 : '00' }</h2>
              </div>
              <div className='att2 atts'>
                <p>Runs</p>
                <h2>{ props.cardAttr2 ? props.cardAttr2 : '00' }</h2>
              </div>
              <div className='att3 atts'>
                <p>High Score:</p>
                <h2>{ props.cardAttr3 ? props.cardAttr3 : '00' }</h2>
              </div>
              <div className='att4 attsDif' style={{justifyContent:'flex-end'}}>
                <p>Duck's outs:</p>
                <h2>{ props.cardAttr4 ? props.cardAttr4 : '00' }</h2>
              </div>
              <div className='att5 attsDif' style={{justifyContent:'flex-end'}}>
                <p>Total 4's:</p>
                <h2>{ props.cardAttr5 ? props.cardAttr5 : '00' }</h2>
              </div>
              <div className='att6 attsDif' style={{justifyContent:'flex-end'}}>
                <p>Total 6's:</p>
                <h2>{ props.cardAttr6 ? props.cardAttr6 : '00' }</h2>
              </div>
            </div>
            <div className='rarityDiv'>
              <h2>{ props.cardRare }</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardAttr4: PropTypes.string.isRequired,
  cardAttr5: PropTypes.string.isRequired,
  cardAttr6: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import '../src/styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: false,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.imgSaver = this.imgSaver.bind(this);
  }

  imgSaver = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      this.setState({
        cardImage: reader.result,
      }, this.buttonEnabler);
    };
    document.getElementsByClassName('imgInput')[0].style.color='#3f3f3f';
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo, cardImage } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    if (card.cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((previousState) => ({
      cards: [...previousState.cards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));

    document.getElementById('descript').value='';
    document.getElementById('imageInput').value = '';
  };

  buttonEnabler = () => {
    const { cardName, cardAttr1, cardAttr2,
      cardAttr3, cardImage } = this.state;
    const maxAttrValue = 90;
    const maxTotalAttr = 210;
    if (cardName !== ''
      && parseInt(cardAttr1, 10) >= 0
      && parseInt(cardAttr1, 10) <= maxAttrValue
      && parseInt(cardAttr2, 10) >= 0
      && parseInt(cardAttr2, 10) <= maxAttrValue
      && parseInt(cardAttr3, 10) >= 0
      && parseInt(cardAttr3, 10) <= maxAttrValue
      && parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)
      <= maxTotalAttr
      && cardImage !== '') {
      this.setState({ isSaveButtonDisabled: false });
    } else { this.setState({ isSaveButtonDisabled: true }); }
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    },
    this.buttonEnabler);
  };

  render() {
    const { cards } = this.state;
    return (
      <main>
       
        <section className="instructions">
          
        </section>
        <section className='createCard'>
          <div className='form'>
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              imgSaver={ this.imgSaver }
            />
          </div>
          <div className='previewCard'>
            <h2 className='previewTitle'> Preview Card</h2>
            <Card
              { ...this.state }
            />
          </div>
        </section>
        <section className='savedCards'>
          <h2 className='savedCardsTitle'>Saved Cards</h2>
          <div className='savedCardsDiv'>
            {cards.map((card) => (
              <Card
                key={ card.cardName }
                { ...card }
              />
            ))}

          </div>
        </section>
      </main>

    );
  }
}

export default App;

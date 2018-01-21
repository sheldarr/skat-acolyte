import React from 'react';
import './index.scss';
import classNames from 'classnames';

const CARDS_HIERARCHY = [
    'JACK_OF_CLUBS',
    'JACK_OF_SPADES',
    'JACK_OF_HEARTS',
    'JACK_OF_DIAMONDS',
    '10',
    'KING',
    'QUEEN',
    '9',
    '8',
    '7'
]

class MultiplierCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typeOfGame: 'color',
            color: 'clubs',
            selectedCards: [],
            peak: 1,
            mode: 'without'
        };

        this.handleTypeOfGameChange = this.handleTypeOfGameChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.switchCard = this.switchCard.bind(this);
    }

    handleTypeOfGameChange(event) {
        this.setState({
            typeOfGame: event.target.value,
            selectedCards: []
        });
    }

    handleColorChange(event) {
        this.setState({color: event.target.value});
    }

    recalculatePeak() {
        let peak = 0;

        for (let index = 0; index < CARDS_HIERARCHY.length; index++) {
            if(this.state.selectedCards.indexOf(CARDS_HIERARCHY[index]) !== -1) {
                peak++;
                continue;
            }
            
            break
        }

        this.setState({
            peak
        });
    }

    switchCard(card) {
        if(this.state.selectedCards.indexOf(card) === -1) {
            return this.setState({
                selectedCards: [...this.state.selectedCards, card]
            });
        }

        const selectedCards = this.state.selectedCards.filter((selectedCard) => selectedCard !== card);

        this.recalculatePeak();

        this.setState({
            selectedCards
        });
    }

    getFigureClassNames(card) {
        return classNames(
            'image',
            'is-marginless',
            'is-fullwidth',
            { 'multiplier-calculator__figure--selected': this.state.selectedCards.indexOf(card) !== -1} 
        )
    }

    getPeakProgressClassNames() {
        return classNames(
            'progress',
            {
                'is-success': this.state.mode === 'with',
                'is-danger': this.state.mode === 'without'
            }
        )
    }

    render() {
        return (
            <div className="multiplier-calculator">
                <div className="field">
                    <label htmlFor="type-of-game" className="label">Rodzaj gry</label>
                    <div className="control">
                        <div className="select">
                            <select 
                                id="type-of-game"
                                value={this.state.typeOfGame}
                                onChange={this.handleTypeOfGameChange}
                            >
                                <option value="color">Kolor</option>
                                <option value="grand">Grand</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="color" className="label">Kolor</label>
                    <div className="control">
                        <div className="select">
                            <select 
                                id="color"
                                value={this.state.color}
                                onChange={this.handleColorChange}
                            >
                                <option value="clubs">Trefl (Kreuz, Krojc)</option>
                                <option value="spades">Pik (Grün, Grin)</option>
                                <option value="hearts">Kier (Herz, Herc)</option>
                                <option value="diamonds">Karo (Schellen, Szel)</option>
                            </select>
                        </div>
                    </div>
                </div>
                { this.state.typeOfGame === 'color' &&
                <div className="columns">
                    <div className="column">
                        <figure className={this.getFigureClassNames('JACK_OF_CLUBS')} onClick={() => this.switchCard('JACK_OF_CLUBS')}>
                            <img src="/figures/jack_of_clubs2.svg" />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src="/figures/jack_of_spades2.svg" />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src="/figures/jack_of_hearts2.svg" />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src="/figures/jack_of_diamonds2.svg" />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src={`/figures/ace_of_${this.state.color}.svg`} />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src={`/figures/10_of_${this.state.color}.svg`} />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src={`/figures/king_of_${this.state.color}2.svg`} />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src={`/figures/queen_of_${this.state.color}.svg`} />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src={`/figures/9_of_${this.state.color}.svg`} />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src={`/figures/8_of_${this.state.color}.svg`} />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src={`/figures/7_of_${this.state.color}.svg`} />
                        </figure>
                    </div>
                </div>
                }
                { this.state.typeOfGame === 'grand' && 
                <div className="columns">
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src="/figures/jack_of_clubs2.svg" />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src="/figures/jack_of_spades2.svg" />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src="/figures/jack_of_hearts2.svg" />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image is-marginless is-fullwidth">
                            <img src="/figures/jack_of_diamonds2.svg" />
                        </figure>
                    </div>
                        <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                </div>
                }
                <div className="columns">
                    <div className="column">
                        <progress className={this.getPeakProgressClassNames()} value={this.state.peak} max="11">
                        </progress>
                    </div>
                </div>
            </div>
        )
    }
};

export default MultiplierCalculator;
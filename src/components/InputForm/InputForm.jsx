import React, { Component } from 'react';
import getHandler from '../../util/get-handler';

class InputForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.determineType = this.determineType.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;

    this.setState({
      searchText: value,
      isLoading: value.length >= 2,
      results: null,
    });

    if (value.length >= 2) {
      getHandler('FTSAutocomplete.do', {
        solrIndex: 'fts_en',
        solrRows: '6',
        solrTerm: e.target.value,
      }).then((results) => {
        if (this.state.searchText.length >=2) {
          // Update results accordingly
          this.setState({
            isLoading: false,
            results: [...results.results.docs],
          });
        } else {
          // Reset results back to null so box disappears
          this.setState({
            isLoading: false,
            results: null,
          });
        }
      });
    } else {
      this.setState({
        isLoading: false,
        results: null,
      });
    }
  }

  determineType(type) {
    const typeMap = {
      'T': 'Station',
      'C': 'City',
      'A': 'Airport',
      'D': 'District',
      'P': 'Region'
    };

    return typeMap[type];
  }

  render() {
    const { searchText, isLoading, results } = this.state;
    return (
      <section className="search-input">
        <h1>Where do you want to go?</h1>
        <div className="search-input__input">
          <label htmlFor="booking-go-input">
            Pick-up location
            <span className="hidden">example: city, airport, station, region and district</span>
          </label>
          <input
            id="booking-go-input"
            type="text"
            placeholder="city, airport, station, region and district..."
            value={searchText}
            onChange={this.handleChange}
          />
          {isLoading &&
            <div className="loader"/>
          }
        </div>
        <div className="search-input__results">
          {results && results.map(result => {
            const placeType = this.determineType(result.placeType);
            return (
              <article
                className={`search-input__results-result ${result.name === 'No results found' ? 'italic' : ''}`}
                key={result.placeKey}
              >
                {placeType &&
                  <div className={placeType ? placeType.toLowerCase() : 'place'}>
                    {placeType ? placeType : 'Place'}
                  </div>
                }
                {result.name}
              </article>
            )
          })}
        </div>
      </section>
    )
  }

}

export default InputForm;
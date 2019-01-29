import React from 'react'

export default (props) => {
  const { result } = props;
  const placeType = props.determineType(result.placeType);
  return (
    <article
      className={`search-input__results-result ${result.name === 'No results found' ? 
        'search-input__results-result--no-results' : ''}`}
      key={result.placeKey}
      onClick={() => props.stageLocation(result)}
    >
      {placeType &&
        <div className="location-type">
          <span className={`location-type__text ${placeType ? 
              `location-type__text--${placeType.toLowerCase()}` : 
              'location-type__text--place'
            }`}
          >
            {placeType ? placeType : 'Place'}
          </span>
        </div>
      }
      <div className="search-input__results-result__name">
        <span className="search-input__results-result__name-city">{result.name}</span>
        <span className="search-input__results-result__name-meta">{result.country}</span>
      </div>
      
    </article>
  );
};

import React from 'react';

import PokemonSearch from './components/PokemonSearch'

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column column-50 column-offset-25">
            <PokemonSearch name="Jitendra Nirnejak" numberOfPokemons={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

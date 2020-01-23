import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para um componente FILHO
// Estado: Informações mantidas pelo componente ( Lembrar: imutabilidade )


function App() {
  return (
  <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username" required />
        </div>


        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required />
        </div>

        <div className="input-group">


        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" required />
        </div>


        <div className="input-block">
          <label htmlFor="Longitude">Longitude</label>
          <input name="Longitude" id="Longitude" required />
        </div>

        </div>

        <button type="submit" >Salvar</button>
      </form>
    </aside>
    
    <main>

    </main>
  </div>
  );
}

export default App;

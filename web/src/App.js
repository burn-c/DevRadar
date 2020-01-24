import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

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
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/54965836?s=460&v=4" alt="FotoPerfil"/>
            <div className="user-info">
              <strong>Carlos Oliveira</strong>
              <span>ReactJS, React Native, Node.JS</span>
            </div>
          </header>
          <p>Aqui tem uma historia muito linda, pode ter certeza! Combinado?</p>
          <a href="https://github.com/burn-c">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/54965836?s=460&v=4" alt="FotoPerfil"/>
            <div className="user-info">
              <strong>Carlos Oliveira</strong>
              <span>ReactJS, React Native, Node.JS</span>
            </div>
          </header>
          <p>Aqui tem uma historia muito linda, pode ter certeza! Combinado?</p>
          <a href="https://github.com/burn-c">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/54965836?s=460&v=4" alt="FotoPerfil"/>
            <div className="user-info">
              <strong>Carlos Oliveira</strong>
              <span>ReactJS, React Native, Node.JS</span>
            </div>
          </header>
          <p>Aqui tem uma historia muito linda, pode ter certeza! Combinado?</p>
          <a href="https://github.com/burn-c">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/54965836?s=460&v=4" alt="FotoPerfil"/>
            <div className="user-info">
              <strong>Carlos Oliveira</strong>
              <span>ReactJS, React Native, Node.JS</span>
            </div>
          </header>
          <p>Aqui tem uma historia muito linda, pode ter certeza! Combinado?</p>
          <a href="https://github.com/burn-c">Acessar perfil no Github</a>
        </li>
      </ul>
    </main>
  </div>
  );
}

export default App;

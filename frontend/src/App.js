import React, { useState } from 'react';
import StackIcon from 'tech-stack-icons';
import './App.css';

function App() {
  const [urls, setUrls] = useState('');
  const [games, setGames] = useState([]);
  const [invalidUrls, setInvalidUrls] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const urlArray = urls
      .split('\n')
      .map((url) => url.trim())
      .filter((url) => url);

    try {
      //Backend in NestJS for fetching game data and images
      const response = await fetch('http://localhost:5000/games/fetch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls: urlArray }),
      });

      if (!response.ok) throw new Error('Failed to fetch game data');

      const data = await response.json();
      setGames(data.games || []);
      setInvalidUrls(data.invalidUrls || []);
    } catch (err) {
      setError(err.message);
      setGames([]);
      setInvalidUrls([]);
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Roblox Game Info Fetcher</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={6}
          placeholder="Paste Roblox game URLs here, one per line"
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Game Info'}
        </button>
      </form>

      {error && <p className="error-msg">{error}</p>}

      {invalidUrls.length > 0 && (
        <div className="invalid-urls">
          <h3>Invalid URLs</h3>
          <ul>
            {invalidUrls.map((url, i) => (
              <li key={i}>{url}</li>
            ))}
          </ul>
        </div>
      )}

      {games.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Game Info</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Players</th>
                <th>Thumbnail</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td id="sep" data-label="Name">{game.name}</td>
                  <td data-label="Description">{game.description || 'No description'}</td>
                  <td data-label="Players">{game.playing}</td>
                  <td data-label="Thumbnail">
                    {game.thumbnail ? (
                      <img src={game.thumbnail} alt="thumbnail" width="75" height="75" />
                    ) : (
                      'No thumbnail'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className='techStack'>
        <p>Made With: </p> <StackIcon style={{width:'30px'}} name='reactjs'/><StackIcon style={{width:'30px'}} name='nestjs'/><StackIcon style={{width:'30px'}} name='docker'/> <StackIcon style={{width:'30px'}} name='github'/>
      </div>
    </div>
  );
}

export default App;

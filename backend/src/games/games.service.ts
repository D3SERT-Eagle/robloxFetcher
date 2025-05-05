import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GamesService {
  async fetchGames(urls: string[]) {
    //Parse incoming obdy of {"urls": [link1, link2, ..., link n]}
    const gameIdRegex = /roblox\.com\/games\/(\d+)/; //Match with regex to make sure on games.roblox.com are valid and parsed
    const ids: string[] = [];
    const invalid: string[] = [];
    for (const url of urls) {
      const match = url.match(gameIdRegex);
      //Seperate valid and invalid urls
      if (match && match[1]) {
        ids.push(match[1]);
      } else {
        invalid.push(url);
      }
    }
    if (ids.length === 0) {
      //In case not even a single URL is valid.
      throw new Error('No valid Roblox game URLs provided');
    }
    const gameRes = await axios.get(
      `https://games.roblox.com/v1/games?universeIds=${ids.join(',')}`
    );
    const games = gameRes.data.data;
    //Get game thumbnail if it exists
    const thumbRes = await axios.get(
      `https://thumbnails.roblox.com/v1/games/icons?universeIds=${ids.join(',')}&size=150x150&format=Png`
    );
    const thumbnails = thumbRes.data.data;
    const enrichedGames = games.map((game) => {
      const thumb = thumbnails.find((t) => t.targetId === game.id);
      return {
        ...game,
        thumbnail: thumb?.imageUrl || null,
      };
    });
    return {
      games: enrichedGames,
      invalidUrls: invalid,
    };
  }
}

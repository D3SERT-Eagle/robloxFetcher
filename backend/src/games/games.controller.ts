// src/games/games.controller.ts
import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { GamesService } from "./games.service";
import { FetchGamesDto } from "./dto/fetch-games.dto";
//Define /games/fetch route
@Controller("games")
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post("fetch")
  async fetchGames(@Body() fetchGamesDto: FetchGamesDto) {
    //Validate body for further parsing
    try {
      return await this.gamesService.fetchGames(fetchGamesDto.urls);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}

import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { PlayersService } from './players.service';


@Controller('api/players')
export class PlayersController {
    constructor(private playersService: PlayersService) {}

    @Get()
    getPlayers(@Req() req) {
        const players = this.playersService.getPlayers();
        console.log(players);
        return players;
    }

    @Get(':playerId')
    getPlayer(@Param('playerId') playerdId: number) {
        console.log(playerdId)
        const player = this.playersService.getPlayer(playerdId);
        return player;
    }
}

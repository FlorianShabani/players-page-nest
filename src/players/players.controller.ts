import { Controller, Get, Param, Post, Req } from '@nestjs/common';
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
    getPlayer(@Param('playerId') playerdId: string) {
        console.log(playerdId)
        const player = this.playersService.getPlayer(parseInt(playerdId, 10));
        return player;
    }

    @Post()
    addPlayer(@Req() req) {
        
    }
}

import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { PlayerDto } from './dto';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { PlayersService } from './players.service';


@UseGuards(JwtGuard)
@Controller('api/players')
export class PlayersController {
    constructor(private playersService: PlayersService) { }

    @Get()
    getPlayers() {
        const players = this.playersService.getPlayers();
        //console.log(players);
        return players;
    }

    @Get(':playerId')
    getPlayer(@Param('playerId', ParseIntPipe) playerdId: number) {
        //console.log(playerdId)
        const player = this.playersService.getPlayer(playerdId);
        return player;
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    addPlayer(@Body() dto: PlayerDto) {
        return this.playersService.addPlayer(dto);
    }

    @Delete(':playerId')
    deletePlayer(@Param('playerId', ParseIntPipe) playerdId: number) {
        return this.playersService.deletePlayer(playerdId);
    }

    @Patch(':playerId')
    editPlayer(@Param('playerId', ParseIntPipe) playerId: number, @Body() dto: PlayerDto) {
        return this.playersService.editPlayer(playerId, dto);
    }
}

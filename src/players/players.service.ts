import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PlayersService {
    constructor(private prisma: PrismaService) { }

    async getPlayers() {
        const players = await this.prisma.player.findMany();
        return players;
    }

    async getPlayer(id: number) {
        const player = await this.prisma.player.findUnique({
            where: {
                id: id,
            }
        });

        if(!player) {
            console.log("No players found");
            throw new NotFoundException("Player doesn't exist");
        }
        
        console.log(player);
        return player;
    }
}
import { Injectable, NotFoundException } from "@nestjs/common";
import { PlayerDto } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PlayersService {

    constructor(private prisma: PrismaService) { }

    async getPlayers() {
        const players = await this.prisma.player.findMany({
            orderBy: {
                id : 'asc',
            }
        });
        return players;
    }

    async getPlayer(id: number) {
        const player = await this.prisma.player.findUnique({
            where: {
                id: id,
            }
        });

        if (!player) {
            //console.log("No players found");
            throw new NotFoundException("Player doesn't exist");
        }

        //console.log(player);
        return player;
    }

    async addPlayer(dto: PlayerDto) {
        const player = await this.prisma.player.create({
            data: dto
        })
        
        return player;
    }

    async deletePlayer(id: number) {
        //console.log("Deleting player");
        try {
            const player = await this.prisma.player.delete({
                where: { id }
            });
            //console.log(`Record with ID ${id} has been deleted.`);
            return player;
        } catch (error) {
            //console.error(`Error deleting record with ID ${id}: ${error}`);
        }
    }

    async editPlayer(playerId: number, dto: PlayerDto) {
        try{
            const editedPlayer = await this.prisma.player.update({
                where: { id : playerId },
                data : dto
            })
            //console.log(`Record with ID ${playerId} has been updated.`);
            return editedPlayer;
        }catch(error){
            //console.error(`Error updating player`);
        }
    }
}
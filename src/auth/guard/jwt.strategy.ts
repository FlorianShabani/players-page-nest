import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(
    Strategy,
    'jwt',
) {
    constructor(config: ConfigService, private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET'),
            ignoreExpiration: false,
        });
    }

    async validate(payload: { sub: number, email: string }) {
        console.log('step1 ',{ payload });

        const user = await this.prisma.player.findUnique({
            where: {
                id: payload.sub
            }
        })

        // delete user.hash

        return user
    }
}
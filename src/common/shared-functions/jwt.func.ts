import { JwtService } from '@nestjs/jwt';
import { jwtConfig } from 'src/config/jwt.config';

/**
 * Generate JWT Token
 * @param payload
 * @returns
 */
export class JwtShared {
  constructor(private readonly jwtService: JwtService) {}

  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: jwtConfig.secret,
      expiresIn: jwtConfig.expired,
    });
  }
}

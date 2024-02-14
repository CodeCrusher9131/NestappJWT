import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'; 
import { AuthService } from 'src/auth/auth.service';
import { jwtConstants } from 'src/auth/auth.constants';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret, 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy,AuthService], 
})
export class UserModule {}

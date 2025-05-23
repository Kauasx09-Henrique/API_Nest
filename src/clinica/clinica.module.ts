import { Module } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { ClinicaController } from './clinica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinica } from './entities/clinica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clinica])], // <- IMPORTANTE
  controllers: [ClinicaController],
  providers: [ClinicaService],
  exports: [TypeOrmModule], // <- permite que outros módulos usem o repositório
})
export class ClinicaModule {}

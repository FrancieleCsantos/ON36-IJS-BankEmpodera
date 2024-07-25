import { Module } from '@nestjs/common';
import { CustumerController } from './custumer.controller';
import { CustumerService } from './custumer.service';

@Module({
  controllers: [CustumerController],
  providers: [CustumerService]
})
export class CustumerModule {}

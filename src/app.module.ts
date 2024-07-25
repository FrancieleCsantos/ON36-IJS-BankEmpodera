import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ManagerModule } from './manager/manager.module';
import { CustumerModule } from './custumer/custumer.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [AccountsModule, CustumerModule, ManagerModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

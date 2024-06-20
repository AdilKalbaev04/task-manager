import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://adil:Admin123@cluster0.t44c2xh.mongodb.net/tasks-db?retryWrites=true&w=majority',
    ),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

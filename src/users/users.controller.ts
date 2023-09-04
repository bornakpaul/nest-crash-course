import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
     constructor(private userService: UsersService){
          
     }

     @Get()
     getUsers(): any {
          return [{id: 0,title: "Paul"},{id: 1,title: "Bornak"}];
     }

     @Get(':id')
     getUserById(@Param('id') id: number): any {
          return {
               id: Number(id)
          };
     }
}

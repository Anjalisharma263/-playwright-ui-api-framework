import 'dotenv/config';

import { APIRequestContext, request } from '@playwright/test';
import process from 'process';

export class ApiHelper {
  private requestcontext!: APIRequestContext;

  async init() {
    this.requestcontext = await request.newContext({
      baseURL: process.env.BASE_URL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REQRES_API_KEY
      }
    });
  }

  async login(email: string, password: string) {
    return await this.requestcontext.post('/api/login', {
      data: { email, password }
    });
  }
//-----------------------------------------Users----------------------------------------------------
async getUser(page:number){
return await this.requestcontext.get(`/api/users?page=${page}`);
}

async getSingleUser(id:number){
  return await this.requestcontext.get(`/api/users/${id}`);

}

async createUser(email:string, password:string){
return await this.requestcontext.post('/api/register',
  {
    data:{email,password}
  }
);
}

async updateUser(id:number, name:string, job:string){
return await this.requestcontext.put(`api/users/${id}`,{
data:{name,job}
});
}

async deleteUser(id:number){
return await this.requestcontext.delete(`api/users/${id}`)
}
 

async dispose() {
    await this.requestcontext.dispose();
  }
}
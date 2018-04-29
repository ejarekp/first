import {ModuleWithProviders} from '@angular/core';


export interface IProjects {
    pr_name: string;
    pr_date_created: Date;
  }

  export interface IUser {
    ser_id: number;
    login: string;
    role: number;
    password: string;
  }
import { Robot } from "../robot/robot.model";

export interface UserItem {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  is_admin: boolean;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class User implements UserItem {
  public id: string;
  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public is_admin: boolean;
  public is_active: boolean;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(data?: UserItem) {
    this.id = data.id || null;
    this.username = data.username || null;
    this.password = data.password || null;
    this.firstName = data.firstName || null;
    this.lastName = data.lastName || null;
    this.email = data.email || null;
    this.is_admin = data.is_admin || null;
    this.is_active = data.is_active || null;
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }
}

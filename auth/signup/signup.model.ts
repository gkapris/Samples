export interface SignUpItem {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  robotSerialNumber: string;
}

export class SignUp implements SignUpItem {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  robotSerialNumber: string;

  constructor(data?: SignUpItem) {
    this.username = data.username || null;
    this.password = data.password || null;
    this.firstName = data.firstName || null;
    this.lastName = data.lastName || null;
    this.email = data.email || null;
    this.robotSerialNumber = data.robotSerialNumber || null;
  }
}

import {Schema, model} from "mongoose";

interface ICustomer {
  name: string;
  code: number;
  email: string;
  phoneNumber: string
}

const customerSchema = new Schema<ICustomer>({
  name: String,
  code: Number,
  email: String,
  phoneNumber: String
})

const Customer = model<ICustomer>('Customer', customerSchema);

export { Customer };
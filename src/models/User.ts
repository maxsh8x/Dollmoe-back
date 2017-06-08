import * as mongoose from 'mongoose';
import * as AutoIncrement from 'mongoose-sequence';

(<any>mongoose).Promise = Promise;

interface IData extends mongoose.Document {
  _id: number
  name: string
  hash: string
}
const Data = new mongoose.Schema(
  {
    _id: Number,
    name: String,
    hash: String,
  },
  {
    timestamps: true,
    minimize: false,
    id: false,
  }
)
Data.plugin(AutoIncrement);

export const User = mongoose.model<IData & mongoose.Document>('users', Data, 'users')
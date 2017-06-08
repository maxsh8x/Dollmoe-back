import * as mongoose from 'mongoose';

(<any>mongoose).Promise = Promise;

interface IData extends mongoose.Document {
  uid: number
}
const Data = new mongoose.Schema(
  {
    uid: { type: Number, required: true },
    createdAt: { type: Date, expires: 3600 }
  },
  {
    timestamps: true,
    minimize: false,
  }
)

export const Token = mongoose.model<IData & mongoose.Document>('tokens', Data, 'tokens')
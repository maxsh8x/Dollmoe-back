import * as mongoose from 'mongoose';

(<any>mongoose).Promise = Promise;

interface IData extends mongoose.Document {
  uid: number
  tid: number
  comment: string
}
const Data = new mongoose.Schema(
  {
    uid: { type: Number, required: true },
    tid: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
    minimize: false,
  }
)

export const Comment = mongoose.model<IData & mongoose.Document>('comments', Data, 'comments')
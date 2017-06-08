import * as mongoose from 'mongoose';
import * as AutoIncrement from 'mongoose-sequence';

(<any>mongoose).Promise = Promise;

interface IData extends mongoose.Document {
  _id: number
  name: string
  link: string
  hash: string
  uid: number
  category: number
  subCategory: number
  filesize: number
  stardom: number
  downloads: number
  status: number
}
const Data = new mongoose.Schema(
  {
    _id: Number,
    name: { type: String, required: true, index: true },
    link: { type: String, required: true },
    hash: { type: String, required: true },
    uid: { type: Number, required: true },
    category: { type: Number, required: true },
    subCategory: { type: Number, required: true },
    fileSize: { type: Number, index: true },
    stardom: { type: Number, default: 0 },
    downloads: { type: Number, default: 0, index: true },
    number: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    minimize: false,
    id: false,
  }
)
Data.plugin(AutoIncrement);

export const Torrent = mongoose.model<IData & mongoose.Document>('torrents', Data, 'torrents')
import { Service } from "typedi";
import { Torrent } from "../models/Torrent";

export interface ITorrentListParams {
  limit: number
  offset: number
  sort?: object
}

@Service()
export class TorrentRepository {
  findAll(params: ITorrentListParams) {
    let query = Torrent.find()
    if (params.sort !== undefined) {
      query = query.sort(params.sort)
    }
    return query
      .skip(params.offset)
      .limit(params.limit)
      .lean()
      .exec()
  }

  count() {
    return Torrent.count({})
  }
}
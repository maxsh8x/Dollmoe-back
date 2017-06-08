import { Post, JsonController, Body } from "routing-controllers";
import { TorrentRepository } from "../repository/TorrentRepository"
import { Service } from "typedi";
import { IsDefined, IsInt, Min, Max, IsIn, ValidateNested } from "class-validator";

const AVAILABLE_SORT = [
  "downloads",
  "fileSize",
  "name",
  "_id"
]

export class TorrentsListParams {
  @IsInt()
  @Min(0)
  @Max(300)
  limit: number;

  @IsInt()
  @Min(0)
  offset: number;

  @IsIn(AVAILABLE_SORT)
  sortBy: string;

  @IsIn([1, -1])
  order: number;
}

@Service()
@JsonController()
export class TorrentController {
  constructor(
    private torrentRepository: TorrentRepository,
  ) { }

  @Post("/v1/torrent/list")
  async getTorrentsList( @Body() params: TorrentsListParams) {
    const { limit, offset, sortBy, order } = params
    const data = await this.torrentRepository.findAll({
      sort: { [sortBy]: order },
      limit,
      offset,
    })

    const count = await this.torrentRepository.count()

    return {
      data,
      count,
    }
  }
}

import { Context } from "koa";
import { Client } from 'elasticsearch';


export interface MongoDB {
  URI: string,
}

export interface ElasticSearch {
  host: string,
}

export interface AppConfig {
  port: number,
  mongoDB: MongoDB,
  elasticSearch: ElasticSearch,
}
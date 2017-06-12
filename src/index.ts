import 'reflect-metadata';
import * as mongoose from 'mongoose';
import { useContainer, createKoaServer, } from 'routing-controllers';
import { Container } from 'typedi';
import { getAppConfig } from './utils/config';

useContainer(Container);

// import "./controllers/CommentController"
import "./controllers/TorrentController"
// import "./controllers/UserController"

const config = getAppConfig();
const koaApp = createKoaServer({
  development: process.env.NODE_ENV !== "production",
  validation: true
});

const cors = require('kcors')
koaApp.use(cors())

koaApp.on('error', (err: Error) => {
  console.error(err);
});

const db = mongoose.connect(config.mongoDB.URI).connection
db.once('open', () => {
  koaApp.listen(config.port);
  console.log(`Server is up and running at port ${config.port}`);
})

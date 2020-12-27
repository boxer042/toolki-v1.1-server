import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import purchaseRoutes from './routes/purchase';
import supplierRoutes from './routes/supplier';

import cors from 'cors';
//pts9LrpavpsbdlHJ
const {
  MONGO_DB_USER,
  MONGO_DB_PASSWORD,
  MONGO_DB_DATABASE,
  PORT,
} = process.env;
const app: express.Application = express();

mongoose
  .connect(
    `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.9hosf.mongodb.net/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  )
  .then(() => {
    console.log(`${MONGO_DB_DATABASE} DB Connected!`);
  });

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/purchase', purchaseRoutes);
app.use('/supplier', supplierRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

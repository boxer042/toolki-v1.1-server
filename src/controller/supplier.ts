import { Request, Response } from 'express';
import Supplier from './../models/supplier';

export const listSuppliers = async (req: Request, res: Response) => {
  try {
    const suppliers = await Supplier.find({}).exec();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

export const addSupplier = async (req: Request, res: Response) => {
  const {
    name,
    address,
    phoneNumber,
    faxNumber,
    cellphoneNumber,
    remark,
  } = req.body;

  let existing = null;
  try {
    existing = await Supplier.findOne({ name }).exec();
  } catch (error) {
    console.log(error);
  }
  if (existing) {
    res.status(400).json({ error: 'Supplier Name exists' });
    return;
  }

  let supplier;
  try {
    supplier = new Supplier({
      name,
      address,
      phoneNumber,
      faxNumber,
      cellphoneNumber,
      remark,
    });

    supplier.save();
    res.status(200).json({ supplier });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

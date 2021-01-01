import { Request, Response } from 'express';
import Account from '../models/account';

export const listAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await Account.find({}).exec();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

export const addAccount = async (req: Request, res: Response) => {
  const { name, contact, manager, detail, remark } = req.body;

  let existing = null;
  try {
    existing = await Account.findOne({ name }).exec();
  } catch (error) {
    console.log(error);
  }
  if (existing) {
    res.status(400).json({ error: 'Account Name exists' });
    return;
  }

  let account;
  try {
    account = new Account({
      name,
      contact,
      manager,
      detail,
      remark,
    });

    account.save();
    res.status(200).json({ account });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

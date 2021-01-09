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
  const { name, contact, manager, detail, remark, favorites } = req.body;

  let existing = null;
  try {
    existing = await Account.findOne({ name }).exec();
  } catch (error) {
    console.log(error);
  }
  if (existing) {
    res.status(409).json({ status: '409', message: 'Account Name exists' });
    return;
  }

  let account;
  try {
    account = new Account({
      name,
      contact,
      manager,
      detail,
      favorites,
      remark,
    });

    account.save();
    res.status(200).json({ account });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  const { _id } = req.body;
  try {
    await Account.findByIdAndDelete(_id).exec();
    res.status(200).json({
      _id: _id,
    });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

export const favoritesAccount = async (req: Request, res: Response) => {
  const { _id, favorites } = req.body;
  try {
    const favorite = await Account.findByIdAndUpdate(
      _id,
      { favorites: !favorites },
      { new: true },
    )
      .select('_id favorites')
      .exec();

    res.status(200).json(favorite);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

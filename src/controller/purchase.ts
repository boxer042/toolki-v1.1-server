import { Request, Response } from 'express';
import Purchase from './../models/purchase';
import shortid from 'shortid';

export const addPurchase = async (req: Request, res: Response) => {
  const {
    productName,
    amount,
    unitPrice,
    unitPriceVat,
    supplier,
    picture,
    type,
  } = req.body;
  // 일단 품명과 공급자가 같을시
  // productId에 productId를 덮어 씌운다.
  let productId = null;
  let existProductNameAndSupplier = null;

  try {
    existProductNameAndSupplier = await Purchase.findOne({
      productName,
      supplier,
    }).exec();
  } catch (error) {
    console.log(error);
  }
  if (existProductNameAndSupplier) {
    productId = req.body.productId;
    console.log('productId Same');
  } else {
    productId = shortid.generate();
    console.log('New created productId');
  }

  let purchase;
  try {
    purchase = new Purchase({
      productId: productId,
      productName,
      amount,
      unitPrice,
      unitPriceVat,
      totalPrice: (unitPrice + unitPriceVat) * amount,
      supplier,
      picture,
      type,
    });
    purchase.save((error: any, purchase: any) => {
      if (error) return res.status(400).json({ error });
      if (purchase) {
        res.status(200).json({ purchase });
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

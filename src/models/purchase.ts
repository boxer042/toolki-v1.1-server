import mongoose from 'mongoose';

const PurchaseSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    amount: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    unitPriceVat: { type: Number, default: 0 },
    totalPrice: { type: Number, required: true },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier',
      required: true,
    },
    picture: [{ img: { type: String } }],
    status: { type: String, default: 'pending' },
    type: { type: String, default: 'purchase' },
  },
  { timestamps: true },
);

const Purchase = mongoose.model('Purchase', PurchaseSchema);
export default Purchase;

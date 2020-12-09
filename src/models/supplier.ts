import mongoose from 'mongoose';

const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    address: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: Number,
    },
    faxNumber: { type: Number },
    cellphoneNumber: { type: Number },
    remark: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

SupplierSchema.statics.findByName = (name: string) => {
  return Supplier.findOne({ name }).exec();
};

const Supplier = mongoose.model('Supplier', SupplierSchema);

export default Supplier;

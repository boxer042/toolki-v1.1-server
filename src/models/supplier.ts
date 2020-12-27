import mongoose from 'mongoose';

/**
 * name : 거래처 이름
 * address : 거래처 주소
 * phoneNumber : 거래처 전화번호
 * faxNumber : 거래처 팩스번호
 * cellphoneNumber : 거래처 핸드폰번호
 * remark : 비고
 */
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
      type: String,
    },
    faxNumber: { type: String },
    cellphoneNumber: { type: String },
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

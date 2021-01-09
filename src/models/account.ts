import mongoose from 'mongoose';

/**
 * name : 거래처 이름
 * address : 거래처 주소
 * phoneNumber : 거래처 전화번호
 * faxNumber : 거래처 팩스번호
 * cellphoneNumber : 거래처 핸드폰번호
 * remark : 비고
 */
const AccountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    contact: {
      office: {
        type: String,
        trim: true,
      },
      fax: {
        type: String,
        trim: true,
      },
    },
    manager: {
      name: {
        type: String,
        trim: true,
      },
      position: {
        type: String,
        trim: true,
      },
      mobile: {
        type: String,
        trim: true,
      },
    },
    detail: {
      address: {
        type: String,
        trim: true,
      },
      businessNumber: {
        type: String,
        trim: true,
      },
      ceo: {
        type: String,
        trim: true,
      },
    },
    favorites: {
      type: Boolean,
      default: false,
    },
    remark: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

const Account = mongoose.model('Account', AccountSchema);

export default Account;

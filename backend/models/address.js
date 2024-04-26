const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema(
  {
    unit: {
      type: String,
      required: false
    },
    street: {
      type: String,
      required: true
    },
    addressline1: {
      type: String,
      required: false
    },
    addressline2: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true
    },
    postal: {
      type: Number,
      required: true
    },
    country: {
      type: String,
      required: true,
      default: "Philippines"
    }
  }
);

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
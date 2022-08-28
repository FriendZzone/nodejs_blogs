const multipleMongooseToObject  = (mongooseArray) => {
    return mongooseArray.map(mongoose => mongoose.toObject())
}
const mongooseToObject  = (mongooseArray) => {
    return mongooseArray ? mongooseArray.toObject() : mongooseArray
}

module.exports = { multipleMongooseToObject  , mongooseToObject}
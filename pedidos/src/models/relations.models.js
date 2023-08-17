const { User } = require('./user.models');
const { Product } = require('./product.models');
const { Order } = require('./order.models');
const { OrderItem } = require('./orderItem.models');
const { Invoice } = require('./invoice.models');


//relation order/orderItem - uma para um
Order.belongsTo(OrderItem, { foreignKey: 'orderId' });
OrderItem.hasMany(Order, { foreignKey: 'orderId' });

//relation product/orderItem - uma para um
Product.belongsTo(OrderItem, { foreignKey: 'productId' });
OrderItem.hasMany(Product, { foreignKey: 'productId' });

//relation product/orderItem - uma para um
Order.belongsTo(Invoice, { foreignKey: 'orderId' });
Invoice.hasOne(Order, { foreignKey: 'orderId' });

//relation user/invoice - uma para um
Invoice.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Invoice, { foreignKey: 'userId' });

//relation user/order - uma para um
Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });
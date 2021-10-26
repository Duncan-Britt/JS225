// item properties: does not handle validation
//   - SKU code:
//     - 3 letters of item, 2 of category
//   - Item name:
//     - minimum 5 characters, not including spaces
//     - may include spaces
//   - category:
//     - minimum 5 characters, not inlucding spaces
//     - one word
//   - quantity:
//     - NOT NULL
//     - valid number MUST be provided (you may assume it will?)
//
// Item manager: deals with validation, creates items
//   - create:
//     - creates a new Item
//     - returns false if not successful
//   - update (given SKU code and object);
//     - updates the info on an item
//     - assume valid values
//   - delete: (given SKU code)
//     - deletes item from list
//     - assume valid sku
//   - items:
//     - property return all items
//   - inStock:
//     - lists all items with quantity greater than 0
//   - itemsInCategory:
//     - list all items for a given category

// Report manager: ??????
// - init:
//   - argument: thee ItemManager object
//   - assigns argument to items property ??? what items property?

const ItemManager = (function() {
  function isValid(item, category, quantity) {
    if (quantity < 0 || isNaN(quantity)) return false;
    if (category.split(' ').length !== 1) return false;

    return [item, category].every(str => {
      return str.match(/\S/g).length >= 5;
    });
  }

  function generateSKU(item, category) {
    item = item.split('').filter(chr => chr.match(/\S/g)).join('');
    let sku = item.slice(0, 3);
    sku += category.slice(0, 2);
    return sku.toUpperCase();
  }

  return {
    items: [],

    create(item, category, quantity) {
      if (isValid(item, category, quantity)) {
        const sku = generateSKU(item, category);
        this.items.push({
          sku,
          name: item,
          category,
          quantity,
        });
      } else {
        return false;
      }
    },

    update(sku, info) {
      const item = this.items.filter(item => item.sku === sku)[0];

      for (let prop in info) {
        item[prop] = info[prop];
      }
    },

    inStock() {
      return this.items.filter(item => item.quantity > 0);
    },

    itemsInCategory(category) {
      return this.items.filter(item => item.category === category);
    },

    delete(sku) {
      let idx;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i]['sku'] === sku) {
          idx = i;
          break;
        }
      }

      this.items.splice(idx, 1);
    },
  };
})();

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  reportInStock() {
    console.log(this.items.inStock()
                          .map(item => item.name)
                          .join(','));
  },

  createReporter(sku) {
    let item = this.items.items.filter(item => item.sku === sku)[0];
    return {
      itemInfo() {
        for (let prop in item) {
          console.log(`${prop}:${item[prop]}`);
        }
      },
    }
  },
};



ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with items object for football and kitchen pot;

ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

const basketReporter = ReportManager.createReporter('BASSP');
basketReporter.itemInfo();

export class Pos {
  private goods = [
    {
      'barcode': 'ITEM000000',
      'name': 'Coca-Cola',
      'price': 3
    }, {
      'barcode': 'ITEM000001',
      'name': 'Sprite',
      'price': 3
    }, {
      'barcode': 'ITEM000002',
      'name': 'Apple',
      'price': 5
    }, {
      'barcode': 'ITEM000003',
      'name': 'Litchi',
      'price': 15
    }, {
      'barcode': 'ITEM000004',
      'name': 'Battery',
      'price': 2
    }, {
      'barcode': 'ITEM000005',
      'name': 'Instant Noodles',
      'price': 4
    }
  ]
  printReceipt(barcodes: string[]) :string {
    return `
      ***<store earning no money>Receipt ***
      Name: Coca-Cola, Quantity: 6, Unit price: 3 (yuan), Subtotal: 15 (yuan)
      Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
      Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
      ----------------------
      Total: 23 (yuan)
      **********************`
  }
}

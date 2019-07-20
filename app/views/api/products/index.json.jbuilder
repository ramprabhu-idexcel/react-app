columns = [
    {
      dataField: 'id',
      text: 'Product ID',
      sort: true
    },
    {
      dataField: 'name',
      text: 'Product Name',
      sort: true
    }, 
    {
      dataField: 'price',
      text: 'Product Price',
      sort: true
    }
]

json.products @products

json.merge!(columns: columns)
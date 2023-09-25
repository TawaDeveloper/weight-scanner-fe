const Properties = {
  store_id: 'Store ID',
  store_name: 'Store Name',
  article_number_product_id: 'Article Number(Product ID)',
  english_title: 'English Title',
  simplified_chinese_title: 'Simplified Chinese Title',
  traditional_chinese_title: 'Traditional Chinese Title',
  product_main_image: 'Product Main Image',
  backend_category: 'Backend Category',
  frontend_category: 'Frontend Category',
  upc_code: 'UPC Code',
  upc_thumbnail: 'UPC Thumbnail',
  product_price: 'Product Price',
  store_promotion_price: 'Store Promotion Price',
  online_promotion_price: 'Online Promotion Price',
  current_price: 'Current Price',
  available_inventory: 'Available Inventory',
  locked_inventory: 'Locked Inventory',
  total_inventory: 'Total Inventory',
  saleable_inventory: 'Saleable Inventory',
  warehouse: 'Warehouse',
  location_code: 'Location Code',
  mch_number: 'MCH Number',
  is_weighted_product: 'Is Weighted Product',
  is_alcoholic_product: 'Is Alcoholic Product',
  product_brand: 'Product Brand',
  product_video: 'Product Video',
  merchant_code: 'Merchant Code',
  merchant_name: 'Merchant Name',
  english_brief_description: 'English Brief Description',
  simplified_chinese_brief_description: 'Simplified Chinese Brief Description',
  traditional_chinese_brief_description:
    'Traditional Chinese Brief Description',
  english_detailed_description: 'English Detailed Description',
  simplified_chinese_detailed_description:
    'Simplified Chinese Detailed Description',
  traditional_chinese_detailed_description:
    'Traditional Chinese Detailed Description',
  product_upc_status: 'Product UPC Status',
  promotion_type: 'Promotion Type',
  promotion_range: 'Promotion Range',
  product_net_weight: 'Product Net Weight',
  product_net_weight_unit: 'Product Net Weight Unit',
  product_sales_unit: 'Product Sales Unit',
  updater: 'Updater',
  updated_time: 'Updated Time',
};

const FormProperties = {
  product_name: 'Product Name',
  article_number: 'Article Number',
  upc_code: 'UPC Code',
  status: 'Status',
  store_id: 'Store ID',
  backend_category: 'Backend Category',
  search: 'Search',
  reset: 'Reset',
  export: 'Export',
  batch_off_shelf: 'Batch Off Shelf',
  batch_on_shelf: 'Batch On Shelf',
  more_search: 'More Search',
  already_listed: 'Already Listed',
  already_delisted: 'Already Delisted',
};

const BatchSearchForm = {
  store_bulk_query: 'Store Bulk Query',
  store_id_line: 'Store ID Line',
  article_number_bulk_query: 'Article Number Bulk Query',
  article_number_line: 'Article Number Line',
  upc_bulk_query: 'UPC Bulk Query',
  upc_line: 'UPC Line',
  update_time: 'Update Time',
  warehouse: 'Warehouse',
  location_code: 'Location Code',
};

const others = {
  shelve: 'publish',
  unshelve: 'unpublish',
  please_select_at_least_one_published_record:
    'Please select at least one published record',
  select_at_least_one_unpublished_record:
    'Select at least one unpublished record',
  successfully_published: 'Successfully published',
  successfully_unpublished: 'Successfully unpublished',
  confirm_unpublish_message:
    'After unpublishing, the corresponding store will no longer sell this product specification. Are you sure you want to unpublish?',
  list_display_field_settings: 'List Display Field Settings',
};

export default {
  ...Properties,
  ...FormProperties,
  ...BatchSearchForm,
  ...others,
};

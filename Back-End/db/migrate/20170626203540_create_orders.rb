class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :order_number
      t.string :customer_name
      t.integer :time_estimate
      t.string :contact_number
      t.integer :price
      t.string :delivery_address

      t.timestamps
    end
  end
end

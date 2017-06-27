class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :address
      t.integer :open
      t.integer :close
      t.string :name
      t.decimal :rating
      t.string :menu, array: true
      t.boolean :featured
      t.timestamps
    end
  end
end

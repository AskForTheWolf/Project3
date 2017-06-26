class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :address
      t.string :open
      t.string :close
      t.string :name
      t.string :menu, array: true
      t.boolean :featured
      t.timestamps
    end
  end
end

class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :address
      t.integer :open
      t.integer :close
      t.string :name
      t.string :pic_url
      t.string :hours_string
      t.string :description
      t.decimal :rating
      t.string :menu, array: true
      t.boolean :featured
      t.timestamps
    end
  end
end

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
      t.string :menu_item, array: true
      t.integer :menu_price, array: true
      t.string :menu_description, array: true
      t.decimal :menu_rating, array: true
      t.string :menu_category, array: true
      t.string :menu_pictures, array: true
      t.boolean :menu_featured, array: true
      t.boolean :featured
      t.timestamps
    end
  end
end

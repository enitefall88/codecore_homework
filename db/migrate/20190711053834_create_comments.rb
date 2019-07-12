class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table "posts", force: :cascade do |t|
      t.string "title"
      t.text "body"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
     end
  end
end

class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table "comments", force: :cascade do |t|
      t.text "body"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.bigint "post_id"
      t.index ["post_id"], name: "index_comments_on_post_id"
    end
  end
end
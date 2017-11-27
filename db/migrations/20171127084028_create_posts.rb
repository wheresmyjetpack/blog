Hanami::Model.migration do
  change do
    create_table :posts do
      primary_key :id

      column :created_at, DateTime, null: false
      column :updated_at, DateTime, null: false
      column :title, String, null: false
      column :body, String, null: false
    end
  end
end

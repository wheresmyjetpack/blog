Hanami::Model.migration do
  change do
    add_column :posts, :published, :boolean, null: false, default: false
  end
end

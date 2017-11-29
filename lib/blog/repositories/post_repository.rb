class PostRepository < Hanami::Repository
  def upsert(record)
    record[:id].nil? ? create(record) : update(record[:id], record)
  end
end

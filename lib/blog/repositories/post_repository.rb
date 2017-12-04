class PostRepository < Hanami::Repository
  def upsert(record)
    record[:id].nil? ? create(record) : update(record[:id], record)
  end

  def unpublished
    posts.where { !published }.order { created_at.desc }
  end
end

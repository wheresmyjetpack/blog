module Api::Controllers::Posts
  class Save
    include Api::Action
    accept :json

    def initialize(repo: PostRepository.new)
      @repo = repo
    end

    def call(params)
      p params.to_h
      @repo.upsert(params[:post]).to_h.tap do |record|
        self.status = 201
        self.body = record.to_json
      end
    end
  end
end

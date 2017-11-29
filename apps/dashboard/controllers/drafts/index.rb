module Dashboard::Controllers::Drafts
  class Index
    include Dashboard::Action
    expose :drafts

    def initialize(repo: PostRepository.new)
      @repo = repo
    end

    def call(params)
      @drafts = @repo.unpublished
    end
  end
end

module Dashboard::Controllers::Posts
  class Create
    include Dashboard::Action

    params do
      required(:post).schema do
        required(:title).filled
        required(:body).filled
      end
    end

    def initialize(repo: PostRepository.new)
      @repo = repo
    end

    def call(params)
      if params.valid?
        @repo.create(params[:post])
        redirect_to routes.home_path
      else
        self.status = 422
      end
    end
  end
end

module Dashboard::Views::Posts
  class New
    include Dashboard::View

    def token
      session[CSRF_TOKEN]
    end

    def save_post_route
      Api.routes.save_post_path
    end
  end
end

module Dashboard::Views::Drafts
  class Index
    include Dashboard::View

    def drafts_list
      raw drafts.to_a.map(&:to_h).to_json
    end
  end
end

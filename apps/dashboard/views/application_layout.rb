module Dashboard
  module Views
    class ApplicationLayout
      include Dashboard::Layout

      def bundle_path
        ENV['WEBPACK_BUNDLE_PATH']
      end
    end
  end
end

require "spec_helper"

RSpec.describe Dashboard::Views::ApplicationLayout, type: :view do
  let(:layout)   { Dashboard::Views::ApplicationLayout.new(template, {}) }
  let(:rendered) { layout.render }
  let(:template) { Hanami::View::Template.new('apps/dashboard/templates/application.html.haml') }

  it 'contains application name' do
    expect(rendered).to include('Dashboard')
  end
end

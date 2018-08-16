require 'autoprefixer-rails'

module UixValidations
  module Rails
    class Engine < ::Rails::Engine
      initializer 'uix_validations.assets' do |app|
        %w(stylesheets javascripts).each do |sub|
          app.config.assets.paths << root.join('assets', sub).to_s
        end
      end
    end
  end
end
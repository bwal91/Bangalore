require_relative 'boot'
require 'rails/all'
require 'sprockets/railtie'
require 'v8'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
ENV['RAILS_ADMIN_THEME'] = 'rollincode'

module Bangalore
  class Application < Rails::Application

  	config.time_zone = 'Mumbai'

    config.autoload_paths += %W(#{config.root}/lib)

  end
end

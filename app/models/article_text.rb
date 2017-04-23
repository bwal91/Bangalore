# require 'elasticsearch/model'
class ArticleText < ApplicationRecord
	# include Elasticsearch::Model
 #  	include Elasticsearch::Model::Callbacks
 
	settings index: { number_of_shards: 1 } do
	    mappings dynamic: 'false' do
	      indexes :title, analyzer: 'english', index_options: 'offsets'
	    end
  	end

end
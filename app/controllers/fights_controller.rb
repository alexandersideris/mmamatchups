class FightsController < ApplicationController
  def index
     @fighters = Fighter.all
  end
end

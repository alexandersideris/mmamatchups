class FightsController < ApplicationController

  def index
    @fighters = Fighter.all
    @fights = Fight.all
    @fights.each do |fight|
      fight.upvotes = fight.votes_for.size
    end
  end

  def like
    @fight = Fight.find(params[:id])
    @user = User.find(params[:user_id])
    @fight.liked_by @user
    respond_to do |format|
      format.html { redirect_to :back }
      format.js
    end
  end

  def unlike
    @fight = Fight.find(params[:id])
    @user = User.find(params[:user_id])
    @fight.unliked_by @user
    respond_to do |format|
      format.html { redirect_to :back }
      format.js
    end
  end

end

class FightsController < ApplicationController

  def index
    @fighters = Fighter.all
    @fights = Fight.order("upvotes DESC")
    if current_user != nil
      @fights.each do |fight|
        if current_user.voted_for? fight
          fight.has_voted = 'true'
        else
          fight.has_voted = 'false'
        end
      end
    else
      @fights.each do |fight|
        fight.upvotes = fight.votes_for.size
        fight.has_voted = 'false'
      end
    end
  end

  def vote
    @fight = Fight.find(params[:id])
    @user = User.find(params[:user_id])
    @fight.liked_by @user
    @fight.upvotes = @fight.upvotes + 1
    @fight.save
    redirect_to '/'
  end

  def unvote
    @fight = Fight.find(params[:id])
    @user = User.find(params[:user_id])
    @fight.unliked_by @user
    @fight.upvotes = @fight.upvotes - 1
    @fight.save
    redirect_to '/'
  end

  def subscribe
    Subscription.create(name: params[:name], user_id: params[:user_id] )
    redirect_to '/'
  end

  def show
    redirect_to '/'
  end

end

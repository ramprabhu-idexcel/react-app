class Api::SystemsController < ApplicationController
  def index
    @systems = System.all
    render json: @systems
  end

  def show
    @system = System.find(params[:id])
    render json: @system
  end

  def create
    @system = System.new(system_params)
    if @system.save
      render json: @system, status: :created
    else
      render json: @system.errors, status: :unprocessable_entity
    end
  end

  def update
    @system = System.find(params[:id])
    if @system.update(system_params)
      render json: @system, status: :ok
    else
      render json: @system.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @system = System.find(params[:id])
    @system.destroy
    head :no_content
  end

  private
  def system_params
    params.require(:system).permit(:name, :group, :city, :state, :country, :installer, :owner, :pcus, :acbs, :encharges, :enpowers, :connection, :status, :stage, :partner)
  end
end
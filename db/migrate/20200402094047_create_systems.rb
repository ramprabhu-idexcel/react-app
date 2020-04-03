class CreateSystems < ActiveRecord::Migration[5.2]
  def change
    create_table :systems do |t|
      t.string :name
      t.string :group
      t.string :city
      t.string :state
      t.string :country 
      t.string :installer
      t.string :owner 
      t.string :pcus 
      t.string :acbs 
      t.string :encharges 
      t.string :enpowers 
      t.string :connection 
      t.string :status 
      t.string :stage 
      t.string :partner

      t.timestamps
    end
  end
end

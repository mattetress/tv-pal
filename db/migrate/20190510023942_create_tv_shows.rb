class CreateTvShows < ActiveRecord::Migration[5.2]
  def change
    create_table :tv_shows do |t|
      t.integer :show_id

      t.timestamps
    end
  end
end

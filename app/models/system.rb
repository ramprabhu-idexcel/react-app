class System < ApplicationRecord
  def self.search(args)
    key = "%#{args}%"
    columns = %w{name city state country owner pcus acbs encharges enpowers connection status stage}
    where(
      columns
        .map {|c| "#{c} like :search" }
        .join(' OR '),
      search: key
    )
  end
end

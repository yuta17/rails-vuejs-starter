module ApplicationHelper
  def webpack_asset_path(path)
    return "http://localhost:8080/#{path}" if Rails.env.development?

    host = Rails.application.config.action_controller.asset_host
    manifest = Rails.application.config.assets.webpack_manifest
    path = manifest[path] if manifest && manifest[path].present?
    "#{host}/assets/#{path}"
  end
end

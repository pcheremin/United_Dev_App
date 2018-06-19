#!/usr/bin/env ruby
#
require 'fileutils'

if ENV["MOOV_DEPLOY_SITE_NAME"] == nil
  exit 1
end

if ENV["MOOV_DEPLOY_SITE_NAME"].include? "prod"
  FileUtils.cp("config-prod.json","config.json")
else
  FileUtils.cp("config-stage.json", "config.json")
end

exit 0
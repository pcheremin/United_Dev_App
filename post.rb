#!/usr/bin/env ruby
#
require 'fileutils'

if ENV["MOOV_DEPLOY_SITE_NAME"] == nil
  exit 1
end

FileUtils.cp("config-local.json","config.json")

exit 0
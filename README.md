## Site Access

To run on your local machine, you will need to follow the below steps to bypass the HSTS warnings of the site.

1. Run the server with sudo moov server --verify-ssl-cert=false

2. For Chrome, you will need to open the browser with the --ignore-certificate-errors flag.

On MacOS: the command is open -a "Google Chrome" --args --ignore-certificate-errors

On Windows: you'll need to right-click the Chrome icon shortcut, select "Properties", go to the "Shortcut" tab, and add the  "--ignore-certificate-errors" flag at the end of the Target field. (https://support.opendns.com/hc/en-us/articles/227989087-Chrome-for-Windows-only-HSTS-Certificate-Exception-Instructions)

After Chrome is opened with the above flag, you should be able to go to "www.united.com". This should send the request to the local Moovweb server. You should see logs in your terminal.

If you do not see logs in your terminal, you'll need to reset your Chrome browser, quit Chrome, and re-open it. It's likely your browser was still trying to connect to the production www.united.com site.

Or we can follow the approach given in below link

https://twilblog.github.io/chrome/security/2016/06/27/badidea.html

We just have to type badidea on the page anywhere and it reloads

## Viewing Desktop Site

This is a single domain website. While developing locally, there's no simple way to view the desktop site for www.united.com since the domain is being sent to the local server. 

The best way to view it while developing is to add the "moovperfectproxy=true" query parameter to the URL. For example, while developing the home page, you can go to https://www.united.com/ual/en/us/?moovperfectproxy=true and it will show you the perfect proxy of the page which is the desktop site passing through the local server.

## Moovweb Styleguide

Go to https://www.united.com/moovweb_styleguide in order to view the styleguide. The page lists out some of the reusable mixins across the mobile United site. If more mixins are added, please modify the /build/assets/html/styleguide.html file to reflect any new mixins.
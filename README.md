autoreload
==========

This is an easy-to-use command-line "automatic reload" or "live reload" script for developers.  It tells your browser to reload when files have changed.

Installation:

    npm install -g autoreload

Usage:

    $ autoreload paths_to_watch..

For example, the following will watch 3 directories and a file for changes:

    $ autoreload js css templates/main settings.py

Options:

      --port, -p     Port server listens on           [default: 60000]
      --exclude, -e  Regex matching files to exclude  [default: "\\.sw[poaxn]$"]
      --regex_opts   Exclusion regex options          [default: "im"]
      --https        Use https                        [default: false]
      --key          SSL key                          [default: dummy SSL key]
      --cert         SSL cert                         [default: dummy SSL cert]

Once running, autoreload will output the path to a script to include on your page.

## SSL

You have three options if your development server requires SSL.

   1. Proxy the http autoreload script through your SSL-configured web server (apache or nginx).

   2. Use the `--https` option and load the script directly in your browser to accept the dummy SSL certificate.

   3. Provide your own SSL certificate using `--key` and `--cert`.

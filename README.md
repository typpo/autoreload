autoreload
==========

This is an easy-to-use command-line "auto reload" or "live reload" script.

Usage:

    $ autoreload js css templates/main

Options:

      --port, -p     Port server listens on           [default: 60000]
      --exclude, -e  Regex matching files to exclude  [default: "\\.sw[poax]$"]
      --regex_opts   Exclusion regex options          [default: "im"]
      --https        Use https                        [default: false]
      --key          SSL key                          [default: dummy SSL key]
      --cert         SSL cert                         [default: dummy SSL cert]


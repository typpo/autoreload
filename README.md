autoreload
==========

This is an easy-to-use command-line "automatic reload" or "live reload" script for developers.  It tells your browser to reload when files have changed.  It's based on [connect-autoreload](https://github.com/typpo/connect-autoreload).

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

**Once running, autoreload will output the path to a script to include on your page**, for example:

   <script src="http://localhost:60000/autoreload.js"></script>

## SSL

You have three options if your development server requires SSL.

   1. Proxy the http autoreload script through your SSL-configured web server (apache or nginx).

   2. Use the `--https` option and load the script directly in your browser to accept the dummy SSL certificate.

   3. Provide your own SSL certificate using `--key` and `--cert`.

## MIT License

```
Copyright (c) 2013 Ian Webster

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

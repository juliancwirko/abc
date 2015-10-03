### abc Ghost Theme

#### Demo:
[http://abc.pxt.be](http://abc.pxt.be)

abc theme is a free open source Ghost theme (MIT license).
You can use it as you like. If you want you can show me what you have build on it.

#### Note
Remember to change your `disqus_shortname` variable in `partials/disqus.hbs` file!

#### Blog post about ABC theme:
[Ghost theming with Zurb Foundation and SCSS](http://julian.io/ghost-theming-with-zurb-foundation-and-scss/)

### Main features
* Zurb Foundation 5 framework [read more](http://abc.pxt.be/zurb-foundation-5/)
* Scss (Sass) workflow [read more](http://abc.pxt.be/scss-workflow/)
* Code highlighter [read more](http://abc.pxt.be/code-highlighter/)
* Font icons [read more](http://abc.pxt.be/font-icons-to-use/)
* Post covers [read more](http://abc.pxt.be/post-with-image-cover/)
* Tag covers [example](http://abc.pxt.be/tag/getting-started/)
* Video, SoundCloud embeding [read more](http://abc.pxt.be/video-soundcloud/)
* Clean text formating [read more](http://abc.pxt.be/welcome-to-ghost/)
* Custom navigation setup [more info](https://blog.ghost.org/navigation/)

You can download it from the GitHub repository:
[https://github.com/juliancwirko/abc](https://github.com/juliancwirko/abc)
If you like it consider starring it on GitHub :)

I encourage you to check out my other themes on ThemeForest. Here is a link to my portfolio page: [http://themeforest.net/user/pxThemes/portfolio](http://themeforest.net/user/pxThemes/portfolio?ref=pxThemes) or check pxThemes website here: [pxt.be](http://pxt.be)

You can contact me through Twitter [**@juliancwirko**](https://twitter.com/JulianCwirko)

Your feedback will be very appreciated. You can also send feature requests by opening issues on GitHub.
[https://github.com/juliancwirko/abc/issues](https://github.com/juliancwirko/abc/issues)

Thanks!

#### Compiling Sass

You can use Grunt and Node Sass. Just cd into theme folder and run ````npm install```` (with 'sudo' if you're on Ubuntu like linux) and then ````grunt```` to compile scss file and also 'watch for changes'.

You can see Gruntfile.js for configuration changes. You can also play with other Grunt tasks here.

Of course if you want you can still use Ruby version. Just go to assets folder and run ````scss --watch scss:css````

But I think that Libsass/Node version is much faster.

#### You can use image covers for particular sites:

Just use standard Ghost admin panel settings.

- Static page example: [http://abc.pxt.be/about/](http://abc.pxt.be/about/)
- Post example: [http://abc.pxt.be/post-with-image-cover/](http://abc.pxt.be/post-with-image-cover/)
- Particular tag list example: [http://abc.pxt.be/tag/getting-started/](http://abc.pxt.be/tag/getting-started/)
- Author cover example: [http://abc.pxt.be/author/ava-johnson/](http://abc.pxt.be/author/ava-johnson/)


#### Changelog

##### 1.5.2 (03.10.2015)

- jQuery added (Ghost 0.7.* adjustments)
- Grunt workflow dependencies update
- Font Awesome update (4.4.0)

##### 1.5.1 (26.07.2015)

- Grunt workflow dependencies update
- Font Awesome update (4.3.0)
- Foundation update (5.5.2)

##### 1.5.0 (19.04.2015)

- Prev/Next post feature (Ghost 0.6.0 adjustments)

##### 1.4.0 (06.03.2015)

- custom navigation setup (Ghost 0.5.9 adjustments)

##### 1.3.1 (01.02.2015)

- tag page image covers (Ghost 0.5.8 adjustments)
- Foundation update

##### 1.3.0 (05.01.2015)

- simple Grunt tasks added - Sass compile and watch..

##### 1.2.1 (14.12.2014)

- Foundation update (5.5.0)

##### 1.2.0 (20.11.2014)

- remove NiceScroll
- add SmoothScroll
- small fixes

##### 1.1.2 (01.11.2014)

- Foundation update (5.4.7)
- small fixes

##### 1.1.1 (26.10.2014)

- NiceScroll update

##### 1.1.0 (25.10.2014)

- Ghost 0.5.3 ready
- custom Open Graph tags removed (in Ghost 0.5.3 you have better default ones)
- removed unused imagesloaded script
- post headers color fix

#### License

MIT

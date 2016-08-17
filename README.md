UX Newsletter Blog
=================================

### Contributing

**1. Clone your fork onto your machine and enter the folder via Terminal**

Might be best to do this from your desktop folder.

`git clone https://github.com/USERNAME/blog.git blog && cd blog`

**2. Checkout the correct branch**

Chances are when you clone your fork, it will default to the `gh-pages` branch. Checkout what branch your current PR is using.

`git checkout BRANCHNAME`

**3. Edit your post**

Write all the cool things. A sentence, an outline, whatevs.

**3. Review**

If you have it setup to run locally, try previewing it at  [http://localhost:4000/](http://localhost:4000/).

Otherwise, double check your spelling :)

**4. Add changes, Commit, & Push**

The rest is pretty streamlined. Stage your changes, Commit, and push to your branch. Once pushed, your PR will automatically update.

Stage changes:
`git add .`

Commit:
`git commit -m "I updated my awesome article."`

Push:
`git push origin BRANCHNAME"`


### Run Locally

**1. Clone the your fork repo to your machine and enter the folder via Terminal**

`git clone https://github.com/mailchimp/uxnewsletter.git uxnewsletter && cd uxnewsletter`

**2. Install Bundler**

Verify ruby is installed by typing `ruby --version`. If it isn't, [install Ruby](https://www.ruby-lang.org/en/downloads/).

Install Bundler by typing `gem install bundler`

**3. Install Jekyll via Bundler**

Bundler takes care of installing GitHub Pages and all of it's depedencies (including Jekyll) as well as setting up things to match GitHub as much as reasonably possible.

`bundle install`

**4. Run Jekyll**

Enter the following command:

`bundle exec jekyll serve -w --config _config.yml,_config-dev.yml`

If all goes well, you should be able to now visit the site by loading [http://localhost:4000/](http://localhost:4000/). Jekyll will need to stay running and will watch file changes to update the site. To stop Jekyll simple press `ctrl` + `c` in the terminal window.

<hr />

### Notes

For more information about Jekyll and GitHub Pages see here:

* [https://help.github.com/articles/using-jekyll-with-pages/](https://help.github.com/articles/using-jekyll-with-pages/)
* [http://jekyllrb.com/](http://jekyllrb.com/docs/home/)

<hr />

### Shortcuts

**Jekyll Shortcut**

I recommend adding the following line to your .bash_profile or .bashrc file. Then all you have to do is type `jekyll`.

`alias jekyll='bundle exec jekyll serve -w --config _config.yml,_config-dev.yml'`

You will probably need to restart your Terminal app.

**Markdown YAML Shortcut**

I've created [a sublime snippet](https://gist.git.rsglab.com/alehner/f55d5f647bb708a5316a) to make entering the titles and links easier. Just type `---` + `tab` and you can quickly cycle through the editable areas.

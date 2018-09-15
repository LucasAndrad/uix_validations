# UixValidations

`uix_validations` is a gem that provides Js functions for real time validations.

Uix is the abbreviation that I "created" for UI and UX, since this gem has some things from both worlds

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'uix_validations'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install uix_validations

Than in your Rails project add this at `app/assets/javascripts/application.js`

```
//= require uix_validations
```

And this at `app/assets/stylesheets/application.scss`

```
@import "uix_validations";
```

If you are using `application.css` insted of `application.scss`, you can import uix_validations into any `.scss` file.

## Usage

### Live demo
Check out this live demo using Uix Validations: [uix_validations_demo link here](https://uix-validations-demo.herokuapp.com/)

### Examples
Real time validation for numbers:
```html
<!-- html -->
<div class="input">
  <%= f.label 'Validation Number' %><br>
  <%= f.text_field :title, class: 'input-text', id: 'input-num' %>
  <!-- Add this div under your input -->
  <div class="uix-validation" id="vali1">
    Should have only numbers
  </div>
</div>

<script>
  // pass your input Id and your div Id
  validateNumber("#input-num", "#vali1");
</script>
```
---
Real time validation for characters
```html
<div class="input">
  <%= f.label 'Validation Character' %><br>
  <%= f.text_field :title, class: 'input-text', id: 'input-char' %>
  <div class="uix-validation" id="vali2">
    Should have only characters
  </div>
</div>

<script>
  validateCharacter("#input-char", "#vali2");
</script>
```
---
Real time validation for characters with length 5 - 10
```html
<script>
  validateCharacterLength("#input-num", "#vali1", [5,10]);
</script>
```



## Good practices about real time validations
This gem is inspired in [Luke Wroblewski study, (article here)](https://alistapart.com/article/inline-validation-in-web-forms) about validation in web forms. This article was published in 2009 but it's still a excellent reference about form validations. Many writers use Luke study as reference in other articles [Example here](https://designmodo.com/ux-form-validation/)

**This gem follow this practices:**
 - Show the validation at the right time (right after the user has submitted the input value)
 - Show the validation at the right place (under the input)
 - Correct colors (not too red and not too green)
 - The colors change at the right moment (while the user types validations don't turn red, only if he click outside the input, but if the input value is valid the validations turn green, because is good to know that the value is correct just in time)
 - Validations don't have a alarming design (I am not a design but I tried to make then clean and understandable, something like the ideas of minimalist design)

## Write good messages

Good messages can be a differential in your forms. Don't scare your users with alarming messages, like:<br>**Error: this is wrong. Use just numbers**<br>

Instead you need to focus in what is wrong and help the user to fix it. Something like:<br>
**Should have onlye numbers. Ex: 99887766**

You can read more about it here: [UX Movement, post about good messages](http://uxmovement.com/forms/how-to-make-your-form-error-messages-more-reassuring/)


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/lucasandrad/uix_validations.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

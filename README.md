 ![The best of Spacebook](https://raw.githubusercontent.com/danielmdavis/spacebook/master/app/images/spacebook1.png)

# Spacebook

Spacebook is a fully configurable React component for displaying blocks of text impactfully and responsively. A carousel component for the 3rd dimension, including live mouse and keyboard controls for maximum interactivity and visual appeal.

A stack of pages, floating weightlessly, receding enigmatically toward a vanishing point that sits some ways off but always opposite the live-updating cursor position. A tap of the spacebar turns the page. Try a live demo here.

Spacebook controls in advance for the ground-tracking complexities of implementing live mouse inputs with the hooks library `react-use`.

### Installation

In the terminal from your project directory, run:

```npm install spacebook```

or using yarn:

```yarn add spacebook```

### Quick Start

Import Spacebook with standard ES6 syntax is as simple as:
```import Spacebook from 'spacebook';```
Then simply place the element in your `render` method. Be sure to include `content`, the only required property:

```javascript
<Spacebook content={['foo','bar']} />
```

If you were to populate that content array with a few more placeholder strings, the result would look something like this:
![All Default properties](https://raw.githubusercontent.com/danielmdavis/spacebook/master/app/images/spacebook2.png)

It seems that while the default color scheme shows the potential visual impact of the Spacebook component, it leaves something to be desired in terms of professionalism. Here's how to change it.

### Configuration

There are numerous `props` you can customize for each instance of Spacebook, and other than `content` they all have default values. Some points of consideration will be given where applicable, and the section will end with a list of CSS properties that can safely be styled directly.

* **dimensions** defines the size of your Spacebook pages in the form of a two number array of your desired [x, y] values.
  * Defaults to [290, 500] which provides ample room for text and reproduces the aspect ratio of printer paper. Experiment with a range of options.
* **pivot** defines the center point your pages will appear to pivot around in the form of a two number array of your desired [x, y] values.
  * Defaults to the middle of the screen. There is little reason to set this value manually.
* **content** defines the body text of each page in the form of an array of strings.
  * No default value. A minimum of one string is required. If content will be populated by user text entry, set a maximum string length in coordination with the space you have made available with `props.dimensions`.
* **colors** defines the list of colors that will be repeated across your pages, in the form of an array of named, hexidecimal, or rgba values.
  * Default value is "ROYGBIV." If there are more colors than pages the remainder will be ignored, and if there are fewer they will repeat from the start. This makes coordination with the length of `props.content` a primary design concern. The essential situation to avoid is that in which there are 7 colors and 8 pages, with only a single color appearing twice; *this has a negative visual impact.* If the number of pages is static, a unique color for each is feasible. Otherwise, consider having no more than half as many colors as the minima.
* **depth** defines the offset distance between pages, in the form of an integer multiplier.
  * Default value is 6, though it must be noted that this controls its property both *inversely,* and *exponentially.* Values of 2 (very spread out) and 50 (very tightly stacked) are roughly the outer bounds of all good sense.
 * **opacity** defines the transparency of all pages, contributing to the perspective effect, in the form of a percentage string.
   * The default is 75% solid. Much lower than this contributes negatively to the readability of fine print.
#### Styles
The only defaults imposed as styles are the font color and 2px solid border, both for sake of legibility. These may need to be styled over forcibly in some cases. Other than these two all endemic styles are required for the Spacebook depth effect to function, or are left unspecified.


To conclude, let's compare the output of a fully specified render call to the default.

  ```javascript
    render () {
      return (
        <div>
          <Spacebook
            content={sleepExperiment}
            colors={['darkblue', 'darkolivegreen', 'indigo']}
            depth={14}
            dimensions={[375, 375]}
            opacity='90%'
          />
        </div>
      )
    }
  ```


 The element as it appears in the browser:

 ![Styled Spacebook](https://raw.githubusercontent.com/danielmdavis/spacebook/master/app/images/spacebook3.png)

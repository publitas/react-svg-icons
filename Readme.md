# React SVG Icons

Use SVG icons as react components.

## Usage

``` javascript
var Icon = require('react-svg-icons');

<Icon name='icon-name'
  width='256'
  height='256'
  color='#4cd695'/>
```

## Configration

You need to configure an asset directory from which all SVG icons will be read. These will be inlined when you browserify your bundle. In your package.json add:

``` javascript
  "react-svg-icons": {
    "assetPath": "path/to/dir/containing/svgs"
  }

```

## Options

## name

Specifies which icon to use. Icon names are file paths relative to your assetPath, minus the .svg extension. If you have directory like:

```
my-icon.svg
nested/some other icon.svg
```

Your icons will be available under these names:

- `name="my-icon"`
- `name="nested/some other icon"`

## width and height

Sets the width and height. By default the aspect ration will be preserved. You can use `preserveAspectRatio` to override this behavior.
These properties have no effect when there is no viewBox set on the SVG element.


## viewBox

Usually you don't have to set this property, unless the original SVG doesn't define a viewBox. In that case width and height won't work. You will have to set a viewBox like `"0 0 originalWidth originalHeight"`


## preserveAspectRatio

Set this property to `"none"` if you want to squash the icon. You can set it to any other [valid SVG attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio). Default is `"xMidYMid meet"`.

## color

Overrides fill and stroke styles with the provided color unless it is set to `none` in the original SVG. If you need a more fine grained control, you can pass a function for this property, which returns a color:

``` javascript
function chooseColor(type, original) {
  var colorString = '#000';

  // type is 'fill' or 'stroke'
  if (type === 'fill') {
    ...
  }

  // the original color in the svg
  if (original === '#fff') {
    ...
  }

  return colorString;
}

<Icon name='icon-name' color={chooseColor} />
```

## other options

Of course you can pass any other standard property, such as `style` and event handlers.

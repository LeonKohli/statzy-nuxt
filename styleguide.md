# Styleguide Statzy

## 🎨 Colors/Hex-Code and Purpose

| Color Name | Hex Code  | Purpose                      |
|------------|-----------|------------------------------|
| Dark       | #0f172a   | Background                   |
| Dim        | #1e293b   | Tables, Dividers, Buttons    |
| darkgray   | #6b7280   | Placeholders                 |
| Gray       | #272f40   | Navbar                       |
| Lightgray  | #686d79   | Borders                      |
|            |           |                              |
| White      | #ffffff   | Text, Input-Background       |
|            |           |                              |
| Blue       | #1c64f2   | Highlighted Buttons          |
| Dark-blue  | #2563eb   | Ring Animation               |
| Dim-blue   | #1d4ed8   | Hovered Continue Buttons     |
|            |           |                              |
| Red        | #ff0000   | Warnings, Ring Animation     |
| Dim-red    | #dc2626   | Hovered Cancel Buttons       |

## 🚀 Implementation in Tailwind

* ✍ Put the following Code-Snippet into your `tailwind.config.js` in the theme -> extend section :

```js
colors: {
        'statzy-dark': '#0f172a',
        'statzy-dim': '#1e293b',
        'statzy-darkgray': '#6b7280',
        'statzy-gray': '#272f40',
        'statzy-lightgray': '#686d79',
        'statzy-white': '#ffffff',
        'statzy-blue': '#1c64f2',
        'statzy-dark-blue': '#2563eb',
        'statzy-dim-blue': '#1d4ed8',
        'statzy-red': '#ff0000',
        'statzy-dim-red': '#dc2626',
      },
```

* 🧐 It should now look like this :

```js
theme: {
    extend: {
      colors: {
        'statzy-dark': '#0f172a',
        'statzy-dim': '#1e293b',
        'statzy-darkgray': '#6b7280',
        'statzy-gray': '#272f40',
        'statzy-lightgray': '#686d79',
        'statzy-white': '#ffffff',
        'statzy-blue': '#1c64f2',
        'statzy-dark-blue': '#2563eb',
        'statzy-dim-blue': '#1d4ed8',
        'statzy-red': '#ff0000',
        'statzy-dim-red': '#dc2626',
      },
    },
  },
```

### 🌈 🎉 Now you can use these Colors with all Utility-Classes Tailwind brings along. 😁🥳

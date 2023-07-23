This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

Problem statement:
The company Construction Machine Management Inc. manages a fleet of diverse building machines and rents them out to building companies. The director Mr. Chechnik manages those with multiple paper staple folders. He would like to manage the inventory on his computer and asks you to develop an application for that purpose.

User stories:
As a staff member I want to have different machine types (bull dozers, cranes, chainsaws, ...)
As a staff member I would like to specify which attributes the machine type has **once** (weight, power, manufacturing date, ...)
As a staff member I want that attributes can be date, text, checkbox or number
As a staff member I want to be able to update the attributes.
As a staff member I want to be able to remove attributes that are no longer required
As a staff member I want that all machines of one type share attributes (all cranes have a model, weight, manufacture date as well as a maximum lift weight for example)
As a staff member I want to pick one of the attributes as a title attribute for the machines of one type (For eg. model).
As a staff member I want to set a title for a machine type (Chainsaw, Bulldozer, ...)
As a staff member I want to be able to add new machine types as well as to edit or delete existing ones at any time
As a staff member I want to have many machines of each machine type ( for example 6 chainsaws from different brands that have different characteristics)
As a staff member, I want to be able to filter by machine type (See all chain saws, all bull dozers, ...).
As a staff member, I want to see the filters in a drawer.
As a staff member I want to see all machines grouped by their type on one screen
As a staff member I want to be able to add new machines as well as to edit or delete existing ones at any time
As a staff member I want that everything is saved even after page reload
As a staff member I want to use the app on my mobile phone or tablet.
As a staff member I want that to see a beautiful user interface.
**For a demo watch the following video:**

## Do's

use a library of your choice for the UI.
use any other library that you consider helpful
use ES6
use Typescript
use React Native
use any State Management Library - Redux /Mobx/ any other state management library (Except for React context and component state)
use expo or
use CRNA
use AsyncStorage
preferably, write function components.
Dont's
create an API to store the data to a server.

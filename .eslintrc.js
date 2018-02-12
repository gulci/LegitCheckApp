module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
    },
    "extends": [
      "airbnb",
      "plugin:react-native/all"
    ],
    "plugins": [
      "react",
      "react-native"
    ],
    "env": {
      "es6": true,
      "react-native/react-native": true,
      "jest": true
    },
    "rules": {

      // Relating to JSX
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

      // Relating to variables
      "no-use-before-define": 0,  // disallow use of variables before they are defined
    },
    "overrides": [
      {
        // Specific overrides for test files
        "files": ["__tests__/**/*.js"],
        "rules": {
            "import/no-extraneous-dependencies": 0
        }        
      }
    ]
};

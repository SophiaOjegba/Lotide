# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sophia234/lotide`

**Require it:**

`const _ = require('@sophia234/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual(arr1, arr2): Compares two arrays arr1 and arr2 and asserts whether they are equal.

* assertEquals(val1, val2): Compares two primitive values val1 and val2 and asserts whether they are equal.

* assertObjectEqual(obj1, obj2): Compares two objects obj1 and obj2 and asserts whether they are equal.

* countLetters(str): Takes a string str and returns an object where each unique character encountered in the string is a key, and the value for that property is the number of occurrences of that character.

* countOnly(arr, obj): Takes an array arr and an object obj, and returns an object containing counts of everything that is both listed in the input object and present in the array.

* eqArrays(arr1, arr2): Compares the data of two arrays arr1 and arr2 to check if they are equal to each other.

* eqObjects(obj1, obj2): Compares the data of two objects obj1 and obj2 to check if they are equal to each other.

* findKey(obj, callback): Takes an object obj and a callback function callback and returns the first key for which the callback returns a truthy value. If no key is found, it returns undefined.

* findKeyByValue(obj, value): Takes an object obj and a value value, and returns the first key that contains the given value. If no key with that value is found, it returns undefined.

* flatten(arr): Takes an array arr containing other nested arrays and flattens it into a single-level array.

* head(arr): Takes an array arr and returns the first item in the array.

* letterPositions(str): Takes a string str and returns an object containing each character as keys and the indices in the string where each character is found as values.

* map(arr, callback): Takes an array arr and a callback function callback and returns a new array based on the results of the callback function.

* middle(arr): Takes an array arr and returns an array with only the middle element(s) of the provided array. For odd-length arrays, it returns a single middle element, and for even-length arrays, it returns two middle elements.

* tail(arr): Takes an array arr and returns the "tail" of the array, which includes all elements except for the first item (head) of the provided array.

* takeUntil(arr, callback): Takes an array arr and a callback function callback and returns a "slice of the array with elements taken from the beginning." It keeps going until the callback returns a truthy value.

* without(arr, itemsToRemove): Takes an array arr and an itemsToRemove array. It returns a new array with only the elements from arr that are not present in the itemsToRemove array.

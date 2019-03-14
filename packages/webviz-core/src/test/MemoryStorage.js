// @flow
//
//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

// mock storage object to monkeypatch missing localstorage for tests
export default class MemoryStorage {
  items = {};

  getItem(key: string) {
    return this.items[key];
  }

  setItem(key: string, value: string) {
    this.items[key] = value;
  }
}
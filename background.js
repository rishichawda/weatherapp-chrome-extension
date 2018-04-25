// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    document.body.style.backgroundColor = "green";
    console.log('The color is green.');
  });
});
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id,{file:'cscript.js'},function(data){
      console.log(data);
    });
});
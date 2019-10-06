#!/usr/bin/env node

const ProgressBar = require("ascii-progress");
const today = new Date();
const date2 = new Date("12/17/2019");
const diff = Math.abs(today.getTime() - date2.getTime());
const diffInDays = (diff / (1000 * 3600 * 24)) | 0;
const current = 100 - (((diffInDays * 100) / 273.75) | 0);

const bar = new ProgressBar({
  schema: ":bar.gradient(red,magenta) :percent",
  total: 100,
  blank: "▒"
});

const timer = setInterval(function() {
  bar.tick();
  if (+bar.current > current || bar.completed) {
    clearInterval(timer);
    console.log("🐲👼🏼 ETA. +/- Dec 17, 2019");
  }
}, 50);

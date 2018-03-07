"use strict";

const expect = require("chai").expect;
const server = require('../server');


describe("Server", ()=> {
  it("should connect to server 3001", ()=> {
    expect(server('App Listen to Port 3001.')).to.equal('App Listen to Port 3001.');
  });

});
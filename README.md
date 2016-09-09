# Meteor Streams [![Build Status](https://travis-ci.org/arunoda/meteor-streams.png?branch=master)](https://travis-ci.org/arunoda/meteor-streams)

DB less realtime communication for meteor

## Development Status


### 2016-09-09

The [fgm:accounts-drupal] project for which this fork was created switched to
[rocketchat:streamer] for streams, so this fork is now deprecated and no longer
maintained. You should probably consider doing this change too: it was mostly
painless, then main change needed being the permissions functions.

It has been tested to work on Meteor 1.4.1.1.


### 2016-09-01

On Meteor 1.3.3 and more recent, updates buffering __MUST__ be turned off using
a fragment like this one on the client before the first subscription:

    Meteor.startup(function () {
      Meteor.connection._bufferedWritesInterval = 0;
    });

[fgm:accounts-drupal]: https://atmospherejs.com/meteor/fgm:accounts-drupal
[rocketchat:streamer]: https://atmospherejs.com/meteor/rocketchat:streamer

It has been tested to work on Meteor 1.3.3.1.


### 2016-06-15

The package works with Meteor 1.3.2.4


### 2016-04-23

CAVEAT EMPTOR: This package (`fgm:streams`) is a fork of `arunoda:streams` to
allow continued use of streams in Meteor 1.2.1 while converting to another
mechanism: it allows streams users to evolve their other code to Meteor 1.2.1
and hopefully later while converting to another mechanism instead of having to
remain on pre-0.9. Do not expect it to live long: just use it as a temporary
crutch.

Project development status is [inactive](https://github.com/arunoda/meteor-streams/issues/21#issuecomment-59030380).


## [Documentation](http://arunoda.github.io/meteor-streams/)

[![Meteor Streams - DB less realtime communication for meteor](http://i.imgur.com/ZB3g3AK.png)](http://arunoda.github.io/meteor-streams/)

Google-Maps-Create-Event
========================
A Chrome Extension for Creating Google Calendar Events From A Google Maps Location

## Purpose
As an user who enjoys Google Now event notifications, geo-locating events is now a must. I couldn't find a easy way of creating events from Google Maps locations so I figured out a way to implement it. In the end I'm adding dom into the infowindow template (Some internal buffed up version of [google-jstemplate](https://code.google.com/p/google-jstemplate/)), which configures the link for your consumption

## Dependencies
None

## Workflow for adding new events
1.  Once [installed](#installing-from-source)
2.  Go to [Google Maps](https://maps.google.com/)
3.  Find event and click to see the infowindow. (The popup window which appears from the pin on the map)
4.  The link "Create Event From Location" should be present

## Installing from Source
1.  Clone the repository: `git clone git://github.com/wbyoko/Google-Maps-Create-Event.git`
2.  Navigate to `chrome://chrome/extensions/` and enable Developer Mode.
3.  Choose "Load unpacked extension"
4.  Open the directory you just cloned and follow the prompts to install.

# Song Key - Song Data App

Utilizes Spotify's awesome API to dispaly data about songs, including key, tempo, and time signature.
It's useful to me as a writing inspiration tool (creating a starting point key or tempo), and hopefully to some other musicians too!

# Spotify Auth Code

The backend is an extensive amount of code cloned from Spotify's example auth flow. I would like to trim this down and deal with the token myself.

# Usage

- Sign in with your Spotify Account (necessary to access Spotify's API)
  Two Options:
- Search using Spotify URI (on the Spotify player, press share on a song, then copy URI)
- Press the button to get your currently playing song, no matter where it's playing - much easier.

# Technologies Used

- React
- Node.js
- Spotify API

# Future Improvements

- I will definitely improve the sign in method
- Depend less on Spotify's auth flow
- Search by song name, not just URI
- Improve UI/UX
- Not host on Heroku - yuck, so slow
